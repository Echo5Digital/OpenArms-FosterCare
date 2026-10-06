import { Hono } from "hono";
import { bodyLimit } from "hono/body-limit";
import { requireApiKey } from "./lib/api-key";
import { submitLead } from "./api/leads";
import { admin } from "./api/admin";

/**
 * The whole API. Only the website talks to it (server to server), so there is no CORS: browsers never call it directly.
 *
 *   GET    /health                 for the host's health check (no key needed)
 *   POST   /leads                  a form submission from the website
 *   POST   /admin/login            sign in, returns a login token
 *   GET    /admin/me | stats | leads | leads/:id | export | users
 *   PATCH  /admin/leads/:id        change a lead's status and/or private note
 *   DELETE /admin/leads/:id
 *   POST   /admin/users            add an admin
 *   DELETE /admin/users/:email
 */
export function createApp() {
  const app = new Hono();

  app.get("/health", (c) => c.json({ ok: true }));

  // one line per request for the host's log: method, path and status only, never the query string (it can hold searches)
  app.use("*", async (c, next) => {
    const started = Date.now();
    await next();
    console.log(`${c.req.method} ${c.req.path} ${c.res.status} ${Date.now() - started}ms`);
  });

  app.use("*", bodyLimit({ maxSize: 200_000, onError: (c) => c.json({ ok: false, error: "That request is too large." }, 413) }));
  app.use("*", requireApiKey);

  app.post("/leads", submitLead);
  app.route("/admin", admin);

  app.notFound((c) => c.json({ error: "Not found" }, 404));
  app.onError((error, c) => {
    // log the reason without anything a visitor typed
    console.error("Request failed:", error.message.split("\n")[0]);
    return c.json({ error: "Something went wrong on the server." }, 500);
  });

  return app;
}
