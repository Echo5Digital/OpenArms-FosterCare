import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

export function CareersHero() {
  return (
    <section className="px-3 pt-3 sm:px-5 sm:pt-4">
      {/* phones: text on green, photo underneath; lg: text on the left, photo fading in from the right */}
      <div className="relative isolate mx-auto flex max-w-[1600px] flex-col overflow-hidden rounded-[2rem] bg-gradient-to-br from-pine-deep via-pine to-[#1f4a36] sm:rounded-[2.5rem] lg:min-h-[27rem]">
        <div className="pointer-events-none absolute -left-24 -top-28 -z-10 h-96 w-96 rounded-full bg-leaf/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 -z-10 h-96 w-96 rounded-full bg-leaf-deep/30 blur-3xl" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.14]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1.4px)",
            backgroundSize: "30px 30px",
          }}
        />
        <svg
          aria-hidden
          viewBox="0 0 800 800"
          className="pointer-events-none absolute -left-60 top-1/2 -z-10 h-[46rem] w-[46rem] -translate-y-1/2 text-leaf opacity-[0.16]"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="400" cy="400" r="390" strokeWidth="1" />
          <circle cx="400" cy="400" r="300" strokeWidth="1" strokeDasharray="4 10" />
          <circle cx="400" cy="400" r="210" strokeWidth="1" />
        </svg>

        <div className="relative z-10 order-1 w-full px-6 pb-8 pt-12 sm:px-10 sm:pt-14 lg:flex lg:w-[46%] lg:flex-col lg:justify-center lg:px-16 lg:py-16">
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur-md"
            >
              <Link href="/" className="transition-colors hover:text-leaf">
                Home
              </Link>
              <span aria-hidden className="text-leaf">
                &gt;
              </span>
              <span>Careers</span>
            </nav>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 font-sans text-[3rem] font-extrabold leading-[1.02] tracking-tight text-white sm:text-[4.2rem] lg:text-[5rem]">
              <span className="relative inline-block">
                Careers
                <span className="absolute -bottom-2 left-0 h-1.5 w-2/3 rounded-full bg-gradient-to-r from-leaf to-transparent" />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-8 max-w-lg text-lg font-medium leading-snug text-white/90 sm:text-xl">
              At Open Arms Foster Care, we support foster care and adoption journeys starting with placement.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <a
              href="#applynow"
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-leaf px-8 py-3.5 font-sans text-base font-bold text-pine-deep shadow-[0_14px_30px_-12px_rgba(141,197,64,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Apply Now
              <svg
                viewBox="0 0 16 16"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                aria-hidden
              >
                <path
                  d="M8 2v11m0 0-5-5m5 5 5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </Reveal>
        </div>

        <div className="relative order-2 aspect-[2/1] w-full [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_28%)] [mask-image:linear-gradient(to_bottom,transparent,black_28%)] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[64%] lg:[-webkit-mask-image:linear-gradient(to_right,transparent,black_30%)] lg:[mask-image:linear-gradient(to_right,transparent,black_30%)]">
          <Image
            src="/ggrf.jpeg"
            alt="A therapist talking with a young girl holding a teddy bear"
            fill
            priority
            sizes="(min-width: 1024px) 64vw, 100vw"
            className="object-cover object-[57%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/35 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
