"use client";

import { useState } from "react";

type Job = {
  title: string;
  body: string;
  requirements: string[];
};

/** Green-to-dark bars that open into the role's details. All start closed. */
export function JobAccordion({ jobs }: { jobs: Job[] }) {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  return (
    <div className="flex flex-col gap-2.5">
      {jobs.map((job, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={job.title}
            className={`overflow-hidden rounded-[1.75rem] bg-white transition-shadow duration-300 ${
              isOpen ? "shadow-[0_26px_50px_-28px_rgba(25,53,45,0.55)]" : "shadow-[0_10px_24px_-16px_rgba(25,53,45,0.5)]"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-center gap-3.5 bg-gradient-to-r from-leaf from-40% to-pine-deep py-3 pl-3.5 pr-6 text-left transition-[filter] duration-300 hover:brightness-105"
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-all duration-300 group-hover:bg-white group-hover:text-pine-deep ${
                  isOpen ? "rotate-45 bg-white text-pine-deep" : ""
                }`}
              >
                <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden>
                  <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
                </svg>
              </span>
              <span className="font-sans text-[1.05rem] font-bold text-white sm:text-xl">{job.title}</span>
            </button>

            <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <div className="px-6 pb-7 pt-6 sm:px-8">
                  <p className="max-w-3xl text-[1.02rem] leading-relaxed text-ink/80">{job.body}</p>
                  {job.requirements.length > 0 && (
                    <>
                      <p className="mt-5 font-sans text-sm font-bold uppercase tracking-wide text-leaf-deep">
                        General Requirements
                      </p>
                      <ul className="mt-3 space-y-2">
                        {job.requirements.map((r) => (
                          <li key={r} className="flex items-start gap-3 text-[1.02rem] leading-relaxed text-ink/80">
                            <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-leaf" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
