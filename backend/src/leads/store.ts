import { randomBytes } from "node:crypto";
import { ObjectId, type Filter } from "mongodb";
import { getDb } from "../lib/mongodb";
import {
  LEAD_TYPES,
  type Lead,
  type LeadFieldValue,
  type LeadStatus,
  type LeadType,
} from "@shared/leads/types";
import type { ParsedLead } from "./validate";

type LeadDoc = {
  _id: ObjectId;
  type: LeadType;
  page: string;
  name: string;
  email: string;
  phone: string;
  fields: Record<string, LeadFieldValue>;
  status: LeadStatus;
  note: string;
  /** Secret held only by the Sign Up visitor's browser; lets their Recruitment Inquiry join this lead (used once). */
  followUpToken?: string;
  createdAt: Date;
  inquiryAt?: Date;
  updatedAt?: Date;
};

async function leads() {
  return (await getDb()).collection<LeadDoc>("leads");
}

const toLead = (d: LeadDoc): Lead => ({
  id: d._id.toString(),
  type: d.type,
  page: d.page,
  name: d.name,
  email: d.email,
  phone: d.phone,
  fields: d.fields ?? {},
  status: d.status,
  note: d.note ?? "",
  createdAt: d.createdAt.toISOString(),
  ...(d.inquiryAt ? { inquiryAt: d.inquiryAt.toISOString() } : {}),
});

const validId = (id: string) => /^[a-f0-9]{24}$/i.test(id);

export async function insertLead(lead: ParsedLead) {
  // a Sign Up is given a secret to hand back with its Recruitment Inquiry, so the two end up as one lead
  const followUpToken = lead.type === "signup" ? randomBytes(18).toString("base64url") : undefined;
  const result = await (await leads()).insertOne({
    _id: new ObjectId(),
    ...lead,
    ...(followUpToken ? { followUpToken } : {}),
    status: "new",
    note: "",
    createdAt: new Date(),
  });
  return { id: result.insertedId.toString(), followUpToken };
}

// how long a Sign Up keeps waiting for its Recruitment Inquiry when the visitor's browser could not vouch for it
const SIGNUP_WAIT_MS = 7 * 24 * 3600 * 1000;

/**
 * Adds a Recruitment Inquiry to the Sign Up it follows on from, instead of creating a second lead.
 * Returns that lead's id, or null when there is no Sign Up to join (the caller then saves the inquiry on its own).
 *
 * 1. With the secret the Sign Up gave the visitor's browser, the two are certainly the same person: the inquiry's
 *    answers win where both forms asked the same thing (email, phone, how they heard about us).
 * 2. Without it (a new tab, blocked browser storage, an old page), a Sign Up from the last 7 days with the same email
 *    still counts. Anyone could type someone else's email, so here the inquiry only ADDS answers: the Sign Up's own
 *    contact details are never replaced, and a different phone or name is kept next to them as "inquiryPhone" etc.
 */
export async function addInquiryToSignup(lead: ParsedLead, followUpToken?: string) {
  const col = await leads();
  const now = new Date();
  const joined = { type: "inquiry", inquiryAt: now, updatedAt: now };
  // field names were checked on the way in (letters, digits, "_" and "-"), so they are safe inside a dotted path

  if (followUpToken) {
    const set: Record<string, string | string[] | Date> = { ...joined };
    if (lead.name) set.name = lead.name;
    if (lead.email) set.email = lead.email;
    if (lead.phone) set.phone = lead.phone;
    for (const [key, value] of Object.entries(lead.fields)) set[`fields.${key}`] = value;

    const doc = await col.findOneAndUpdate(
      { type: "signup", followUpToken },
      { $set: set, $unset: { followUpToken: "" } },
      { projection: { _id: 1 } },
    );
    if (doc) return doc._id.toString();
  }

  if (!lead.email) return null;
  const waiting = await col.findOne(
    { type: "signup", email: lead.email, createdAt: { $gte: new Date(now.getTime() - SIGNUP_WAIT_MS) } },
    { sort: { createdAt: -1 }, projection: { name: 1, fields: 1 } },
  );
  if (!waiting) return null;

  const set: Record<string, string | string[] | Date> = { ...joined };
  const had = waiting.fields ?? {};
  // "(405) 555-0120" and "405-555-0120" are the same answer; so are "Google" and "google"
  const simplify = (key: string, v: LeadFieldValue) => {
    const text = (Array.isArray(v) ? v.join(",") : v).toLowerCase().replace(/[^a-z0-9]/g, "");
    return key === "phone" || key === "cell" ? text.replace(/\D/g, "").slice(-10) : text;
  };
  for (const [key, value] of Object.entries(lead.fields)) {
    if (key === "name") continue; // the Sign Up asked for first and last name; compared below
    if (had[key] === undefined) set[`fields.${key}`] = value;
    else if (simplify(key, had[key]) !== simplify(key, value)) set[`fields.inquiry${key[0].toUpperCase()}${key.slice(1)}`] = value;
  }
  if (lead.name && simplify("name", lead.name) !== simplify("name", waiting.name ?? "")) set["fields.inquiryName"] = lead.name;

  const result = await col.updateOne({ _id: waiting._id, type: "signup" }, { $set: set, $unset: { followUpToken: "" } });
  return result.modifiedCount ? waiting._id.toString() : null;
}

