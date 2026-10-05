import type { ReactNode } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

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

const benefits: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: "Counseling and Therapy",
    body: "We provide access to counseling and therapy services to help children work through their trauma and emotional challenges.",
    icon: (
      <svg {...iconProps}>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 19v-1.2A3.8 3.8 0 0 1 7.3 14h3.4a3.8 3.8 0 0 1 3.8 3.8V19" />
        <path d="M15.8 4.9a3.2 3.2 0 0 1 0 6.2M17.5 14.3a3.8 3.8 0 0 1 3 3.5V19" />
      </svg>
    ),
  },
  {
    title: "Behavioral Support",
    body: "Our program includes behavioral support to help children develop healthy coping mechanisms and overcome past trauma.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 10.5s-3.2-1.9-3.2-4.1a1.8 1.8 0 0 1 3.2-1.2 1.8 1.8 0 0 1 3.2 1.2c0 2.2-3.2 4.1-3.2 4.1Z" />
        <path d="M3 15.5h2.6l3 1.4h4.9a1.4 1.4 0 0 0 0-2.8H10.6" />
        <path d="m13.8 14.3 4-1.4a1.6 1.6 0 0 1 1.8 2.5L16 19l-5.4 1.4L8.6 19.5H3" />
      </svg>
    ),
  },
  {
    title: "Stability and Nurturing",
    body: "We work to ensure that children receive the stability they need to feel safe, while also providing a nurturing and supportive environment where they can thrive.",
    icon: (
      <svg {...iconProps}>
        <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.9L12 3.5Z" />
      </svg>
    ),
  },
];

