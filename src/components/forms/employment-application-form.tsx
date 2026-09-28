"use client";

import { useState, type FormEvent } from "react";

const offices = ["Oklahoma City", "Tulsa", "Lawton"];
const positions = [
  "Administrative",
  "Admin Assistant",
  "Clinical Director",
  "Director",
  "Janitorial",
  "Parent Relations",
  "Placement/Billing Specialist",
  "Therapist I",
];

export function EmploymentApplicationForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-[1.5rem_1.5rem_3rem_1.5rem] bg-mint p-10 text-center">
        <p className="font-display text-2xl font-medium text-pine">Application submitted.</p>
        <p className="mt-2 text-slate">Thank you for your interest in joining Open Arms Foster Care.</p>
      </div>
    );
  }

  const fieldClass =
    "border-b-2 border-pine/15 bg-transparent py-2.5 font-sans text-ink outline-none transition-colors focus:border-leaf";
  const labelClass = "font-sans text-xs font-semibold uppercase tracking-wide text-slate";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className={labelClass}>Issuing Office</label>
        <select required name="office" defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Choose an office
          </option>
          {offices.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Full Name</label>
        <input required name="name" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Date of Birth</label>
        <input required type="date" name="dob" className={fieldClass} />
      </div>

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className={labelClass}>Street Address</label>
        <input required name="address" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>City</label>
        <input required name="city" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Zip</label>
        <input required name="zip" className={fieldClass} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Mobile Number</label>
        <input required type="tel" name="mobile" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Email</label>
        <input required type="email" name="email" className={fieldClass} />
      </div>

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className={labelClass}>Position You&apos;re Applying For</label>
        <select required name="position" defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Choose a position
          </option>
          {positions.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Available Start Date</label>
        <input required type="date" name="startDate" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Specialized Training / Licenses Held</label>
        <input name="credentials" className={fieldClass} />
      </div>

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className={labelClass}>Most Recent Employer &amp; Reason for Leaving</label>
        <textarea name="employmentHistory" rows={3} className={`resize-none ${fieldClass}`} />
      </div>

      <label className="flex items-start gap-2 sm:col-span-2 text-sm text-slate">
        <input required type="checkbox" name="certify" className="mt-1 h-4 w-4 accent-leaf" />
        I certify that all answers given herein are true and complete to the best of my knowledge, and I authorize
        investigation of the statements in this application as may be necessary.
      </label>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center bg-pine px-7 py-3.5 font-sans text-sm font-semibold text-cream transition-colors hover:bg-pine-deep [clip-path:polygon(0_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%)] sm:col-span-2 sm:w-fit"
      >
        Submit Application
      </button>
    </form>
  );
}
