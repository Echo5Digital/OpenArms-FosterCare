import { randomBytes } from "node:crypto";
import net from "node:net";
import tls from "node:tls";

/**
 * Sends email over SMTP (Gmail by default), with Node's own networking, so no extra package is needed.
 * Settings: SMTP_HOST, SMTP_PORT (587), SMTP_SECURE ("true" for port 465), SMTP_USER, SMTP_PASS, SMTP_FROM_NAME.
 * Without the host, user and password nothing is sent.
 *
 * Note: Render's free plan blocks outbound SMTP ports (25, 465, 587); on it email only works on a paid plan.
 */
export type Email = { to: string; subject: string; html: string; text: string; replyTo?: string };

export const emailConfigured = () => Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);

type Reply = { code: number; lines: string[] };
type Socket = net.Socket | tls.TLSSocket;

const CONNECT_TIMEOUT_MS = 12_000;
const REPLY_TIMEOUT_MS = 20_000;

/** TLS wants the server's name, not an IP address, for checking its certificate. */
const serverName = (host: string) => (net.isIP(host) ? {} : { servername: host });

class SmtpError extends Error {
  constructor(message: string, readonly code?: number) {
    super(message);
  }
}

/** Turns what the server sends into whole replies (a reply can span several lines: "250-..." then "250 ..."). */
function connection(initial: Socket) {
  let socket = initial;
  let buffer = "";
  let failure: Error | null = null;
  let waiting: { resolve: (r: Reply) => void; reject: (e: Error) => void; timer: NodeJS.Timeout } | null = null;

  const takeReply = (): Reply | null => {
    // the last line of a reply is "250 text" (a space after the code); "250-text" lines come before it
    const finalLine = buffer.search(/^\d{3} [^\n]*\n/m);
    if (finalLine === -1) return null;
    const end = buffer.indexOf("\n", finalLine) + 1;
    const lines = buffer.slice(0, end).split(/\r?\n/).filter(Boolean);
    buffer = buffer.slice(end);
    return { code: Number(lines[0].slice(0, 3)), lines: lines.map((l) => l.slice(4)) };
  };

  const settle = () => {
    if (!waiting) return;
    const reply = takeReply();
    if (reply) {
      clearTimeout(waiting.timer);
      const { resolve } = waiting;
      waiting = null;
      resolve(reply);
    } else if (failure) {
      clearTimeout(waiting.timer);
      const { reject } = waiting;
      waiting = null;
      reject(failure);
    }
  };

  const onData = (chunk: Buffer) => {
    buffer += chunk.toString("utf8");
    settle();
  };
  const attach = (s: Socket) => {
    s.on("data", onData);
    s.on("error", (e) => {
      failure = e;
      settle();
    });
    s.on("close", () => {
      failure ??= new Error("The mail server closed the connection.");
      settle();
    });
  };
  attach(socket);

  const read = () =>
    new Promise<Reply>((resolve, reject) => {
      const timer = setTimeout(() => {
        waiting = null;
        reject(Object.assign(new Error("The mail server took too long to answer."), { code: "ETIMEDOUT" }));
      }, REPLY_TIMEOUT_MS);
      waiting = { resolve, reject, timer };
      settle();
    });

  return {
    read,
    /** Sends one command line and returns the reply to it. */
    async send(line: string) {
      socket.write(`${line}\r\n`);
      return read();
    },
    write: (data: string) => socket.write(data),
    /** After the server agrees to STARTTLS: wrap the same connection in TLS and carry on over it. */
    async upgrade(host: string) {
      socket.removeAllListeners("data");
      const secured = tls.connect({ socket: socket as net.Socket, ...serverName(host) });
      await new Promise<void>((resolve, reject) => {
        secured.once("secureConnect", () => resolve());
        secured.once("error", reject);
      });
      socket = secured;
      buffer = "";
      failure = null;
      attach(secured);
    },
    close() {
      socket.destroy();
    },
  };
}

function expect(reply: Reply, ...codes: number[]) {
  if (!codes.includes(reply.code)) throw new SmtpError(reply.lines.join(" ").slice(0, 200), reply.code);
  return reply;
}

const oneLine = (v: string) => v.replace(/[\r\n]+/g, " ").trim();
const base64 = (v: string | Buffer) => Buffer.from(v).toString("base64");
const wrap = (b64: string) => b64.replace(/(.{76})/g, "$1\r\n");
const isAscii = (v: string) => /^[\x20-\x7e]*$/.test(v);
const encodeWord = (v: string) => (isAscii(v) ? v : `=?UTF-8?B?${base64(v)}?=`);

