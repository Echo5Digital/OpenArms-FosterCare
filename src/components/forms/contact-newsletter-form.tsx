"use client";

import { useState, type FormEvent } from "react";

export function ContactNewsletterForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <p className="mt-8 inline-flex items-center rounded-full bg-white/10 px-6 py-4 font-sans text-base font-semibold text-leaf ring-1 ring-leaf/40 backdrop-blur-md">
        Thanks — you&apos;re on the list.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row sm:items-center sm:gap-0 sm:rounded-full sm:border sm:border-leaf/80 sm:bg-white/10 sm:p-1.5 sm:backdrop-blur-md"
    >
      <label htmlFor="cn-email" className="sr-only">
        Email address
      </label>
      <input
        id="cn-email"
        type="email"
        required
        autoComplete="email"
        placeholder="Enter Your E-Mail"
        className="w-full rounded-full border border-leaf/80 bg-white/10 px-6 py-4 font-sans text-sm text-white outline-none backdrop-blur-md transition-colors placeholder:text-white/65 focus:border-white sm:flex-1 sm:border-0 sm:bg-transparent sm:py-3.5 sm:backdrop-blur-none"
      />
      <button
        type="submit"
        className="inline-flex shrink-0 items-center justify-center rounded-full bg-leaf px-9 py-3.5 font-sans text-sm font-bold text-pine-deep transition-colors hover:bg-white"
      >
        Subscribe
      </button>
    </form>
  );
}
