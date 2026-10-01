"use client";

import { useState, useSyncExternalStore, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { clearInquiryPrefill, sourceOptions, useInquiryPrefill } from "@/lib/inquiry-prefill";
import { Required, fieldClass, labelClass } from "@/components/forms/form-ui";

const choiceBase =
  "h-5 w-5 shrink-0 cursor-pointer appearance-none border-2 border-pine-deep/80 bg-white outline-none transition-colors checked:border-leaf-deep checked:bg-leaf-deep checked:shadow-[inset_0_0_0_3px_#fff] focus-visible:ring-4 focus-visible:ring-leaf/30";
const radioClass = `${choiceBase} rounded-full`;
const checkClass = `${choiceBase} rounded-[4px]`;
const headingClass = "font-sans text-[1.7rem] font-medium leading-tight tracking-tight text-pine-deep sm:text-[2rem]";
const areaClass = `min-h-[3.75rem] resize-y rounded-[1.9rem] ${fieldClass}`;

const yesNo = ["Yes", "No"];
const genders = ["M", "F"];

type Values = { name: string; email: string; phone: string; source: string; date: string; time: string };

function Field({
  id,
  label,
  required,
  span,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  span: string;
  children: ReactNode;
}) {
  return (
    <div className={`flex flex-col gap-2 ${span}`}>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required && <Required />}
      </label>
      {children}
    </div>
  );
}

