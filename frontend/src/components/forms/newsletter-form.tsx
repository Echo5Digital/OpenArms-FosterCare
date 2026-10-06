"use client";

import { Honeypot } from "@/components/forms/form-ui";
import { useLeadForm } from "@/lib/use-lead-form";

export function NewsletterForm() {
  const { sent, sending, error, handleSubmit } = useLeadForm("newsletter");

  if (sent) {
    return <p className="mt-4 text-sm text-leaf">Thanks — you&apos;re on the list.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="relative mt-4">
      <Honeypot />
      <div className="flex items-stretch gap-0">
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Email address"
          aria-label="Email address"
          className="min-w-0 flex-1 border border-cream/25 bg-transparent px-3.5 py-2.5 text-sm text-cream placeholder:text-cream/45 focus:border-leaf focus:outline-none"
        />
        <button
          type="submit"
          disabled={sending}
          className="shrink-0 bg-leaf px-4 py-2.5 text-sm font-semibold text-pine-deep transition-colors hover:bg-leaf-deep"
        >
          {sending ? "Sending…" : "Join"}
        </button>
      </div>
      {error && (
        <p role="alert" className="mt-2 text-xs font-medium text-red-300">
          {error}
        </p>
      )}
    </form>
  );
}
