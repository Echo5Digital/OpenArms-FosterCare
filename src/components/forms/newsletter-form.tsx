"use client";

import { useState, type FormEvent } from "react";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return <p className="mt-4 text-sm text-leaf">Thanks — you&apos;re on the list.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex items-stretch gap-0">
      <input
        type="email"
        required
        placeholder="Email address"
        aria-label="Email address"
        className="min-w-0 flex-1 border border-cream/25 bg-transparent px-3.5 py-2.5 text-sm text-cream placeholder:text-cream/45 focus:border-leaf focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 bg-leaf px-4 py-2.5 text-sm font-semibold text-pine-deep transition-colors hover:bg-leaf-deep"
      >
        Join
      </button>
    </form>
  );
}
