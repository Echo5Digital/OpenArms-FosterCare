"use client";

import { useState } from "react";

type Job = {
  title: string;
  body: string;
  requirements: string[];
};

export function JobAccordion({ jobs }: { jobs: Job[] }) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="flex flex-col gap-3">
      {jobs.map((job, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={job.title}
            className={`overflow-hidden rounded-[0.5rem_1.75rem_0.5rem_1.75rem] border transition-colors ${
              isOpen ? "border-leaf/50 bg-mint/50" : "border-pine/10 bg-white"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg font-medium text-pine">{job.title}</span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-pine/25 text-pine transition-transform duration-300 ${
                  isOpen ? "rotate-45 border-leaf bg-leaf text-pine-deep" : ""
                }`}
              >
                <svg viewBox="0 0 12 12" className="h-3 w-3">
                  <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <div className="px-6 pb-6">
                  <p className="text-sm leading-relaxed text-slate">{job.body}</p>
                  <p className="mt-4 font-sans text-xs font-semibold uppercase tracking-wide text-leaf-deep">
                    General Requirements
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {job.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm leading-relaxed text-slate">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-leaf-deep" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
