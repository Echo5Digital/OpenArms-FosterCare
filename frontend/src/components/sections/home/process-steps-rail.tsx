"use client";

import { useEffect, useState } from "react";

/**
 * Sticky progress tracker for the "How to Become a Foster Parent" section. It follows the stacking step cards
 * (any element with `data-process-step`) and lights up the step that is currently in view.
 */
export function ProcessStepsRail({ titles }: { titles: string[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-process-step]"));
    if (!cards.length) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.55;
      let current = 0;
      cards.forEach((card, i) => {
        if (card.getBoundingClientRect().top <= line) current = i;
      });
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  const progress = titles.length > 1 ? active / (titles.length - 1) : 0;

  return (
    <ol aria-hidden className="relative mt-10 hidden lg:block">
      {/* track between the first and last dot, with a leaf-coloured fill that grows as you scroll */}
      <div className="absolute bottom-[1.325rem] left-[0.825rem] top-[1.325rem] w-px -translate-x-1/2 bg-pine/15">
        <div
          className="h-full w-full origin-top bg-leaf-deep transition-transform duration-500 ease-out"
          style={{ transform: `scaleY(${progress})` }}
        />
      </div>

      {titles.map((title, i) => {
        const done = i < active;
        const current = i === active;
        return (
          <li key={title} className="relative flex items-center gap-4 py-2">
            <span
              className={`relative z-10 flex h-[1.65rem] w-[1.65rem] shrink-0 items-center justify-center rounded-full font-sans text-[0.7rem] font-bold transition-all duration-500 ${
                current
                  ? "scale-110 bg-pine text-leaf ring-4 ring-leaf/40"
                  : done
                    ? "bg-leaf-deep text-white"
                    : "bg-mint text-slate ring-1 ring-pine/20"
              }`}
            >
              {i + 1}
            </span>
            <span
              className={`font-sans text-[0.95rem] leading-snug transition-all duration-500 ${
                current ? "translate-x-1 font-bold text-pine" : done ? "font-semibold text-pine/70" : "text-slate/70"
              }`}
            >
              {title}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
