import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { ScrollVideo } from "@/components/ui/scroll-video";

const VIDEO_ID = "TAKbCOIbNF0";
const VIDEO_TITLE = "Open Arms Initiative – Transforming Lives Through Mental Health & Foster Care Support";

// the diagonal edge of the lighter panel, the same cut the service pages use behind their photos
const slant = "[clip-path:polygon(40px_0,100%_0,100%_100%,0_100%)]";

export function PlantWaterGrow() {
  return (
    <section className="relative overflow-hidden bg-pine-deep py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute -left-32 -top-28 h-[28rem] w-[28rem] rounded-full bg-leaf/[0.12] blur-3xl" />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <span className="flex items-center gap-4 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-leaf">
            <span aria-hidden className="h-px w-10 bg-leaf/70" />
            Growth Starts Here
          </span>

          <h2 className="mt-7 font-display text-6xl font-medium leading-[1.02] tracking-tight text-cream sm:text-7xl lg:text-[5.25rem]">
            Plant. Water.
            <br />
            <span className="relative inline-block text-leaf">
              Grow.
              <svg
                aria-hidden
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-3 w-full text-leaf/70"
                fill="none"
              >
                <path d="M2 8c40-7 100-7 196-1" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          <p className="mt-9 max-w-md text-lg leading-[1.8] text-cream/75">
            At Open Arms Initiative, we plant seeds of hope, water them with truth and love, and trust God to grow
            them in His time.
          </p>
        </Reveal>

        <div className="relative">
          {/* from lg up, a lighter green panel with a leaf-green edge runs behind the video and off the right side of the page */}
          <div aria-hidden className={`pointer-events-none absolute -bottom-28 -top-28 left-[-3.9rem] right-[-100vw] hidden bg-leaf lg:block ${slant}`} />
          <div
            aria-hidden
            className={`pointer-events-none absolute -bottom-28 -top-28 left-[-3.5rem] right-[-100vw] hidden bg-gradient-to-br from-[#2f6d40] via-[#26593a] to-[#1c4631] lg:block ${slant}`}
          >
            <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_right,transparent,black_45%)]" />
          </div>

          {/* on phones the same green sits as a padded card around the video */}
          <Reveal
            delay={120}
            className="relative rounded-[1.75rem] bg-gradient-to-br from-[#2f6d40] to-[#1c4631] p-3 ring-1 ring-leaf/40 lg:rounded-none lg:bg-none lg:p-0 lg:ring-0"
          >
            <div className="relative">
              <div className="relative overflow-hidden rounded-[1.25rem] bg-pine-deep shadow-[0_45px_90px_-30px_rgba(0,0,0,0.75)] ring-1 ring-white/20 lg:rounded-[1.5rem]">
                <div className="relative aspect-video w-full bg-pine-deep">
                  {/* the video's own picture, so the frame is never empty before the player starts */}
                  <Image
                    src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                  />
                  <ScrollVideo
                    src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&loop=1&playlist=${VIDEO_ID}&modestbranding=1&rel=0&playsinline=1`}
                    title={VIDEO_TITLE}
                    allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                <div className="flex items-center gap-3 border-t border-white/10 px-5 py-4">
                  <p className="font-sans text-sm leading-snug tracking-wide text-cream/85">{VIDEO_TITLE}</p>
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
