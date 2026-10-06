"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-[1.5rem_1.5rem_3rem_1.5rem] bg-mint p-8 text-center">
        <p className="font-display text-xl font-medium text-pine">Thank you for reaching out.</p>
        <p className="mt-2 text-sm text-slate">Our team will respond within one business day.</p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-pine/15 bg-cream-alt py-3 pl-11 pr-4 font-sans text-ink outline-none transition-colors focus:border-leaf";
  const iconWrapClass = "pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate";
  const labelClass = "font-sans text-xs font-semibold uppercase tracking-wide text-slate";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>First Name</label>
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
          <input required name="firstName" className={inputClass} />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Last Name</label>
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
          <input name="lastName" className={inputClass} />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Your Email</label>
        <div className="relative">
          <span className={iconWrapClass}>
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
              <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth={1.7} />
              <path d="m4 6 8 7 8-7" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <input required type="email" name="email" className={inputClass} />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Your Phone Number</label>
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
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className={labelClass}>How can we help you?</label>
        <div className="relative">
          <span className="pointer-events-none absolute left-3.5 top-4 text-slate">
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
              <path
                d="M4 5h16v11H9l-4 4V5Z"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.7}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <textarea name="message" rows={4} className={`resize-none ${inputClass}`} />
        </div>
      </div>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2.5 rounded-full bg-pine px-7 py-3.5 font-sans text-sm font-semibold text-cream transition-colors hover:bg-pine-deep sm:col-span-2 sm:w-fit"
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
        Submit
      </button>
    </form>
  );
}
