"use client";

import { useState, type FormEvent } from "react";
import type { LeadType } from "@backend/leads/types";
import { submitLead, type SubmitResult } from "@/lib/submit-lead";

type Options = {
  /** Secret from the Sign Up this form follows on from (Recruitment Inquiry only), so both end up as one lead. */
  followUp?: () => string | undefined;
  /** Runs after the lead is saved. */
  onSaved?: (result: Extract<SubmitResult, { ok: true }>, form: HTMLFormElement) => void;
};

/**
 * State and submit handler shared by every website form:
 * idle -> sending -> sent, or back to idle with an error message the visitor can read.
 */
export function useLeadForm(type: LeadType, options: Options = {}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget; // React clears currentTarget once the handler yields, so keep it
    setError(null);
    setStatus("sending");
    const result = await submitLead(type, form, options.followUp?.());

    if (result.ok) {
      options.onSaved?.(result, form);
      setStatus("sent");
    } else {
      setError(result.error);
      setStatus("idle");
    }
  }

  return { status, error, sending: status === "sending", sent: status === "sent", handleSubmit };
}
