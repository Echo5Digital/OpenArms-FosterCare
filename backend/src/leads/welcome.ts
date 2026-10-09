import { LEAD_TYPES, type LeadType } from "@shared/leads/types";
import { emailConfigured, sendEmail } from "../lib/mailer";
import { markWelcomed, recentlyWelcomed } from "./store";
import type { ParsedLead } from "./validate";
import { buildWelcomeEmail, DEFAULT_REPLY_TO } from "./welcome-email";

/** Forms that send the welcome email. Take a type out of this list to stop it for that form. */
const WELCOME_EMAIL_TYPES: readonly LeadType[] = LEAD_TYPES;

// one welcome email per address per day: a person who sends two forms is not emailed twice, and nobody can use the
// forms to flood one address
const REPEAT_WINDOW_MS = 24 * 3600 * 1000;

/**
 * Emails the visitor a welcome message after a form was saved. Meant to be started without waiting for it: the visitor
 * should not wait for the email, and a problem sending it must never lose or fail their form. It never throws.
 */
export async function sendWelcomeEmail(lead: ParsedLead, leadId: string) {
  try {
    if (!lead.email || !WELCOME_EMAIL_TYPES.includes(lead.type) || !emailConfigured()) return;
    if (await recentlyWelcomed(lead.email, REPEAT_WINDOW_MS)) return;

    const typed = lead.fields.firstName;
    const firstName = typeof typed === "string" && typed ? typed : lead.name.split(/\s+/)[0] ?? "";
    const { subject, html, text } = buildWelcomeEmail(firstName);

    const sent = await sendEmail({
      to: lead.email,
      subject,
      html,
      text,
      replyTo: process.env.EMAIL_REPLY_TO || DEFAULT_REPLY_TO,
    });
    if (sent) await markWelcomed(leadId);
  } catch (error) {
    console.error("Could not send the welcome email:", error instanceof Error ? error.message.split("\n")[0] : "unknown error");
  }
}
