"use client";

import { useState, type FormEvent } from "react";

const positions = ["Licensed Professional Counselor - OKC", "Licensed Professional Counselor - Lawton", "Licensed Professional Counselor - Tulsa", "Other"];

export function JobApplicationForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-[1.5rem_1.5rem_3rem_1.5rem] bg-mint p-8 text-center">
        <p className="font-display text-xl font-medium text-pine">Application received — thank you!</p>
        <p className="mt-2 text-sm text-slate">Our hiring team will review and follow up soon.</p>
      </div>
    );
  }

  const fieldClass =
    "border-b-2 border-pine/15 bg-transparent py-2.5 font-sans text-ink outline-none transition-colors focus:border-leaf";
  const labelClass = "font-sans text-xs font-semibold uppercase tracking-wide text-slate";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Name</label>
        <input required name="name" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Phone</label>
        <input required type="tel" name="phone" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className={labelClass}>Email</label>
        <input required type="email" name="email" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className={labelClass}>Which position are you applying for?</label>
        <select required name="position" defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Choose one
          </option>
          {positions.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className={labelClass}>How did you hear about us?</label>
        <input required name="source" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className={labelClass}>Why would you be the best choice for this role?</label>
        <textarea name="pitch" rows={4} className={`resize-none ${fieldClass}`} />
      </div>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center bg-pine px-7 py-3.5 font-sans text-sm font-semibold text-cream transition-colors hover:bg-pine-deep [clip-path:polygon(0_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%)] sm:col-span-2 sm:w-fit"
      >
        Submit
      </button>
    </form>
  );
}
