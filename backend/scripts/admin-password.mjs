// Makes the value for ADMIN_PASSWORD_HASH in frontend/.env.local.
//
//   node backend/scripts/admin-password.mjs "your new password"     (run from the project root)
//
// Prints a line to paste into frontend/.env.local (or your hosting provider's environment variables). The password itself is
// never stored: the dashboard only keeps this salted scrypt hash and compares against it when someone logs in.
import { randomBytes, scryptSync } from "node:crypto";

const password = process.argv[2];

if (!password || password.length < 10) {
  console.error('Usage: node backend/scripts/admin-password.mjs "a password of at least 10 characters"');
  process.exit(1);
}

const salt = randomBytes(16).toString("hex");
const hash = scryptSync(password, salt, 64).toString("hex");

console.log(`ADMIN_PASSWORD_HASH=scrypt:${salt}:${hash}`);
