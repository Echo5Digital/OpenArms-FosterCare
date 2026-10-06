"use client";

import Image from "next/image";
import { useId, useState, type CSSProperties, type ReactNode } from "react";

export type PanelItem = {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  /** Tailwind object-position class for the photo, e.g. "object-[center_30%]". */
  imagePosition?: string;
};

const icons: ReactNode[] = [
  // clipboard + check
  <>
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 4V3h6v1M9 12l2 2 4-4M9 17h6" />
  </>,
  // heart
  <path d="M12 21s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 8.2a4.3 4.3 0 0 1 7.5 2.6C19.5 16.4 12 21 12 21Z" />,
  // people
  <>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M16 14.2c2.8.2 5 2.6 5 5.8" />
  </>,
];

/**
 * Photo panels side by side. On large screens the hovered / focused / tapped panel grows and reveals its
 * text while the others shrink. On smaller screens the panels stack and every panel shows its text.
 */
export function ExpandingPanels({ items }: { items: PanelItem[] }) {
  const [active, setActive] = useState(0);
  const uid = useId();

  return (
    <div className="flex flex-col gap-5 lg:h-[27rem] lg:flex-row lg:gap-4">
      {items.map((item, i) => {
        const on = i === active;
        const bodyId = `${uid}-body-${i}`;
        return (
          <article
            key={item.title}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            style={{ "--g": on ? 3.3 : 1 } as CSSProperties}
            className="group relative flex min-h-[21rem] min-w-0 cursor-pointer flex-col overflow-hidden rounded-[2rem] bg-pine-deep shadow-[0_30px_50px_-28px_rgba(15,33,27,0.65)] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:transition-[flex-grow] lg:min-h-0 lg:[flex:var(--g)_1_0%]"
          >
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className={`object-cover ${item.imagePosition ?? "object-center"} transition-transform duration-[1600ms] ease-out ${
                on ? "lg:scale-105" : "lg:scale-100"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pine-deep via-pine-deep/55 to-pine-deep/10" />
            <div
              aria-hidden
              className={`absolute inset-0 bg-pine/60 transition-opacity duration-700 max-lg:hidden ${
                on ? "opacity-0" : "opacity-100"
              }`}
            />

            <div className="relative z-10 flex flex-1 flex-col justify-between gap-8 p-6 sm:p-8">
              <div className="flex items-start justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-leaf text-pine-deep shadow-lg shadow-leaf/30 transition-transform duration-500 group-hover:scale-110">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    {icons[i % icons.length]}
                  </svg>
                </span>
                <span
                  aria-hidden
                  className={`hidden h-10 w-10 items-center justify-center rounded-full ring-1 backdrop-blur-sm transition-all duration-500 lg:flex ${
                    on ? "rotate-45 bg-leaf text-pine-deep ring-leaf" : "bg-white/15 text-white ring-white/30"
                  }`}
                >
                  <svg viewBox="0 0 12 12" className="h-3.5 w-3.5">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
                  </svg>
                </span>
              </div>

              <div>
                <h3 className="font-sans text-[1.4rem] font-bold leading-tight tracking-tight text-white sm:text-[1.6rem]">
                  <button
                    type="button"
                    aria-expanded={on}
                    aria-controls={bodyId}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="text-left focus-visible:underline focus-visible:decoration-leaf focus-visible:underline-offset-4 focus-visible:outline-none"
                  >
                    {item.title}
                  </button>
                </h3>
                <div
                  id={bodyId}
                  className={`grid grid-rows-[1fr] transition-[grid-template-rows,opacity] duration-700 ease-out ${
                    on ? "" : "lg:grid-rows-[0fr] lg:opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="mt-3 max-w-md text-[0.98rem] leading-relaxed text-white/85 lg:max-w-lg">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <span
              aria-hidden
              className={`absolute inset-x-0 bottom-0 h-1.5 origin-left scale-x-0 bg-leaf transition-transform duration-700 max-lg:scale-x-100 ${
                on ? "lg:scale-x-100" : ""
              }`}
            />
          </article>
        );
      })}
    </div>
  );
}
