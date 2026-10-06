import { SignJWT, jwtVerify } from "jose";

const SESSION_HOURS = 8;

function secretKey() {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 32) throw new Error("AUTH_SECRET is missing or shorter than 32 characters.");
  return new TextEncoder().encode(secret);
}

/**
 * The signed login token handed to the website after a successful sign-in. The website keeps it in a cookie that
 * scripts on the page cannot read and sends it back with every dashboard request.
 */
export async function createSessionToken(username: string) {
  const expires = new Date(Date.now() + SESSION_HOURS * 3600 * 1000);
  const token = await new SignJWT({ role: "admin" })
    .setSubject(username)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expires)
    .sign(secretKey());
  return { token, expiresAt: expires.toISOString() };
}

/** The admin a token was issued to, or null when it is missing, tampered with, expired or signed with an old secret. */
export async function verifySessionToken(token: string): Promise<{ username: string } | null> {
  try {
    const { payload } = await jwtVerify(token, secretKey(), { algorithms: ["HS256"] });
    if (payload.role !== "admin" || !payload.sub) return null;
    return { username: payload.sub };
  } catch {
    return null;
  }
}
