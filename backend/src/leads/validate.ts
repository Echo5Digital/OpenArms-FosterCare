import { HONEYPOT_FIELD, isLeadType, type LeadFieldValue, type LeadType } from "./types";

const MAX_BODY_FIELDS = 120;
const MAX_KEY_LENGTH = 60;
const MAX_VALUE_LENGTH = 4000;
const MAX_LIST_ITEMS = 12;

// letters, digits, "_" and "-" only: keeps keys safe to use as database field names
const KEY_PATTERN = /^[A-Za-z][A-Za-z0-9_-]*$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export type ParsedLead = {
  type: LeadType;
  page: string;
  name: string;
  email: string;
  phone: string;
  fields: Record<string, LeadFieldValue>;
};

export type ParseResult =
  // followUp: the secret a Sign Up handed to the visitor's browser, sent back with their Recruitment Inquiry
  | { ok: true; lead: ParsedLead; followUp?: string }
  | { ok: false; spam: true }
  | { ok: false; spam?: false; error: string };

const clean = (v: unknown, max = MAX_VALUE_LENGTH) => (typeof v === "string" ? v.replace(/\u0000/g, "").trim().slice(0, max) : "");

/** Checks a request body from the website's forms and turns it into a lead that is safe to store. */
export function parseLead(body: unknown): ParseResult {
  if (!body || typeof body !== "object") return { ok: false, error: "Invalid request." };
  const { type, page, followUp, data } = body as Record<string, unknown>;

  if (!isLeadType(type)) return { ok: false, error: "Unknown form." };
  if (!data || typeof data !== "object" || Array.isArray(data)) return { ok: false, error: "Invalid request." };

  const entries = Object.entries(data as Record<string, unknown>);
  if (entries.length > MAX_BODY_FIELDS) return { ok: false, error: "Too many fields." };

  // anything typed into the hidden trap field means a bot filled the form in
  if (clean((data as Record<string, unknown>)[HONEYPOT_FIELD]) !== "") return { ok: false, spam: true };

  const fields: Record<string, LeadFieldValue> = {};
  for (const [key, raw] of entries) {
    if (key === HONEYPOT_FIELD || key.length > MAX_KEY_LENGTH || !KEY_PATTERN.test(key)) continue;
    if (typeof raw === "string") {
      const value = clean(raw);
      if (value) fields[key] = value;
    } else if (Array.isArray(raw)) {
      const list = raw.slice(0, MAX_LIST_ITEMS).map((item) => clean(item)).filter(Boolean);
      if (list.length) fields[key] = list;
    }
  }

  const text = (key: string) => (typeof fields[key] === "string" ? (fields[key] as string) : "");
  const name = text("name") || [text("firstName"), text("lastName")].filter(Boolean).join(" ");
  const email = text("email").toLowerCase();
  const phone = text("phone");

  if (email && !EMAIL_PATTERN.test(email)) return { ok: false, error: "Please enter a valid email address." };
  if (phone && phone.replace(/\D/g, "").length < 7) return { ok: false, error: "Please enter a valid phone number." };
  if (type === "newsletter" ? !email : !email && !phone) {
    return { ok: false, error: type === "newsletter" ? "Please enter your email address." : "Please include an email or phone number." };
  }

  const pagePath = clean(page, 200);
  const token = typeof followUp === "string" && /^[A-Za-z0-9_-]{16,64}$/.test(followUp) ? followUp : undefined;

  return {
    ok: true,
    lead: {
      type,
      page: pagePath.startsWith("/") ? pagePath : "/",
      name: name.slice(0, 200),
      email,
      phone,
      fields,
    },
    ...(token ? { followUp: token } : {}),
  };
}
