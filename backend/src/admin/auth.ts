import { createHash, timingSafeEqual } from "node:crypto";
import type { Admin } from "@shared/api";
import { verifySessionToken } from "./session";
import { verifyPassword } from "./password";
import { findAdmin } from "./users";

const digest = (value: string) => createHash("sha256").update(value).digest();

/**
 * The admin a login token belongs to, or null. An admin who has been removed from the Users page loses access on their
 * very next request, not when their login would have expired.
 */
export async function adminFromToken(token: string | undefined): Promise<Admin | null> {
  if (!token) return null;
  const session = await verifySessionToken(token);
  if (!session) return null;

  const ownerName = process.env.ADMIN_USERNAME;
  if (ownerName && session.username === ownerName) return { username: ownerName, owner: true };

  const admin = await findAdmin(session.username).catch(() => null);
  return admin ? { username: admin.email, owner: false } : null;
}

/**
 * Checks a typed login against the owner account (ADMIN_USERNAME + ADMIN_PASSWORD_HASH) and then against the admins
 * added on the Users page (their email). Returns the name to sign in as, or null. The same work is done whether the
 * username or the password is wrong, and the comparisons are constant-time, so a response does not reveal which one
 * was close.
 */
export async function checkCredentials(typed: string, password: string): Promise<string | null> {
  const username = typed.trim();

  const ownerName = process.env.ADMIN_USERNAME ?? "";
  const ownerPasswordOk = await verifyPassword(password, process.env.ADMIN_PASSWORD_HASH);
  const ownerNameOk = !!ownerName && timingSafeEqual(digest(username), digest(ownerName));
  if (ownerNameOk && ownerPasswordOk) return ownerName;

  // a database outage must not stop the owner from getting in (handled above), so a failed lookup is just "no such admin"
  const admin = await findAdmin(username).catch(() => null);
  const passwordOk = await verifyPassword(password, admin?.passwordHash);
  return admin && passwordOk ? admin.email : null;
}
