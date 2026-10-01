import { siteConfig } from "@/lib/site-config";
import type { LeadFieldValue, LeadType } from "@/lib/leads/types";

export type SubmitResult = { ok: true; id?: string; followUp?: string } | { ok: false; error: string };

const fallbackError = `We couldn't send that just now. Please try again, or call us at ${siteConfig.phone}.`;

/** Reads every named field of a form: repeated names (like checkboxes) become a list. */
export function readForm(form: HTMLFormElement) {
  const data: Record<string, LeadFieldValue> = {};
  for (const [key, value] of new FormData(form).entries()) {
    if (typeof value !== "string") continue;
    const previous = data[key];
    if (previous === undefined) data[key] = value;
    else if (Array.isArray(previous)) previous.push(value);
    else data[key] = [previous, value];
  }
  return data;
}

/**
 * Sends a filled-in form to the dashboard's lead list. `followUp` is the secret a Sign Up received; sending it back
 * with the Recruitment Inquiry adds the inquiry to that same lead.
 */
export async function submitLead(type: LeadType, form: HTMLFormElement, followUp?: string): Promise<SubmitResult> {
  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, page: window.location.pathname, followUp, data: readForm(form) }),
    });
    const body = (await response.json().catch(() => null)) as { ok?: boolean; id?: string; followUp?: string; error?: string } | null;
    if (response.ok && body?.ok) return { ok: true, id: body.id, followUp: body.followUp };
    return { ok: false, error: body?.error ?? fallbackError };
  } catch {
    return { ok: false, error: fallbackError };
  }
}
