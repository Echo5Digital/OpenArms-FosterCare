import type { ReactNode } from "react";
import { HoverPrefetchLink as Link } from "@/components/ui/hover-prefetch-link";
import { Reveal } from "@/components/ui/reveal";
import { ProcessStepsRail } from "@/components/sections/home/process-steps-rail";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-7 w-7",
  "aria-hidden": true,
};

type Tone = {
  card: string;
  chip: string;
  label: string;
  title: string;
  body: string;
  numeral: string;
};

const tones: Record<"light" | "dark" | "leaf" | "glow", Tone> = {
  light: {
    card: "bg-white ring-1 ring-pine/10",
    chip: "bg-pine text-leaf",
    label: "text-leaf-deep",
    title: "text-pine",
    body: "text-slate",
    numeral: "text-pine/[0.07]",
  },
  dark: {
    card: "bg-[linear-gradient(135deg,#0f211b_0%,#19352d_100%)] ring-1 ring-white/10",
    chip: "bg-leaf text-pine-deep",
    label: "text-leaf",
    title: "text-white",
    body: "text-white/75",
    numeral: "text-white/[0.07]",
  },
  leaf: {
    card: "bg-[linear-gradient(135deg,#8dc540_0%,#a6d65e_100%)] ring-1 ring-white/30",
    chip: "bg-pine-deep text-leaf",
    label: "text-pine-deep/70",
    title: "text-pine-deep",
    body: "text-pine-deep/80",
    numeral: "text-pine-deep/[0.12]",
  },
  glow: {
    card: "bg-[linear-gradient(135deg,#0f211b_0%,#19352d_45%,#2b6634_100%)] ring-1 ring-white/10",
    chip: "bg-leaf text-pine-deep",
    label: "text-leaf",
    title: "text-white",
    body: "text-white/80",
    numeral: "text-white/[0.08]",
  },
};

const steps: { title: string; body: string; icon: ReactNode; tone: keyof typeof tones }[] = [
  {
    title: "Initial Inquiry",
    body: "Reach out online or by phone to tell us a little about your household.",
    tone: "light",
    icon: (
      <svg {...iconProps}>
        <path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-3.9A8 8 0 1 1 20 12Z" />
        <path d="M9 11.5h6M9 14.5h3.5" />
      </svg>
    ),
  },
  {
    title: "Consultation / Orientation",
    body: "A brief meeting to review what fostering involves and answer your questions.",
    tone: "dark",
    icon: (
      <svg {...iconProps}>
        <circle cx="9" cy="8.5" r="3" />
        <path d="M3.5 19c.4-3 2.6-4.8 5.5-4.8s5.1 1.8 5.5 4.8" />
        <path d="M15.5 5.7a3 3 0 0 1 0 5.6M17 14.5c2 .5 3.2 2 3.5 4.5" />
      </svg>
    ),
  },
  {
    title: "Application",
    body: "Complete the foster parent application and required paperwork.",
    tone: "leaf",
    icon: (
      <svg {...iconProps}>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4V3h6v1M9 11h6M9 15h4" />
      </svg>
    ),
  },
  {
    title: "Training",
    body: "Take part in trauma-informed foster parent training that prepares you for the realities of caring for children who have experienced hardship.",
    tone: "light",
    icon: (
      <svg {...iconProps}>
        <path d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5Z" />
        <path d="M7 11v4.5c0 1 2.2 2.5 5 2.5s5-1.5 5-2.5V11" />
      </svg>
    ),
  },
  {
    title: "Home Study & Background Checks",
    body: "We complete a home assessment and background checks to confirm a safe, supportive environment.",
    tone: "dark",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Approval & Placement Preparation",
    body: "Once approved, we help you get ready to welcome a child.",
    tone: "leaf",
    icon: (
      <svg {...iconProps}>
        <path d="M4 11 12 4l8 7v9H4v-9Z" />
        <path d="m9.3 14.2 2 2 3.6-3.8" />
      </svg>
    ),
  },
  {
    title: "Ongoing Support",
    body: "Placement is the beginning, not the end. Your case manager, training, and support continue throughout.",
    tone: "glow",
    icon: (
      <svg {...iconProps}>
        <path d="M12 20.5s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.7a4.3 4.3 0 0 1 7.5 2.6c0 5.6-7.5 10.2-7.5 10.2Z" />
      </svg>
    ),
  },
];

const SPARKLE = "M12 1.5 14.3 9.7 22.5 12 14.3 14.3 12 22.5 9.7 14.3 1.5 12 9.7 9.7Z";

