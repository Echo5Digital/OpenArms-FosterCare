import Image from "next/image";
import { HoverPrefetchLink as Link } from "@/components/ui/hover-prefetch-link";

// Soft golden discs over the photo, like sunlight through the trees behind the girl. Positions are % of the photo; the
// right strip and the top edge are where the photo is only blurred park, so the faces stay clear.
const bokeh: { right: string; top: string; size: number; opacity: number }[] = [
  { right: "3%", top: "5%", size: 78, opacity: 0.2 },
  { right: "15%", top: "2%", size: 30, opacity: 0.34 },
  { right: "9%", top: "20%", size: 18, opacity: 0.42 },
  { right: "29%", top: "1%", size: 46, opacity: 0.2 },
  { right: "1.5%", top: "34%", size: 52, opacity: 0.18 },
  { right: "5%", top: "51%", size: 22, opacity: 0.34 },
  { right: "2%", top: "64%", size: 92, opacity: 0.12 },
  { right: "13%", top: "77%", size: 36, opacity: 0.22 },
];

/**
 * Home page banner on a dark green backdrop: the heading, an intro paragraph and the two buttons on the left; one large
 * photo on the right (below the text on small screens) that fades into the green, with golden sunlight (soft light
 * rays and bokeh) over its right side and, from lg up, a wavy bottom edge. No video, no carousel.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-pine max-lg:rounded-b-[2.5rem]">
      {/* dark green backdrop with a soft glow and a faint dot texture; the photo fades into it */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <span className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl lg:-right-40 lg:-top-40 lg:h-[34rem] lg:w-[34rem]" />
        <span className="absolute -bottom-40 -left-32 h-[30rem] w-[30rem] rounded-full bg-leaf/15 blur-3xl" />
        <span
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1.2px, transparent 1.6px)",
            backgroundSize: "30px 30px",
            maskImage: "radial-gradient(ellipse at 20% 40%, black 0%, transparent 60%)",
            WebkitMaskImage: "radial-gradient(ellipse at 20% 40%, black 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative flex flex-col pt-[5.5rem] lg:min-h-[calc(100vh-2rem)] lg:flex-row lg:items-center lg:pb-20">
        {/* photo: below the text on small screens, the right side of the banner from lg */}
        <div className="relative order-last mt-10 aspect-[4/4.6] w-full sm:aspect-[16/10] lg:absolute lg:inset-y-0 lg:right-0 lg:order-none lg:mt-0 lg:aspect-auto lg:w-[58%]">
          <div className="absolute inset-0 overflow-hidden lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_34%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_34%)]">
            <Image
              src="/elegant-mother-with-daughter-summer-park-150kb.jpg"
              alt="A smiling little girl hugging her mother in a sunny park"
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="scale-x-[-1] object-cover object-[center_0%] sm:object-[center_15%] lg:object-[center_16%]"
            />
          </div>
          {/* sunlight: a warm glow in the top-right corner, two faint slanted rays and the bokeh discs */}
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden mix-blend-screen">
            <span className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[rgb(217,179,101)]/35 blur-3xl lg:h-96 lg:w-96" />
            <span className="absolute -top-10 right-[22%] h-[130%] w-16 rotate-[24deg] bg-linear-to-b from-[rgb(255,236,190)]/35 via-[rgb(255,236,190)]/10 to-transparent blur-xl" />
            <span className="absolute -top-10 right-[8%] h-[120%] w-9 rotate-[24deg] bg-linear-to-b from-[rgb(255,236,190)]/30 via-[rgb(255,236,190)]/8 to-transparent blur-lg" />
            {bokeh.map((disc) => (
              <span
                key={`${disc.right}-${disc.top}`}
                className="absolute rounded-full"
                style={{
                  right: disc.right,
                  top: disc.top,
                  width: disc.size,
                  height: disc.size,
                  opacity: disc.opacity,
                  background:
                    "radial-gradient(circle at 35% 30%, rgba(255,240,205,0.65), rgba(217,179,101,0.4) 62%, rgba(217,179,101,0.18))",
                  boxShadow: "inset 0 0 0 1px rgba(255,236,190,0.5)",
                  filter: `blur(${disc.size > 60 ? 3 : disc.size > 30 ? 1.5 : 0.5}px)`,
                }}
              />
            ))}
          </div>
          {/* phones: the photo fades up out of the dark green, over the light so there is no hard top edge */}
          <div aria-hidden className="absolute inset-x-0 top-0 h-[38%] bg-linear-to-b from-pine to-transparent lg:hidden" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:grid lg:grid-cols-[1.02fr_0.98fr] lg:px-10">
          {/* heading + buttons */}
          <div className="pt-6 lg:pt-0">
            <h1 className="text-balance font-sans text-[2.35rem] font-bold leading-[1.1] tracking-tight text-white sm:text-[3.2rem] lg:text-[3rem] xl:text-[3.3rem] 2xl:text-[3.7rem] min-[1700px]:text-[4.3rem]">
              Foster Care in Oklahoma City,{" "}
              <br className="hidden min-[1700px]:block" />
              Helping Children and Foster Families{" "}
              <span className="relative inline-block text-leaf">
                Thrive
                <svg
                  aria-hidden
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1.5 left-0 h-3 w-full text-leaf"
                  fill="none"
                >
                  <path d="M2 8c40-7 100-7 196-1" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="mt-6 max-w-[38rem] text-pretty text-[1.02rem] leading-relaxed text-cream/85 sm:mt-7 sm:text-[1.1rem]">
              Open Arms Foster Care is a Therapeutic Foster care agency based in Oklahoma City, with additional
              offices in Tulsa and Lawton. We help Oklahoma families become foster parents and stay supported every
              step of the way, from training and licensing through placement and beyond, including specialized
              therapeutic foster care for children with higher needs.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-9">
              {/* gold button with a plain arrow, then an off-white outlined button with a dark green icon circle */}
              <Link
                href="/sign-up-now"
                className="group inline-flex h-[3.25rem] items-center gap-3.5 rounded-xl bg-[rgb(217,179,101)] px-7 font-sans text-[0.95rem] font-semibold text-pine-deep shadow-[0_14px_28px_-14px_rgba(0,0,0,0.6)] transition-colors hover:bg-[rgb(230,195,121)]"
              >
                Start Your Foster Care Journey
                <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
                  <path
                    d="M4 12h15m0 0-6-6m6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href="/contact-us"
                className="group inline-flex h-[3.25rem] items-center gap-3.5 rounded-xl border border-[rgb(182,192,182)] bg-[rgb(246,245,240)] pl-7 pr-2.5 font-sans text-[0.95rem] font-semibold text-pine shadow-[0_14px_28px_-16px_rgba(0,0,0,0.5)] transition-colors hover:bg-white"
              >
                Talk With Our Team
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-pine-deep text-white transition-transform duration-300 group-hover:scale-110">
                  <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4">
                    <path
                      d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.5c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* from lg the photo runs to the bottom of the banner: a wavy edge in the next section's colour finishes it */}
      <svg
        aria-hidden
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden h-14 w-full text-[rgb(25,53,45)] lg:block"
        fill="currentColor"
      >
        <path d="M0 42C200 6 420 8 640 34s460 22 800-18V60H0Z" />
      </svg>
    </section>
  );
}
