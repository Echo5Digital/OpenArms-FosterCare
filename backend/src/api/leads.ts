import type { Context } from "hono";
import { addInquiryToSignup, insertLead } from "../leads/store";
import { parseLead } from "../leads/validate";
import { notifyAdmin } from "../leads/notify";
import { sendWelcomeEmail } from "../leads/welcome";
import { allow, clientKey } from "../lib/rate-limit";

const MAX_BODY_BYTES = 100_000;
// how many forms one visitor can send per 10 minutes (raise it with LEADS_RATE_LIMIT when testing)
const SUBMISSIONS_PER_10_MIN = Number(process.env.LEADS_RATE_LIMIT) || 10;

const noStore = { "Cache-Control": "no-store" };

/**
 * Receives a form submission (passed on by the website) and stores it as a lead. The website has already checked that
 * the request came from its own pages; here the visitor is rate-limited and the answers are validated.
 */
export async function submitLead(c: Context) {
  const reply = (body: Record<string, unknown>, status: 200 | 201 | 400 | 413 | 429 | 503 = 200) => c.json(body, status, noStore);

  if (!allow(`lead:${clientKey(c.req.raw.headers)}`, SUBMISSIONS_PER_10_MIN, 10 * 60 * 1000)) {
    return reply({ ok: false, error: "Too many submissions. Please wait a few minutes and try again." }, 429);
  }

  const raw = await c.req.text();
  if (raw.length > MAX_BODY_BYTES) return reply({ ok: false, error: "That request is too large." }, 413);

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return reply({ ok: false, error: "Invalid request." }, 400);
  }

  const parsed = parseLead(body);
  if (!parsed.ok) {
    // a bot that filled the hidden field gets the same "success" a person would, but nothing is saved
    if (parsed.spam) return reply({ ok: true });
    return reply({ ok: false, error: parsed.error }, 400);
  }

  try {
    // a Recruitment Inquiry that follows a Sign Up is added to that lead, so the person appears on the dashboard once
    if (parsed.lead.type === "inquiry") {
      const joined = await addInquiryToSignup(parsed.lead, parsed.followUp);
      if (joined) {
        void notifyAdmin(parsed.lead, true);
        return reply({ ok: true, id: joined });
      }
    }

    const { id, followUpToken } = await insertLead(parsed.lead);
    // the emails go out in the background: the visitor does not wait for them and a failure never affects the form
    void sendWelcomeEmail(parsed.lead, id);
    void notifyAdmin(parsed.lead);
    return reply({ ok: true, id, ...(followUpToken ? { followUp: followUpToken } : {}) }, 201);
  } catch (error) {
    // log the reason without the visitor's details
    console.error("Could not save lead:", error instanceof Error ? error.message.split("\n")[0] : "unknown error");
    return reply({ ok: false, error: "We couldn't save your request just now. Please try again." }, 503);
  }
}
