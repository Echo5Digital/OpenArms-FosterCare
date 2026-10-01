import Image from "next/image";
import { JobApplicationForm } from "@/components/forms/job-application-form";
import { Reveal } from "@/components/ui/reveal";

export function CareersApply() {
  return (
    <section id="applynow" className="scroll-mt-24 px-3 pb-6 pt-4 sm:px-5 sm:pb-8">
      <div className="relative mx-auto max-w-[1830px] overflow-hidden rounded-[1.9rem] bg-[#ebf0ee] px-5 pb-10 pt-8 sm:px-10">
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-leaf/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1260px] items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <h2 className="font-sans text-[2.2rem] font-medium leading-[1.1] tracking-tight text-pine-deep sm:text-[3.25rem]">
              Apply:
            </h2>
            <p className="mt-1 font-sans text-base text-pine-deep">
              Fill out some info and we will be reaching out shortly!
            </p>
            <div className="mt-7">
              <JobApplicationForm />
            </div>
          </Reveal>

          {/* cut-out photo rising out of a doodled green panel */}
          <Reveal from="right" delay={120}>
            <div className="relative mx-auto aspect-[5/6] w-full max-w-[26rem] lg:max-w-[30rem]">
              <div className="absolute inset-x-0 bottom-0 top-[16%] overflow-hidden rounded-[1.9rem] bg-gradient-to-br from-leaf via-[#9acf4d] to-leaf-deep shadow-[0_35px_70px_-35px_rgba(25,53,45,0.6)]">
                <svg
                  aria-hidden
                  viewBox="0 0 300 300"
                  className="absolute inset-0 h-full w-full text-white/35"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 150q10-24 20 0t20 0" />
                  <path d="M20 205q12-20 26-4t4 28" />
                  <circle cx="45" cy="85" r="11" />
                  <path d="M30 40h26M30 40q0 16 13 16" />
                  <path d="M250 70q-18 0-18 16t18 16" />
                  <path d="M236 150q12-14 24-2t-6 26" />
                  <circle cx="262" cy="215" r="8" />
                  <path d="M215 262q18-8 22 10" />
                  <path d="M70 262q10-12 22 0t22 0" />
                  <path d="M168 24q8 14-8 18" />
                  <circle cx="22" cy="262" r="4" />
                  <circle cx="276" cy="130" r="4" />
                </svg>
              </div>

              <div className="absolute inset-0 [clip-path:inset(-12%_0_0_0_round_0_0_1.9rem_1.9rem)]">
                <Image
                  src="/xn.png"
                  alt="A smiling mother lifting her laughing daughter in a hug"
                  fill
                  sizes="(min-width: 1024px) 30rem, 26rem"
                  className="object-contain object-bottom drop-shadow-[0_20px_25px_rgba(15,33,27,0.3)]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
