"use client";
import { useState } from "react";
import { FormError, Honeypot } from "@/components/forms/form-ui";
import { useLeadForm } from "@/lib/use-lead-form";

const services = ["Foster Parent Training", "Support for School Staff", "Post-Placement Therapy"];

const fieldClass =
  "w-full rounded-full border border-leaf bg-[#e2e8e5] px-5 py-[1.05rem] font-sans text-sm text-ink outline-none transition-all placeholder:text-ink/45 focus:border-leaf-deep focus:bg-white focus:ring-4 focus:ring-leaf/25";
const labelClass = "font-sans text-sm font-bold text-pine-deep";

/** Shows its placeholder like a text field, then becomes a native date/time picker once it is used. */
function PickerInput({
  id,
  name,
  type,
  placeholder,
}: {
  id: string;
  name: string;
  type: "date" | "time";
  placeholder: string;
}) {
  const [active, setActive] = useState(false);
  const [filled, setFilled] = useState(false);

  return (
    <input
      id={id}
      name={name}
      type={active || filled ? type : "text"}
      placeholder={placeholder}
      onFocus={() => setActive(true)}
      onBlur={(e) => {
        setActive(false);
        setFilled(e.currentTarget.value !== "");
      }}
      onChange={(e) => setFilled(e.currentTarget.value !== "")}
      className={fieldClass}
    />
  );
}

export function LocationAppointmentForm() {
  const { sent, sending, error, handleSubmit } = useLeadForm("appointment");

  if (sent) {
    return (
      <div className="rounded-2xl bg-white/70 p-8 text-center">
        <p className="font-display text-xl font-medium text-pine">Thank you — we&apos;ll be in touch shortly.</p>
        <p className="mt-2 text-sm text-slate">Someone from our team reaches out within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
      <Honeypot />
      <div className="flex flex-col gap-2">
        <label htmlFor="la-name" className={labelClass}>
          Name
        </label>
        <input id="la-name" required name="name" autoComplete="name" placeholder="Name" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="la-phone" className={labelClass}>
          Your Phone
        </label>
        <input
          id="la-phone"
          required
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="Phone"
          className={fieldClass}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="la-date" className={labelClass}>
          Appointment Date
        </label>
        <PickerInput id="la-date" name="date" type="date" placeholder="Appointment Date" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="la-time" className={labelClass}>
          Time
        </label>
        <PickerInput id="la-time" name="time" type="time" placeholder="Time" />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="la-service" className={labelClass}>
          Select A Service*
        </label>
        <div className="relative">
          <select
            id="la-service"
            required
            name="service"
            defaultValue={services[0]}
            className={`${fieldClass} appearance-none pr-12`}
          >
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-pine"
          >
            <path
              d="m6 9 6 6 6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <FormError message={error} className="sm:col-span-2" />
      <button
        type="submit"
        disabled={sending}
        className="mt-1 inline-flex w-fit items-center justify-center rounded-full bg-leaf px-10 py-3.5 font-sans text-sm font-bold text-pine-deep transition-colors hover:bg-leaf-deep sm:col-span-2"
      >
        {sending ? "Sending…" : "Make An Appointment"}
      </button>
    </form>
  );
}
