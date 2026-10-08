import Image from "next/image";
import { HoverPrefetchLink as Link } from "@/components/ui/hover-prefetch-link";
import { Reveal } from "@/components/ui/reveal";

export function TherapeuticHero() {
  return (
    <section className="relative isolate overflow-hidden bg-pine-deep lg:-mt-[4.5rem]">
      {/* photo, cut on a diagonal */}
      <div
        className="absolute inset-y-0 right-0 -z-10 hidden w-[64%] bg-leaf lg:block"
        style={{ clipPath: "polygon(17% 0, 100% 0, 100% 100%, -1% 100%)" }}
      />
      <div
        className="absolute inset-y-0 right-0 -z-10 w-full overflow-hidden lg:w-[64%] lg:[clip-path:polygon(19%_0,100%_0,100%_100%,1%_100%)]"
      >
        <Image
          src="/side-view-grandmother-grandson-playing-sticking-their-tongues-out-100kb.jpg"
          alt="A grandmother and her grandson sharing a playful moment"
          fill
          priority
          sizes="(min-width: 1024px) 64vw, 100vw"
          className="animate-kenburns object-cover object-[60%_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pine-deep/90 via-pine-deep/60 to-transparent lg:from-pine-deep/30 lg:via-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/70 via-transparent to-transparent" />
      </div>

      <div className="pointer-events-none absolute -left-24 top-0 -z-10 h-96 w-96 rounded-full bg-leaf/20 blur-3xl" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 -z-10 w-1/2 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1.4px)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to right, black, transparent)",
          WebkitMaskImage: "linear-gradient(to right, black, transparent)",
        }}
      />

      <div className="relative mx-auto flex min-h-[32rem] max-w-[1400px] items-center px-5 pb-28 pt-16 sm:px-8 lg:min-h-[42.5rem] lg:pb-32 lg:pt-[8.5rem]">
        <div className="max-w-xl">
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur-md"
            >
              <Link href="/" className="transition-colors hover:text-leaf">
                Home
              </Link>
              <span aria-hidden className="text-leaf">
                &gt;
              </span>
              <span>Therapeutic Foster Care</span>
            </nav>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-7 font-display text-[2.6rem] font-medium leading-[1.05] tracking-tight text-white sm:text-[3.6rem] lg:text-[4.1rem]">
              Become a{" "}
              <span className="relative inline-block text-leaf">
                Therapeutic
                <svg
                  aria-hidden
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-leaf/70"
                  fill="none"
                >
                  <path d="M2 8c40-7 100-7 196-1" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{" "}
              Foster Parent in Oklahoma
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-8 max-w-md border-l-4 border-leaf pl-5 text-base leading-relaxed text-white/90 sm:text-lg">
              Serving <strong className="font-bold text-white">Oklahoma City, Tulsa, and Lawton</strong> with
              compassionate, trauma-informed foster care and 24/7 support for families.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <Link
              href="#healing-hope-form"
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-[rgb(217,179,101)] px-7 py-3.5 font-sans text-base font-semibold text-pine-deep shadow-[0_15px_30px_-12px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[rgb(230,195,121)]"
            >
              Start Your Journey Today
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M4 12h15m0 0-6-6m6 6-6 6"
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

      {/* curved bottom edge */}
      <svg
        aria-hidden
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-[-1px] -z-0 h-14 w-full text-cream sm:h-20"
        fill="currentColor"
      >
        <path d="M0 80V40C240 0 480 0 720 28s480 40 720-8v60H0Z" />
      </svg>
    </section>
  );
}
