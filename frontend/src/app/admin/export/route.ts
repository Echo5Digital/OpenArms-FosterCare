import { backendFetch } from "@/lib/backend";
import { readToken } from "@/lib/admin";

export const maxDuration = 60;

/** Download of the leads (all of them, or the ones matching the dashboard's current filters) as a CSV file. */
export async function GET(request: Request) {
  const token = await readToken();
  if (!token) return new Response("Please log in first.", { status: 401 });

  let upstream: Response;
  try {
    // the filters (type, status, q) are passed on as they are; the backend checks them
    upstream = await backendFetch(`/admin/export${new URL(request.url).search}`, { token, timeoutMs: 55_000 });
  } catch {
    return new Response("The leads could not be loaded.", { status: 503 });
  }

  if (upstream.status === 401) return new Response("Please log in first.", { status: 401 });
  if (!upstream.ok) return new Response("The leads could not be loaded.", { status: 503 });

  return new Response(upstream.body, {
    headers: {
      "Content-Type": upstream.headers.get("content-type") ?? "text/csv; charset=utf-8",
      "Content-Disposition": upstream.headers.get("content-disposition") ?? 'attachment; filename="open-arms-leads.csv"',
      "Cache-Control": "no-store",
    },
  });
}
