"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { saveInquiryPrefill, sourceOptions } from "@/lib/inquiry-prefill";
import { Required, fieldClass, labelClass } from "@/components/forms/form-ui";

export function SignupForm() {
  const router = useRouter();
  const [sourceTouched, setSourceTouched] = useState(false);

  // carry what was typed over to the Recruitment Inquiry form, which opens pre-filled
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    saveInquiryPrefill({
      name: [get("firstName"), get("lastName")].filter(Boolean).join(" "),
      email: get("email"),
      phone: get("phone"),
      source: get("source"),
    });
    router.push("/inquiry-form");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-x-2.5 gap-y-3 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="su-first" className={labelClass}>
          First Name
          <Required />
        </label>
        <input
          id="su-first"
          required
          name="firstName"
          autoComplete="given-name"
          placeholder="First Name"
          className={fieldClass}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="su-last" className={labelClass}>
          Last Name
        </label>
        <input
          id="su-last"
          name="lastName"
          autoComplete="family-name"
          placeholder="Last Name"
          className={fieldClass}
        />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="su-email" className={labelClass}>
          Email
          <Required />
        </label>
        <input
          id="su-email"
          required
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Email"
          className={fieldClass}
        />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="su-phone" className={labelClass}>
          Phone
          <Required />
        </label>
        <input
          id="su-phone"
          required
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="Phone"
          className={fieldClass}
        />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="su-source" className={labelClass}>
          How did you hear about us?
        </label>
        <div className="relative">
          <select
            id="su-source"
            name="source"
            defaultValue={sourceOptions[0]}
            onChange={() => setSourceTouched(true)}
            className={`${fieldClass} appearance-none pr-12 ${sourceTouched ? "" : "text-ink/55"}`}
          >
            {sourceOptions.map((s) => (
              <option key={s} value={s} className="text-ink">
                {s}
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
        <label htmlFor="su-notes" className={labelClass}>
          Anything else you would like us to know?
        </label>
        <textarea
          id="su-notes"
          name="notes"
          rows={1}
          className={`min-h-[3.75rem] resize-y rounded-[1.9rem] ${fieldClass}`}
        />
      </div>
      <button
        type="submit"
        className="-mt-0.5 inline-flex w-full items-center justify-center rounded-full bg-leaf px-8 py-[0.55rem] font-sans text-[0.95rem] font-bold text-white transition-colors hover:bg-leaf-deep sm:col-span-2 sm:w-[31rem]"
      >
        Submit
      </button>
    </form>
  );
}
