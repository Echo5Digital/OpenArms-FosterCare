import "server-only";
import { randomBytes, scrypt, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

const scryptAsync = promisify(scrypt) as (password: string, salt: string, keylen: number) => Promise<Buffer>;

export const MIN_PASSWORD_LENGTH = 10;
export const MAX_PASSWORD_LENGTH = 200;

/**
 * Turns a password into "scrypt:<salt>:<hash>". Only this scrambled form is ever stored, never the password itself, and
 * the same format is used for ADMIN_PASSWORD_HASH (scripts/admin-password.mjs) and for admins added on the Users page.
 */
export async function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const hash = await scryptAsync(password, salt, 64);
  return `scrypt:${salt}:${hash.toString("hex")}`;
}

/**
 * Checks a typed password against a stored hash in constant time. When there is no (valid) stored hash the same work is
 * still done and the answer is false, so a response never reveals whether the account exists.
 */
export async function verifyPassword(password: string, stored: string | null | undefined) {
  const [scheme, salt, hash] = (stored ?? "").split(":");
  const usable = scheme === "scrypt" && !!salt && !!hash;

  const derived = await scryptAsync(password.slice(0, MAX_PASSWORD_LENGTH), usable ? salt : "unset", 64);
  const expected = Buffer.from(usable ? hash : "", "hex");
  return usable && expected.length === derived.length && timingSafeEqual(derived, expected);
}
