import "server-only";
import { MongoClient, type Db } from "mongodb";

/**
 * One shared connection for the whole server. In development, hot reloads would open a new connection every time a
 * file changes, so the client is parked on `globalThis` and reused.
 */
const globalForMongo = globalThis as unknown as { _mongoClient?: Promise<MongoClient>; _mongoIndexes?: Promise<void> };

function client() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not set (add it to .env.local, or to the hosting provider's environment variables).");
  globalForMongo._mongoClient ??= new MongoClient(uri, { serverSelectionTimeoutMS: 8000 }).connect();
  return globalForMongo._mongoClient;
}

export async function getDb(): Promise<Db> {
  let db: Db;
  try {
    db = (await client()).db(process.env.MONGODB_DB || "openarms");
  } catch (error) {
    globalForMongo._mongoClient = undefined; // let the next request try to connect again
    throw error;
  }
  globalForMongo._mongoIndexes ??= ensureIndexes(db).catch(() => {
    globalForMongo._mongoIndexes = undefined;
  });
  await globalForMongo._mongoIndexes;
  return db;
}

async function ensureIndexes(db: Db) {
  const leads = db.collection("leads");
  await Promise.all([
    leads.createIndex({ createdAt: -1 }),
    leads.createIndex({ type: 1, createdAt: -1 }),
    leads.createIndex({ status: 1, createdAt: -1 }),
    // only Sign Ups waiting for their inquiry carry a token
    leads.createIndex({ followUpToken: 1 }, { unique: true, sparse: true }),
  ]);
}
