import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

const checklist = [
  "Comprehensive trauma-informed training.",
  "Counseling services to support foster families.",
  "Local offices in Oklahoma City, Tulsa, and Lawton for easy access.",
];

export function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-pine-deep via-pine to-[#1f4a36]">
      {/* ambient light + texture */}
      <div className="pointer-events-none absolute -left-32 -top-32 -z-10 h-[30rem] w-[30rem] rounded-full bg-leaf/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-leaf-deep/30 blur-3xl" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.14]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1.4px)",
          backgroundSize: "30px 30px",
          maskImage: "linear-gradient(to right, transparent, black 30%, black 70%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 30%, black 70%, transparent)",
        }}
      />
      <svg
        aria-hidden
        viewBox="0 0 800 800"
        className="pointer-events-none absolute -right-40 top-1/2 -z-10 h-[52rem] w-[52rem] -translate-y-1/2 text-leaf opacity-[0.18]"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="400" cy="400" r="390" strokeWidth="1" />
        <circle cx="400" cy="400" r="300" strokeWidth="1" strokeDasharray="4 10" />
        <circle cx="400" cy="400" r="210" strokeWidth="1" />
      </svg>

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-28 lg:pt-20">
        {/* copy */}
        <div>
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur-md"
            >
              <Link href="/" className="transition-colors hover:text-leaf">
                Home
              </Link>
              <span aria-hidden className="text-leaf">
                &gt;
              </span>
              <span>About Us</span>
            </nav>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-7 max-w-2xl font-sans text-[2.4rem] font-extrabold leading-[1.06] tracking-tight text-white sm:text-[3.4rem] lg:text-[3.8rem]">
              Your Trusted Partner in{" "}
              <span className="bg-gradient-to-r from-leaf via-[#c4e88a] to-leaf bg-clip-text text-transparent">
                Foster Care
              </span>{" "}
              Across Oklahoma
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/80 sm:text-lg">
              We focus on therapeutic foster care, supportive foster care, and intensive treatment family care to
              ensure children receive the best emotional, behavioral, and social support.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <ul className="mt-8 max-w-xl space-y-3 rounded-3xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-md sm:p-6">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.97rem] font-medium leading-snug text-white">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf text-pine-deep shadow-[0_0_0_4px_rgba(141,197,64,0.2)]">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
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
          </Reveal>
        </div>

        {/* image mosaic */}
        <Reveal delay={150} from="right">
          <div className="relative mx-auto h-[26rem] w-full max-w-[34rem] sm:h-[32rem] lg:h-[35rem]">
            <div className="animate-gentle-bob absolute bottom-[4%] left-0 top-[6%] w-[54%] overflow-hidden rounded-t-[999px] rounded-b-[2rem] border-4 border-white/20 shadow-[0_35px_70px_-25px_rgba(0,0,0,0.6)]">
              <Image
                src="/happy-family-outdoors-spending-time-together-100kb.jpg"
                alt="A family enjoying time together outdoors"
                fill
                priority
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="object-cover object-[45%_center]"
              />
            </div>

            <div className="animate-float-slow absolute right-0 top-0 aspect-square w-[40%] overflow-hidden rounded-full border-4 border-leaf/70 shadow-[0_25px_50px_-20px_rgba(0,0,0,0.6)]">
              <Image
                src="/medium-shot-girl-holding-toy-100kb.jpg"
                alt="A smiling child holding a soft toy"
                fill
                priority
                sizes="(min-width: 1024px) 14vw, 40vw"
                className="object-cover object-[center_25%]"
              />
            </div>

            <div className="absolute bottom-0 right-[3%] aspect-[4/3] w-[44%] overflow-hidden rounded-[2rem_2rem_2rem_0.5rem] border-4 border-white/20 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]">
              <Image
                src="/aae.jpeg"
                alt="Open Arms Foster Care supporting a child and family"
                fill
                priority
                sizes="(min-width: 1024px) 16vw, 44vw"
                className="object-cover"
              />
            </div>

            <span className="animate-float-slow absolute left-[46%] top-[40%] flex h-14 w-14 items-center justify-center rounded-full bg-leaf text-pine-deep shadow-[0_15px_30px_-10px_rgba(141,197,64,0.8)] [animation-delay:-2s] sm:h-16 sm:w-16">
              <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" aria-hidden>
                <path d="M12 21s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 8.2a4.3 4.3 0 0 1 7.5 2.6C19.5 16.4 12 21 12 21Z" />
              </svg>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
