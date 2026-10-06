"use client";

import { useState, type FormEvent } from "react";

const services = ["Foster Parent Training", "Support for School Staff", "Child Welfare Advocacy", "Post-Placement Therapy"];

export function HealingHopeForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-[1.5rem_1.5rem_3rem_1.5rem] bg-mint p-8 text-center">
        <p className="font-display text-xl font-medium text-pine">Thank you — we&apos;ll be in touch shortly.</p>
        <p className="mt-2 text-sm text-slate">Someone from our team reaches out within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-xs font-semibold uppercase tracking-wide text-slate">Name</label>
        <input
          required
          name="name"
          className="border-b-2 border-pine/15 bg-transparent py-2.5 font-sans text-ink outline-none transition-colors focus:border-leaf"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-xs font-semibold uppercase tracking-wide text-slate">Phone</label>
        <input
          required
          type="tel"
          name="phone"
          className="border-b-2 border-pine/15 bg-transparent py-2.5 font-sans text-ink outline-none transition-colors focus:border-leaf"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-xs font-semibold uppercase tracking-wide text-slate">Appointment Date</label>
        <input
          type="date"
          name="date"
          className="border-b-2 border-pine/15 bg-transparent py-2.5 font-sans text-ink outline-none transition-colors focus:border-leaf"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-xs font-semibold uppercase tracking-wide text-slate">Time</label>
        <input
          type="time"
          name="time"
          className="border-b-2 border-pine/15 bg-transparent py-2.5 font-sans text-ink outline-none transition-colors focus:border-leaf"
        />
      </div>
      <div className={`flex flex-col gap-1.5 ${compact ? "" : "sm:col-span-2"}`}>
        <label className="font-sans text-xs font-semibold uppercase tracking-wide text-slate">Select a Service</label>
        <select
          name="service"
          defaultValue=""
          className="border-b-2 border-pine/15 bg-transparent py-2.5 font-sans text-ink outline-none transition-colors focus:border-leaf"
        >
          <option value="" disabled>
            Choose one
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className={`mt-2 inline-flex items-center justify-center rounded-full bg-pine px-7 py-3.5 font-sans text-sm font-semibold text-cream transition-colors hover:bg-pine-deep ${compact ? "" : "sm:col-span-2"}`}
      >
        Make an Appointment
      </button>
    </form>
  );
}
