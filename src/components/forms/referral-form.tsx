"use client";

import { FormError, Honeypot } from "@/components/forms/form-ui";
import { useLeadForm } from "@/lib/use-lead-form";

export function ReferralForm() {
  const { sent, sending, error, handleSubmit } = useLeadForm("referral");

  if (sent) {
    return (
      <div className="rounded-2xl bg-pine p-8 text-center">
        <p className="font-display text-xl font-medium text-cream">Referral received — thank you!</p>
        <p className="mt-2 text-sm text-cream/70">We&apos;ll follow up with the person you referred shortly.</p>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-xl border border-cream/20 bg-pine-deep/60 px-4 py-3 font-sans text-cream placeholder:text-cream/40 outline-none transition-colors focus:border-leaf";
  const labelClass = "font-sans text-sm font-semibold text-cream";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <Honeypot />
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>First Name</label>
        <input required name="firstName" placeholder="First Name" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Last Name</label>
        <input name="lastName" placeholder="Last Name" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Your Email</label>
        <input required type="email" name="email" placeholder="Your Email" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Your Phone Number</label>
        <input required type="tel" name="phone" placeholder="Your Phone Number" className={fieldClass} />
      </div>

      <label className="flex items-center gap-2 sm:col-span-2 text-sm text-cream/80">
        <input type="checkbox" name="newsletter" className="h-4 w-4 accent-leaf" />
        Sign up for news and updates
      </label>

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className={labelClass}>Name of Person You Are Referring</label>
        <input required name="referredName" placeholder="Name of Person" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className={labelClass}>Email of Person You Are Referring</label>
        <input name="referredEmail" placeholder="Email of Person" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className={labelClass}>Phone Number of Person You Are Referring</label>
        <input name="referredPhone" type="tel" placeholder="Phone Number of Person" className={fieldClass} />
      </div>

      <FormError message={error} className="sm:col-span-2" />

      <button
        type="submit"
        disabled={sending}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-leaf px-7 py-3.5 font-sans text-sm font-semibold text-pine-deep transition-colors hover:bg-leaf-deep sm:col-span-2 sm:w-fit"
      >
        {sending ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
