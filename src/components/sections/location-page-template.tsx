import Image from "next/image";
import { LocationHero } from "@/components/sections/location-hero";
import { SupportShowcase } from "@/components/sections/support-showcase";
import { StepsTimeline } from "@/components/sections/steps-timeline";
import { OngoingSupportSection, type OngoingSupportProps } from "@/components/sections/ongoing-support-section";
import { LocationCta } from "@/components/sections/location-cta";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig, type Office } from "@/lib/site-config";
import type { ReactNode } from "react";

type Feature = { title: string; body: string };

const reasonIcons = [
  // shield + check
  <>
    <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </>,
  // people
  <>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M16 14.2c2.8.2 5 2.6 5 5.8" />
  </>,
  // heart
  <path d="M12 21s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 8.2a4.3 4.3 0 0 1 7.5 2.6C19.5 16.4 12 21 12 21Z" />,
  // star
  <path d="m12 3 2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7L12 3Z" />,
];

const heroPhotos: Record<string, { src: string; alt: string; position?: string; fit?: "full" }> = {
  "oklahoma-city": {
    src: "/cute-family-walking-sunset-summer-park-100kb.jpg",
    alt: "A family walking together through a park at sunset",
  },
  tulsa: {
    src: "/cute-family-playing-summer-field-100kb.jpg",
    alt: "A family playing together in a sunlit field",
    position: "object-[center_35%]",
    fit: "full",
  },
  lawton: {
    src: "/smiling-man-carrying-his-cute-daughter-park-100kb.jpg",
    alt: "A smiling father carrying his daughter through a park",
    position: "object-[center_30%]",
  },
};

