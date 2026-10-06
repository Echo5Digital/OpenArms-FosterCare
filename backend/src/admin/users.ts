import type { Collection } from "mongodb";
import { getDb } from "../lib/mongodb";

/** Admins added from the dashboard's Users page. The owner account lives in the server settings, not here. */
type AdminDoc = {
  email: string;
  passwordHash: string;
  createdBy: string;
  createdAt: Date;
};

/** What the Users page may show (never the password hash). */
export type AdminUser = { email: string; createdBy: string; createdAt: string };

let ready: Promise<unknown> | undefined;

async function admins(): Promise<Collection<AdminDoc>> {
  const collection = (await getDb()).collection<AdminDoc>("admins");
  // one account per email, enforced by the database itself
  ready ??= collection.createIndex({ email: 1 }, { unique: true }).catch((error) => {
    ready = undefined;
    throw error;
  });
  await ready;
  return collection;
}

const normalize = (email: string) => email.trim().toLowerCase().slice(0, 254);

export async function findAdmin(email: string) {
  return (await admins()).findOne({ email: normalize(email) });
}

export async function listAdmins(): Promise<AdminUser[]> {
  const docs = await (await admins()).find({}).sort({ createdAt: 1 }).toArray();
  return docs.map((d) => ({ email: d.email, createdBy: d.createdBy, createdAt: d.createdAt.toISOString() }));
}

/** "exists" when somebody already has an account with that email. */
export async function createAdmin(email: string, passwordHash: string, createdBy: string) {
  try {
    await (await admins()).insertOne({ email: normalize(email), passwordHash, createdBy, createdAt: new Date() });
    return "created" as const;
  } catch (error) {
    if ((error as { code?: number }).code === 11000) return "exists" as const;
    throw error;
  }
}

export async function deleteAdmin(email: string) {
  await (await admins()).deleteOne({ email: normalize(email) });
}
