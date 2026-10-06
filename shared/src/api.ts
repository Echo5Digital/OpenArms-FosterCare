import type { Lead, LeadType } from "./leads/types";

/** Shapes of the JSON the backend sends to the website (shared so both sides agree on them). */

export type LeadStats = {
  total: number;
  new: number;
  last24h: number;
  last7d: number;
  byType: Record<LeadType, number>;
};

export type LeadList = { items: Lead[]; total: number; page: number; pages: number; pageSize: number };

/** An admin added on the Users page (never includes the password hash). */
export type AdminUser = { email: string; createdBy: string; createdAt: string };

export type Admin = {
  username: string;
  /** The account from the backend's settings (ADMIN_USERNAME): it cannot be removed from the Users page. */
  owner: boolean;
};

export type LoginResult = { token: string; expiresAt: string; admin: Admin };
