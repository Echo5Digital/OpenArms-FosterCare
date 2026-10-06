import { createHash, timingSafeEqual } from "node:crypto";
import { createMiddleware } from "hono/factory";

const digest = (value: string) => createHash("sha256").update(value).digest();

/**
 * Only the website may use this server: every request must carry the shared secret (BACKEND_API_KEY) in the
 * x-api-key header. Comparing hashes in constant time means a wrong guess does not reveal how close it was.
 */
export const requireApiKey = createMiddleware(async (c, next) => {
  const expected = process.env.BACKEND_API_KEY ?? "";
  const given = c.req.header("x-api-key") ?? "";
  if (!expected || !timingSafeEqual(digest(given), digest(expected))) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  await next();
});
