"use client";

import { FormError, Honeypot } from "@/components/forms/form-ui";
import { useLeadForm } from "@/lib/use-lead-form";

const fieldClass =
  "w-full rounded-full border border-leaf bg-[#e2e8e5] px-5 py-[1.05rem] font-sans text-sm text-ink outline-none transition-all placeholder:text-ink/45 focus:border-leaf-deep focus:bg-white focus:ring-4 focus:ring-leaf/25";
const labelClass = "font-sans text-sm font-bold text-pine-deep";

export function HomeContactForm() {
  const { sent, sending, error, handleSubmit } = useLeadForm("contact");

  if (sent) {
    return (
      <div className="rounded-2xl bg-mint p-8 text-center">
        <p className="font-display text-xl font-medium text-pine">Thank you — we&apos;ll be in touch shortly.</p>
        <p className="mt-2 text-sm text-slate">Someone from our team reaches out within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
      <Honeypot />
      <div className="flex flex-col gap-2">
        <label htmlFor="hc-first" className={labelClass}>
          First Name
        </label>
        <input
          id="hc-first"
          required
          name="firstName"
          autoComplete="given-name"
          placeholder="First Name"
          className={fieldClass}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="hc-last" className={labelClass}>
          Last Name
        </label>
        <input
          id="hc-last"
          name="lastName"
          autoComplete="family-name"
          placeholder="Last Name"
          className={fieldClass}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="hc-email" className={labelClass}>
          Your Email
        </label>
        <input
          id="hc-email"
          required
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Your Email"
          className={fieldClass}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="hc-phone" className={labelClass}>
          Your Phone Number
        </label>
        <input
          id="hc-phone"
          required
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="Your Phone Number"
          className={fieldClass}
        />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="hc-message" className={labelClass}>
          How can we help you?
        </label>
        <textarea
          id="hc-message"
          name="message"
          rows={2}
          placeholder="How can we help you?"
          className={`resize-none rounded-[1.9rem] ${fieldClass}`}
        />
      </div>
      <FormError message={error} className="sm:col-span-2" />
      <button
        type="submit"
        disabled={sending}
        className="mt-1 inline-flex w-fit items-center justify-center rounded-full bg-leaf px-12 py-3.5 font-sans text-sm font-bold text-pine-deep transition-colors hover:bg-leaf-deep sm:col-span-2"
      >
        {sending ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