export function ProcessSteps() {
  return (
    <section className="relative overflow-x-clip bg-mint py-20 sm:py-28">
      {/* soft colour washes + dotted corner */}
      <div aria-hidden className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-leaf/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-72 h-96 w-96 rounded-full bg-leaf/15 blur-3xl" />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-80 w-[28rem] opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-leaf-deep) 1.2px, transparent 1.6px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse at 100% 0%, black 5%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 100% 0%, black 5%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="lg:grid lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 xl:gap-24">
          {/* heading + progress tracker, pinned while the cards stack up on the right */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal className="text-center lg:text-left">
              <span className="mb-4 inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-leaf-deep">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                How to Become a Foster Parent
              </span>
              <h2 className="font-sans text-[2.1rem] font-bold leading-[1.1] tracking-tight text-pine sm:text-[2.7rem] lg:text-[3rem] xl:text-[3.3rem]">
                A meaningful commitment, with{" "}
                <span className="bg-gradient-to-r from-[#3f7d2c] to-leaf-deep bg-clip-text text-transparent">
                  support at every stage
                </span>
              </h2>
            </Reveal>
            <ProcessStepsRail titles={steps.map((s) => s.title)} />
          </div>

          {/* stacking step cards */}
          <ol className="mt-12 flex flex-col gap-5 lg:mt-0 lg:gap-0">
            {steps.map((step, i) => {
              const tone = tones[step.tone];
              const num = String(i + 1).padStart(2, "0");
              return (
                <li
                  key={step.title}
                  data-process-step
                  className="lg:sticky lg:pb-10 lg:last:pb-0"
                  style={{ top: `calc(7rem + ${i} * 0.9rem)` }}
                >
                  {/* phones and tablets: each card slides in from alternating sides as it scrolls into view */}
                  <Reveal belowLgOnly from={i % 2 === 0 ? "left" : "right"} triggerOffset="-8%">
                  <article
                    className={`group relative isolate overflow-hidden rounded-[1.75rem] p-6 shadow-[0_28px_50px_-30px_rgba(15,33,27,0.55)] sm:rounded-[2rem] sm:p-9 lg:min-h-56 ${tone.card}`}
                  >
                    {/* decorative ring + giant numeral */}
                    <span
                      aria-hidden
                      className={`absolute -right-12 -top-14 h-48 w-48 rounded-full border-20 border-current opacity-[0.06] ${tone.title}`}
                    />
                    <span
                      aria-hidden
                      className={`pointer-events-none absolute -bottom-6 right-5 -z-10 font-display text-[9rem] font-semibold leading-none sm:text-[11rem] ${tone.numeral}`}
                    >
                      {num}
                    </span>
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className={`animate-twinkle absolute right-8 top-7 h-5 w-5 ${tone.label}`}
                      style={{ animationDelay: `${-i * 0.7}s` }}
                      fill="currentColor"
                    >
                      <path d={SPARKLE} />
                    </svg>

                    <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-7">
                      <span
                        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-lg transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 ${tone.chip}`}
                      >
                        {step.icon}
                      </span>
                      <div className="sm:pt-0.5">
                        <span className={`font-sans text-xs font-bold uppercase tracking-[0.22em] ${tone.label}`}>
                          Step {num}
                        </span>
                        <h3 className={`mt-2 font-sans text-[1.5rem] font-bold leading-tight sm:text-[1.7rem] ${tone.title}`}>
                          {step.title}
                        </h3>
                        <p className={`mt-3 max-w-[28rem] text-[1rem] leading-relaxed sm:text-[1.05rem] ${tone.body}`}>
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </article>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>

        {/* closing call to action */}
        <Reveal className="mt-16 sm:mt-24">
          <div className="relative isolate overflow-hidden rounded-[2rem_2rem_2rem_5rem] bg-[linear-gradient(118deg,#0f211b_0%,#19352d_40%,#2b6634_76%,#6fa22f_100%)] px-7 py-10 shadow-[0_45px_90px_-40px_rgba(15,33,27,0.7)] ring-1 ring-white/10 sm:rounded-[2.5rem_2.5rem_2.5rem_7rem] sm:px-14 sm:py-12">
            <span aria-hidden className="absolute -right-16 -top-24 h-72 w-72 rounded-full border-[28px] border-white/[0.06]" />
            <span aria-hidden className="absolute -bottom-28 left-[8%] h-64 w-64 rounded-full bg-leaf/15 blur-3xl" />
            <span
              aria-hidden
              className="absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1.4px)",
                backgroundSize: "26px 26px",
                maskImage: "radial-gradient(ellipse at 90% 60%, black 8%, transparent 65%)",
                WebkitMaskImage: "radial-gradient(ellipse at 90% 60%, black 8%, transparent 65%)",
              }}
            />
            <svg aria-hidden viewBox="0 0 24 24" className="animate-twinkle absolute left-[46%] top-6 hidden h-5 w-5 text-leaf lg:block" fill="currentColor">
              <path d={SPARKLE} />
            </svg>

            <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
              <p className="max-w-2xl font-display text-[1.6rem] font-medium italic leading-snug text-white sm:text-[2rem] lg:text-[2.2rem]">
                Fostering is not always easy — but you will never do it without{" "}
                <span className="text-leaf">guidance.</span>
              </p>
              <Link
                href="/sign-up-now"
                className="animate-cta-glow group relative inline-flex h-15 shrink-0 items-center gap-3 rounded-full bg-white pl-7 pr-2.5 font-sans text-[0.95rem] font-bold text-pine-deep shadow-[0_18px_34px_-14px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[rgb(141,197,64)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Take the First Step
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pine-deep text-leaf transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                  <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4">
                    <path
                      d="M4 12h15m0 0-6-6m6 6-6 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
