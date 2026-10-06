import Image from "next/image";
import { HoverPrefetchLink as Link } from "@/components/ui/hover-prefetch-link";
import { HomeContactForm } from "@/components/forms/home-contact-form";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site-config";

const tileClass =
  "group flex min-w-0 items-center gap-4 rounded-2xl bg-white p-4 pr-6 shadow-[0_18px_40px_-26px_rgba(25,53,45,0.5)] ring-1 ring-pine/10 transition-all duration-300 hover:-translate-y-1 hover:bg-leaf hover:ring-leaf";
const tileIconClass =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pine text-leaf transition-colors duration-300 group-hover:bg-pine-deep";
const tileTextClass =
  "min-w-0 break-words font-sans text-base font-bold text-pine transition-colors duration-300 group-hover:text-pine-deep sm:text-[1.05rem]";

export function ContactMain() {
  return (
    <section className="relative overflow-x-clip">
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-leaf/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-leaf/15 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="flex flex-col gap-8">
            <Reveal>
              <span className="block h-[3px] w-24 rounded-full bg-gradient-to-r from-leaf-deep to-leaf" />
              <h2 className="mt-5 font-sans text-[2.1rem] font-bold leading-[1.1] tracking-tight text-pine sm:text-[2.8rem] lg:text-[3.1rem]">
                We&apos;re Here to{" "}
                <span className="bg-gradient-to-r from-leaf-deep to-leaf bg-clip-text text-transparent">Help</span>
              </h2>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-ink/75 sm:text-lg">
                Reach Out to Us for Any Inquiries or Assistance!
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="grid gap-4 sm:grid-cols-[auto_1fr]">
                <a href={siteConfig.phoneHref} className={tileClass}>
                  <span className={tileIconClass}>
                    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
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
                  <span className={tileTextClass}>{siteConfig.phone}</span>
                </a>
                <a href={siteConfig.emailHref} className={tileClass}>
                  <span className={tileIconClass}>
                    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth={1.8} />
                      <path
                        d="m4 6.5 8 6.5 8-6.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className={tileTextClass}>{siteConfig.email}</span>
                </a>
              </div>
            </Reveal>

            {/* join the team card with a cut-out photo rising out of it */}
            <Reveal delay={150} className="mt-6 sm:mt-10">
              <div className="relative min-h-[23rem] sm:min-h-[17.5rem]">
                <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-gradient-to-br from-pine-deep via-pine to-[#1f4a36] shadow-[0_35px_70px_-30px_rgba(15,33,27,0.7)]">
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                      backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1.4px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[26px] border-white/[0.06]" />
                  <div className="absolute -bottom-20 right-10 h-56 w-56 rounded-full bg-leaf/35 blur-3xl" />
                </div>

                <div className="absolute inset-0 [clip-path:inset(-30%_0_0_0_round_0_0_2rem_2rem)]">
                  <div className="absolute bottom-0 right-0 aspect-[4/3] w-[88%] sm:w-[60%]">
                    <Image
                      src="/mother-child-being-happy-100kb (1) (1).png"
                      alt="A smiling mother laughing with her son"
                      fill
                      sizes="(min-width: 1024px) 26rem, 90vw"
                      className="object-contain object-bottom drop-shadow-[0_18px_22px_rgba(0,0,0,0.35)]"
                    />
                  </div>
                </div>

                <div className="relative flex h-full flex-col justify-start gap-5 p-7 sm:min-h-[17.5rem] sm:max-w-[48%] sm:justify-center sm:p-10">
                  <h3 className="font-sans text-[1.7rem] font-bold leading-tight tracking-tight text-white sm:text-[2rem]">
                    Want to Join Our Team
                  </h3>
                  <Link
                    href="/careers"
                    className="group/apply inline-flex w-fit items-center gap-2 border-b-2 border-leaf pb-1 font-sans text-base font-bold text-white transition-colors hover:text-leaf"
                  >
                    Apply Now
                    <svg
                      viewBox="0 0 16 16"
                      className="h-4 w-4 transition-transform duration-300 group-hover/apply:translate-x-1"
                      aria-hidden
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
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal from="right" delay={100} className="h-full">
            <div
              id="contact-form"
              className="relative h-full scroll-mt-28 overflow-hidden rounded-[2rem_2rem_5rem_2rem] border-4 border-white bg-[#ebf0ee] p-6 shadow-[0_40px_80px_-35px_rgba(25,53,45,0.55)] sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border-[22px] border-leaf/20" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-leaf/20 blur-3xl" />
              <div className="relative">
                <span className="block h-[3px] w-16 rounded-full bg-gradient-to-r from-leaf-deep to-leaf" />
                <h2 className="mt-4 font-sans text-[1.7rem] font-bold leading-tight tracking-tight text-pine sm:text-[2.1rem]">
                  Fill Out the Form Below to Get Started!
                </h2>
                <div className="mt-5 h-px bg-pine/15" />
                <div className="mt-7">
                  <HomeContactForm />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
