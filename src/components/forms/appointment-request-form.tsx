"use client";

import { useState, type FormEvent } from "react";

const services = ["Foster Parent Training", "Support for School Staff", "Child Welfare Advocacy", "Post-Placement Therapy"];

export function AppointmentRequestForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-mint p-8 text-center">
        <p className="font-display text-xl font-medium text-pine">Thank you — we&apos;ll be in touch shortly.</p>
        <p className="mt-2 text-sm text-slate">Someone from our team reaches out within one business day.</p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-pine/20 bg-cream py-2.5 pl-11 pr-4 font-sans text-ink outline-none transition-colors focus:border-leaf";
  const iconWrapClass = "pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-sm font-semibold text-pine">Name</label>
        <div className="relative">
          <span className={iconWrapClass}>
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
              <path
                d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8c0-3.3 3.1-6 7-6s7 2.7 7 6"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.7}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <input required name="name" className={inputClass} />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-sm font-semibold text-pine">Phone</label>
        <div className="relative">
          <span className={iconWrapClass}>
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
              <path
                d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.5c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.7}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <input required type="tel" name="phone" className={inputClass} />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-sm font-semibold text-pine">Appointment Date</label>
        <div className="relative">
          <span className={iconWrapClass}>
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
              <rect x="3" y="5" width="18" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth={1.7} />
              <path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" />
            </svg>
          </span>
          <input type="date" name="date" className={inputClass} />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-sm font-semibold text-pine">Time</label>
        <div className="relative">
          <span className={iconWrapClass}>
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
              <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth={1.7} />
              <path d="M12 7v5l3.5 2" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <input type="time" name="time" className={inputClass} />
        </div>
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className="font-sans text-sm font-semibold text-pine">Select a Service</label>
        <div className="relative">
          <span className={iconWrapClass}>
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
              <path
                d="M9 12.5 11 14.5 15 9.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.7}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth={1.7} />
            </svg>
          </span>
          <select name="service" defaultValue="" className={inputClass}>
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
      </div>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2.5 self-start rounded-full bg-pine-deep px-7 py-3.5 font-sans text-sm font-semibold text-leaf transition-colors hover:bg-pine sm:col-span-2"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden>
          <path
            d="M4 12h15m0 0-6-6m6 6-6 6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Make an Appointment
      </button>
    </form>
  );
}
