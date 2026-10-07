import { ButtonLink } from "@/components/ui/button-link";
import { AboutPhotoDuo } from "@/components/sections/home/about-photo-duo";
import { Reveal } from "@/components/ui/reveal";

const checklist = [
  "Comprehensive trauma-informed training.",
  "Counseling services to support foster families.",
  "Local offices in Oklahoma City, Tulsa, and Lawton for easy access.",
];

export function TrustedAgency() {
  return (
    <section className="relative overflow-hidden bg-[#fbfdf7]">
      {/* background design: a fine grid on white, a thin ring, and a solid green panel behind the photos (all static) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(25,53,45,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(25,53,45,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at 75% 40%, black 10%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 75% 40%, black 10%, transparent 75%)",
        }}
      />
      <span aria-hidden className="pointer-events-none absolute -right-24 -top-24 hidden h-[22rem] w-[22rem] rounded-full border border-leaf-deep/30 lg:block" />
      <span aria-hidden className="pointer-events-none absolute -right-10 -top-10 hidden h-[16rem] w-[16rem] rounded-full border border-dashed border-leaf-deep/30 lg:block" />
      <span aria-hidden className="pointer-events-none absolute bottom-16 right-[8%] hidden h-3 w-3 rounded-full bg-leaf lg:block" />

      {/* the green panel: a band under the photos on phones, the left half of the section from lg up */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[32%] overflow-hidden rounded-t-[3rem] bg-[linear-gradient(135deg,#a3d455_0%,#8dc540_45%,#6fa22f_100%)] lg:inset-x-auto lg:inset-y-14 lg:left-0 lg:h-auto lg:w-1/2 lg:rounded-t-none lg:rounded-r-[5rem]"
      >
        <span
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1.2px, transparent 1.6px)",
            backgroundSize: "24px 24px",
          }}
        />
        <span className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full border-[34px] border-white/15" />
        <span className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/20 blur-2xl" />
        <span className="absolute bottom-10 right-10 hidden h-24 w-24 rounded-full border border-dashed border-white/50 lg:block" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="relative grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal className="lg:order-2">
            <span className="block h-[3px] w-24 rounded-full bg-pine" />
            <p className="mt-5 font-sans text-base font-medium text-leaf-deep">About Us</p>

            <h2 className="mt-2 font-sans text-[2rem] font-bold leading-tight tracking-tight text-pine sm:text-[2.6rem]">
              Your Trusted Partner in Foster Care Across Oklahoma
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/80">
              We focus on <strong className="font-bold text-pine">therapeutic foster care</strong>,{" "}
              <strong className="font-bold text-pine">supportive foster care</strong> and{" "}
              <strong className="font-bold text-pine">intensive treatment family care</strong> to ensure children
              receive the best emotional, behavioral, and social support. Our experienced team offers personalized
              guidance to help foster parents thrive in their roles.
            </p>

            <ul className="mt-6 max-w-xl space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.95rem] font-medium leading-snug text-pine">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf text-pine-deep">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden>
                      <path
                        d="M5 13l4 4L19 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <ButtonLink href="/about-us" className="hover:bg-[rgb(141,197,64)]! hover:text-pine-deep!">
                Our Story
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:order-1">
            <AboutPhotoDuo />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
