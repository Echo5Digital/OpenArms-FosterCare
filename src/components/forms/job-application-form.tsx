"use client";

import { useState, type FormEvent } from "react";
import { Required, fieldClass, labelClass } from "@/components/forms/form-ui";

const positions = [
  "Licensed Professional Counselor - OKC",
  "Licensed Professional Counselor - Lawton",
  "Licensed Professional Counselor - Tulsa",
  "Other",
];

export function JobApplicationForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-[1.5rem] bg-white/70 p-8 text-center">
        <p className="font-display text-xl font-medium text-pine">Application received — thank you!</p>
        <p className="mt-2 text-sm text-slate">Our hiring team will review and follow up soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-x-2.5 gap-y-3 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="ja-first" className={labelClass}>
          First Name
          <Required />
        </label>
        <input
          id="ja-first"
          required
          name="firstName"
          autoComplete="given-name"
          placeholder="First Name"
          className={fieldClass}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="ja-last" className={labelClass}>
          Last Name
        </label>
        <input
          id="ja-last"
          name="lastName"
          autoComplete="family-name"
          placeholder="Last Name"
          className={fieldClass}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="ja-email" className={labelClass}>
          Email
          <Required />
        </label>
        <input
          id="ja-email"
          required
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Email"
          className={fieldClass}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="ja-phone" className={labelClass}>
          Your Phone
          <Required />
        </label>
        <input
          id="ja-phone"
          required
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="Phone"
          className={fieldClass}
        />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="ja-position" className={labelClass}>
          Which position are you applying for?
          <Required />
        </label>
        <div className="relative">
          <select
            id="ja-position"
            required
            name="position"
            defaultValue="Other"
            className={`${fieldClass} appearance-none pr-12`}
          >
            {positions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          <svg
            aria-hidden
            viewBox="0 0 20 20"
            className="pointer-events-none absolute right-5 top-1/2 h-3 w-3 -translate-y-1/2 text-pine-deep"
            fill="currentColor"
          >
            <path d="M3 6h14l-7 8z" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="ja-source" className={labelClass}>
          How did you hear about us?
          <Required />
        </label>
        <input id="ja-source" required name="source" placeholder="How did you hear about us?" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="ja-pitch" className={labelClass}>
          Why do you think you would be the best choice for this role?
        </label>
        <textarea
          id="ja-pitch"
          name="pitch"
          rows={1}
          placeholder="Why do you think you would be the best choice for this role?"
          className={`min-h-[3.75rem] resize-y rounded-[1.9rem] ${fieldClass}`}
        />
      </div>
      <button
        type="submit"
        className="-mt-0.5 inline-flex w-full items-center justify-center rounded-full bg-leaf px-8 py-[0.55rem] font-sans text-[0.95rem] font-bold text-white transition-colors hover:bg-leaf-deep sm:col-span-2 sm:w-[14.5rem]"
      >
        Submit
      </button>
    </form>
  );
}
