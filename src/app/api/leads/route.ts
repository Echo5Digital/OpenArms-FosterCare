import { addInquiryToSignup, insertLead } from "@/lib/leads/store";
import { parseLead } from "@/lib/leads/validate";
import { allow, clientKey } from "@/lib/rate-limit";
import { siteConfig } from "@/lib/site-config";

const MAX_BODY_BYTES = 100_000;
// how many forms one visitor can send per 10 minutes (raise it with LEADS_RATE_LIMIT when testing)
const SUBMISSIONS_PER_10_MIN = Number(process.env.LEADS_RATE_LIMIT) || 10;

const reply = (body: Record<string, unknown>, status = 200) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

/** Receives a form submission from the website and stores it as a lead. */
export async function POST(request: Request) {
  // browsers always say which site a request came from; refuse ones sent from other websites
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (origin && host && new URL(origin).host !== host) return reply({ ok: false, error: "Not allowed." }, 403);

  if (!allow(`lead:${clientKey(request.headers)}`, SUBMISSIONS_PER_10_MIN, 10 * 60 * 1000)) {
    return reply({ ok: false, error: "Too many submissions. Please wait a few minutes and try again." }, 429);
  }

  const raw = await request.text();
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
      if (joined) return reply({ ok: true, id: joined });
    }

    const { id, followUpToken } = await insertLead(parsed.lead);
    return reply({ ok: true, id, ...(followUpToken ? { followUp: followUpToken } : {}) }, 201);
  } catch (error) {
    // log the reason without the visitor's details
    console.error("Could not save lead:", error instanceof Error ? error.message.split("\n")[0] : "unknown error");
    return reply(
      { ok: false, error: `We couldn't save your request just now. Please try again or call us at ${siteConfig.phone}.` },
      503,
    );
  }
}
