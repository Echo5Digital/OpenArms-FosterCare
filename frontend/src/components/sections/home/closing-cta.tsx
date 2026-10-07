import Image from "next/image";
import { HoverPrefetchLink as Link } from "@/components/ui/hover-prefetch-link";
import { Reveal } from "@/components/ui/reveal";

const HEART = "M12 21s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 8.2a4.3 4.3 0 0 1 7.5 2.6C19.5 16.4 12 21 12 21Z";
const SPARKLE = "M12 1.5 14.3 9.7 22.5 12 14.3 14.3 12 22.5 9.7 14.3 1.5 12 9.7 9.7Z";
const PHOTO = "/fam10.jpg";

/** Speech-bubble tail: a small white diamond tucked behind the bubble. */
function Tail({ className }: { className: string }) {
  return <span aria-hidden className={`absolute rotate-45 rounded-[0.3rem] bg-white ${className}`} />;
}

function Arrow({ className }: { className: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className}>
      <path
        d="M4 12h15m0 0-6-6m6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Closing call to action on the home page. Same look as the location pages' "Contact Us Today" panel: a dark
 * green gradient card whose lower half sits on the footer's background, with chat-bubble photos beside the copy.
 */
export function ClosingCta() {
  return (
    <section aria-labelledby="home-cta-heading" className="relative overflow-x-clip pb-4 pt-6 sm:pt-8">
      {/* the footer's colour behind the lower half of the card, so the card straddles the seam with the footer */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-[55%] bg-pine-deep" />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-leaf/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="relative">
          {/* panel background, clipped to the rounded shape */}
          <div
            aria-hidden
            className="absolute inset-0 overflow-hidden rounded-[2rem_2rem_2rem_5rem] bg-[linear-gradient(175deg,#0f211b_0%,#19352d_32%,#2b6634_70%,#6fa22f_100%)] shadow-[0_45px_90px_-35px_rgba(141,197,64,0.32)] ring-1 ring-white/10 sm:rounded-[2.5rem_2.5rem_2.5rem_7rem] lg:bg-[linear-gradient(118deg,#0f211b_0%,#19352d_34%,#2b6634_68%,#6fa22f_100%)]"
          >
            <span className="absolute -right-20 -top-28 h-96 w-96 rounded-full border-[34px] border-white/[0.06]" />
            <span className="absolute -right-6 -top-14 h-64 w-64 rounded-full border border-dashed border-white/15" />
            <span className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-leaf/15 blur-3xl" />
            <span className="absolute -bottom-24 right-[10%] h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <span
              className="absolute inset-0 opacity-[0.2]"
              style={{
                backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1.4px)",
                backgroundSize: "26px 26px",
                maskImage: "radial-gradient(ellipse at 75% 60%, black 8%, transparent 68%)",
                WebkitMaskImage: "radial-gradient(ellipse at 75% 60%, black 8%, transparent 68%)",
              }}
            />
          </div>

          <div className="relative grid items-center gap-10 px-6 py-10 sm:px-12 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-16 lg:py-16">
            {/* copy */}
            <Reveal from="left">
              <span aria-hidden className="mb-5 block h-1 w-14 rounded-full bg-leaf" />
              <h2
                id="home-cta-heading"
                className="font-sans text-[2.2rem] font-bold leading-[1.08] tracking-tight text-white sm:text-[3rem] lg:text-[3.2rem] xl:text-[3.6rem]"
              >
                Ready to open{" "}
                <span className="relative inline-block text-leaf">
                  your home?
                  <svg
                    aria-hidden
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                    className="absolute -bottom-1 left-0 h-2.5 w-full text-leaf/70"
                    fill="none"
                  >
                    <path d="M2 8c40-7 100-7 196-1" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>

              <p className="mt-6 max-w-140 text-pretty text-[1.02rem] leading-relaxed text-white/85 sm:text-[1.1rem]">
                Every child deserves a safe, supportive place to grow, and every foster family deserves a partner who
                has their back. Reach out today to learn more or begin the process of becoming a foster parent.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/sign-up-now"
                  className="animate-cta-glow group relative inline-flex h-15 items-center gap-3 rounded-full bg-white pl-7 pr-2.5 font-sans text-[0.95rem] font-bold text-pine-deep shadow-[0_18px_34px_-14px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[rgb(141,197,64)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Start Your Foster Care Journey
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pine-deep text-leaf transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                    <Arrow className="h-4 w-4" />
                  </span>
                </Link>
                <Link
                  href="/contact-us"
                  className="group inline-flex h-15 items-center gap-3 rounded-full bg-white/5 px-7 font-sans text-[0.95rem] font-bold text-white ring-1 ring-inset ring-white/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-leaf hover:ring-leaf focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Talk With Our Team
                  <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>

            {/* chat-bubble photos */}
            <Reveal delay={150}>
              <div className="relative mx-auto aspect-[11/9] w-full max-w-[22rem] sm:max-w-[28rem] lg:ml-auto lg:mr-0 lg:max-w-[30rem]">
                <span
                  aria-hidden
                  className="absolute left-1/2 top-1/2 aspect-square w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15"
                />
                <span
                  aria-hidden
                  className="absolute left-1/2 top-1/2 aspect-square w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/20"
                />

                {/* main photo bubble */}
                <div className="animate-gentle-bob absolute left-[1%] top-[11%] z-10 w-[66%]">
                  <div className="relative -rotate-2">
                    <Tail className="-bottom-2 left-[12%] h-6 w-6" />
                    <div className="relative aspect-[4/3.2] overflow-hidden rounded-[1.6rem] border-[5px] border-white shadow-[0_28px_40px_-18px_rgba(0,0,0,0.55)] sm:rounded-[1.9rem] sm:border-[6px]">
                      <Image
                        src={PHOTO}
                        alt="A mother, father and two children sitting close together on a sofa in a sunlit living room"
                        fill
                        sizes="(min-width: 1024px) 20rem, 70vw"
                        className="object-cover object-[100%_center]"
                      />
                    </div>
                  </div>
                </div>

                {/* round photo bubble */}
                <div className="animate-float-slow absolute right-[4%] top-0 z-20 w-[36%]">
                  <div className="relative">
                    <Tail className="-bottom-1.5 right-[16%] h-5 w-5" />
                    <div className="relative aspect-square overflow-hidden rounded-full border-[5px] border-white shadow-[0_24px_36px_-16px_rgba(0,0,0,0.55)]">
                      <Image
                        src="/cheerful-little-black-haired-girl-standing-city-park-kid-enjoying-leisure-time-outdoors-summer-medium-shot-vertical-childhood-concept-100kb.jpg"
                        alt="A smiling girl outdoors in a park"
                        fill
                        sizes="(min-width: 1024px) 11rem, 36vw"
                        className="object-cover object-[center_26%]"
                      />
                    </div>
                  </div>
                </div>

                {/* typing indicator bubble */}
                <div className="animate-gentle-bob absolute bottom-[14%] right-[20%] z-30 [animation-delay:-2.5s]">
                  <div className="relative">
                    <Tail className="-bottom-1.5 right-[18%] h-5 w-5" />
                    <div className="relative flex items-center gap-1.5 rounded-[1.5rem] bg-white px-5 py-3.5 shadow-[0_22px_34px_-14px_rgba(0,0,0,0.5)] sm:gap-2 sm:px-6 sm:py-4">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="animate-typing-dot h-2.5 w-2.5 rounded-full bg-leaf-deep sm:h-3 sm:w-3"
                          style={{ animationDelay: `${i * 0.18}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* heart badge */}
                <span className="animate-float-slow absolute -left-[2%] top-[50%] z-30 flex aspect-square w-[15%] items-center justify-center rounded-full border-[3px] border-white bg-gradient-to-br from-leaf to-leaf-deep text-white shadow-[0_18px_30px_-12px_rgba(0,0,0,0.55)] [animation-delay:-1s] sm:border-4">
                  <svg aria-hidden viewBox="0 0 24 24" className="h-[52%] w-[52%]" fill="currentColor">
                    <path d={HEART} />
                  </svg>
                </span>

                {/* sparkles */}
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="animate-twinkle absolute left-[6%] top-[2%] z-30 h-6 w-6 text-white sm:h-7 sm:w-7"
                  fill="currentColor"
                >
                  <path d={SPARKLE} />
                </svg>
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="animate-twinkle absolute bottom-[2%] left-[34%] z-30 h-4 w-4 text-leaf [animation-delay:-1.3s] sm:h-5 sm:w-5"
                  fill="currentColor"
                >
                  <path d={SPARKLE} />
                </svg>
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="animate-twinkle absolute right-0 top-[52%] z-30 h-5 w-5 text-white [animation-delay:-0.6s] sm:h-6 sm:w-6"
                  fill="currentColor"
                >
                  <path d={SPARKLE} />
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
