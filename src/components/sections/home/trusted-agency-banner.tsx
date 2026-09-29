import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function TrustedAgencyBanner() {
  return (
    <section className="relative bg-cream-alt">
      <div className="relative overflow-hidden bg-[rgb(216,234,203)] py-16 sm:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-leaf/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-10 h-56 w-56 rounded-full bg-leaf/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <div className="order-1 lg:order-2 lg:col-start-2">
            <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-leaf-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Serving Oklahoma
            </span>

            <h2 className="mt-4 max-w-2xl font-sans text-[2.15rem] font-bold leading-tight tracking-tight text-pine sm:text-[2.8rem]">
              A Trusted Foster Care Agency Serving Oklahoma City
            </h2>
          </div>

          <div className="relative order-2 mx-auto w-full max-w-sm lg:order-1 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:max-w-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_20px_45px_rgba(15,33,27,0.22)]">
              <Image
                src="/medium-shot-girl-holding-toy-100kb.jpg"
                alt="A young girl in foster care holding her favorite toy"
                fill
                sizes="(min-width: 1024px) 35vw, 80vw"
                className="object-cover"
              />
            </div>
            <span
              aria-hidden
              className="absolute -left-3 -top-3 h-16 w-16 rounded-full border-4 border-white bg-[rgb(225,244,212)] shadow-sm sm:h-[4.5rem] sm:w-[4.5rem]"
            />
            <div className="absolute -bottom-4 -right-3 max-w-[10.5rem] rounded-2xl bg-[rgb(141,197,64)] px-4 py-3 text-pine shadow-lg sm:-right-5 sm:px-5 sm:py-4">
              <p className="font-display text-lg font-medium leading-tight">Oklahoma Care</p>
              <p className="mt-1 font-sans text-xs font-semibold leading-snug">Support for every family</p>
            </div>
          </div>

          <div className="order-3 lg:order-2 lg:col-start-2">
            <p className="max-w-2xl text-[1.125rem] leading-relaxed text-ink/75">
              Open Arms Foster Care supports children who need a safe, stable home and the families who open their
              doors to them. As an Oklahoma City foster care agency, we recruit, train, and walk alongside foster
              parents so no family has to navigate the process alone. Our work spans the full range of foster care
              from becoming a first-time foster parent, to emergency placements, to therapeutic foster care for
              children with elevated emotional or behavioral needs.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[rgb(141,197,64)] px-6 py-3 font-sans text-sm font-semibold text-pine transition-colors duration-300 hover:bg-[rgb(121,177,46)]"
              >
                Talk With Our Foster Care Team
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.5} fill="none" />
                  <path
                    d="M9 8l4 4-4 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <a href={siteConfig.phoneHref} className="group flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pine/10 text-pine transition-all duration-300 group-hover:scale-110 group-hover:bg-[rgb(141,197,64)] group-hover:text-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12"
                    aria-hidden
                  >
                    <path
                      d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.5c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.7}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="font-sans text-sm leading-tight text-ink/70">
                  Call Us:
                  <br />
                  <span className="font-semibold text-pine transition-colors duration-300 group-hover:text-leaf-deep">
                    {siteConfig.phone}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
