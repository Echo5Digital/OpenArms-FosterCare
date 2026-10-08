import type { ReactNode } from "react";
import Image from "next/image";
import { HoverPrefetchLink as Link } from "@/components/ui/hover-prefetch-link";
import { Reveal } from "@/components/ui/reveal";

const iconProps = {
  viewBox: "0 0 24 24",
  className: "h-6 w-6",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

// Each point is "Title: description"; the title is set in bold and the sentence is kept exactly as written.
const points: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: "Dedicated case management:",
    body: "one point of contact to guide your journey",
    icon: (
      <svg {...iconProps}>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4V3h6v1M9 11h6M9 15h4" />
      </svg>
    ),
  },
  {
    title: "Peer support:",
    body: "connect with other foster parents",
    icon: (
      <svg {...iconProps}>
        <circle cx="9" cy="8.5" r="3" />
        <path d="M3.5 19c.4-3 2.6-4.8 5.5-4.8s5.1 1.8 5.5 4.8" />
        <path d="M15.5 5.7a3 3 0 0 1 0 5.6M17 14.5c2 .5 3.2 2 3.5 4.5" />
      </svg>
    ),
  },
  {
    title: "Ongoing training:",
    body: "workshops and refreshers throughout the year",
    icon: (
      <svg {...iconProps}>
        <path d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5Z" />
        <path d="M7 11v4.5c0 1 2.2 2.5 5 2.5s5-1.5 5-2.5V11" />
      </svg>
    ),
  },
];

/**
 * One feature panel, "Support for Foster Parents": a family photo on the left with a gold-edged fade into the dark green
 * panel, and the title, the three points (icon rows) and the button on the right. Photo on top on small screens.
 */
export function FosterCarePrograms() {
  return (
    <section className="bg-cream px-5 py-16 sm:px-8 sm:py-24">
      <Reveal className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[2rem] bg-pine shadow-2xl sm:rounded-[2.5rem]">
        {/* soft glow in the corner of the panel */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-leaf/15 blur-3xl"
        />

        <div className="relative grid lg:grid-cols-[0.95fr_1.05fr]">
          {/* photo */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[32rem]">
            <Image
              src="/family-with-baby-standing-outside-house-100kb.jpg"
              alt="Parents holding their baby outside their home"
              fill
              sizes="(min-width: 1200px) 570px, (min-width: 1024px) 48vw, 100vw"
              className="object-cover object-[40%_center]"
            />
            {/* fade the photo into the panel: along the bottom on phones, along the right edge from lg */}
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-pine via-transparent to-transparent lg:bg-linear-to-r lg:from-transparent lg:via-transparent lg:to-pine"
            />
          </div>

          {/* text */}
          <div className="relative px-6 pb-10 pt-2 sm:px-10 sm:pb-12 lg:px-12 lg:py-14">
            <span className="block h-[3px] w-16 rounded-full bg-[rgb(217,179,101)]" />
            <h3 className="mt-5 font-sans text-[2rem] font-bold leading-tight tracking-tight text-cream sm:text-[2.4rem]">
              Support for Foster Parents
            </h3>

            <ul className="mt-7 divide-y divide-white/10 border-y border-white/10">
              {points.map((point) => (
                <li key={point.title} className="flex items-start gap-4 py-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[rgb(217,179,101)]/15 text-[rgb(217,179,101)] ring-1 ring-[rgb(217,179,101)]/40">
                    {point.icon}
                  </span>
                  <p className="pt-0.5 text-[1.02rem] leading-relaxed text-cream/85">
                    <strong className="font-bold text-white">{point.title}</strong> {point.body}
                  </p>
                </li>
              ))}
            </ul>

            <Link
              href="/referrals"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[rgb(217,179,101)] px-7 py-3.5 font-sans text-sm font-semibold text-pine-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-[rgb(230,195,121)] hover:shadow-lg focus-visible:outline-solid focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Refer a Child
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
