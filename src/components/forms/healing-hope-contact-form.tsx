"use client";

import { FormError, Honeypot } from "@/components/forms/form-ui";
import { useLeadForm } from "@/lib/use-lead-form";

const sources = ["Referred by someone I know", "Google", "Facebook", "Instagram", "Youtube", "Twitter"];

const fieldClass =
  "w-full rounded-full border border-leaf/70 bg-white/10 px-5 py-3.5 font-sans text-sm text-white outline-none backdrop-blur-sm transition-all placeholder:text-white/60 focus:border-white focus:bg-white/15 focus:ring-4 focus:ring-leaf/25";
const labelClass = "font-sans text-sm font-semibold text-white";

export function HealingHopeContactForm() {
  const { sent, sending, error, handleSubmit } = useLeadForm("contact");

  if (sent) {
    return (
      <div className="rounded-3xl bg-white/10 p-10 text-center backdrop-blur-sm">
        <p className="font-display text-2xl font-medium text-white">Thank you — we&apos;ll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
      <Honeypot />
      <div className="flex flex-col gap-2">
        <label htmlFor="hh-first" className={labelClass}>
          First Name
        </label>
        <input id="hh-first" required name="firstName" placeholder="First Name" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="hh-last" className={labelClass}>
          Last Name
        </label>
        <input id="hh-last" name="lastName" placeholder="Last Name" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="hh-email" className={labelClass}>
          Email
        </label>
        <input id="hh-email" required type="email" name="email" placeholder="Email" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="hh-phone" className={labelClass}>
          Phone
        </label>
        <input id="hh-phone" required type="tel" name="phone" placeholder="Phone" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="hh-source" className={labelClass}>
          How did you hear about us?
        </label>
        <select id="hh-source" name="source" defaultValue={sources[0]} className={`${fieldClass} [&>option]:text-ink`}>
          {sources.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="hh-notes" className={labelClass}>
          Anything else you would like us to know?
        </label>
        <textarea
          id="hh-notes"
          name="notes"
          rows={3}
          placeholder="Anything else you would like us to know?"
          className={`resize-none rounded-3xl ${fieldClass}`}
        />
      </div>
      <FormError message={error} className="sm:col-span-2" />
      <button
        type="submit"
        disabled={sending}
        className="mt-1 inline-flex w-fit items-center justify-center rounded-full bg-white px-9 py-3.5 font-sans text-sm font-bold text-leaf-deep shadow-lg transition-all hover:-translate-y-0.5 hover:bg-leaf hover:text-pine-deep sm:col-span-2"
      >
        {sending ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
