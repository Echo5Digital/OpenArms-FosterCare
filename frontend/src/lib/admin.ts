import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { Admin } from "@shared/api";
import { api, BackendError } from "@/lib/backend";

export const SESSION_COOKIE = "oa_admin";

/**
 * The login token (issued by the backend) is kept in a cookie that scripts on the page cannot read (HttpOnly), that is
 * only sent over https on the live site, and that only travels to /admin pages.
 */
export async function storeToken(token: string, expires: Date) {
  (await cookies()).set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/admin",
    expires,
  });
}

export async function readToken() {
  return (await cookies()).get(SESSION_COOKIE)?.value;
}

export async function clearToken() {
  (await cookies()).set(SESSION_COOKIE, "", { httpOnly: true, path: "/admin", maxAge: 0 });
}

/**
 * The logged-in admin (remembered for the rest of this request), or null. The backend checks the token every time, so
 * an admin who has been removed on the Users page loses access on their very next request.
 */
export const getAdmin = cache(async (): Promise<Admin | null> => {
  const token = await readToken();
  if (!token) return null;
  try {
    return await api.me(token);
  } catch (error) {
    if (error instanceof BackendError && error.status === 401) return null; // expired, tampered with, or removed
    throw error;
  }
});

/** Call this at the top of every dashboard page: no valid login sends the visitor to the sign-in page. */
export async function requireAdmin() {
  const admin = await getAdmin();
  const token = await readToken();
  if (!admin || !token) redirect("/admin/login");
  return { admin, token };
}

/**
 * Runs a dashboard change for the logged-in admin. Server actions can be called by anyone who knows their address, so
 * the backend checks the login on every call; an expired or withdrawn login sends the person back to sign in.
 */
export async function asAdmin<T>(run: (token: string) => Promise<T>): Promise<T> {
  const token = await readToken();
  if (!token) redirect("/admin/login");
  try {
    return await run(token);
  } catch (error) {
    if (error instanceof BackendError && error.status === 401) redirect("/admin/login");
    throw error;
  }
}