function Choices({
  legend,
  name,
  options,
  type = "radio",
  inline = false,
  span,
}: {
  legend: string;
  name: string;
  options: string[];
  type?: "radio" | "checkbox";
  inline?: boolean;
  span: string;
}) {
  return (
    <fieldset className={`min-w-0 ${span}`}>
      <legend className={labelClass}>{legend}</legend>
      <div className={`mt-2.5 flex ${inline ? "flex-wrap gap-x-5 gap-y-2" : "flex-col gap-1.5"}`}>
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center gap-2.5 font-sans text-sm text-ink">
            <input
              type={type}
              name={name}
              value={option}
              className={type === "radio" ? radioClass : checkClass}
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function SelectBox({
  id,
  name,
  value,
  onChange,
  muted,
  options,
}: {
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  muted?: boolean;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`${fieldClass} appearance-none pr-12 ${muted ? "text-ink/55" : ""}`}
      >
        {options.map((o) => (
          <option key={o} value={o} className="text-ink">
            {o}
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
  );
}

const pad = (n: number) => String(n).padStart(2, "0");

/** Local "YYYY-MM-DDTHH:MM" for now; empty on the server so the first render matches. */
function nowStamp() {
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
const noSubscribe = () => () => {};

export function RecruitmentInquiryForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [sourceTouched, setSourceTouched] = useState(false);
  const [gender, setGender] = useState<Record<number, string>>({ 1: genders[0], 2: genders[0] });
  const [edits, setEdits] = useState<Partial<Values>>({});

  // each field shows what the visitor typed here, else what they typed into the Sign Up form, else a default
  const prefill = useInquiryPrefill();
  const stamp = useSyncExternalStore(noSubscribe, nowStamp, () => "");
  const values: Values = {
    name: edits.name ?? prefill?.name ?? "",
    email: edits.email ?? prefill?.email ?? "",
    phone: edits.phone ?? prefill?.phone ?? "",
    source: edits.source ?? (prefill?.source && sourceOptions.includes(prefill.source) ? prefill.source : sourceOptions[0]),
    date: edits.date ?? stamp.slice(0, 10),
    time: edits.time ?? stamp.slice(11, 16),
  };

  const set =
    (key: keyof Values) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setEdits((v) => ({ ...v, [key]: e.target.value }));

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    clearInquiryPrefill();
    setStatus("sent");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (status === "sent") {
    return (
      <div className="mt-8 rounded-[1.5rem] bg-white/70 p-10 text-center">
        <p className="font-display text-2xl font-medium text-pine">Inquiry received.</p>
        <p className="mt-2 text-slate">Thank you — our recruitment team will follow up shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-x-2.5 gap-y-4 md:grid-cols-12">
      <Field id="iq-name" label="Name" required span="md:col-span-4">
        <input
          id="iq-name"
          required
          name="name"
          autoComplete="name"
          placeholder="Name"
          value={values.name}
          onChange={set("name")}
          className={fieldClass}
        />
      </Field>
      <Field id="iq-date" label="Date" span="md:col-span-4">
        <input id="iq-date" type="date" name="date" value={values.date} onChange={set("date")} className={fieldClass} />
      </Field>
      <Field id="iq-time" label="Time" span="md:col-span-4">
        <input id="iq-time" type="time" name="time" value={values.time} onChange={set("time")} className={fieldClass} />
      </Field>

      <Field id="iq-email" label="Email" required span="md:col-span-4">
        <input
          id="iq-email"
          required
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Email"
          value={values.email}
          onChange={set("email")}
          className={fieldClass}
        />
      </Field>
      <Field id="iq-phone" label="Phone" required span="md:col-span-4">
        <input
          id="iq-phone"
          required
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="Phone"
          value={values.phone}
          onChange={set("phone")}
          className={fieldClass}
        />
      </Field>
      <Field id="iq-cell" label="Cell" span="md:col-span-4">
        <input id="iq-cell" type="tel" name="cell" placeholder="Cell" className={fieldClass} />
      </Field>

      <Field id="iq-county" label="County" required span="md:col-span-4">
        <input id="iq-county" required name="county" placeholder="County" className={fieldClass} />
      </Field>
      <Field id="iq-state" label="State" required span="md:col-span-4">
        <input
          id="iq-state"
          required
          name="state"
          autoComplete="address-level1"
          placeholder="State"
          className={fieldClass}
        />
      </Field>
      <Field id="iq-address" label="Street Address" required span="md:col-span-4">
        <input
          id="iq-address"
          required
          name="address"
          autoComplete="street-address"
          placeholder="Street Address"
          className={fieldClass}
        />
      </Field>
      <Field id="iq-zip" label="Zip Code" required span="md:col-span-4">
        <input
          id="iq-zip"
          required
          name="zip"
          autoComplete="postal-code"
          placeholder="Zip Code"
          className={fieldClass}
        />
      </Field>

      <h2 className={`${headingClass} mt-3 md:col-span-12`}>Inquiry Questions:</h2>

      <Field id="iq-source" label="How did you hear about us?" span="md:col-span-12">
        <SelectBox
          id="iq-source"
          name="source"
          value={values.source}
          onChange={(e) => {
            setSourceTouched(true);
            set("source")(e);
          }}
          muted={!sourceTouched && values.source === sourceOptions[0]}
          options={sourceOptions}
        />
      </Field>

      <Choices legend="Ever been a foster/adoptive parent?" name="priorFoster" options={yesNo} span="md:col-span-6" />
      <Field id="iq-agency" label="What agency?" span="md:col-span-6">
        <input id="iq-agency" name="priorAgency" className={fieldClass} />
      </Field>

      <Choices legend="Operated a daycare in your home?" name="daycare" options={yesNo} span="md:col-span-6" />
      <Choices legend="Is resource still open?" name="resourceOpen" options={yesNo} span="md:col-span-6" />

      <Choices
        legend="Marital Status"
        name="maritalStatus"
        options={["M", "D", "S", "Other"]}
        inline
        span="md:col-span-6"
      />
      <Choices legend="Are you (& spouse) 21 years of age?" name="spouse21" options={yesNo} span="md:col-span-6" />

      <Choices
        legend="Resident of Oklahoma for past 5 years?"
        name="residentOk5"
        options={yesNo}
        span="md:col-span-6"
      />
      <Field id="iq-states" label="Other states in last 5 years" span="md:col-span-6">
        <input id="iq-states" name="otherStates" className={fieldClass} />
      </Field>

      <Choices legend="High School Education or GED?" name="education" options={yesNo} span="md:col-span-6" />

      <h2 className={`${headingClass} mt-3 md:col-span-12`}>Who Lives in the Home?</h2>

      {[1, 2].map((n) => (
        <div key={n} className="contents">
          <Field id={`iq-hh${n}-name`} label="Name" span="md:col-span-3">
            <input id={`iq-hh${n}-name`} name={`household${n}Name`} placeholder="Name" className={fieldClass} />
          </Field>
          <Field id={`iq-hh${n}-rel`} label="Relationship" span="md:col-span-3">
            <input
              id={`iq-hh${n}-rel`}
              name={`household${n}Relationship`}
              placeholder="Relationship"
              className={fieldClass}
            />
          </Field>
          <Field id={`iq-hh${n}-gender`} label="Gender" span="md:col-span-3">
            <SelectBox
              id={`iq-hh${n}-gender`}
              name={`household${n}Gender`}
              value={gender[n]}
              onChange={(e) => setGender((g) => ({ ...g, [n]: e.target.value }))}
              options={genders}
            />
          </Field>
          <Field id={`iq-hh${n}-dob`} label="DOB" span="md:col-span-3">
            <input id={`iq-hh${n}-dob`} type="date" name={`household${n}Dob`} className={fieldClass} />
          </Field>
        </div>
      ))}

      <Choices
        legend="Has anyone living in your household ever been convicted of a misdemeanor/felony?"
        name="convicted"
        options={yesNo}
        span="md:col-span-12"
      />
      <Choices
        legend="Has any resident ever been reported to, investigated by, or involved with DHS?"
        name="dhsReport"
        options={yesNo}
        span="md:col-span-12"
      />
      <Choices
        legend="Has any resident ever needed professional counseling?"
        name="counseling"
        options={yesNo}
        span="md:col-span-12"
      />
      <Choices
        legend="Has any adult resident been in the military?"
        name="military"
        options={yesNo}
        span="md:col-span-12"
      />

      <Field id="iq-explain" label="If yes to any above, explain here" span="md:col-span-12">
        <textarea id="iq-explain" name="explain" rows={1} className={areaClass} />
      </Field>

      <Choices
        legend="Program Preferences:"
        name="program"
        type="checkbox"
        options={["TFC", "ITFC"]}
        span="md:col-span-6"
      />
      <Field id="iq-placement" label="Placement Preferences (gender, age, issues, etc.):" span="md:col-span-6">
        <textarea id="iq-placement" name="placementPreferences" rows={1} className={areaClass} />
      </Field>

      <Choices legend="Child Specific?" name="childSpecific" options={yesNo} span="md:col-span-6" />
      <Field
        id="iq-child"
        label="if yes, identify child’s name, current situation, worker, county, etc."
        span="md:col-span-6"
      >
        <textarea id="iq-child" name="childDetails" rows={1} className={areaClass} />
      </Field>

      <Field id="iq-bedrooms" label="# of Bedrooms Available" span="md:col-span-6">
        <input id="iq-bedrooms" name="bedrooms" className={fieldClass} />
      </Field>
      <Field id="iq-summary" label="Summary/Comments" span="md:col-span-6">
        <textarea id="iq-summary" name="summary" rows={1} className={areaClass} />
      </Field>

      <button
        type="submit"
        className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-leaf px-8 py-[0.55rem] font-sans text-[0.95rem] font-bold text-white transition-colors hover:bg-leaf-deep md:col-span-12 md:w-[31rem]"
      >
        Submit
      </button>
    </form>
  );
}
