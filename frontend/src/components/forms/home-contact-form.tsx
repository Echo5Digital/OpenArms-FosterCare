"use client";

import { FormError, Honeypot } from "@/components/forms/form-ui";
import { useLeadForm } from "@/lib/use-lead-form";

const fieldClass =
  "w-full rounded-full border border-leaf bg-[#e2e8e5] px-5 py-[1.05rem] font-sans text-sm text-ink outline-none transition-all placeholder:text-ink/45 focus:border-leaf-deep focus:bg-white focus:ring-4 focus:ring-leaf/25";
const labelClass = "font-sans text-sm font-bold text-pine-deep";

// `clean` look: small labels, squarely rounded white fields and a full-width dark button. Opt-in, so the Contact page and
// the location pages keep the pill fields above.
const cleanFieldClass =
  "w-full rounded-lg border border-pine/15 bg-white px-3.5 py-2.5 font-sans text-sm text-ink outline-none transition-all placeholder:text-ink/40 focus:border-leaf-deep focus:ring-4 focus:ring-leaf/25";
const cleanLabelClass = "font-sans text-xs font-semibold text-pine-deep";

export function HomeContactForm({ variant = "pill" }: { variant?: "pill" | "clean" }) {
  const { sent, sending, error, handleSubmit } = useLeadForm("contact");
  const clean = variant === "clean";
  const field = clean ? cleanFieldClass : fieldClass;
  const label = clean ? cleanLabelClass : labelClass;
  const group = clean ? "flex flex-col gap-1.5" : "flex flex-col gap-2";
  const wide = clean ? "sm:col-span-2" : "";

  if (sent) {
    return (
      <div className="rounded-2xl bg-mint p-8 text-center">
        <p className="font-display text-xl font-medium text-pine">Thank you — we&apos;ll be in touch shortly.</p>
        <p className="mt-2 text-sm text-slate">Someone from our team reaches out within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`grid sm:grid-cols-2 ${clean ? "gap-x-3 gap-y-4" : "gap-x-4 gap-y-5"}`}>
      <Honeypot />
      <div className={group}>
        <label htmlFor="hc-first" className={label}>
          First Name
        </label>
        <input
          id="hc-first"
          required
          name="firstName"
          autoComplete="given-name"
          placeholder="First Name"
          className={field}
        />
      </div>
      <div className={group}>
        <label htmlFor="hc-last" className={label}>
          Last Name
        </label>
        <input
          id="hc-last"
          name="lastName"
          autoComplete="family-name"
          placeholder="Last Name"
          className={field}
        />
      </div>
      <div className={`${group} ${wide}`}>
        <label htmlFor="hc-email" className={label}>
          Your Email
        </label>
        <input
          id="hc-email"
          required
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Your Email"
          className={field}
        />
      </div>
      <div className={`${group} ${wide}`}>
        <label htmlFor="hc-phone" className={label}>
          Your Phone Number
        </label>
        <input
          id="hc-phone"
          required
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="Your Phone Number"
          className={field}
        />
      </div>
      <div className={`${group} sm:col-span-2`}>
        <label htmlFor="hc-message" className={label}>
          How can we help you?
        </label>
        <textarea
          id="hc-message"
          name="message"
          rows={clean ? 3 : 2}
          placeholder="How can we help you?"
          className={`resize-none ${clean ? "" : "rounded-[1.9rem]"} ${field}`}
        />
      </div>
      <FormError message={error} className="sm:col-span-2" />
      <button
        type="submit"
        disabled={sending}
        className={
          clean
            ? "mt-1 inline-flex w-full items-center justify-center rounded-xl bg-[rgb(217,179,101)] px-6 py-3.5 font-sans text-[0.95rem] font-semibold text-pine-deep shadow-[0_14px_28px_-16px_rgba(15,33,27,0.55)] transition-colors hover:bg-[rgb(230,195,121)] disabled:opacity-70 sm:col-span-2"
            : "mt-1 inline-flex w-fit items-center justify-center rounded-full bg-leaf px-12 py-3.5 font-sans text-sm font-bold text-pine-deep transition-colors hover:bg-leaf-deep sm:col-span-2"
        }
      >
        {sending ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
