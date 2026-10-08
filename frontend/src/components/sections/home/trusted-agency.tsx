import Image from "next/image";
import { HoverPrefetchLink as Link } from "@/components/ui/hover-prefetch-link";
import { siteConfig } from "@/lib/site-config";

const highlights = [
  "Comprehensive trauma-informed training.",
  "Counseling services to support foster families.",
  "Local offices in Oklahoma City, Tulsa, and Lawton for easy access.",
];

/**
 * A plain intro on dark green: heading, a thin line, the paragraph, the three highlights and the call to action on the
 * left, one framed photo on the right (under the text on small screens).
 */
export function TrustedAgency() {
  return (
    <section className="bg-[rgb(25,53,45)] py-14 max-lg:-mt-10 max-lg:pt-24 sm:py-16 sm:max-lg:pt-[6.5rem] lg:py-20">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 sm:px-10 lg:grid-cols-[1fr_22rem] lg:gap-14 lg:px-16 xl:grid-cols-[1fr_27rem] xl:gap-20">
        <div>
        <h2 className="font-sans text-[2rem] font-bold leading-tight tracking-tight text-white sm:text-[2.6rem]">
          Your Trusted Partner in Foster Care Across Oklahoma
        </h2>
        <span aria-hidden className="mt-5 block h-px w-full max-w-[27rem] bg-white/70" />

        <p className="mt-7 max-w-[44rem] text-pretty text-base leading-[1.75] text-white sm:text-[1.05rem]">
          We focus on <strong className="font-bold">therapeutic foster care</strong>,{" "}
          <strong className="font-bold">supportive foster care</strong> and{" "}
          <strong className="font-bold">intensive treatment family care</strong> to ensure children receive the best
          emotional, behavioral, and social support. Our experienced team offers personalized guidance to help foster
          parents thrive in their roles.
        </p>

        <ul className="mt-5 space-y-2">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-white sm:text-[1.05rem]">
              <span aria-hidden className="mt-[0.72rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(217,179,101)]" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
          <Link
            href="/sign-up-now"
            className="inline-flex items-center gap-2 rounded-lg bg-[rgb(217,179,101)] px-4 py-2.5 font-sans text-[0.95rem] font-medium text-pine-deep transition-colors hover:bg-[rgb(230,195,121)] focus-visible:outline-solid focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Start Fostering
            <svg viewBox="0 0 24 24" className="h-[1.15rem] w-[1.15rem]" fill="none" aria-hidden>
              <circle cx={12} cy={12} r={9.25} stroke="currentColor" strokeWidth={1.8} />
              <path d="M8 12h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <a href={siteConfig.phoneHref} className="group inline-flex items-center gap-3 text-white">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[rgb(217,179,101)]" aria-hidden>
              <path
                d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.5c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="flex flex-col leading-tight">
              <span className="font-sans text-[0.68rem] font-semibold uppercase tracking-wider text-white/75">Call us today</span>
              <span className="font-sans text-base font-bold group-hover:underline">{siteConfig.phone}</span>
            </span>
          </a>
        </div>
        </div>

        {/* photo: a leaf-shaped crop with a gold outline offset behind it and a little dot grid */}
        <div className="relative mx-auto w-full max-w-[22rem] lg:max-w-none">
          <span
            aria-hidden
            className="absolute -right-6 -top-6 hidden h-24 w-24 opacity-70 sm:block"
            style={{
              backgroundImage: "radial-gradient(circle, rgb(217,179,101) 1.8px, transparent 2.2px)",
              backgroundSize: "14px 14px",
            }}
          />
          <span
            aria-hidden
            className="absolute inset-0 -translate-x-3.5 translate-y-3.5 rounded-[1.5rem] rounded-br-[5rem] rounded-tl-[5rem] border-2 border-[rgb(217,179,101)]"
          />
          <div className="relative aspect-[4/4.6] overflow-hidden rounded-[1.5rem] lg:aspect-square rounded-br-[5rem] rounded-tl-[5rem] shadow-[0_30px_50px_-28px_rgba(0,0,0,0.6)]">
            <Image
              src="/black-baby-spending-time-with-her-dad-90kb (1).jpg"
              alt="A smiling father with his little daughter sitting on his shoulders, playing together at home"
              fill
              sizes="(min-width: 1280px) 27rem, (min-width: 1024px) 22rem, 22rem"
              className="object-cover object-[center_12%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
