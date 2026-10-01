"use client";

import { useState, useTransition } from "react";
import { setStatusAction } from "@/app/admin/actions";
import { statusStyle } from "@/app/admin/_components/badges";
import { LEAD_STATUSES, leadStatusLabels, type LeadStatus } from "@/lib/leads/types";

/** Pick-list that saves a lead's status the moment it changes. */
export function StatusSelect({ id, status }: { id: string; status: LeadStatus }) {
  const [value, setValue] = useState(status);
  const [pending, startTransition] = useTransition();

  function change(next: LeadStatus) {
    const previous = value;
    setValue(next);
    startTransition(async () => {
      try {
        await setStatusAction(id, next);
      } catch {
        setValue(previous); // could not save: show what is really stored
      }
    });
  }

  return (
    <select
      value={value}
      onChange={(e) => change(e.target.value as LeadStatus)}
      aria-label="Lead status"
      disabled={pending}
      className={`cursor-pointer rounded-full py-1.5 pl-3 pr-7 text-xs font-bold outline-none ring-1 transition-opacity focus-visible:ring-2 focus-visible:ring-pine ${statusStyle[value]} ${pending ? "opacity-60" : ""}`}
    >
      {LEAD_STATUSES.map((s) => (
        <option key={s} value={s} className="bg-white text-ink">
          {leadStatusLabels[s]}
        </option>
      ))}
    </select>
  );
}
