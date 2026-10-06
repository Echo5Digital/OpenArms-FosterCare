/** Lead definitions shared by the forms (browser), the API and the dashboard. */

export const LEAD_TYPES = ["contact", "appointment", "signup", "inquiry", "referral", "job", "newsletter", "comment"] as const;
export type LeadType = (typeof LEAD_TYPES)[number];

export const LEAD_STATUSES = ["new", "contacted", "closed"] as const;
export type LeadStatus = (typeof LEAD_STATUSES)[number];

export const leadTypeLabels: Record<LeadType, string> = {
  contact: "Contact form",
  appointment: "Appointment request",
  signup: "Sign up",
  inquiry: "Recruitment inquiry",
  referral: "Referral",
  job: "Job application",
  newsletter: "Newsletter",
  comment: "Blog comment",
};

/** Plural / short names for the filter tabs. */
export const leadTypeTabs: Record<LeadType, string> = {
  contact: "Contact",
  appointment: "Appointments",
  signup: "Sign ups",
  inquiry: "Inquiries",
  referral: "Referrals",
  job: "Job applications",
  newsletter: "Newsletter",
  comment: "Comments",
};

export const leadStatusLabels: Record<LeadStatus, string> = {
  new: "New",
  contacted: "Contacted",
  closed: "Closed",
};

const pageLabels: Record<string, string> = {
  "/": "Home page",
  "/about-us": "About Us",
  "/therapeutic-foster-care-agency": "Therapeutic Foster Care",
  "/foster-parent-training": "Foster Parent Training",
  "/post-placement-therapy": "Post-Placement Therapy",
  "/support-for-school-staff": "Support for School Staff",
  "/child-welfare-advocacy": "Child Welfare Advocacy",
  "/referrals": "Referrals",
  "/oklahoma-city": "Oklahoma City",
  "/tulsa": "Tulsa",
  "/lawton": "Lawton",
  "/contact-us": "Contact Us",
  "/sign-up-now": "Sign Up Now",
  "/inquiry-form": "Inquiry form",
  "/careers": "Careers",
  "/blog": "Blog",
};

/** Friendly name for the page a form was sent from. */
export function pageLabel(path: string) {
  return pageLabels[path] ?? (path.startsWith("/blog/") ? "Blog" : path);
}

export const isLeadType = (v: unknown): v is LeadType => typeof v === "string" && (LEAD_TYPES as readonly string[]).includes(v);
export const isLeadStatus = (v: unknown): v is LeadStatus => typeof v === "string" && (LEAD_STATUSES as readonly string[]).includes(v);

/** Hidden "trap" field: people never see it, so anything typed into it came from a bot. */
export const HONEYPOT_FIELD = "company_fax";

export type LeadFieldValue = string | string[];

/** What the dashboard works with (plain values, safe to pass to client components). */
export type Lead = {
  id: string;
  type: LeadType;
  page: string;
  name: string;
  email: string;
  phone: string;
  fields: Record<string, LeadFieldValue>;
  status: LeadStatus;
  note: string;
  createdAt: string; // ISO
  /** Set when a Sign Up went on to complete the Recruitment Inquiry form: it was added to this same lead. */
  inquiryAt?: string; // ISO
};
