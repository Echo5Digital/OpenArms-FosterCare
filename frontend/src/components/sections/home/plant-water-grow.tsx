import { Reveal } from "@/components/ui/reveal";
import { ScrollVideo } from "@/components/ui/scroll-video";

export function PlantWaterGrow() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pine-deep via-pine to-pine-deep py-20 sm:py-28">
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
          className={`pointer-events-none absolute h-[280px] w-[420px] opacity-70 ${className}`}
          viewBox="0 0 420 280"
          fill="none"
          aria-hidden
        >
          <path
            d="M-20 100 C 80 100, 100 100, 140 140 C 180 180, 220 180, 260 180"
            stroke={`url(#pwgLine1-${key})`}
            strokeWidth="1.5"
          />
          <path
            d="M-20 200 C 60 200, 90 250, 170 250 C 260 250, 280 200, 380 200"
            stroke={`url(#pwgLine2-${key})`}
            strokeWidth="1.5"
          />
          <path d="M40 260 L 160 220 L 280 260" stroke="var(--leaf)" strokeOpacity="0.25" strokeWidth="1" />
          <circle cx="260" cy="180" r="4" fill="var(--leaf)" />
          <circle cx="170" cy="250" r="4" fill="var(--leaf)" />
          <defs>
            <linearGradient id={`pwgLine1-${key}`} x1="0" y1="0" x2="260" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--leaf)" stopOpacity="0" />
              <stop offset="1" stopColor="var(--leaf)" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id={`pwgLine2-${key}`} x1="0" y1="0" x2="380" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--leaf)" stopOpacity="0" />
              <stop offset="1" stopColor="var(--leaf)" stopOpacity="0.35" />
            </linearGradient>
          </defs>
        </svg>
      ))}

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <span className="inline-flex items-center rounded-full bg-leaf px-5 py-2 font-sans text-sm font-semibold text-pine-deep shadow-sm">
            Growth Starts Here
          </span>
          <h2 className="mt-6 font-display text-5xl font-medium leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl">
            Plant. Water.
            <br />
            <span className="text-leaf">Grow.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/75">
            At Open Arms Initiative, we plant seeds of hope, water them with truth and love, and trust God to grow
            them in His time.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative overflow-hidden rounded-[1.75rem] bg-pine-deep shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)] ring-1 ring-leaf/30">
            <div className="flex items-start justify-between gap-4 bg-pine-deep/95 p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-leaf">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-pine-deep" fill="none" aria-hidden>
                    <path
                      d="M12 21s-7-4.4-9.3-8.8C1.1 8 2.6 4.8 5.6 4.1c1.9-.5 3.9.3 5 2 .1.1.3.1.4 0 1.1-1.7 3.1-2.5 5-2 3 .7 4.5 3.9 2.9 7.1C19 16.6 12 21 12 21Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <p className="font-sans text-sm font-semibold leading-snug text-cream sm:text-base">
                  Open Arms Initiative &ndash; Transforming Lives Through Mental Health &amp; Foster Care Support
                </p>
              </div>
              <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-cream/50" fill="currentColor" aria-hidden>
                <circle cx="5" cy="12" r="1.6" />
                <circle cx="12" cy="12" r="1.6" />
                <circle cx="19" cy="12" r="1.6" />
              </svg>
            </div>

            <div className="relative aspect-video w-full">
              <ScrollVideo
                src="https://www.youtube.com/embed/TAKbCOIbNF0?autoplay=1&loop=1&playlist=TAKbCOIbNF0&modestbranding=1&rel=0&playsinline=1"
                title="Open Arms Initiative - Transforming Lives Through Mental Health & Foster Care Support"
                allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

              <span className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-md bg-black/70 px-3 py-1.5 font-sans text-xs font-semibold text-cream backdrop-blur-sm">
                Watch on
                <svg viewBox="0 0 28 20" className="h-4 w-5" aria-hidden>
                  <path
                    d="M27.4 3.1a3.5 3.5 0 0 0-2.5-2.5C22.7 0 14 0 14 0S5.3 0 3.1.6A3.5 3.5 0 0 0 .6 3.1 36 36 0 0 0 0 10a36 36 0 0 0 .6 6.9 3.5 3.5 0 0 0 2.5 2.5C5.3 20 14 20 14 20s8.7 0 10.9-.6a3.5 3.5 0 0 0 2.5-2.5A36 36 0 0 0 28 10a36 36 0 0 0-.6-6.9Z"
                    fill="#FF0000"
                  />
                  <path d="M11.2 14.3 18.5 10l-7.3-4.3Z" fill="#fff" />
                </svg>
                YouTube
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
