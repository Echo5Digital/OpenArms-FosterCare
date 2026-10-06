import "server-only";
import type { Admin, AdminUser, LeadList, LeadStats, LoginResult } from "@shared/api";
import type { Lead, LeadStatus, LeadType } from "@shared/leads/types";

/**
 * How the website talks to the backend server (the Open Arms API on Render). Every call is made from the website's
 * own server, never from the visitor's browser, and carries the shared secret in x-api-key.
 *
 *   BACKEND_URL      address of the backend, e.g. https://openarms-backend.onrender.com
 *   BACKEND_API_KEY  the same secret the backend has as BACKEND_API_KEY
 */

/** status 0 means the backend could not be reached at all (or is not configured); anything else is its HTTP status. */
export class BackendError extends Error {
  constructor(
    readonly status: number,
    message: string,
  ) {
    super(message);
  }
}

type Options = {
  method?: string;
  /** The admin's login token, for dashboard requests. */
  token?: string;
  json?: unknown;
  body?: string;
  headers?: Record<string, string>;
  timeoutMs?: number;
};

/** The raw response, for callers that pass it straight on. Throws BackendError(0) when there is no answer. */
export async function backendFetch(path: string, options: Options = {}): Promise<Response> {
  const base = process.env.BACKEND_URL?.replace(/\/+$/, "");
  const key = process.env.BACKEND_API_KEY;
  if (!base || !key) throw new BackendError(0, "BACKEND_URL and BACKEND_API_KEY are not set (see frontend/.env.example).");

  const headers: Record<string, string> = { "x-api-key": key, ...options.headers };
  if (options.token) headers.authorization = `Bearer ${options.token}`;
  let body = options.body;
  if (options.json !== undefined) {
    body = JSON.stringify(options.json);
    headers["content-type"] = "application/json";
  }

  try {
    return await fetch(`${base}${path}`, {
      method: options.method ?? "GET",
      headers,
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(options.timeoutMs ?? 20_000),
    });
  } catch {
    throw new BackendError(0, "The backend server could not be reached.");
  }
}

async function call<T>(path: string, options: Options = {}): Promise<T> {
  const response = await backendFetch(path, options);
  if (response.status === 204) return undefined as T;
  const data = (await response.json().catch(() => null)) as { error?: string } | null;
  if (!response.ok) throw new BackendError(response.status, data?.error ?? `The backend answered with status ${response.status}.`);
  return data as T;
}

const query = (values: Record<string, string | number | undefined>) => {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(values)) if (value !== undefined && value !== "") params.set(key, String(value));
  const text = params.toString();
  return text ? `?${text}` : "";
};

export type LeadQuery = { type?: LeadType; status?: LeadStatus; q?: string; page?: number };

export const api = {
  login: (username: string, password: string) => call<LoginResult>("/admin/login", { method: "POST", json: { username, password } }),
  me: (token: string) => call<Admin>("/admin/me", { token }),

  stats: (token: string) => call<LeadStats>("/admin/stats", { token }),
  leads: (token: string, filters: LeadQuery) => call<LeadList>(`/admin/leads${query(filters)}`, { token }),
  lead: (token: string, id: string) => call<Lead>(`/admin/leads/${encodeURIComponent(id)}`, { token }),
  updateLead: (token: string, id: string, change: { status?: LeadStatus; note?: string }) =>
    call<void>(`/admin/leads/${encodeURIComponent(id)}`, { method: "PATCH", token, json: change }),
  deleteLead: (token: string, id: string) => call<void>(`/admin/leads/${encodeURIComponent(id)}`, { method: "DELETE", token }),

  users: (token: string) => call<{ owner: string | null; users: AdminUser[] }>("/admin/users", { token }),
  addUser: (token: string, email: string, password: string) =>
    call<{ email: string }>("/admin/users", { method: "POST", token, json: { email, password } }),
  removeUser: (token: string, email: string) => call<void>(`/admin/users/${encodeURIComponent(email)}`, { method: "DELETE", token }),
};
