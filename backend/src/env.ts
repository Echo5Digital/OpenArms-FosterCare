/**
 * Settings the server cannot run without. They are checked once when it starts, so a missing one stops the deploy with
 * a clear message instead of failing the first visitor who sends a form.
 */
export function checkEnv() {
  const problems: string[] = [];

  if (!process.env.MONGODB_URI) problems.push("MONGODB_URI is not set (the MongoDB connection string).");

  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 32) {
    problems.push("AUTH_SECRET must be a random value of at least 32 characters (it signs the admin login).");
  }

  const key = process.env.BACKEND_API_KEY;
  if (!key || key.length < 24) {
    problems.push("BACKEND_API_KEY must be a random value of at least 24 characters (the website sends it with every request).");
  }

  if (problems.length) {
    console.error(`The server cannot start:\n- ${problems.join("\n- ")}`);
    process.exit(1);
  }

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("SMTP_HOST, SMTP_USER and SMTP_PASS are not all set: no email (welcome or admin notice) will be sent after a form.");
  }

  if (!process.env.ADMIN_USERNAME || !process.env.ADMIN_PASSWORD_HASH) {
    console.warn("ADMIN_USERNAME and ADMIN_PASSWORD_HASH are not both set: only admins added on the Users page can sign in.");
  }
}