export function LocationPageTemplate({
  office,
  intro,
  heroBreadcrumb,
  therapeuticLocation,
  supportHeading,
  supportAlignHeader,
  supportIntro,
  supportLead,
  ongoing,
  becomeHeading,
  becomeVariant,
  becomeIntro,
  becomeLead,
  whyChoose,
  therapeutic,
  supportFeatures,
  emergency,
  becomeParentSteps,
  closing,
}: {
  office: Office;
  intro: string;
  heroBreadcrumb?: { label: string; href?: string }[];
  /** Overrides the highlighted part of the therapeutic section heading (default: "<city>, OK"). */
  therapeuticLocation?: string;
  /** Overrides the support-services heading (default: "Foster Parent Support Services in <city>"). */
  supportHeading?: string;
  /** Aligns the support heading row with the showcase panel below (default: off). */
  supportAlignHeader?: boolean;
  /** Optional paragraph shown under the support-services heading. */
  supportIntro?: string;
  /** Optional line shown just above the support-service cards. */
  supportLead?: string;
  /** Optional "Ongoing Support" + "How to Get Started" section shown after the steps (default: hidden). */
  ongoing?: OngoingSupportProps;
  /** Overrides the steps-section heading (default: "How to Become a Foster Parent in <city>"). */
  becomeHeading?: string;
  /** "topics" shows check badges and up to four columns instead of numbered steps (default: "steps"). */
  becomeVariant?: "steps" | "topics";
  /** Optional text under the steps-section heading: a string, or paragraphs (JSX). */
  becomeIntro?: ReactNode;
  /** Optional line just above the step cards. */
  becomeLead?: string;
  whyChoose: { title: string; body: string }[];
  therapeutic: ReactNode[];
  supportFeatures: Feature[];
  /** Text for the dark "Emergency Foster Care" section. Leave out to hide the section on that page. */
  emergency?: ReactNode[];
  becomeParentSteps: Feature[];
  closing?: string;
}) {
  return (
    <>
      <LocationHero
        title={office.city}
        intro={intro}
        breadcrumb={heroBreadcrumb ?? [{ label: "Home", href: "/" }, { label: "Locations" }, { label: office.city }]}
        image={heroPhotos[office.id]?.src ?? "/happy-family-outdoors-spending-time-together-100kb.jpg"}
        imageAlt={heroPhotos[office.id]?.alt ?? `Families supported by Open Arms Foster Care in ${office.city}`}
        imagePosition={heroPhotos[office.id]?.position}
        imageFit={heroPhotos[office.id]?.fit}
      />

      <section className="relative overflow-x-clip bg-[rgb(243,249,237)]">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-leaf/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-1/2 h-80 w-80 rounded-full bg-leaf/15 blur-3xl" />

        <div className="relative mx-auto max-w-[1400px] px-5 pb-28 pt-8 sm:px-8 sm:pb-36 sm:pt-10">
          {/* heading */}
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="mx-auto mb-5 block h-1 w-14 rounded-full bg-leaf" />
            <h2 className="font-sans text-[2rem] font-bold leading-tight tracking-tight text-pine sm:text-[2.7rem]">
              Why Choose Open Arms Foster Care in {office.city}?
            </h2>
          </Reveal>

          {/* reasons: colourful stacking deck on phones, white cards from sm up */}
          <div className="mt-12 flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {whyChoose.map((item, i) => {
              const dark = i % 2 === 0;
              return (
                <div
                  key={item.title}
                  className="max-sm:sticky sm:h-full"
                  style={{ top: `calc(4.75rem + ${i * 0.85}rem)` }}
                >
                  <Reveal delay={i * 100} className="h-full">
                    <div
                      className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem_1.75rem_1.75rem_0.5rem] p-7 transition-all duration-500 max-sm:min-h-[15.5rem] max-sm:shadow-[0_-16px_34px_-14px_rgba(15,33,27,0.55)] sm:border sm:border-white sm:bg-none sm:bg-white sm:shadow-[0_12px_32px_-20px_rgba(25,53,45,0.35)] sm:hover:-translate-y-2 sm:hover:border-leaf/60 sm:hover:shadow-[0_30px_55px_-25px_rgba(111,162,47,0.6)] ${
                        dark
                          ? "bg-gradient-to-br from-pine-deep via-pine to-[#1f4a36]"
                          : "bg-gradient-to-br from-leaf via-[#a3d455] to-leaf-deep"
                      }`}
                    >
                      {/* phone-only decoration */}
                      <span
                        aria-hidden
                        className={`pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full border-[22px] sm:hidden ${
                          dark ? "border-white/[0.07]" : "border-pine-deep/10"
                        }`}
                      />
                      <div className="relative flex items-start justify-between sm:hidden">
                        <span
                          className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg ${
                            dark ? "bg-leaf text-pine-deep shadow-leaf/30" : "bg-pine text-leaf shadow-pine/30"
                          }`}
                        >
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
                            {reasonIcons[i % reasonIcons.length]}
                          </svg>
                        </span>
                        <span
                          className={`font-display text-[3.6rem] font-light leading-[0.9] ${
                            dark ? "text-leaf/70" : "text-pine-deep/45"
                          }`}
                        >
                          0{i + 1}
                        </span>
                      </div>

                      {/* sm and up */}
                      <span className="hidden font-display text-[3.4rem] font-light leading-none text-leaf/60 transition-colors duration-500 group-hover:text-leaf-deep sm:block">
                        0{i + 1}
                      </span>
                      <span className="mt-4 hidden h-0.5 w-10 rounded-full bg-leaf transition-all duration-500 group-hover:w-20 sm:block" />

                      <h3
                        className={`relative mt-5 font-sans text-xl font-bold leading-snug sm:text-lg sm:font-semibold sm:text-pine ${
                          dark ? "text-white" : "text-pine-deep"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`relative mt-3 text-[0.95rem] leading-relaxed sm:text-ink/70 ${
                          dark ? "text-white/80" : "text-pine-deep/85"
                        }`}
                      >
                        {item.body}
                      </p>
                      <span className="absolute inset-x-0 bottom-0 hidden h-1 origin-left scale-x-0 bg-leaf transition-transform duration-500 group-hover:scale-x-100 sm:block" />
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>

          {/* map + office, one joined panel */}
          <Reveal className="mt-14">
            <div className="grid overflow-hidden rounded-[2rem_2rem_2rem_5rem] border-4 border-white bg-pine shadow-[0_35px_70px_-30px_rgba(25,53,45,0.5)] lg:grid-cols-[1.3fr_0.7fr]">
              <div className="relative min-h-[18rem] lg:min-h-[23rem]">
                <iframe
                  src={office.mapEmbedSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map to Open Arms Foster Care ${office.city} office`}
                  className="absolute inset-0 block h-full w-full border-0"
                />
              </div>

              <div className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-pine-deep via-pine to-[#1f4a36] p-8 text-white sm:p-10">
                <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-leaf/30 blur-2xl" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf text-pine-deep shadow-lg shadow-leaf/30">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                    <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
                  </svg>
                </span>
                <p className="relative mt-5 font-display text-2xl font-medium">{office.city} Office</p>
                <p className="relative mt-3 text-[0.97rem] leading-relaxed text-white/80">
                  {office.streetAddress}
                  <br />
                  {office.addressLocality}, {office.addressRegion} {office.postalCode}
                </p>
                <a
                  href={siteConfig.phoneHref}
                  className="relative mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-sans text-sm font-semibold text-leaf ring-1 ring-white/20 transition-all duration-300 hover:bg-leaf hover:text-pine-deep"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                    <path
                      d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.5c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.7}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {siteConfig.phone}
                </a>
                <div className="relative mt-7">
                  <ButtonLink href="/contact-us" variant="secondary">
                    Contact Now
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* curved bottom edge into the next section */}
        <svg
          aria-hidden
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-[-1px] h-14 w-full text-mint sm:h-20"
          fill="currentColor"
        >
          <path d="M0 80V36C240 0 480 0 720 28s480 40 720-8V80Z" />
        </svg>
      </section>

      <section className="grain relative overflow-x-clip bg-mint">
        <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-leaf/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-leaf-deep/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 px-5 pb-12 pt-10 sm:px-8 sm:pb-16 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:pt-16">
          {/* die-cut sticker scene */}
          <Reveal from="right" className="order-first lg:order-last">
            <div className="relative mx-auto w-full max-w-[34rem] pb-8 pt-8">
              {/* organic blob + sketch outline */}
              <svg
                aria-hidden
                viewBox="0 0 520 480"
                preserveAspectRatio="none"
                className="absolute inset-x-[1%] bottom-0 top-[20%] h-auto w-[98%]"
              >
                <defs>
                  <linearGradient id="thera-blob" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#a3d455" />
                    <stop offset="0.55" stopColor="#8dc540" />
                    <stop offset="1" stopColor="#5d9128" />
                  </linearGradient>
                </defs>
                <path
                  d="M70 130C120 28 290 -18 404 50c96 57 130 170 84 268-40 84-140 130-240 130C120 448 14 410 6 300-2 226 30 190 70 130Z"
                  fill="none"
                  stroke="#19352d"
                  strokeOpacity="0.35"
                  strokeWidth="2"
                  strokeDasharray="7 9"
                  transform="translate(18 -14) rotate(4 260 240)"
                />
                <path
                  d="M70 130C120 28 290 -18 404 50c96 57 130 170 84 268-40 84-140 130-240 130C120 448 14 410 6 300-2 226 30 190 70 130Z"
                  fill="url(#thera-blob)"
                />
              </svg>

              {/* dotted patch */}
              <div
                aria-hidden
                className="absolute -right-2 bottom-2 h-24 w-24 opacity-60"
                style={{
                  backgroundImage: "radial-gradient(circle, #19352d 1.6px, transparent 2px)",
                  backgroundSize: "14px 14px",
                }}
              />

              {/* the sticker */}
              <div className="animate-gentle-bob relative z-10">
                <div
                  className="-rotate-3"
                  style={{
                    WebkitMaskImage: "linear-gradient(to bottom, #000 78%, transparent 100%)",
                    maskImage: "linear-gradient(to bottom, #000 78%, transparent 100%)",
                  }}
                >
                  <Image
                    src="/mother-child-being-happy-100kb (1).png"
                    alt="A mother and her child laughing together"
                    width={1080}
                    height={810}
                    sizes="(min-width: 1024px) 34rem, 92vw"
                    className="h-auto w-full [filter:drop-shadow(4px_0_0_#fff)_drop-shadow(-4px_0_0_#fff)_drop-shadow(0_4px_0_#fff)_drop-shadow(0_-4px_0_#fff)_drop-shadow(0_22px_22px_rgba(15,33,27,0.35))]"
                  />
                </div>
              </div>

              {/* doodles */}
              <svg
                aria-hidden
                viewBox="0 0 120 40"
                className="absolute right-4 top-2 z-20 h-8 w-24 text-pine"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              >
                <path d="M4 22c10-16 18 14 28 0s18 14 28 0 18 14 28 0 14 8 28-4" />
              </svg>
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="animate-twinkle absolute left-[2%] top-[30%] z-20 h-8 w-8 text-white drop-shadow"
                fill="currentColor"
              >
                <path d="M12 1.500 14.300 9.700 22.500 12 14.300 14.300 12 22.500 9.700 14.300 1.500 12 9.700 9.700Z" />
              </svg>
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="animate-twinkle absolute right-[3%] top-[38%] z-20 h-6 w-6 text-pine [animation-delay:-1.1s]"
                fill="currentColor"
              >
                <path d="M12 1.500 14.300 9.700 22.500 12 14.300 14.300 12 22.500 9.700 14.300 1.500 12 9.700 9.700Z" />
              </svg>
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="animate-twinkle absolute bottom-[14%] left-[8%] z-20 h-5 w-5 text-white [animation-delay:-2s]"
                fill="currentColor"
              >
                <path d="M12 1.500 14.300 9.700 22.500 12 14.300 14.300 12 22.500 9.700 14.300 1.500 12 9.700 9.700Z" />
              </svg>
              <span className="absolute left-[14%] top-[14%] z-20 h-3 w-3 rounded-full bg-pine" />
              <span className="absolute right-[16%] bottom-[22%] z-20 h-2.5 w-2.5 rounded-full bg-white" />
              <span className="absolute bottom-[8%] right-[30%] z-20 h-2 w-2 rounded-full bg-pine/70" />

            </div>
          </Reveal>

          {/* copy */}
          <Reveal from="left">
            <span className="mb-5 block h-1 w-14 rounded-full bg-leaf" />
            <h2 className="max-w-xl font-sans text-[2rem] font-bold leading-[1.15] tracking-tight text-pine sm:text-[2.6rem]">
              Therapeutic Foster Care in{" "}
              <span className="box-decoration-clone bg-[linear-gradient(transparent_62%,rgba(141,197,64,0.55)_62%)] px-1">
                {therapeuticLocation ?? `${office.city}, OK`}
              </span>
            </h2>

            <div className="mt-8 max-w-xl space-y-5">
              {therapeutic.map((p, i) => {
                const last = i === therapeutic.length - 1 && therapeutic.length > 1;
                if (last) {
                  return (
                    <div
                      key={i}
                      className="relative flex gap-4 rounded-2xl border border-white bg-white/80 p-5 shadow-[0_14px_30px_-20px_rgba(25,53,45,0.45)] backdrop-blur-sm"
                    >
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-leaf text-pine-deep">
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                          <path d="M12 21s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 8.2a4.3 4.3 0 0 1 7.5 2.6C19.5 16.4 12 21 12 21Z" />
                        </svg>
                      </span>
                      <p className="text-[1.02rem] leading-relaxed text-pine">{p}</p>
                    </div>
                  );
                }
                return (
                  <p key={i} className="text-[1.05rem] leading-relaxed text-ink/75">
                    {p}
                  </p>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <SupportShowcase
        heading={supportHeading ?? `Foster Parent Support Services in ${office.city}`}
        intro={supportIntro}
        lead={supportLead}
        items={supportFeatures}
        alignHeader={supportAlignHeader}
      />

      {emergency && emergency.length > 0 && (
        <section className="grain relative overflow-x-clip bg-pine py-20 sm:py-28">
          <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-leaf/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1.4px)",
              backgroundSize: "30px 30px",
              maskImage: "radial-gradient(ellipse at 70% 50%, black 10%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse at 70% 50%, black 10%, transparent 70%)",
            }}
          />

          {/* rounded house silhouette used to crop the photo */}
          <svg aria-hidden width="0" height="0" className="absolute">
            <defs>
              <clipPath id="emergency-house" clipPathUnits="objectBoundingBox">
                <path d="M0.5 0.015Q0.525 0.015 0.548 0.035L0.962 0.285Q1 0.308 1 0.35V0.93Q1 1 0.93 1H0.07Q0 1 0 0.93V0.35Q0 0.308 0.038 0.285L0.452 0.035Q0.475 0.015 0.5 0.015Z" />
              </clipPath>
            </defs>
          </svg>

          <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            {/* copy */}
            <Reveal from="left">
              <div className="flex items-center gap-3" aria-hidden>
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-pulse-ring absolute inset-0 rounded-full bg-red-500" />
                  <span className="relative h-3.5 w-3.5 rounded-full bg-red-500" />
                </span>
                <span className="h-px w-16 bg-gradient-to-r from-cream/50 to-transparent" />
              </div>

              <h2 className="mt-5 max-w-xl font-sans text-[2rem] font-bold leading-[1.12] tracking-tight text-cream sm:text-[2.8rem]">
                Emergency Foster Care in <span className="text-leaf">{office.city}</span>
              </h2>

              <div className="mt-8 max-w-xl space-y-5">
                {emergency.map((p, i) => {
                  const last = i === emergency.length - 1 && emergency.length > 1;
                  if (last) {
                    return (
                      <div
                        key={i}
                        className="flex gap-4 rounded-2xl border border-white/15 border-l-4 border-l-leaf bg-white/[0.07] p-5 backdrop-blur-sm"
                      >
                        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-leaf text-pine-deep">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.9}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden
                          >
                            <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" />
                          </svg>
                        </span>
                        <p className="text-[1.02rem] leading-relaxed text-cream/90">{p}</p>
                      </div>
                    );
                  }
                  return (
                    <p key={i} className={i === 0 ? "text-[1.1rem] leading-relaxed text-cream/85" : "text-[1.05rem] leading-relaxed text-cream/75"}>
                      {p}
                    </p>
                  );
                })}
              </div>
            </Reveal>

            {/* safe-haven scene */}
            <Reveal from="right" delay={120} className="order-first lg:order-last">
              <div className="relative mx-auto flex w-full max-w-[30rem] items-center justify-center py-6">
                {/* beacon rings */}
                <div className="absolute left-1/2 top-1/2 aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2">
                  <span className="absolute inset-0 rounded-full border border-leaf/30" />
                  <span className="absolute inset-[11%] rounded-full border border-dashed border-leaf/30" />
                  <span className="animate-pulse-ring absolute inset-[22%] rounded-full border-2 border-leaf/50" />
                  <span className="animate-pulse-ring absolute inset-[22%] rounded-full border-2 border-leaf/50 [animation-delay:-1.2s]" />
                  <span className="absolute inset-[30%] rounded-full bg-leaf/15 blur-2xl" />
                </div>

                <div className="relative w-[min(23rem,82%)] [filter:drop-shadow(0_30px_40px_rgba(0,0,0,0.45))]">
                  <div className="relative aspect-[4/4.6] w-full">
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-leaf via-[#a3d455] to-leaf-deep"
                      style={{ clipPath: "url(#emergency-house)" }}
                    />
                    <div className="absolute inset-[7px]" style={{ clipPath: "url(#emergency-house)" }}>
                      <Image
                        src="/father-spending-time-with-his-daughter-outdoors-father-s-day 1-100kb.jpg"
                        alt="A caring adult’s arms wrapped protectively around a young child"
                        fill
                        sizes="(min-width: 1024px) 24rem, 80vw"
                        className="object-cover object-[50%_38%]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/45 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>

                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="animate-twinkle absolute left-[6%] top-[22%] h-7 w-7 text-cream"
                  fill="currentColor"
                >
                  <path d="M12 1.5 14.3 9.7 22.5 12 14.3 14.3 12 22.5 9.7 14.3 1.5 12 9.7 9.7Z" />
                </svg>
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="animate-twinkle absolute bottom-[10%] right-[8%] h-5 w-5 text-leaf [animation-delay:-1.4s]"
                  fill="currentColor"
                >
                  <path d="M12 1.5 14.3 9.7 22.5 12 14.3 14.3 12 22.5 9.7 14.3 1.5 12 9.7 9.7Z" />
                </svg>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="relative overflow-x-clip bg-[rgb(232,241,235)]">
        <div className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-leaf/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-leaf/15 blur-3xl" />

        <div className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <span className="mb-5 block h-1 w-14 rounded-full bg-leaf" />
            <h2 className="max-w-3xl font-sans text-[2rem] font-bold leading-tight tracking-tight text-pine sm:text-[2.6rem]">
              {becomeHeading ?? `How to Become a Foster Parent in ${office.city}`}
            </h2>
            {becomeIntro &&
              (typeof becomeIntro === "string" ? (
                <p className="mt-6 max-w-3xl text-[1.05rem] leading-relaxed text-ink/75">{becomeIntro}</p>
              ) : (
                <div className="mt-6 max-w-3xl space-y-4 text-[1.05rem] leading-relaxed text-ink/75 [&_strong]:font-bold [&_strong]:text-pine">
                  {becomeIntro}
                </div>
              ))}
            {becomeLead && (
              <p className="mt-6 inline-flex items-center gap-3 rounded-full bg-white/90 px-5 py-2.5 font-sans text-base font-semibold text-pine shadow-sm sm:text-lg">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-leaf" />
                {becomeLead}
              </p>
            )}
          </Reveal>

          <StepsTimeline steps={becomeParentSteps} variant={becomeVariant} />

          {closing && (
            <Reveal className="mt-14">
              <p className="max-w-2xl border-l-4 border-leaf pl-5 font-display text-xl italic leading-snug text-pine">
                {closing}
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {ongoing && <OngoingSupportSection {...ongoing} />}

      <LocationCta city={office.city} />
    </>
  );
}
