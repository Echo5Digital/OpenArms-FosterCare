import type { CSSProperties } from "react";
import { HoverPrefetchLink as Link } from "@/components/ui/hover-prefetch-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { offices } from "@/lib/site-config";

/**
 * Card colours, one per office in order. `fill` is a flat colour (the card is built from several pieces that must
 * match exactly), `shadow` is a drop-shadow that follows the notched outline.
 */
const tones = [
  {
    fill: "#ffffff",
    shadow: "drop-shadow(0 26px 30px rgba(0,0,0,0.35))",
    icon: "text-pine",
    title: "text-pine-deep",
    body: "text-slate",
    pill: "bg-white text-pine-deep group-hover:bg-leaf",
    decor: "bg-leaf/15",
  },
  {
    fill: "var(--leaf)",
    shadow: "drop-shadow(0 28px 38px rgba(141,197,64,0.28))",
    icon: "text-pine-deep",
    title: "text-pine-deep",
    body: "text-pine-deep/75",
    pill: "bg-leaf text-pine-deep group-hover:bg-white",
    decor: "bg-leaf-deep/30",
  },
  {
    fill: "var(--pine)",
    shadow: "drop-shadow(0 0 1px rgba(255,255,255,0.35)) drop-shadow(0 26px 30px rgba(0,0,0,0.4))",
    icon: "text-leaf",
    title: "text-white",
    body: "text-white/70",
    pill: "bg-pine text-white group-hover:bg-leaf group-hover:text-pine-deep",
    decor: "bg-leaf/10",
  },
];

/** Size of the bottom-left notch that holds the "Learn More" pill, and the corner radius used around it. */
const cardVars = { "--r": "1.5rem", "--nw": "10.75rem", "--nh": "4.25rem" } as CSSProperties;

export function OfficesSection() {
  return (
    <section className="py-10 sm:py-14">
      <div className="relative mx-4 overflow-hidden rounded-[3rem] bg-pine-deep px-5 py-16 sm:mx-8 sm:px-8 sm:py-24">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-leaf/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-leaf/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-leaf/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-leaf/10 blur-3xl" />

        {[
          { key: "tl", className: "left-0 top-0 -scale-y-100" },
          { key: "tr", className: "right-0 top-0 -scale-x-100 -scale-y-100" },
          { key: "bl", className: "bottom-0 left-0" },
          { key: "br", className: "bottom-0 right-0 -scale-x-100" },
        ].map(({ key, className }) => (
          <svg
            key={key}
            className={`pointer-events-none absolute hidden h-[260px] w-[400px] opacity-50 sm:block ${className}`}
            viewBox="0 0 400 260"
            fill="none"
            aria-hidden
          >
            <path
              d="M440 90 C 340 90, 320 90, 280 130 C 240 170, 200 170, 160 170"
              stroke={`url(#officesLine1-${key})`}
              strokeWidth="1.5"
            />
            <path
              d="M440 190 C 360 190, 330 240, 250 240 C 160 240, 140 190, 40 190"
              stroke={`url(#officesLine2-${key})`}
              strokeWidth="1.5"
            />
            <circle cx="160" cy="170" r="4" fill="var(--leaf)" />
            <circle cx="250" cy="240" r="4" fill="var(--leaf)" />
            <defs>
              <linearGradient id={`officesLine1-${key}`} x1="400" y1="0" x2="160" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--leaf)" stopOpacity="0" />
                <stop offset="1" stopColor="var(--leaf)" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id={`officesLine2-${key}`} x1="400" y1="0" x2="40" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--leaf)" stopOpacity="0" />
                <stop offset="1" stopColor="var(--leaf)" stopOpacity="0.35" />
              </linearGradient>
            </defs>
          </svg>
        ))}

        <div className="relative mx-auto max-w-[1400px]">
          <SectionHeading
            eyebrow="Office Locations"
            title="Local presence across Oklahoma"
            align="center"
            tone="light"
            className="mx-auto"
            titleClassName="font-sans text-[2.1rem] font-bold leading-tight tracking-tight text-cream sm:text-[2.6rem]"
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {offices.map((office, i) => {
              const tone = tones[i % tones.length];
              return (
                <Link
                  key={office.id}
                  href={`/${office.slug}`}
                  className="group relative block transition-transform duration-300 hover:-translate-y-1.5"
                  style={{ ...cardVars, "--fill": tone.fill, filter: tone.shadow } as CSSProperties}
                >
                  {/* card shape: a body with a notch cut out of the bottom-left corner (built from three flat pieces) */}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0"
                    style={{ bottom: "var(--nh)", background: "var(--fill)", borderRadius: "var(--r) var(--r) 0 var(--r)" }}
                  />
                  <span
                    aria-hidden
                    className="absolute bottom-0 right-0 overflow-hidden"
                    style={{
                      left: "var(--nw)",
                      top: "40%",
                      background: "var(--fill)",
                      borderRadius: "0 0 var(--r) var(--r)",
                    }}
                  >
                    <span className={`absolute -bottom-24 -right-20 h-64 w-64 rounded-full ${tone.decor}`} />
                    <span className={`absolute -bottom-12 -right-8 h-36 w-36 rounded-full ${tone.decor}`} />
                  </span>
                  <span
                    aria-hidden
                    className="absolute"
                    style={{
                      left: "calc(var(--nw) - var(--r))",
                      top: "calc(100% - var(--nh))",
                      width: "var(--r)",
                      height: "var(--r)",
                      background:
                        "radial-gradient(circle at 0 100%, transparent calc(var(--r) - 0.5px), var(--fill) var(--r))",
                    }}
                  />

                  {/* "Learn More" pill, floating in the notch */}
                  <span
                    className={`absolute bottom-0 left-0 inline-flex h-12 items-center gap-2 rounded-full px-6 font-sans text-sm font-bold transition-colors duration-300 ${tone.pill}`}
                  >
                    Learn More
                    <svg
                      viewBox="0 0 16 16"
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M2 8h11m0 0-5-5m5 5-5 5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.9}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <div className="relative p-7 pb-[calc(var(--nh)+1.5rem)] sm:p-9 sm:pb-[calc(var(--nh)+1.75rem)]">
                    <svg viewBox="0 0 24 24" className={`h-12 w-12 ${tone.icon}`} fill="none" aria-hidden>
                      <path
                        d="M12 21s-7-5-7-11a7 7 0 1 1 14 0c0 6-7 11-7 11Z"
                        stroke="currentColor"
                        strokeWidth={1.4}
                        strokeLinejoin="round"
                      />
                      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth={1.4} />
                    </svg>
                    <h3 className={`mt-7 font-sans text-[1.65rem] font-semibold leading-tight ${tone.title}`}>
                      {office.city}
                    </h3>
                    <p className={`mt-3 text-[0.95rem] leading-relaxed ${tone.body}`}>
                      {office.streetAddress}
                      <br />
                      {office.addressLocality}, {office.addressRegion} {office.postalCode}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