export function TherapeuticFosterCare() {
  return (
    <section className="relative overflow-x-clip bg-gradient-to-b from-white via-cream-alt to-cream">
      {/* ambient light + texture */}
      <div className="pointer-events-none absolute -left-40 top-24 h-[28rem] w-[28rem] rounded-full bg-leaf/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[30rem] w-[30rem] rounded-full bg-leaf/20 blur-3xl" />
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

      <div className="relative mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:grid-rows-[1fr_auto_auto_1fr] lg:gap-x-16 lg:gap-y-0">
          {/* heading */}
          <Reveal className="lg:col-start-2 lg:row-start-2">
            <span className="block h-[3px] w-24 rounded-full bg-gradient-to-r from-leaf-deep to-leaf" />
            <h2 className="mt-5 max-w-2xl font-sans text-[2.1rem] font-bold leading-[1.1] tracking-tight text-pine sm:text-[2.8rem] lg:text-[3.1rem]">
              Therapeutic Foster Care in{" "}
              <span className="bg-gradient-to-r from-leaf-deep to-leaf bg-clip-text text-transparent">
                Oklahoma City
              </span>
            </h2>
          </Reveal>

          {/* cut-out photo popping out of a green panel */}
          <Reveal from="left" delay={100} className="lg:col-start-1 lg:row-span-4 lg:row-start-1">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[26rem] sm:max-w-[30rem] lg:max-w-[34rem]">
              <div className="absolute inset-x-0 bottom-0 top-[18%] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-leaf via-leaf-deep to-pine shadow-[0_40px_80px_-30px_rgba(25,53,45,0.55)]">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-[0.22]"
                  style={{
                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1.4px)",
                    backgroundSize: "22px 22px",
                  }}
                />
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/25" />
                <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border border-white/25" />
                <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-pine-deep/35 blur-2xl" />
              </div>

              <div
                aria-hidden
                className="pointer-events-none absolute -left-[6%] top-[10%] h-[34%] w-[34%] animate-spin rounded-full border-2 border-dashed border-leaf-deep/50 [animation-duration:40s] motion-reduce:animate-none"
              />

              <div className="absolute inset-0 [clip-path:inset(-10%_0_0_0_round_0_0_2.5rem_2.5rem)]">
                <Image
                  src="/xn (1).png"
                  alt="A foster mother smiling as she hugs her daughter"
                  fill
                  sizes="(min-width: 1024px) 34rem, (min-width: 640px) 30rem, 26rem"
                  className="object-contain object-bottom drop-shadow-[0_20px_25px_rgba(15,33,27,0.35)]"
                />
              </div>
            </div>
          </Reveal>

          {/* copy */}
          <Reveal delay={150} className="lg:col-start-2 lg:row-start-3">
            <div className="max-w-2xl space-y-4 text-[1.05rem] leading-relaxed text-ink/80 lg:mt-6">
              <p>
                <strong className="font-bold text-pine">Therapeutic foster care</strong> is a specialized type of
                foster care that focuses on children who have experienced trauma or have emotional, psychological, or
                behavioral challenges. These children often require a more intensive level of care and attention. At
                Open Arms Foster Care, our{" "}
                <strong className="font-bold text-pine">therapeutic foster care program in Oklahoma City</strong>{" "}
                provides children with the emotional support and therapy they need to begin healing from the trauma
                they have endured.
              </p>
              <p>
                Foster parents in our therapeutic program receive specialized training to help them manage the complex
                needs of children who may have experienced neglect, abuse, or abandonment. Our team of mental health
                professionals works closely with both foster parents and children to ensure that emotional healing and
                behavioral growth are prioritized.
              </p>
            </div>
          </Reveal>
        </div>

        {/* benefits */}
        <Reveal className="mt-16">
          <p className="flex items-center gap-4 font-sans text-xl text-pine sm:text-2xl">
            <span aria-hidden className="h-px w-10 shrink-0 bg-leaf-deep/60" />
            <span>
              The benefits of <strong className="font-bold">therapeutic foster care</strong> include:
            </span>
          </p>
        </Reveal>

        {/* stacking deck on phones (cards pile up as you scroll), three across from md up */}
        <div className="mt-8 flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-6">
          {benefits.map((benefit, i) => {
            const dark = i % 2 === 0;
            return (
              <div
                key={benefit.title}
                className="max-md:sticky md:h-full"
                style={{ top: `calc(4.75rem + ${i * 0.85}rem)` }}
              >
                <Reveal delay={i * 100} className="h-full">
                  <div
                    className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem_2rem_2rem_0.5rem] p-7 transition-all duration-500 max-md:min-h-[16rem] max-md:shadow-[0_-16px_34px_-14px_rgba(15,33,27,0.55)] sm:p-8 md:shadow-[0_25px_50px_-28px_rgba(25,53,45,0.55)] md:hover:-translate-y-2 md:hover:shadow-[0_32px_60px_-24px_rgba(25,53,45,0.7)] ${
                      dark
                        ? "bg-gradient-to-br from-pine-deep via-pine to-[#1f4a36]"
                        : "bg-gradient-to-br from-leaf via-[#a3d455] to-leaf-deep"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full border-[22px] ${
                        dark ? "border-white/[0.07]" : "border-pine-deep/10"
                      }`}
                    />
                    <span
                      aria-hidden
                      className={`pointer-events-none absolute -bottom-8 -right-8 h-44 w-44 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6 [&_svg]:h-full [&_svg]:w-full [&_svg]:[stroke-width:1] ${
                        dark ? "text-white/[0.07]" : "text-pine-deep/[0.12]"
                      }`}
                    >
                      {benefit.icon}
                    </span>

                    <span
                      className={`relative flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition-transform duration-500 group-hover:scale-110 ${
                        dark ? "bg-leaf text-pine-deep shadow-leaf/30" : "bg-pine text-leaf shadow-pine/30"
                      }`}
                    >
                      {benefit.icon}
                    </span>
                    <h3
                      className={`relative mt-6 font-sans text-xl font-bold leading-snug tracking-tight ${
                        dark ? "text-white" : "text-pine-deep"
                      }`}
                    >
                      {benefit.title}
                    </h3>
                    <p
                      className={`relative mt-3 text-[0.97rem] leading-relaxed ${
                        dark ? "text-white/80" : "text-pine-deep/85"
                      }`}
                    >
                      {benefit.body}
                    </p>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
