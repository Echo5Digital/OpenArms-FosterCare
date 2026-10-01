"use client";

import { Honeypot } from "@/components/forms/form-ui";
import { useLeadForm } from "@/lib/use-lead-form";

export function ContactNewsletterForm() {
  const { sent, sending, error, handleSubmit } = useLeadForm("newsletter");

  if (sent) {
    return (
      <p className="mt-8 inline-flex items-center rounded-full bg-white/10 px-6 py-4 font-sans text-base font-semibold text-leaf ring-1 ring-leaf/40 backdrop-blur-md">
        Thanks — you&apos;re on the list.
      </p>
    );
  }

  return (
    <div className="mt-8 max-w-2xl">
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-0 sm:rounded-full sm:border sm:border-leaf/80 sm:bg-white/10 sm:p-1.5 sm:backdrop-blur-md"
      >
        <Honeypot />
        <label htmlFor="cn-email" className="sr-only">
          Email address
        </label>
        <input
          id="cn-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Enter Your E-Mail"
          className="w-full rounded-full border border-leaf/80 bg-white/10 px-6 py-4 font-sans text-sm text-white outline-none backdrop-blur-md transition-colors placeholder:text-white/65 focus:border-white sm:flex-1 sm:border-0 sm:bg-transparent sm:py-3.5 sm:backdrop-blur-none"
        />
        <button
          type="submit"
          disabled={sending}
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-leaf px-9 py-3.5 font-sans text-sm font-bold text-pine-deep transition-colors hover:bg-white"
        >
          {sending ? "Sending…" : "Subscribe"}
        </button>
      </form>
      {error && (
        <p role="alert" className="mt-3 rounded-2xl bg-red-50 px-4 py-3 font-sans text-sm font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
