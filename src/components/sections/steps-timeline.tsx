"use client";

import { useEffect, useRef, useState } from "react";

type Step = { title: string; body: string };

/**
 * "How to become a foster parent" steps.
 * - phones: vertical timeline; the green line fills as you scroll, badges light up when the line
 *   reaches them and each card slides in.
 * - sm and up: cards fade up one after another.
 */
export function StepsTimeline({ steps }: { steps: Step[] }) {
  const olRef = useRef<HTMLOListElement>(null);
  const liRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [seen, setSeen] = useState<boolean[]>(() => steps.map(() => false));
  const [reached, setReached] = useState<boolean[]>(() => steps.map(() => false));
  const [fill, setFill] = useState(0);

  // reveal each card as it enters the viewport
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSeen(steps.map(() => true));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const i = Number((e.target as HTMLElement).dataset.i);
          setSeen((prev) => (prev[i] ? prev : prev.map((v, k) => (k === i ? true : v))));
          obs.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 },
    );
    liRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, [steps]);

  // scroll-linked progress line (phones)
  useEffect(() => {
    const ol = olRef.current;
    if (!ol) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;

    const update = () => {
      const rect = ol.getBoundingClientRect();
      const focal = window.innerHeight * 0.62;
      const y = reduce ? rect.height : Math.min(Math.max(focal - rect.top, 0), rect.height);
      setFill(y);
      const next = liRefs.current.map((li) => (li ? y >= li.offsetTop + 42 : false));
      setReached((prev) => (prev.every((v, k) => v === next[k]) ? prev : next));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const current = reached.lastIndexOf(true);

  return (
    <ol
      ref={olRef}
      className="relative mt-12 grid gap-x-6 gap-y-7 sm:mt-14 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-5"
    >
      {/* timeline track + scroll fill (phones) */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-[1.375rem] top-8 w-0.5 -translate-x-1/2 rounded-full bg-leaf/25 sm:hidden"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute left-[1.375rem] top-8 w-0.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-leaf to-leaf-deep shadow-[0_0_10px_rgba(141,197,64,0.7)] sm:hidden"
        style={{ height: Math.max(fill - 32, 0) }}
      />

      {/* connecting line behind the badges (desktop) */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-6 right-6 top-[1.35rem] hidden h-0.5 bg-gradient-to-r from-leaf via-leaf/50 to-leaf/10 lg:block"
      />

      {steps.map((step, i) => (
        <li
          key={step.title}
          ref={(el) => {
            liRefs.current[i] = el;
          }}
          data-i={i}
          className="h-full max-sm:pl-14"
        >
          <div
            className={`h-full motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out max-sm:[transition-delay:0ms] sm:[transition-delay:var(--d)] ${
              seen[i] ? "translate-x-0 translate-y-0 opacity-100" : "opacity-0 max-sm:translate-x-10 sm:translate-y-8"
            }`}
            style={{ ["--d" as string]: `${i * 100}ms` }}
          >
            <div className="group relative flex h-full flex-col rounded-[1.5rem_1.5rem_1.5rem_0.5rem] border border-white bg-white/85 p-6 shadow-[0_12px_32px_-22px_rgba(25,53,45,0.4)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-leaf/60 hover:bg-white hover:shadow-[0_30px_55px_-25px_rgba(111,162,47,0.6)] max-sm:pt-6 sm:pt-10">
              <span
                className={`absolute z-10 flex h-11 w-11 items-center justify-center rounded-full border-4 border-[rgb(232,241,235)] font-display text-lg font-semibold shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:from-pine group-hover:to-pine-deep group-hover:text-leaf max-sm:-left-[3.5rem] max-sm:top-5 sm:-top-5 sm:left-6 ${
                  seen[i] ? "scale-100" : "max-sm:scale-0"
                } ${
                  reached[i]
                    ? "bg-gradient-to-br from-leaf to-leaf-deep text-pine-deep shadow-leaf/40"
                    : "bg-gradient-to-br from-leaf/40 to-leaf-deep/40 text-pine/60 shadow-transparent sm:from-leaf sm:to-leaf-deep sm:text-pine-deep sm:shadow-leaf/30"
                }`}
              >
                {i === current && (
                  <span className="animate-pulse-ring absolute inset-0 rounded-full bg-leaf/60 sm:hidden" aria-hidden />
                )}
                <span className="relative">{i + 1}</span>
              </span>
              <h3 className="font-sans text-[1.05rem] font-bold leading-snug text-pine">{step.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/70">{step.body}</p>
              <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 rounded-b-[0.5rem] bg-leaf transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
