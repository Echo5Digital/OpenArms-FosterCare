import "server-only";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

export const SESSION_COOKIE = "oa_admin";
const SESSION_HOURS = 8;

function secretKey() {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 32) throw new Error("AUTH_SECRET is missing or shorter than 32 characters.");
  return new TextEncoder().encode(secret);
}

/**
 * Logs the admin in: a signed token is stored in a cookie that scripts on the page cannot read (HttpOnly), that is only
 * sent over https on the live site, and that only travels to /admin pages.
 */
export async function createSession(username: string) {
  const expires = new Date(Date.now() + SESSION_HOURS * 3600 * 1000);
  const token = await new SignJWT({ role: "admin" })
    .setSubject(username)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expires)
    .sign(secretKey());

  (await cookies()).set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/admin",
    expires,
  });
}

/** The logged-in admin from the cookie, or null when there is no valid, unexpired login. */
export async function readSession(): Promise<{ username: string } | null> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secretKey(), { algorithms: ["HS256"] });
    if (payload.role !== "admin" || !payload.sub) return null;
    return { username: payload.sub };
  } catch {
    return null; // tampered with, expired, or signed with an old secret
  }
}

export async function destroySession() {
  (await cookies()).set(SESSION_COOKIE, "", { httpOnly: true, path: "/admin", maxAge: 0 });
}
