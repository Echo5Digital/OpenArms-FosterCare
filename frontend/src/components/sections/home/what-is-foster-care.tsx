import type { CSSProperties } from "react";
import Image from "next/image";
import { HoverPrefetchLink as Link } from "@/components/ui/hover-prefetch-link";

/** Double chevron bullet for the services list. */
function Chevrons() {
  return (
    <svg viewBox="0 0 24 24" className="mt-[0.2rem] h-4 w-4 shrink-0 text-leaf-deep" fill="none" aria-hidden>
      <path
        d="m6 6 6 6-6 6M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// the collage is laid out on a 620 x 540 canvas, in percentages, so it scales evenly from phones up; the corner radii
// are percentages too, so the curves keep their shape at every size
const shape = {
  tall: { borderRadius: "24% / 11%" } satisfies CSSProperties,
  arch: { borderRadius: "50% 50% 12% 12% / 30% 30% 7% 7%" } satisfies CSSProperties,
  archTop: { borderRadius: "50% 50% 8% 8% / 27% 27% 5% 5%" } satisfies CSSProperties,
};

export function WhatIsFosterCare() {
  return (
    <section className="relative overflow-hidden bg-cream-alt py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-leaf/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-leaf/10 blur-3xl" />

      {/* phones: heading, photos, copy; lg: photos on the left, heading + copy centred on the right */}
      <div className="relative mx-auto flex max-w-[1400px] flex-col gap-12 px-5 sm:px-8 lg:grid lg:grid-cols-[1fr_1fr] lg:grid-rows-[1fr_auto_auto_1fr] lg:gap-x-16 lg:gap-y-0">
        {/* heading */}
        <div className="lg:col-start-2 lg:row-start-2">
          <span className="inline-flex items-center gap-3 font-sans text-base font-semibold text-leaf-deep">
            <span aria-hidden className="h-0.5 w-8 rounded-full bg-leaf-deep/70" />
            About Foster Care
          </span>
          <h2 className="mt-3 font-sans text-[2.1rem] font-bold leading-[1.1] tracking-tight text-pine sm:text-[2.8rem] lg:text-[3.1rem]">
            What is{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="bg-gradient-to-r from-leaf-deep to-leaf bg-clip-text text-transparent">Foster Care?</span>
              <svg
                aria-hidden
                viewBox="0 0 220 14"
                preserveAspectRatio="none"
                className="absolute -bottom-2.5 left-0 h-3 w-full text-leaf"
                fill="none"
                stroke="currentColor"
                strokeWidth={4}
                strokeLinecap="round"
              >
                <path d="M3 9C45 2 95 2 135 7S195 11 217 4" />
              </svg>
            </span>
          </h2>
        </div>

        {/* photos: a tall photo on the left, an arch top right, and a bordered arch overlapping both */}
        <div className="lg:col-start-1 lg:row-span-4 lg:row-start-1 lg:self-center">
          <div className="relative mx-auto aspect-[620/540] w-full max-w-[36rem] lg:max-w-[38rem]">
            <div
              className="absolute left-0 top-0 h-[98%] w-[40.3%] overflow-hidden shadow-[0_26px_44px_-26px_rgba(15,33,27,0.5)]"
              style={shape.tall}
            >
              <Image
                src="/beautiful-boy-playing-with-bubbles-sunny-day-garden-100kb.jpg"
                alt="Father and son blowing bubbles together in a garden"
                fill
                sizes="(min-width: 1024px) 16vw, 36vw"
                className="origin-[85%_100%] scale-[1.1] object-cover"
              />
            </div>

            <div
              className="absolute left-[67.3%] top-0 h-[67.6%] w-[32.7%] overflow-hidden shadow-[0_26px_44px_-26px_rgba(15,33,27,0.5)]"
              style={shape.archTop}
            >
              <Image
                src="/black-baby-spending-time-with-her-dad-90kb (1).jpg"
                alt="Child sitting on her father's shoulders, laughing together"
                fill
                sizes="(min-width: 1024px) 14vw, 30vw"
                className="object-cover object-[center_35%]"
              />
            </div>

            <div
              className="absolute left-[40.3%] top-[29.6%] z-10 h-[65.7%] w-[33.9%] overflow-hidden border-[5px] border-white shadow-[0_30px_50px_-22px_rgba(15,33,27,0.55)] sm:border-[7px]"
              style={shape.arch}
            >
              <Image
                src="/adoptive-mother-spending-time-with-her-daughter-100kb.jpg"
                alt="A mother holding her smiling daughter in a warm hug"
                fill
                sizes="(min-width: 1024px) 15vw, 32vw"
                className="object-cover object-[center_45%]"
              />
            </div>

            {/* round "more about us" badge */}
            <Link
              href="/about-us"
              aria-label="More about Open Arms Foster Care"
              className="absolute left-[77.4%] top-[70.4%] z-20 aspect-square w-[19%] rounded-full bg-white text-pine shadow-[0_18px_34px_-14px_rgba(15,33,27,0.5)] transition-colors hover:text-leaf-deep"
            >
              <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full" aria-hidden>
                <defs>
                  <path id="what-is-badge-ring" d="M60 60m-45 0a45 45 0 1 1 90 0a45 45 0 1 1-90 0" />
                </defs>
                <text fill="currentColor" fontSize="9.5" fontWeight="700" textLength="276" lengthAdjust="spacing">
                  <textPath href="#what-is-badge-ring">MORE ABOUT US • OPEN ARMS FOSTER CARE •</textPath>
                </text>
              </svg>
              <span className="absolute inset-[22%] overflow-hidden rounded-full">
                <Image src="/images/fav.png" alt="" fill sizes="64px" className="object-cover" />
              </span>
            </Link>
          </div>
        </div>

        {/* copy */}
        <div className="lg:col-start-2 lg:row-start-3">
          <p className="max-w-[40rem] text-[1.05rem] leading-relaxed text-slate lg:mt-8">
            Foster care provides a safe, temporary home for children who cannot remain with their biological
            families due to safety concerns. While reunification is the primary goal, some children transition to
            long-term foster care or adoption. Open Arms coordinates placements and supports each child&rsquo;s
            emotional, behavioral, and social needs through comprehensive services.
          </p>
          <p className="mt-5 max-w-[40rem] text-[1.05rem] leading-relaxed text-slate">
            At Open Arms Foster Care, we offer a full spectrum of foster care services, including:
          </p>

          <ul className="mt-4 max-w-[40rem] space-y-3 rounded-2xl border-l-[5px] border-leaf-deep bg-white/80 py-5 pl-6 pr-5 shadow-[0_20px_40px_-30px_rgba(25,53,45,0.5)] ring-1 ring-pine/5">
            <li className="flex items-start gap-3 text-[0.98rem] leading-snug text-pine">
              <Chevrons />
              <span>
                <strong className="font-semibold">Emergency foster care services</strong> for children in immediate
                need
              </span>
            </li>
            <li className="flex items-start gap-3 text-[0.98rem] leading-snug text-pine">
              <Chevrons />
              <span>Therapeutic foster care</span>
            </li>
            <li className="flex items-start gap-3 text-[0.98rem] leading-snug text-pine">
              <Chevrons />
              <span>
                Child welfare services in Oklahoma for children who require specialized emotional and psychological
                support
              </span>
            </li>
          </ul>

          <div className="mt-8">
            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-3 rounded-full bg-pine py-2 pl-7 pr-2 font-sans text-[0.95rem] font-semibold text-cream shadow-[0_18px_34px_-16px_rgba(15,33,27,0.7)] transition-colors hover:bg-pine-deep"
            >
              Contact Us
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf text-pine-deep transition-transform duration-300 group-hover:translate-x-1">
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
      </div>
    </section>
  );
}
