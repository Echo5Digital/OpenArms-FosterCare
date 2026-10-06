import { leadStatusLabels, leadTypeLabels, type LeadStatus, type LeadType } from "@shared/leads/types";

const typeStyle: Record<LeadType, string> = {
  contact: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  appointment: "bg-amber-50 text-amber-800 ring-amber-200",
  signup: "bg-sky-50 text-sky-800 ring-sky-200",
  inquiry: "bg-violet-50 text-violet-800 ring-violet-200",
  referral: "bg-rose-50 text-rose-800 ring-rose-200",
  job: "bg-slate-100 text-slate-700 ring-slate-300",
  newsletter: "bg-teal-50 text-teal-800 ring-teal-200",
  comment: "bg-orange-50 text-orange-800 ring-orange-200",
};

export const statusStyle: Record<LeadStatus, string> = {
  new: "bg-leaf text-pine-deep ring-leaf-deep/40",
  contacted: "bg-amber-100 text-amber-900 ring-amber-300",
  closed: "bg-slate-200 text-slate-700 ring-slate-300",
};

export function TypeBadge({ type }: { type: LeadType }) {
  return (
    <span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-bold ring-1 ${typeStyle[type]}`}>
      {leadTypeLabels[type]}
    </span>
  );
}

export function StatusBadge({ status }: { status: LeadStatus }) {
  return (
    <span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-bold ring-1 ${statusStyle[status]}`}>
      {leadStatusLabels[status]}
    </span>
  );
}
