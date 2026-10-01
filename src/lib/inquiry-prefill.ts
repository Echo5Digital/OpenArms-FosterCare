import { useMemo, useSyncExternalStore } from "react";

/**
 * Hands the details typed into the Sign Up form over to the Recruitment Inquiry form.
 * They travel in sessionStorage rather than the URL, so names, emails and phone numbers never end up in server logs,
 * analytics or browser history. The data stays in this browser tab and is cleared once the inquiry is submitted.
 */

const KEY = "openarms.inquiryPrefill";

export type InquiryPrefill = {
  name?: string;
  email?: string;
  phone?: string;
  source?: string;
  /** Secret from the saved Sign Up, so the inquiry is added to that same lead on the dashboard. */
  followUp?: string;
};

/** Options for "How did you hear about us?" — shared by the Sign Up and Inquiry forms. */
export const sourceOptions = ["Referred by someone I know", "Google", "Facebook", "Instagram", "Youtube", "Twitter"];

export function saveInquiryPrefill(data: InquiryPrefill) {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    // storage can be blocked (private mode, strict settings): the inquiry form simply opens empty
  }
}

export function clearInquiryPrefill() {
  try {
    sessionStorage.removeItem(KEY);
  } catch {
    // nothing to clear
  }
}

function readRaw() {
  try {
    return sessionStorage.getItem(KEY);
  } catch {
    return null;
  }
}

function parse(raw: string | null): InquiryPrefill | null {
  if (!raw) return null;
  try {
    const data = JSON.parse(raw) as Record<string, unknown>;
    const pick = (k: string) => (typeof data[k] === "string" ? (data[k] as string) : undefined);
    return { name: pick("name"), email: pick("email"), phone: pick("phone"), source: pick("source"), followUp: pick("followUp") };
  } catch {
    return null;
  }
}

// the stored value only changes through the two functions above, so there is nothing to subscribe to
const subscribe = () => () => {};

/** The saved Sign Up details, or null (always null on the server and during hydration, then the stored value). */
export function useInquiryPrefill(): InquiryPrefill | null {
  const raw = useSyncExternalStore(subscribe, readRaw, () => null);
  return useMemo(() => parse(raw), [raw]);
}
