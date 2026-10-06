import { Hono } from "hono";
import { createMiddleware } from "hono/factory";
import { isLeadStatus, isLeadType } from "@shared/leads/types";
import type { Admin } from "@shared/api";
import { adminFromToken, checkCredentials } from "../admin/auth";
import { createSessionToken } from "../admin/session";
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH, hashPassword } from "../admin/password";
import { createAdmin, deleteAdmin, listAdmins } from "../admin/users";
import { leadsToCsv } from "../admin/csv";
import { deleteLead, getLead, getLeadStats, listAllLeads, listLeads, setLeadNote, setLeadStatus, type LeadFilters } from "../leads/store";

type Env = { Variables: { admin: Admin } };

export const admin = new Hono<Env>();

/**
 * Every dashboard request proves who is asking: the login token is checked again each time, close to the data, instead
 * of trusting that an earlier request already did.
 */
const adminOnly = createMiddleware<Env>(async (c, next) => {
  const header = c.req.header("authorization") ?? "";
  const token = header.startsWith("Bearer ") ? header.slice(7).trim() : undefined;
  const who = await adminFromToken(token);
  if (!who) return c.json({ error: "Please log in." }, 401);
  c.set("admin", who);
  await next();
});

const pause = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// ---- login -----------------------------------------------------------------------------------------------------

admin.post("/login", async (c) => {
  const body = (await c.req.json().catch(() => null)) as { username?: unknown; password?: unknown } | null;
  const username = String(body?.username ?? "").trim();
  const password = String(body?.password ?? "");

  const who = await checkCredentials(username, password);
  if (!who) {
    // a short pause on a wrong password makes rapid guessing slow without ever locking the real user out
    await pause(600);
    return c.json({ error: "Incorrect email/username or password." }, 401);
  }

  const ownerName = process.env.ADMIN_USERNAME;
  const { token, expiresAt } = await createSessionToken(who);
  return c.json({ token, expiresAt, admin: { username: who, owner: !!ownerName && who === ownerName } satisfies Admin });
});

/** Who the token belongs to (also how the website learns that someone has been removed). */
admin.get("/me", adminOnly, (c) => c.json(c.get("admin")));

// ---- leads -----------------------------------------------------------------------------------------------------

function filtersFrom(query: Record<string, string>): LeadFilters {
  return {
    type: isLeadType(query.type) ? query.type : undefined,
    status: isLeadStatus(query.status) ? query.status : undefined,
    q: query.q?.trim().slice(0, 100) || undefined,
  };
}

admin.get("/stats", adminOnly, async (c) => c.json(await getLeadStats()));

admin.get("/leads", adminOnly, async (c) => {
  const query = c.req.query();
  const page = Math.max(1, Number.parseInt(query.page ?? "1", 10) || 1);
  return c.json(await listLeads(filtersFrom(query), page));
});

admin.get("/leads/:id", adminOnly, async (c) => {
  const lead = await getLead(c.req.param("id"));
  return lead ? c.json(lead) : c.json({ error: "Not found" }, 404);
});

admin.patch("/leads/:id", adminOnly, async (c) => {
  const id = c.req.param("id");
  const body = (await c.req.json().catch(() => null)) as { status?: unknown; note?: unknown } | null;
  if (!body) return c.json({ error: "Invalid request." }, 400);

  if (body.status !== undefined) {
    if (!isLeadStatus(body.status)) return c.json({ error: "Unknown status." }, 400);
    await setLeadStatus(id, body.status);
  }
  if (body.note !== undefined) await setLeadNote(id, String(body.note));
  return c.body(null, 204);
});

admin.delete("/leads/:id", adminOnly, async (c) => {
  await deleteLead(c.req.param("id"));
  return c.body(null, 204);
});

/** Download of the leads (all of them, or the ones matching the dashboard's current filters) as a CSV file. */
admin.get("/export", adminOnly, async (c) => {
  const leads = await listAllLeads(filtersFrom(c.req.query()));
  const stamp = new Date().toISOString().slice(0, 10);
  return new Response(leadsToCsv(leads), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="open-arms-leads-${stamp}.csv"`,
      "Cache-Control": "no-store",
    },
  });
});

// ---- admin users -----------------------------------------------------------------------------------------------

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

admin.get("/users", adminOnly, async (c) => c.json({ owner: process.env.ADMIN_USERNAME || null, users: await listAdmins() }));

admin.post("/users", adminOnly, async (c) => {
  const me = c.get("admin");
  const body = (await c.req.json().catch(() => null)) as { email?: unknown; password?: unknown } | null;
  const email = String(body?.email ?? "").trim().toLowerCase();
  const password = String(body?.password ?? "");

  if (!EMAIL_PATTERN.test(email) || email.length > 254) return c.json({ error: "Please enter a valid email address." }, 400);
  if (email === (process.env.ADMIN_USERNAME ?? "").toLowerCase()) return c.json({ error: "That name belongs to the owner account." }, 400);
  if (password.length < MIN_PASSWORD_LENGTH) return c.json({ error: `The password needs at least ${MIN_PASSWORD_LENGTH} characters.` }, 400);
  if (password.length > MAX_PASSWORD_LENGTH) return c.json({ error: `The password can be at most ${MAX_PASSWORD_LENGTH} characters.` }, 400);

  try {
    const result = await createAdmin(email, await hashPassword(password), me.username);
    if (result === "exists") return c.json({ error: "That email already has access." }, 409);
  } catch {
    return c.json({ error: "Could not save the new admin. Please try again." }, 503);
  }
  return c.json({ email }, 201);
});

admin.delete("/users/:email", adminOnly, async (c) => {
  const me = c.get("admin");
  const target = c.req.param("email").trim().toLowerCase();

  // you cannot remove yourself (that could leave nobody able to sign in); the owner is not in the database at all
  if (target === me.username.toLowerCase()) return c.json({ error: "You cannot remove your own access." }, 400);

  await deleteAdmin(target);
  return c.body(null, 204);
});
