"use client";

import { useState } from "react";
import type { Faq } from "@/lib/content/faqs";

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={faq.question}
            className={`overflow-hidden rounded-2xl transition-colors duration-300 ${
              isOpen ? "bg-pine" : "bg-pine/[0.06]"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
            >
              <span
                className={`font-display text-base font-medium leading-snug sm:text-lg ${
                  isOpen ? "text-cream" : "text-pine"
                }`}
              >
                {faq.question}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen ? "rotate-45 bg-leaf text-pine-deep" : "bg-pine/10 text-pine"
                }`}
              >
                <svg viewBox="0 0 12 12" className="h-3.5 w-3.5">
                  <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 pr-10 text-[0.95rem] leading-relaxed text-cream/80">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
