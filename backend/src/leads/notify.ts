import { fieldLabel, formatDateTime, formatValue } from "@shared/leads/format";
import { leadTypeLabels, pageLabel } from "@shared/leads/types";
import { emailConfigured, sendEmail } from "../lib/mailer";
import type { ParsedLead } from "./validate";

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

// shown on their own lines at the top, so they are left out of the list of answers
const SHOWN_ABOVE = new Set(["name", "firstName", "lastName", "email", "phone"]);

/**
 * Tells the team (LEAD_NOTIFY_EMAIL, one address or several separated by commas) that a form came in, with what the
 * visitor typed. Started without waiting for it, like the welcome email; it never throws.
 * `joinedSignup` is true for a Recruitment Inquiry that was added to the Sign Up it follows on from.
 */
export async function notifyAdmin(lead: ParsedLead, joinedSignup = false) {
  try {
    const recipients = (process.env.LEAD_NOTIFY_EMAIL ?? "").split(/[,;]/).map((a) => a.trim()).filter(Boolean);
    if (!recipients.length || !emailConfigured()) return;

    const label = joinedSignup ? "Recruitment inquiry (follows a sign up)" : leadTypeLabels[lead.type];
    const who = lead.name || lead.email || lead.phone || "a visitor";
    const rows: [string, string][] = [
      ["Form", label],
      ["Page", pageLabel(lead.page)],
      ["Name", lead.name],
      ["Email", lead.email],
      ["Phone", lead.phone],
      ...Object.entries(lead.fields)
        .filter(([key]) => !SHOWN_ABOVE.has(key))
        .map(([key, value]): [string, string] => [fieldLabel(key), formatValue(value)]),
      ["Received", formatDateTime(new Date().toISOString())],
    ];
    const filled = rows.filter(([, value]) => value);

    const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>New form</title></head>
<body style="margin:0; padding:0; background:#f4f7f9;">
  <div style="max-width:620px; margin:0 auto; padding:24px;">
    <div style="background:#ffffff; border:1px solid #e7f3d6; border-radius:12px; overflow:hidden; font-family:Arial, Helvetica, sans-serif; color:#333333; line-height:1.6;">
      <div style="padding:18px 22px; border-bottom:3px solid #8DC540; background-color:#f8fff0;">
        <h2 style="margin:0; font-size:18px; color:#1e3a1a;">New form: ${escapeHtml(label)}</h2>
      </div>
      <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%; padding:10px 22px 18px 22px; font-size:14px;">
        ${filled
          .map(
            ([key, value]) =>
              `<tr><td style="padding:6px 14px 6px 0; vertical-align:top; color:#666666; white-space:nowrap;">${escapeHtml(key)}</td><td style="padding:6px 0; vertical-align:top; color:#1e3a1a; white-space:pre-wrap;">${escapeHtml(value)}</td></tr>`,
          )
          .join("\n        ")}
      </table>
    </div>
  </div>
</body></html>`;

    const text = filled.map(([key, value]) => `${key}: ${value}`).join("\n");

    for (const to of recipients) {
      await sendEmail({
        to,
        subject: `New ${label.toLowerCase()}: ${who}`,
        html,
        text,
        // replying to this email writes to the visitor (the address was checked when the form came in)
        ...(lead.email ? { replyTo: lead.email } : {}),
      });
    }
  } catch (error) {
    console.error("Could not send the admin notification:", error instanceof Error ? error.message.split("\n")[0] : "unknown error");
  }
}
