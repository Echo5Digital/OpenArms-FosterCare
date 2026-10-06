import { siteConfig } from "@/lib/site-config";
import { backendFetch } from "@/lib/backend";

// The form handling lives in the backend server (backend/src/api/leads.ts); this route is the address the website's
// forms post to. It checks the request came from this site, then hands it to the backend.
// A sleeping backend can take a while to wake up, so allow for that.
export const maxDuration = 60;

const MAX_BODY_BYTES = 100_000;

const reply = (body: Record<string, unknown>, status = 200) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

const unavailable = () =>
  reply({ ok: false, error: `We couldn't save your request just now. Please try again or call us at ${siteConfig.phone}.` }, 503);

function sameSite(request: Request) {
  // browsers always say which site a request came from; refuse ones sent from other websites
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (!origin || !host) return true;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

/** Receives a form submission from the website and stores it as a lead (through the backend). */
export async function POST(request: Request) {
  if (!sameSite(request)) return reply({ ok: false, error: "Not allowed." }, 403);

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) return reply({ ok: false, error: "That request is too large." }, 413);

  // the backend only ever sees this server, so the visitor's address is passed along for its rate limit
  const visitor = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || request.headers.get("x-real-ip") || "unknown";

  let upstream: Response;
  try {
    upstream = await backendFetch("/leads", {
      method: "POST",
      body: raw,
      headers: { "content-type": "application/json", "x-client-ip": visitor },
      timeoutMs: 55_000,
    });
  } catch {
    return unavailable();
  }

  if (upstream.status === 401) console.error("The backend refused this website's key: check BACKEND_API_KEY on both sides.");
  if (upstream.status >= 500 || upstream.status === 401) return unavailable();

  const data = (await upstream.json().catch(() => null)) as Record<string, unknown> | null;
  return reply(data ?? { ok: false, error: "Invalid request." }, upstream.status);
}
