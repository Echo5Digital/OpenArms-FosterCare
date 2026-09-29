"use client";

import { useState, type FormEvent } from "react";

const fieldClass =
  "border-b-2 border-pine/15 bg-transparent py-2.5 font-sans text-ink outline-none transition-colors focus:border-leaf";
const labelClass = "font-sans text-xs font-semibold uppercase tracking-wide text-slate";

function YesNo({ name, label }: { name: string; label: string }) {
  return (
    <div className="flex flex-col gap-2 sm:col-span-2">
      <span className={labelClass}>{label}</span>
      <div className="flex gap-6">
        {["Yes", "No"].map((v) => (
          <label key={v} className="flex items-center gap-2 text-sm text-ink">
            <input type="radio" name={name} value={v} className="h-4 w-4 accent-leaf" />
            {v}
          </label>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: string }) {
  return (
    <div className="sm:col-span-2 mt-4 border-t border-pine/10 pt-6 first:mt-0 first:border-0 first:pt-0">
      <p className="font-display text-lg font-medium text-pine">{children}</p>
    </div>
  );
}

export function RecruitmentInquiryForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-[1.5rem_1.5rem_3rem_1.5rem] bg-mint p-10 text-center">
        <p className="font-display text-2xl font-medium text-pine">Inquiry received.</p>
        <p className="mt-2 text-slate">Thank you — our recruitment team will follow up shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <SectionTitle>Inquiry Questions</SectionTitle>

      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Name</label>
        <input required name="name" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Email</label>
        <input required type="email" name="email" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Phone</label>
        <input required type="tel" name="phone" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>County</label>
        <input name="county" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className={labelClass}>Street Address</label>
        <input required name="address" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>State</label>
        <input required name="state" defaultValue="OK" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Zip Code</label>
        <input required name="zip" className={fieldClass} />
      </div>

      <YesNo name="priorFoster" label="Have you ever been a foster or adoptive parent?" />
      <YesNo name="daycare" label="Have you operated a daycare in your home?" />
      <YesNo name="stableResidency" label="Resident of Oklahoma for the past 5 years?" />
      <YesNo name="education" label="High school education or GED?" />

      <SectionTitle>Background</SectionTitle>
      <YesNo name="convicted" label="Has anyone living in your household ever been convicted of a crime?" />
      <YesNo name="dhsReport" label="Has any resident been reported to DHS?" />
      <YesNo name="counseling" label="Has any resident needed professional counseling?" />

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className={labelClass}>If yes to any above, please explain</label>
        <textarea name="explain" rows={3} className={`resize-none ${fieldClass}`} />
      </div>

      <SectionTitle>Program &amp; Placement Preferences</SectionTitle>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <span className={labelClass}>Program Preferences</span>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-sm text-ink">
            <input type="checkbox" name="program" value="TFC" className="h-4 w-4 accent-leaf" />
            Therapeutic Foster Care (TFC)
          </label>
          <label className="flex items-center gap-2 text-sm text-ink">
            <input type="checkbox" name="program" value="ITFC" className="h-4 w-4 accent-leaf" />
            Intensive Treatment Foster Care (ITFC)
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className={labelClass}>Placement Preferences</label>
        <textarea name="placementPreferences" rows={3} className={`resize-none ${fieldClass}`} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}># of Bedrooms Available</label>
        <input name="bedrooms" className={fieldClass} />
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-pine px-7 py-3.5 font-sans text-sm font-semibold text-cream transition-colors hover:bg-pine-deep sm:col-span-2 sm:w-fit"
      >
        Submit Inquiry
      </button>
    </form>
  );
}
