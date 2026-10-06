import Image from "next/image";
import { HoverPrefetchLink as Link } from "@/components/ui/hover-prefetch-link";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-leaf";

export function NurturingFutures() {
  return (
    <section className="relative overflow-hidden bg-cream-alt px-5 py-16 sm:px-8 sm:py-24">
      <div aria-hidden className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-leaf/20 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px]">
        {/* offset leaf outline: the site's frame motif */}
        <div
          aria-hidden
          className="absolute -bottom-3 -right-3 h-full w-full rounded-[2rem_2rem_2rem_5rem] border-2 border-leaf sm:-bottom-4 sm:-right-4"
        />

        <div className="group relative isolate overflow-hidden rounded-[2rem_2rem_2rem_5rem] bg-pine-deep shadow-[0_40px_80px_-30px_rgba(15,33,27,0.55)] lg:min-h-[32rem]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.1]"
            style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1.4px)", backgroundSize: "28px 28px" }}
          />
          <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-leaf/20 blur-3xl" />
          {/* a faint second arc around the photo's */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-y-4 -right-4 hidden w-[calc(60%+2rem)] rounded-l-full border border-leaf/30 lg:block"
          />

          {/* the photo: on top on phones and tablets, a half-moon bleeding off the card's edge on desktop */}
          <div className="relative h-72 overflow-hidden rounded-b-[2.5rem] ring-2 ring-leaf ring-offset-[6px] ring-offset-pine-deep sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[60%] lg:rounded-b-none lg:rounded-l-full">
            <Image
              src="/mother-daughter-spending-time-together-outside-park-mother-s-day 1-90kb.jpg"
              alt="A mother and her daughter smiling nose to nose on the grass in a park"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover object-[60%_40%] transition-transform duration-[1600ms] ease-out group-hover:scale-105"
            />
          </div>

          <div className="relative z-10 flex flex-col items-start gap-6 px-6 pb-10 pt-10 sm:px-12 sm:pb-14 lg:min-h-[32rem] lg:w-[44%] lg:justify-center lg:py-16 lg:pl-14 lg:pr-4">
            <span className="block h-1 w-14 rounded-full bg-leaf" />
            <h2 className="font-sans text-[2rem] font-bold leading-[1.1] tracking-tight text-cream sm:text-5xl lg:text-[clamp(2.1rem,3.3vw,3.2rem)]">
              <span className="text-leaf">Nurturing Futures</span>{" "}
              <span className="lg:block lg:text-balance">with Expert Foster Care Solutions</span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-cream/80 sm:text-lg">
              Personalized support for foster parents and children to thrive emotionally, behaviorally, and socially.
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/sign-up-now"
                className={`group/btn inline-flex items-center gap-3 rounded-full bg-leaf py-2 pl-6 pr-2 font-sans text-sm font-bold text-pine-deep shadow-[0_14px_30px_-12px_rgba(141,197,64,0.8)] transition-colors hover:bg-white ${focusRing}`}
              >
                Learn About Foster Care
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pine-deep text-leaf transition-transform duration-300 group-hover/btn:translate-x-0.5">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
                    <path d="M4 12h15m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/about-us#our-video"
                className={`group/btn inline-flex items-center gap-3 rounded-full py-2 pl-2 pr-6 font-sans text-sm font-semibold text-cream ring-1 ring-inset ring-cream/40 transition-colors hover:bg-white/10 hover:ring-cream/70 ${focusRing}`}
              >
                <span className="relative flex h-9 w-9 items-center justify-center">
                  <span aria-hidden className="animate-pulse-ring absolute inset-0 rounded-full bg-cream/70" />
                  <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-cream text-pine-deep">
                    <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4" fill="currentColor" aria-hidden>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
                Play Video
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
