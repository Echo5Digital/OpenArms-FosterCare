import type { LeadFieldValue } from "./types";

const labels: Record<string, string> = {
  firstName: "First name",
  lastName: "Last name",
  source: "How they heard about us",
  notes: "Anything else",
  message: "Message",
  pitch: "Why they'd be the best choice",
  position: "Position applied for",
  newsletter: "Wants the newsletter",
  referredName: "Referred person's name",
  referredEmail: "Referred person's email",
  referredPhone: "Referred person's phone",
  priorFoster: "Ever a foster or adoptive parent",
  priorAgency: "Previous agency",
  daycare: "Operated a daycare at home",
  resourceOpen: "Resource still open",
  maritalStatus: "Marital status",
  spouse21: "Applicant (and spouse) 21 or older",
  residentOk5: "Oklahoma resident for 5 years",
  otherStates: "Other states in last 5 years",
  education: "High school education or GED",
  convicted: "Household member convicted of a misdemeanor/felony",
  dhsReport: "Resident reported to / involved with DHS",
  counseling: "Resident needed professional counseling",
  military: "Adult resident in the military",
  explain: "Explanation of any “yes” answers",
  program: "Program preferences",
  placementPreferences: "Placement preferences",
  childSpecific: "Child specific",
  childDetails: "Child details",
  bedrooms: "Bedrooms available",
  summary: "Summary / comments",
  zip: "Zip code",
  dob: "Date of birth",
};

/** "household1Name" -> "Household member 1 - name": readable titles for the submitted form fields. */
export function fieldLabel(key: string): string {
  if (labels[key]) return labels[key];
  const household = key.match(/^household(\d+)(.+)$/);
  if (household) return `Household member ${household[1]} - ${fieldLabel(household[2][0].toLowerCase() + household[2].slice(1)).toLowerCase()}`;
  const spaced = key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ").toLowerCase();
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

export const formatValue = (value: LeadFieldValue) => (Array.isArray(value) ? value.join(", ") : value);

const dateTime = new Intl.DateTimeFormat("en-US", { timeZone: "America/Chicago", dateStyle: "medium", timeStyle: "short" });
const dateOnly = new Intl.DateTimeFormat("en-US", { timeZone: "America/Chicago", month: "short", day: "numeric", year: "numeric" });
const timeOnly = new Intl.DateTimeFormat("en-US", { timeZone: "America/Chicago", hour: "numeric", minute: "2-digit" });

/** Oklahoma time (the offices' time zone), whatever zone the server runs in. */
export const formatDateTime = (iso: string) => `${dateTime.format(new Date(iso))} CT`;
export const formatDay = (iso: string) => dateOnly.format(new Date(iso));
export const formatTime = (iso: string) => timeOnly.format(new Date(iso));

/** "5 minutes ago", "2 days ago", then the date once it is older than a week. */
export function timeAgo(iso: string) {
  const seconds = Math.max(0, (Date.now() - new Date(iso).getTime()) / 1000);
  if (seconds < 60) return "Just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hr ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} day${days === 1 ? "" : "s"} ago`;
  return formatDay(iso);
}

/** What to call a lead in lists and headings: newsletter sign-ups have no name, only an email address. */
export const leadTitle = (lead: { name: string; email: string; type: string }) =>
  lead.name || (lead.type === "newsletter" ? "Newsletter subscriber" : lead.email || "Unnamed lead");
