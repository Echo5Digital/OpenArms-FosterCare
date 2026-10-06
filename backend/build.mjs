// Bundles the server into one file, dist/server.js, which is what Render runs (`npm start`).
// The code in ../shared is compiled into the bundle; everything listed under "dependencies" in package.json is
// installed on the server, so it stays out of the bundle and is loaded from node_modules at run time.
import { build } from "esbuild";
import { readFileSync } from "node:fs";

const pkg = JSON.parse(readFileSync(new URL("./package.json", import.meta.url), "utf8"));

await build({
  entryPoints: ["src/server.ts"],
  outfile: "dist/server.js",
  bundle: true,
  platform: "node",
  format: "esm",
  target: "node20",
  sourcemap: true,
  tsconfig: "tsconfig.json",
  external: Object.keys(pkg.dependencies ?? {}),
  logLevel: "info",
});