export type LeadFilters = { type?: LeadType; status?: LeadStatus; q?: string };

function buildFilter({ type, status, q }: LeadFilters): Filter<LeadDoc> {
  const filter: Filter<LeadDoc> = {};
  if (type) filter.type = type;
  if (status) filter.status = status;
  const term = q?.trim().slice(0, 100);
  if (term) {
    const pattern = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
    filter.$or = [{ name: pattern }, { email: pattern }, { phone: pattern }];
  }
  return filter;
}

export async function listLeads(filters: LeadFilters, page: number, pageSize = 20) {
  const col = await leads();
  const filter = buildFilter(filters);
  const total = await col.countDocuments(filter);
  const pages = Math.max(1, Math.ceil(total / pageSize));
  const current = Math.min(Math.max(1, page), pages);
  const docs = await col
    .find(filter)
    .sort({ createdAt: -1 })
    .skip((current - 1) * pageSize)
    .limit(pageSize)
    .toArray();
  return { items: docs.map(toLead), total, page: current, pages, pageSize };
}

/** Every lead matching the filters, newest first (for the CSV download). */
export async function listAllLeads(filters: LeadFilters, cap = 10000) {
  const docs = await (await leads()).find(buildFilter(filters)).sort({ createdAt: -1 }).limit(cap).toArray();
  return docs.map(toLead);
}

export async function getLeadStats() {
  const col = await leads();
  const now = Date.now();
  const [total, fresh, day, week, byType] = await Promise.all([
    col.countDocuments({}),
    col.countDocuments({ status: "new" }),
    col.countDocuments({ createdAt: { $gte: new Date(now - 24 * 3600 * 1000) } }),
    col.countDocuments({ createdAt: { $gte: new Date(now - 7 * 24 * 3600 * 1000) } }),
    col.aggregate<{ _id: LeadType; n: number }>([{ $group: { _id: "$type", n: { $sum: 1 } } }]).toArray(),
  ]);
  const counts = Object.fromEntries(LEAD_TYPES.map((t) => [t, 0])) as Record<LeadType, number>;
  for (const row of byType) if (row._id in counts) counts[row._id] = row.n;
  return { total, new: fresh, last24h: day, last7d: week, byType: counts };
}

export async function getLead(id: string) {
  if (!validId(id)) return null;
  const doc = await (await leads()).findOne({ _id: new ObjectId(id) });
  return doc ? toLead(doc) : null;
}

export async function setLeadStatus(id: string, status: LeadStatus) {
  if (!validId(id)) return;
  await (await leads()).updateOne({ _id: new ObjectId(id) }, { $set: { status, updatedAt: new Date() } });
}

export async function setLeadNote(id: string, note: string) {
  if (!validId(id)) return;
  await (await leads()).updateOne({ _id: new ObjectId(id) }, { $set: { note: note.slice(0, 5000), updatedAt: new Date() } });
}

export async function deleteLead(id: string) {
  if (!validId(id)) return;
  await (await leads()).deleteOne({ _id: new ObjectId(id) });
}
