import { MongoClient, type Db } from "mongodb";

/** One shared connection for the whole server, opened on first use. */
let connection: Promise<MongoClient> | undefined;
let indexes: Promise<void> | undefined;

function client() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not set (add it to backend/.env, or to the hosting provider's environment variables).");
  connection ??= new MongoClient(uri, { serverSelectionTimeoutMS: 8000 }).connect();
  return connection;
}

export async function getDb(): Promise<Db> {
  let db: Db;
  try {
    db = (await client()).db(process.env.MONGODB_DB || "openarms");
  } catch (error) {
    connection = undefined; // let the next request try to connect again
    throw error;
  }
  indexes ??= ensureIndexes(db).catch(() => {
    indexes = undefined;
  });
  await indexes;
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

/** Closes the connection (used when the server is shutting down). */
export async function closeDb() {
  const open = connection;
  connection = undefined;
  indexes = undefined;
  if (open) await (await open).close().catch(() => undefined);
}
