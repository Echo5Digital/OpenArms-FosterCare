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

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-xs font-semibold uppercase tracking-wide text-slate">First Name</label>
        <input
          required
          name="firstName"
          className="border-b-2 border-pine/15 bg-transparent py-2.5 font-sans text-ink outline-none transition-colors focus:border-leaf"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-xs font-semibold uppercase tracking-wide text-slate">Last Name</label>
        <input
          name="lastName"
          className="border-b-2 border-pine/15 bg-transparent py-2.5 font-sans text-ink outline-none transition-colors focus:border-leaf"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-xs font-semibold uppercase tracking-wide text-slate">Your Email</label>
        <input
          required
          type="email"
          name="email"
          className="border-b-2 border-pine/15 bg-transparent py-2.5 font-sans text-ink outline-none transition-colors focus:border-leaf"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-xs font-semibold uppercase tracking-wide text-slate">Your Phone Number</label>
        <input
          required
          type="tel"
          name="phone"
          className="border-b-2 border-pine/15 bg-transparent py-2.5 font-sans text-ink outline-none transition-colors focus:border-leaf"
        />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className="font-sans text-xs font-semibold uppercase tracking-wide text-slate">How can we help you?</label>
        <textarea
          name="message"
          rows={4}
          className="resize-none border-b-2 border-pine/15 bg-transparent py-2.5 font-sans text-ink outline-none transition-colors focus:border-leaf"
        />
      </div>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-pine px-7 py-3.5 font-sans text-sm font-semibold text-cream transition-colors hover:bg-pine-deep sm:col-span-2 sm:w-fit"
      >
        Submit
      </button>
    </form>
  );
}
