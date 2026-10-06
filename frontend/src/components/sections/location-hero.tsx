import Image from "next/image";
import { HoverPrefetchLink as Link } from "@/components/ui/hover-prefetch-link";
import { Reveal } from "@/components/ui/reveal";

type Crumb = { label: string; href?: string };

const PinIcon = ({ className }: { className: string }) => (
  <svg aria-hidden viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.800 7-13a7 7 0 0 0-7-7Zm0 9.500A2.500 2.500 0 1 1 12 6.500a2.500 2.500 0 0 1 0 5Z" />
  </svg>
);

export function LocationHero({
  title,
  intro,
  breadcrumb,
  image,
  imageAlt,
  imagePosition = "object-center",
  imageFit = "zoom",
}: {
  title: string;
  intro: string;
  breadcrumb: Crumb[];
  image: string;
  imageAlt: string;
  imagePosition?: string;
  /** "full" keeps the photo's full width inside the pin instead of the default zoomed crop. */
  imageFit?: "zoom" | "full";
}) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-pine-deep via-pine to-[#1c4a3a]">
      {/* topographic contour lines */}
      <svg
        aria-hidden
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full text-leaf opacity-[0.16]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M-50 420C100 360 200 470 360 430s260-140 420-90 300 150 470 70" />
        <path d="M-50 470C120 415 220 520 380 485s250-120 410-75 310 135 470 65" />
        <path d="M-50 520C140 470 240 565 400 540s240-100 400-60 320 120 470 60" />
        <path d="M-50 370C90 310 190 410 340 375s270-150 430-105 290 160 480 80" />
        <path d="M-50 320C80 255 180 355 320 320s280-160 440-120 280 170 490 90" />
        <path d="M-50 270C70 200 170 300 300 265s290-170 450-135 270 180 500 100" />
      </svg>
      <div className="pointer-events-none absolute -left-24 -top-24 -z-10 h-96 w-96 rounded-full bg-leaf/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-10 -z-10 h-96 w-96 rounded-full bg-leaf-deep/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-16 px-5 pb-28 pt-14 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-32 lg:pt-20">
        {/* copy */}
        <div>
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="inline-flex flex-wrap items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur-md"
            >
              <PinIcon className="mr-1 h-4 w-4 text-leaf" />
              {breadcrumb.map((c, i) => (
                <span key={c.label} className="flex items-center gap-1.5">
                  {i > 0 && (
                    <span aria-hidden className="text-leaf">
                      &gt;
                    </span>
                  )}
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-leaf">
                      {c.label}
                    </Link>
                  ) : (
                    <span>{c.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-7 font-display text-[3rem] font-medium leading-[1.02] tracking-tight text-white sm:text-[4.4rem] lg:text-[5rem]">
              <span className="relative inline-block">
                {title}
                <span className="absolute -bottom-2 left-0 h-1.5 w-2/3 rounded-full bg-gradient-to-r from-leaf to-transparent" />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-9 max-w-2xl rounded-3xl border border-white/15 bg-white/[0.07] p-5 text-[0.98rem] leading-relaxed text-white/90 backdrop-blur-md sm:p-6 sm:text-base">
              {intro}
            </p>
          </Reveal>
        </div>

        {/* map-pin photo */}
        <Reveal delay={150} from="right">
          <div className="relative mx-auto w-[min(21rem,72vw)] lg:w-[min(24rem,100%)]">
            <div className="animate-gentle-bob relative aspect-square w-full">
              <div className="absolute inset-0 rotate-[-45deg] overflow-hidden rounded-[50%_50%_50%_0] border-[6px] border-white/30 shadow-[0_40px_80px_-25px_rgba(0,0,0,0.65)]">
                <div className={`absolute rotate-45 ${imageFit === "full" ? "inset-x-0 -inset-y-[20.7%]" : "-inset-[22%]"}`}>
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 28vw, 70vw"
                    className={`object-cover ${imagePosition}`}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/40 to-transparent" />
              </div>
            </div>

            {/* ground ripples under the pin tip */}
            <div className="absolute -bottom-8 left-1/2 h-8 w-44 -translate-x-1/2">
              <div className="animate-ripple-arch absolute inset-0 rounded-[50%] border-2 border-leaf/80" />
              <div className="animate-ripple-arch absolute inset-0 rounded-[50%] border-2 border-leaf/80 [animation-delay:-1.8s]" />
              <div className="absolute inset-x-12 inset-y-2 rounded-[50%] bg-leaf/60 blur-sm" />
            </div>

            <PinIcon className="animate-float-slow absolute -left-6 top-6 h-9 w-9 text-leaf drop-shadow-lg" />
            <PinIcon className="animate-float-slow absolute -right-4 bottom-16 h-7 w-7 text-white/70 [animation-delay:-2.5s]" />
          </div>
        </Reveal>
      </div>

      {/* curved bottom edge */}
      <svg
        aria-hidden
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-[-1px] h-14 w-full text-[rgb(243,249,237)] sm:h-20"
        fill="currentColor"
      >
        <path d="M0 80V40C240 0 480 0 720 28s480 40 720-8v60H0Z" />
      </svg>
    </section>
  );
}
