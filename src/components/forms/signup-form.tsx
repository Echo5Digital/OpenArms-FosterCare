"use client";

import { useState, type FormEvent } from "react";

const sources = ["Referred by someone I know", "Google", "Facebook", "Instagram", "Youtube", "Twitter"];

export function SignupForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-[1.5rem_1.5rem_3rem_1.5rem] bg-mint p-10 text-center">
        <p className="font-display text-2xl font-medium text-pine">You&apos;re on your way.</p>
        <p className="mt-2 text-slate">A member of our team will reach out within one business day.</p>
      </div>
    );
  }

  const fieldClass =
    "border-b-2 border-pine/15 bg-transparent py-2.5 font-sans text-ink outline-none transition-colors focus:border-leaf";
  const labelClass = "font-sans text-xs font-semibold uppercase tracking-wide text-slate";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>First Name</label>
        <input required name="firstName" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Last Name</label>
        <input name="lastName" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Email</label>
        <input required type="email" name="email" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Phone</label>
        <input required type="tel" name="phone" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className={labelClass}>How did you hear about us?</label>
        <select name="source" defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Choose one
          </option>
          {sources.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className={labelClass}>Anything else you would like us to know?</label>
        <textarea name="notes" rows={4} className={`resize-none ${fieldClass}`} />
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
