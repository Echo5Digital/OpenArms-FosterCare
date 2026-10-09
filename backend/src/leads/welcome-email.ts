// These three mirror frontend/src/lib/site-config.ts (the backend cannot import from the website).
const PHONE = "(405) 894-0320";
const SITE = "openarmsfostercare.com";
export const DEFAULT_REPLY_TO = "info@openarmsfostercare.com";

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

export const WELCOME_SUBJECT = "Welcome to Open Arms Foster Care";

/**
 * The welcome email a visitor gets after sending any of the website's forms. Everything is inline-styled so it looks
 * the same in Gmail, Outlook and phone mail apps. The visitor's first name is the only thing typed by them that goes
 * into it, and it is escaped.
 */
export function buildWelcomeEmail(firstName: string) {
  const name = firstName.trim().slice(0, 60);
  const greetingHtml = name ? `Hi <strong>${escapeHtml(name)}</strong>,` : "Hi there,";
  const greetingText = name ? `Hi ${name},` : "Hi there,";

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${WELCOME_SUBJECT}</title>
</head>
<body style="margin:0; padding:0; background:#f4f7f9;">
<div style="margin:0; padding:0; background:#f4f7f9;">
  <div style="max-width:620px; margin:0 auto; padding:24px;">
    <!-- Card -->
    <div style="background:#ffffff; border:1px solid #e7f3d6; border-radius:12px; overflow:hidden; box-shadow:0 2px 10px rgba(0,0,0,0.04); font-family:Arial, Helvetica, sans-serif; color:#333333; line-height:1.6;">

      <!-- Header -->
      <div style="text-align:center; padding:22px 20px; border-bottom:3px solid #8DC540; background-color:#f8fff0; background:linear-gradient(0deg, #ffffff, #f8fff0);">
        <h2 style="margin:0; font-size:22px; color:#1e3a1a; letter-spacing:0.2px;">
          Welcome to Open Arms Foster Care
        </h2>
        <p style="margin:8px 0 0 0; font-size:13px; color:#4b4b4b;">
          We’re excited to support your fostering journey.
        </p>
      </div>

      <!-- Body -->
      <div style="padding:22px 22px 10px 22px;">
        <!-- Greeting -->
        <p style="font-size:16px; margin:0 0 12px 0;">
          ${greetingHtml}
        </p>

        <!-- Intro -->
        <p style="margin:0 0 12px 0;">
          Thank you for your interest in becoming a foster parent with <strong>Open Arms</strong>!
        </p>

        <!-- Benefit Row -->
        <div style="margin:18px 0; padding:14px 16px; background:#f8fff0; border:1px solid #e7f3d6; border-radius:8px;">
          <p style="margin:0; font-size:14px;">
            💚 <strong>Personal guidance:</strong> Our team can walk you through every step—from questions to paperwork—so you never feel stuck.
          </p>
        </div>

        <!-- Meeting Invitation -->
        <p style="margin:0 0 16px 0;">
          If you’d like to meet with one of our staff before starting the application process, feel free to reach out. We’d love to schedule a time to answer any questions or concerns you may have.
        </p>

        <!-- Support Section -->
        <p style="margin:0 0 12px 0;">
          We know the paperwork process can feel overwhelming, so please don’t hesitate to reach out if you get stuck or need extra assistance.
          We can even schedule a <strong>video call</strong> to complete forms together with you if that’s easier.
        </p>

        <p style="margin:0;">
          Any way we can help make this journey smoother for you, we’re here to support you!
        </p>

        <!-- Signature -->
        <p style="margin:24px 0 0 0; font-weight:bold; color:#1e3a1a;">
          Sincerely,<br>
          <span style="color:#8DC540;">The Open Arms Team</span>
        </p>
      </div>

      <!-- Footer -->
      <div style="padding:14px 20px 20px 20px; border-top:1px solid #e7f3d6; background:#ffffff;">
        <p style="margin:8px 0 0 0; font-size:12px; color:#666666;">
          Need assistance? Reply to this email or call us at <strong>${PHONE}</strong>.
          You can also visit <strong>${SITE}</strong> for FAQs and resources.
        </p>
      </div>
    </div>

    <!-- Mini brand bar -->
    <div style="text-align:center; margin-top:10px;">
      <div style="display:inline-block; height:6px; width:120px; background:#8DC540; border-radius:999px;"></div>
    </div>
  </div>
</div>
</body>
</html>`;

  const text = [
    greetingText,
    "Thank you for your interest in becoming a foster parent with Open Arms!",
    "Personal guidance: Our team can walk you through every step—from questions to paperwork—so you never feel stuck.",
    "If you’d like to meet with one of our staff before starting the application process, feel free to reach out. We’d love to schedule a time to answer any questions or concerns you may have.",
    "We know the paperwork process can feel overwhelming, so please don’t hesitate to reach out if you get stuck or need extra assistance. We can even schedule a video call to complete forms together with you if that’s easier.",
    "Any way we can help make this journey smoother for you, we’re here to support you!",
    "Sincerely,\nThe Open Arms Team",
    `Need assistance? Reply to this email or call us at ${PHONE}. You can also visit ${SITE} for FAQs and resources.`,
  ].join("\n\n");

  return { subject: WELCOME_SUBJECT, html, text };
}
