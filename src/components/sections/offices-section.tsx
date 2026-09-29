import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { offices } from "@/lib/site-config";

const notch = "[clip-path:polygon(28px_0,100%_0,100%_100%,0_100%,0_28px)]";

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
            className={`pointer-events-none absolute h-[260px] w-[400px] opacity-50 ${className}`}
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
              const isBright = i === 1;
              return (
                <Link
                  key={office.id}
                  href={`/${office.slug}`}
                  className={`group relative flex flex-col justify-between overflow-hidden p-8 pt-10 transition-transform duration-300 hover:-translate-y-1.5 ${notch} ${
                    isBright ? "bg-leaf" : "bg-white/5 ring-1 ring-cream/10"
                  }`}
                >
                  <div>
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-lg ${
                        isBright ? "bg-pine-deep/15 text-pine-deep" : "bg-leaf/15 text-leaf"
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                        <path
                          d="M12 21s-7-5-7-11a7 7 0 1 1 14 0c0 6-7 11-7 11Z"
                          stroke="currentColor"
                          strokeWidth={1.8}
                          strokeLinejoin="round"
                        />
                        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth={1.8} />
                      </svg>
                    </span>
                    <h3
                      className={`mt-5 font-display text-2xl font-medium ${isBright ? "text-pine-deep" : "text-cream"}`}
                    >
                      {office.city}
                    </h3>
                    <p className={`mt-3 text-sm leading-relaxed ${isBright ? "text-pine-deep/80" : "text-cream/65"}`}>
                      {office.streetAddress}
                      <br />
                      {office.addressLocality}, {office.addressRegion} {office.postalCode}
                    </p>
                  </div>
                  <span
                    className={`mt-8 inline-flex items-center gap-2 font-sans text-sm font-semibold ${
                      isBright ? "text-pine-deep" : "text-leaf"
                    }`}
                  >
                    Learn More
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1">
                      <path
                        d="M2 8h11m0 0-5-5m5 5-5 5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
