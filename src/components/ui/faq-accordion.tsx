"use client";

import { useState } from "react";
import type { Faq } from "@/lib/content/faqs";

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.question} className="border-b border-pine/12 py-5">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 text-left"
            >
              <span className="font-display text-lg font-medium leading-snug text-pine sm:text-xl">
                {faq.question}
              </span>
              <span
                className={`mt-1.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-pine/25 text-pine transition-transform duration-300 ${
                  isOpen ? "rotate-45 bg-leaf border-leaf text-pine-deep" : ""
                }`}
              >
                <svg viewBox="0 0 12 12" className="h-3 w-3">
                  <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100 pt-3" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pr-10 text-[0.95rem] leading-relaxed text-slate">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
