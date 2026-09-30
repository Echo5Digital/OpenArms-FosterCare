"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

type Item = { title: string; body: string };

const AUTOPLAY_MS = 6500;

const icons: ReactNode[] = [
  <>
    <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </>,
  <path key="heart" d="M12 21s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 8.2a4.3 4.3 0 0 1 7.5 2.6C19.5 16.4 12 21 12 21Z" />,
  <path key="star" d="m12 3 2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7L12 3Z" />,
  <>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M16 14.2c2.8.2 5 2.6 5 5.8" />
  </>,
  <>
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 4V3h6v1M9 12l2 2 4-4M9 17h6" />
  </>,
];

function Icon({ index, className }: { index: number; className: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {icons[index % icons.length]}
    </svg>
  );
}

export function SupportShowcase({
  heading,
  intro,
  lead,
  items,
}: {
  heading: string;
  intro?: string;
  lead?: string;
  items: Item[];
}) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [paused, setPaused] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const count = items.length;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setAuto(false);
  }, []);

  useEffect(() => {
    if (!auto || paused || count < 2) return;
    const t = setTimeout(() => setActive((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [active, auto, paused, count]);

  // keep the active chip in view on phones (horizontal list) without moving the page
  useEffect(() => {
    const list = listRef.current;
    const tab = tabRefs.current[active];
    if (!list || !tab || list.scrollWidth <= list.clientWidth) return;
    list.scrollTo({ left: tab.offsetLeft - (list.clientWidth - tab.clientWidth) / 2, behavior: "smooth" });
  }, [active]);

  function choose(i: number) {
    setActive((i + count) % count);
    setAuto(false);
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      choose(active + 1);
      tabRefs.current[(active + 1) % count]?.focus();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      choose(active - 1);
      tabRefs.current[(active - 1 + count) % count]?.focus();
    }
  }

  const current = items[active];

  return (
    <section className="relative overflow-x-clip bg-white">
      {/* curved top edge from the mint section above */}
      <svg
        aria-hidden
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-[-1px] h-14 w-full text-[rgb(235,243,238)] sm:h-20"
        fill="currentColor"
      >
        <path d="M0 0H1440V24C1200 76 960 76 720 48S240 0 0 34Z" />
      </svg>

      <div className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-leaf/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-leaf/15 blur-3xl" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(25,53,45,0.16) 1px, transparent 1.4px)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
        }}
      />

      <div
        className="relative mx-auto max-w-[1400px] px-5 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {/* heading */}
        <Reveal className={intro ? "grid items-start gap-6 lg:grid-cols-[1fr_1fr] lg:gap-14" : ""}>
          <div>
            <span className="mb-5 block h-1 w-14 rounded-full bg-leaf" />
            <h2 className="font-sans text-[2rem] font-bold leading-tight tracking-tight text-pine sm:text-[2.6rem]">
              {heading}
            </h2>
          </div>
          {intro && <p className="text-[1.02rem] leading-relaxed text-ink/75 lg:mt-6">{intro}</p>}
        </Reveal>

        {lead && (
          <Reveal className="mt-10">
            <p className="inline-flex items-center gap-3 rounded-full bg-mint px-5 py-2.5 font-sans text-base font-semibold text-pine sm:text-lg">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-leaf" />
              {lead}
            </p>
          </Reveal>
        )}

        {/* showcase */}
        <Reveal className={lead ? "mt-8" : "mt-12"} delay={100}>
          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8">
            {/* tabs */}
            <div
              ref={listRef}
              role="tablist"
              aria-orientation="vertical"
              onKeyDown={onKeyDown}
              className="-mx-5 flex snap-x gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
            >
              {items.map((item, i) => {
                const on = i === active;
                return (
                  <button
                    key={item.title}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`support-tab-${i}`}
                    aria-selected={on}
                    aria-controls="support-panel"
                    tabIndex={on ? 0 : -1}
                    onClick={() => choose(i)}
                    className={`group relative flex shrink-0 snap-center items-center gap-4 overflow-hidden rounded-2xl px-4 py-3.5 text-left transition-all duration-500 lg:flex-1 lg:px-5 lg:py-4 ${
                      on
                        ? "bg-leaf text-pine-deep shadow-[0_18px_35px_-18px_rgba(111,162,47,0.9)]"
                        : "bg-mint text-pine hover:bg-[rgb(222,236,226)]"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-display text-base font-semibold transition-colors duration-500 ${
                        on ? "bg-pine text-leaf" : "bg-white text-leaf-deep"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span className="whitespace-nowrap font-sans text-[0.98rem] font-semibold leading-snug lg:whitespace-normal">
                      {item.title}
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      className={`ml-auto hidden h-4 w-4 shrink-0 transition-all duration-500 lg:block ${
                        on ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                      }`}
                      aria-hidden
                    >
                      <path d="m9 6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {on && auto && (
                      <span
                        className="animate-tab-progress absolute inset-x-0 bottom-0 h-1 origin-left bg-pine/40"
                        style={{
                          animationDuration: `${AUTOPLAY_MS}ms`,
                          animationPlayState: paused ? "paused" : "running",
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* detail panel */}
            <div
              id="support-panel"
              role="tabpanel"
              aria-labelledby={`support-tab-${active}`}
              className="relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-[2rem_2rem_2rem_5rem] bg-gradient-to-br from-pine-deep via-pine to-[#1f4a36] p-7 text-white shadow-[0_35px_70px_-30px_rgba(15,33,27,0.7)] sm:p-10 lg:min-h-[26rem]"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-leaf/30 blur-3xl" />
              <span className="pointer-events-none absolute -right-14 -top-14 h-52 w-52 rounded-full border-[26px] border-white/[0.06]" />
              <span className="pointer-events-none absolute bottom-[-2.5rem] right-6 select-none font-display text-[11rem] font-semibold leading-none text-white/[0.05]">
                0{active + 1}
              </span>

              <div key={active} className="animate-panel-in relative">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-leaf text-pine-deep shadow-lg shadow-leaf/30">
                  <Icon index={active} className="h-8 w-8" />
                </span>
                <h3 className="mt-7 font-sans text-[1.7rem] font-bold leading-tight tracking-tight sm:text-[2.1rem]">
                  {current.title}
                </h3>
                <p className="mt-4 max-w-xl text-[1.02rem] leading-relaxed text-white/80 sm:text-[1.08rem]">
                  {current.body}
                </p>
              </div>

              <div className="relative mt-8 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2" aria-hidden>
                  {items.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        i === active ? "w-8 bg-leaf" : "w-2 bg-white/30"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="mr-2 font-sans text-sm font-semibold text-white/60">
                    0{active + 1} / 0{count}
                  </span>
                  <button
                    type="button"
                    onClick={() => choose(active - 1)}
                    aria-label="Previous service"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 transition-all duration-300 hover:bg-leaf hover:text-pine-deep"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                      <path d="m15 6-6 6 6 6" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => choose(active + 1)}
                    aria-label="Next service"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf text-pine-deep transition-all duration-300 hover:scale-110"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                      <path d="m9 6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
