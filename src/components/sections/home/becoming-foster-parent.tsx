import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-6 w-6",
  "aria-hidden": true,
};

const steps: { title: string; body: ReactNode; icon: ReactNode }[] = [
  {
    title: "Complete an Application",
    body: "Start by submitting a foster parent application through our website or by calling us directly. We’ll guide you through the paperwork and next steps.",
    icon: (
      <svg {...iconProps}>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4V3h6v1M9 11h6M9 15h4" />
      </svg>
    ),
  },
  {
    title: "Background Checks and Home Study",
    body: "We conduct background checks and a home study to ensure that your home is a safe and supportive environment for children.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Foster Parent Training",
    body: "We provide thorough foster care parent training that covers everything from trauma-informed care to behavioral management, preparing you for the responsibilities of fostering.",
    icon: (
      <svg {...iconProps}>
        <path d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5Z" />
        <path d="M7 11v4.5c0 1 2.2 2.5 5 2.5s5-1.5 5-2.5V11" />
      </svg>
    ),
  },
  {
    title: "Placement",
    body: "After completing the necessary steps, we’ll match you with a child who can benefit from the care and support you provide.",
    icon: (
      <svg {...iconProps}>
        <path d="M4 11 12 4l8 7v9H4v-9Z" />
        <path d="M12 16.5s-2.5-1.6-2.5-3.2a1.4 1.4 0 0 1 2.5-.8 1.4 1.4 0 0 1 2.5.8c0 1.6-2.5 3.2-2.5 3.2Z" />
      </svg>
    ),
  },
];

export function BecomingFosterParent() {
  return (
    <section className="px-3 py-10 sm:px-5 sm:py-16">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-pine-deep via-pine to-leaf-deep px-6 py-14 sm:rounded-[2.5rem] sm:px-12 sm:py-20">
        {/* dotted texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1.4px)",
            backgroundSize: "26px 26px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-leaf/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-leaf/15 blur-3xl" />

        {/* floating leaf + heart accents */}
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="animate-float-slow pointer-events-none absolute left-[6%] top-[9%] hidden h-10 w-10 text-leaf/50 sm:block"
          fill="currentColor"
        >
          <path d="M20 4C10 4 4 9 4 16c0 1.5.4 2.8 1 4 1.2-4 4.2-7.5 8.5-9.5-3 2.6-5 5.6-6 9.5 1 .3 2 .5 3 .5 7 0 10-6 9.5-16.5Z" />
        </svg>
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="animate-float-slow pointer-events-none absolute right-[8%] top-[16%] hidden h-8 w-8 text-white/25 [animation-delay:-2.5s] sm:block"
          fill="currentColor"
        >
          <path d="M12 21s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 8.2a4.3 4.3 0 0 1 7.5 2.6C19.5 16.4 12 21 12 21Z" />
        </svg>
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="animate-float-slow pointer-events-none absolute bottom-[8%] right-[10%] hidden h-9 w-9 text-leaf/40 [animation-delay:-4.5s] sm:block"
          fill="currentColor"
        >
          <path d="M20 4C10 4 4 9 4 16c0 1.5.4 2.8 1 4 1.2-4 4.2-7.5 8.5-9.5-3 2.6-5 5.6-6 9.5 1 .3 2 .5 3 .5 7 0 10-6 9.5-16.5Z" />
        </svg>

        <div className="relative mx-auto max-w-[1100px]">
          <Reveal className="text-center">
            <span className="mx-auto mb-6 flex items-center justify-center gap-2" aria-hidden>
              <span className="h-px w-10 bg-leaf/60" />
              <span className="h-2 w-2 rotate-45 bg-leaf" />
              <span className="h-px w-10 bg-leaf/60" />
            </span>
            <h2 className="mx-auto max-w-3xl font-sans text-[2.1rem] font-bold leading-tight tracking-tight text-white sm:text-[2.9rem]">
              Becoming a Foster Parent in Oklahoma City
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-[1.05rem] leading-relaxed text-white/80">
              If you are interested in becoming a foster parent in Oklahoma City, Open Arms Foster Care is here to
              guide you through the process. We offer comprehensive support to new foster parents, including training
              and resources, to ensure that you are fully prepared to provide a loving and stable home for children in
              need.
            </p>
            <h3 className="mx-auto mt-10 inline-block rounded-full border border-leaf/40 bg-leaf/10 px-6 py-2.5 font-sans text-base font-semibold text-leaf sm:text-lg">
              Key elements of our emergency foster care program include:
            </h3>
          </Reveal>

          {/* zig-zag timeline */}
          <div className="relative mt-14">
            <div
              aria-hidden
              className="animate-line-flow absolute bottom-6 left-6 top-6 w-[3px] -translate-x-1/2 rounded-full lg:left-1/2"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, rgba(141,197,64,0.15) 0px, rgba(141,197,64,0.95) 60px, rgba(141,197,64,0.15) 120px)",
                backgroundSize: "100% 240px",
              }}
            />

            <div className="flex flex-col gap-10 lg:gap-14">
              {steps.map((step, i) => {
                const right = i % 2 === 1;
                return (
                  <div key={step.title} className="relative pl-16 lg:pl-0">
                    <span className="absolute left-6 top-7 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center lg:left-1/2">
                      <span className="animate-pulse-ring absolute inset-0 rounded-full bg-leaf" />
                      <span className="relative flex h-11 w-11 items-center justify-center rounded-full border-4 border-pine bg-leaf font-display text-base font-semibold text-pine-deep shadow-lg">
                        {i + 1}
                      </span>
                    </span>

                    <Reveal from={right ? "right" : "left"} triggerOffset="-8%" className={right ? "lg:ml-auto lg:w-[calc(50%-3.5rem)]" : "lg:w-[calc(50%-3.5rem)]"}>
                      <div className="group relative flex h-full gap-5 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.08] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-leaf/70 hover:bg-white/[0.14] hover:shadow-[0_24px_50px_-20px_rgba(141,197,64,0.55)] sm:p-7">
                        <span className="pointer-events-none absolute -right-3 -top-5 font-display text-8xl font-semibold leading-none text-white/[0.06] transition-all duration-500 group-hover:-translate-y-1 group-hover:text-leaf/25">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-all duration-500 group-hover:rotate-[8deg] group-hover:scale-110 group-hover:bg-leaf group-hover:text-pine-deep">
                          {step.icon}
                        </span>
                        <div className="relative">
                          <h4 className="font-sans text-lg font-semibold leading-snug text-white">{step.title}</h4>
                          <p className="mt-2 text-[0.95rem] leading-relaxed text-white/75 transition-colors duration-500 group-hover:text-white/90">
                            {step.body}
                          </p>
                        </div>
                        <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-leaf transition-transform duration-500 group-hover:scale-x-100" />
                      </div>
                    </Reveal>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
