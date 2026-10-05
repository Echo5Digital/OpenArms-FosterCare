import Image from "next/image";
import { HoverPrefetchLink as Link } from "@/components/ui/hover-prefetch-link";
import { Reveal } from "@/components/ui/reveal";

export function CareersCta() {
  return (
    <section className="px-3 pb-12 pt-2 sm:px-5 sm:pb-16">
      <div className="relative isolate mx-auto max-w-[1830px] overflow-hidden rounded-[1.9rem]">
        <Image
          src="/close-up-girl-therapist-high-five-100kb.jpg"
          alt="A therapist giving a young girl a high five while her parents look on"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-[50%_45%]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pine-deep/95 via-pine-deep/80 to-pine/55" />
        <div className="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full border-[28px] border-leaf/15" />
        <div className="pointer-events-none absolute -bottom-28 left-1/3 -z-10 h-72 w-72 rounded-full bg-leaf/25 blur-3xl" />

        <div className="relative mx-auto max-w-[1260px] px-6 py-14 sm:px-10 sm:py-20">
          <Reveal>
            <span className="block h-[3px] w-20 rounded-full bg-leaf" />
            <h2 className="mt-5 max-w-3xl font-sans text-[2.1rem] font-bold leading-[1.1] tracking-tight text-white sm:text-[3.1rem]">
              Take the Next Step in Your Journey
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
              If you are a foster or adoptive family seeking support after placement, we invite you to reach out to
              us.
            </p>
            <Link
              href="/contact-us"
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-leaf px-8 py-3.5 font-sans text-base font-bold text-pine-deep shadow-[0_14px_30px_-12px_rgba(141,197,64,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Contact Now
              <svg
                viewBox="0 0 16 16"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              >
                <path
                  d="M2 8h11m0 0-5-5m5 5-5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
