import "server-only";

/**
 * Simple sliding-window limiter kept in the server's memory. It stops a single visitor from flooding the forms.
 * On a host that runs several server instances each one keeps its own count, so treat
 * it as a speed bump rather than a hard guarantee.
 */
const hits = new Map<string, number[]>();

const recentHits = (key: string, windowMs: number) => {
  const now = Date.now();
  return (hits.get(key) ?? []).filter((t) => now - t < windowMs);
};

/** Counts this request and says whether it is still within the limit. */
export function allow(key: string, limit: number, windowMs: number) {
  const recent = recentHits(key, windowMs);

  if (recent.length >= limit) {
    hits.set(key, recent);
    return false;
  }

  recent.push(Date.now());
  hits.set(key, recent);

  if (hits.size > 5000) {
    const now = Date.now();
    for (const [k, times] of hits) if (times.every((t) => now - t >= windowMs)) hits.delete(k);
  }
  return true;
}

/** Best-effort visitor address from the proxy headers (only used to count requests, never stored). */
export function clientKey(headers: Headers) {
  return headers.get("x-forwarded-for")?.split(",")[0].trim() || headers.get("x-real-ip") || "unknown";
}
