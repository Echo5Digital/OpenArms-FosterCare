import { serve } from "@hono/node-server";
import { checkEnv } from "./env";
import { createApp } from "./app";
import { closeDb } from "./lib/mongodb";

checkEnv();

// Render tells the server which port to use through PORT; 4000 is the default for working on your own computer
const port = Number(process.env.PORT) || 4000;
const server = serve({ fetch: createApp().fetch, port, hostname: "0.0.0.0" }, () => {
  console.log(`Open Arms backend listening on port ${port}`);
});

// the host stops the server with SIGTERM when it deploys a new version: finish what is running, then close the database
for (const signal of ["SIGTERM", "SIGINT"] as const) {
  process.on(signal, () => {
    server.close(() => {
      void closeDb().then(() => process.exit(0));
    });
    setTimeout(() => process.exit(0), 8000).unref();
  });
}
