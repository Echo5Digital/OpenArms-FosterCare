"use client";

import { useState, type FormEvent } from "react";

export function ReferralForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-[1.5rem_1.5rem_3rem_1.5rem] bg-mint p-8 text-center">
        <p className="font-display text-xl font-medium text-pine">Referral received — thank you!</p>
        <p className="mt-2 text-sm text-slate">We&apos;ll follow up with the person you referred shortly.</p>
      </div>
    );
  }

  const fieldClass =
    "border-b-2 border-pine/15 bg-transparent py-2.5 font-sans text-ink outline-none transition-colors focus:border-leaf";
  const labelClass = "font-sans text-xs font-semibold uppercase tracking-wide text-slate";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>First Name</label>
        <input required name="firstName" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Last Name</label>
        <input name="lastName" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Your Email</label>
        <input required type="email" name="email" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Your Phone Number</label>
        <input required type="tel" name="phone" className={fieldClass} />
      </div>

      <div className="sm:col-span-2 mt-2 border-t border-pine/10 pt-5">
        <p className="font-sans text-sm font-semibold text-pine">Person You Are Referring</p>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Their Name</label>
        <input required name="referredName" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Their Phone Number</label>
        <input name="referredPhone" type="tel" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className={labelClass}>Their Email</label>
        <input name="referredEmail" className={fieldClass} />
      </div>

      <label className="flex items-center gap-2 sm:col-span-2 text-sm text-slate">
        <input type="checkbox" name="newsletter" className="h-4 w-4 accent-leaf" />
        Sign up for news and updates
      </label>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center bg-pine px-7 py-3.5 font-sans text-sm font-semibold text-cream transition-colors hover:bg-pine-deep [clip-path:polygon(0_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%)] sm:col-span-2 sm:w-fit"
      >
        Submit
      </button>
    </form>
  );
}
