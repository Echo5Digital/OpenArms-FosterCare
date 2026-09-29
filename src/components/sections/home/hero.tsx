import { ButtonLink } from "@/components/ui/button-link";

const HERO_VIDEO_ID = "X4SzWVxBvZI";

export function Hero() {
  const videoSrc = `https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_VIDEO_ID}&controls=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&iv_load_policy=3`;

  return (
    <section className="relative flex min-h-[560px] w-full items-center overflow-hidden bg-pine-deep py-24 sm:py-28 lg:py-32">
      <div className="absolute inset-0">
        <iframe
          src={videoSrc}
          title="Open Arms Foster Care"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[130%] min-h-full w-[178%] min-w-full -translate-x-1/2 -translate-y-1/2 sm:w-[130%]"
          allow="autoplay; encrypted-media; picture-in-picture"
          loading="eager"
        />
      </div>

      <div className="absolute inset-0 bg-[rgb(82,99,90)]/55 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-r from-pine-deep/95 via-pine-deep/60 to-pine-deep/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/80 via-transparent to-pine-deep/30" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-mint px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-pine">
            Oklahoma City · Tulsa · Lawton
          </span>

          <h1 className="mt-6 max-w-2xl font-sans text-[2.75rem] font-bold leading-tight tracking-tight text-cream sm:text-[3.75rem]">
            Foster Care in Oklahoma City, Helping Children and Foster Families Thrive
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/85">
            Open Arms Foster Care is a full-service foster care agency based in Oklahoma City, with additional
            offices in Tulsa and Lawton. We help Oklahoma families become foster parents and stay supported every
            step of the way — from training and licensing through placement and beyond, including specialized
            therapeutic foster care for children with higher needs.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ButtonLink href="/sign-up-now" variant="secondary">
              Start Your Foster Care Journey
            </ButtonLink>
            <ButtonLink href="/contact-us" variant="ghost-light">
              Learn How to Become a Foster Parent
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