/** The whole message: headers plus a plain-text and an HTML version (base64, so any character is safe). */
function buildMessage({ to, subject, html, text, replyTo }: Email, fromName: string, fromAddress: string) {
  const boundary = `oa_${randomBytes(12).toString("hex")}`;
  const name = oneLine(fromName);
  const from = `${isAscii(name) ? `"${name.replace(/(["\\])/g, "\\$1")}"` : encodeWord(name)} <${fromAddress}>`;
  const domain = fromAddress.split("@")[1] || "localhost";

  const head = [
    `From: ${from}`,
    `To: ${to}`,
    ...(replyTo ? [`Reply-To: ${replyTo}`] : []),
    `Subject: ${encodeWord(oneLine(subject))}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${randomBytes(12).toString("hex")}@${domain}>`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
  ];
  const part = (type: string, body: string) =>
    [`--${boundary}`, `Content-Type: ${type}; charset=utf-8`, "Content-Transfer-Encoding: base64", "", wrap(base64(body))].join("\r\n");

  return `${head.join("\r\n")}\r\n\r\n${part("text/plain", text)}\r\n${part("text/html", html)}\r\n--${boundary}--`;
}

/** Returns true when the mail server accepted the message. Never throws, and never logs who it was addressed to. */
export async function sendEmail(email: Email): Promise<boolean> {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return false;
  // the address is put inside an SMTP command, so anything odd in it is refused
  if (!/^[^\s<>@,;"]+@[^\s<>@,;"]+\.[^\s<>@,;"]{2,}$/.test(email.to)) return false;

  const port = Number(process.env.SMTP_PORT) || 587;
  const secure = process.env.SMTP_SECURE === "true";
  const fromName = process.env.SMTP_FROM_NAME || "Open Arms Foster Care";

  let conn: ReturnType<typeof connection> | undefined;
  try {
    const raw = await new Promise<Socket>((resolve, reject) => {
      const onError = (e: Error) => reject(e);
      const s = secure ? tls.connect({ host, port, ...serverName(host) }) : net.connect({ host, port });
      s.setTimeout(CONNECT_TIMEOUT_MS, () => s.destroy(Object.assign(new Error("Could not connect to the mail server in time."), { code: "ETIMEDOUT" })));
      s.once("error", onError);
      s.once(secure ? "secureConnect" : "connect", () => {
        s.setTimeout(0);
        s.removeListener("error", onError);
        resolve(s);
      });
    });

    conn = connection(raw);
    expect(await conn.read(), 220);

    const ehlo = async () => expect(await conn!.send("EHLO openarms"), 250);
    let features = await ehlo();
    if (!secure) {
      expect(await conn.send("STARTTLS"), 220);
      await conn.upgrade(host);
      features = await ehlo();
    }

    const authLine = features.lines.find((l) => /^AUTH\b/i.test(l)) ?? "";
    if (/\bPLAIN\b/i.test(authLine) || !authLine) {
      expect(await conn.send(`AUTH PLAIN ${base64(`\0${user}\0${pass}`)}`), 235);
    } else {
      expect(await conn.send("AUTH LOGIN"), 334);
      expect(await conn.send(base64(user)), 334);
      expect(await conn.send(base64(pass)), 235);
    }

    expect(await conn.send(`MAIL FROM:<${user}>`), 250);
    expect(await conn.send(`RCPT TO:<${email.to}>`), 250, 251);
    expect(await conn.send("DATA"), 354);
    // a line that starts with "." would end the message early, so it is doubled
    const message = buildMessage(email, fromName, user).replace(/^\./gm, "..");
    conn.write(`${message}\r\n.\r\n`);
    expect(await conn.read(), 250);

    await conn.send("QUIT").catch(() => undefined);
    return true;
  } catch (error) {
    const err = error as { code?: unknown; responseCode?: unknown; message?: string };
    const smtpCode = error instanceof SmtpError ? error.code : undefined;
    // the reason helps setting it up (wrong password, blocked port...); addresses are left out of the log
    const reason = String(err.message ?? "").replace(/\S+@\S+/g, "<address>").split("\n")[0].slice(0, 160);
    console.error(`The email could not be sent${smtpCode ? ` (SMTP ${smtpCode})` : err.code ? ` (${String(err.code)})` : ""}: ${reason}`);
    if (smtpCode === 535) console.error("The mail server refused the login: check SMTP_USER and SMTP_PASS (Gmail needs an App Password).");
    return false;
  } finally {
    conn?.close();
  }
}
