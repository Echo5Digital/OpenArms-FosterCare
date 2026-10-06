import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  { title: "Apply Online", body: "start your application in minutes" },
  { title: "Initial Consultation", body: "Brief Zoom meeting to review requirements and next steps." },
  { title: "Training & Certification", body: "complete trauma-informed training and home study." },
  { title: "Placement & Support", body: "welcome a child with ongoing support from our team." },
];

export function EmergencyFosterCare() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mint via-cream-alt to-mint">
      {/* decoration */}
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-leaf/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-leaf/20 blur-3xl" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(25,53,45,0.18) 1px, transparent 1.4px)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1600px] items-start gap-12 px-5 pt-16 sm:px-10 lg:grid-cols-[1.3fr_0.9fr_1fr] lg:gap-8 lg:pt-0 xl:px-16">
        {/* copy */}
        <Reveal from="left" className="lg:pb-24 lg:pt-28">
          <div className="@container group relative overflow-hidden rounded-[2rem_2rem_2rem_5rem] border border-leaf/40 bg-gradient-to-br from-leaf/25 via-leaf/15 to-leaf/5 p-7 shadow-[0_30px_60px_-30px_rgba(111,162,47,0.45)] backdrop-blur-md sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-leaf/30 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-leaf/25 blur-2xl" />
            <span className="absolute inset-y-8 left-0 w-1.5 rounded-r-full bg-gradient-to-b from-leaf to-leaf-deep" />

            <span className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-700 text-white shadow-lg shadow-red-500/40">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 3 4.5 6v5.5c0 4.4 3.1 7.8 7.5 9.5 4.4-1.7 7.5-5.1 7.5-9.5V6L12 3Z" />
                <path d="M12 9v4M12 15.6v.01" />
              </svg>
            </span>

            <h2 className="relative whitespace-nowrap font-sans text-[min(5.8cqw,3.4rem)] font-bold leading-[1.1] tracking-tight text-pine">
              Emergency Foster Care in Oklahoma
            </h2>
            <div className="relative mt-6 space-y-4 text-[1.02rem] leading-relaxed text-ink/80">
              <p>
                There are times when children need immediate placement because of unsafe living conditions. Whether
                due to neglect, abandonment, or other emergencies, emergency foster care ensures that children have a
                safe and temporary place to stay while they wait for a more permanent solution.
              </p>
              <p>
                At Open Arms Foster Care, we offer{" "}
                <strong className="font-bold text-pine">emergency foster care services in Oklahoma</strong> that
                provide immediate placement for children in crisis. Our goal is to offer children a safe, stable, and
                compassionate environment during an incredibly stressful time. Emergency placements are temporary,
                and we work quickly to transition children to longer-term foster care when necessary.
              </p>
            </div>
          </div>
        </Reveal>

        {/* boy cut-out */}
        <Reveal delay={120} className="relative order-first self-end lg:order-none lg:self-end">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[22rem] lg:max-w-none">
            <div className="absolute inset-x-[6%] top-[10%] bottom-0 rounded-t-[999px] bg-gradient-to-b from-leaf via-leaf-deep to-pine shadow-[0_30px_60px_-25px_rgba(25,53,45,0.6)]" />
            <div className="animate-ripple-arch absolute inset-x-[6%] top-[10%] bottom-0 rounded-t-[999px] border-2 border-leaf-deep/60" />
            <div className="animate-ripple-arch absolute inset-x-[6%] top-[10%] bottom-0 rounded-t-[999px] border-2 border-leaf-deep/60 [animation-delay:-1.8s]" />
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="animate-rise-fade pointer-events-none absolute left-[4%] top-[38%] h-6 w-6 text-leaf-deep [animation-delay:0s]"
              fill="currentColor"
            >
              <path d="M12 21s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 8.2a4.3 4.3 0 0 1 7.5 2.6C19.5 16.4 12 21 12 21Z" />
            </svg>
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="animate-rise-fade pointer-events-none absolute right-[2%] top-[30%] h-5 w-5 text-leaf-deep [animation-delay:-1.7s]"
              fill="currentColor"
            >
              <path d="M12 21s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 8.2a4.3 4.3 0 0 1 7.5 2.6C19.5 16.4 12 21 12 21Z" />
            </svg>
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="animate-rise-fade pointer-events-none absolute left-[12%] top-[62%] h-4 w-4 text-leaf-deep [animation-delay:-3.3s]"
              fill="currentColor"
            >
              <path d="M12 21s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 8.2a4.3 4.3 0 0 1 7.5 2.6C19.5 16.4 12 21 12 21Z" />
            </svg>
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="animate-rise-fade pointer-events-none absolute right-[10%] top-[58%] h-6 w-6 text-leaf-deep [animation-delay:-2.4s]"
              fill="currentColor"
            >
              <path d="M12 21s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 8.2a4.3 4.3 0 0 1 7.5 2.6C19.5 16.4 12 21 12 21Z" />
            </svg>
            <Image
              src="/close-up-sad-boy-portrait-100kb (1) (1).png"
              alt="A young boy sitting quietly, waiting for a safe place to stay"
              fill
              sizes="(min-width: 1024px) 28vw, 80vw"
              className="animate-gentle-bob object-contain object-bottom drop-shadow-[0_20px_25px_rgba(15,33,27,0.35)]"
            />
          </div>
        </Reveal>

        {/* steps */}
        <Reveal from="right" className="@container lg:pb-24 lg:pt-28">
          <h3 className="whitespace-nowrap font-sans text-[min(5.6cqw,2rem)] font-bold leading-[1.1] tracking-tight text-pine">
            How to Become a Foster Parent
          </h3>
          <ol className="relative mt-6 flex flex-col gap-4">
            {/* a dashed line running down behind the number badges; the white cards hide it except in the gaps */}
            <span
              aria-hidden
              className="absolute bottom-8 left-[calc(2.75rem-1px)] top-8 w-0 border-l-2 border-dashed border-leaf-deep/50"
            />
            {steps.map((step, i) => (
              <li key={step.title}>
                <div className="group relative z-10 flex items-center gap-4 rounded-[1.75rem] bg-white p-4 pr-5 shadow-[0_10px_30px_-18px_rgba(25,53,45,0.35)] ring-1 ring-pine/10 transition-all duration-500 hover:-translate-y-1 hover:ring-leaf/60 hover:shadow-[0_22px_40px_-20px_rgba(111,162,47,0.6)]">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-leaf/20 font-display text-xl font-semibold text-leaf-deep ring-1 ring-leaf/40 transition-all duration-500 group-hover:-rotate-6 group-hover:bg-leaf group-hover:text-pine-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p className="font-sans text-lg font-bold leading-tight text-pine">{step.title}</p>
                    <p className="mt-1 text-[0.85rem] leading-snug text-ink/70">{step.body}</p>
                  </div>
                  <span className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mint text-pine transition-all duration-500 group-hover:bg-leaf group-hover:text-pine-deep">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5" aria-hidden>
                      <path d="m9 6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
