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
    <div className="overflow-x-clip">
      <section className="relative mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="pointer-events-none absolute -right-10 top-10 h-72 w-72 rounded-full bg-leaf/15 blur-3xl" />

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
      </section>
    </div>
  );
}
