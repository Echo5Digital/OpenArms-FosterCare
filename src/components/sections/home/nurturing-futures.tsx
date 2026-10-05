import Image from "next/image";
import { HoverPrefetchLink as Link } from "@/components/ui/hover-prefetch-link";

export function NurturingFutures() {
  return (
    <section className="bg-cream-alt px-5 py-16 sm:px-8 sm:py-20">
      <div className="relative mx-auto flex min-h-[420px] w-full max-w-[1500px] flex-col justify-end overflow-hidden rounded-[2rem] sm:aspect-[2/1] sm:min-h-0">
        <Image
          src="/Caring-for-Foster-Children-2.jpg"
          alt="Foster parent caring for a child at home"
          fill
          sizes="(min-width: 1536px) 1500px, 100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/80 via-pine-deep/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-6 px-6 pb-10 text-center sm:px-12 sm:pb-14">
          <h2 className="max-w-3xl font-sans text-3xl font-bold leading-tight tracking-tight text-cream sm:text-5xl">
            Nurturing Futures with Expert Foster Care Solutions
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-cream/90 sm:text-lg">
            Personalized support for foster parents and children to thrive emotionally, behaviorally, and socially.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/sign-up-now"
              className="inline-flex items-center gap-2 rounded-full border border-cream/70 px-6 py-3 font-sans text-sm font-medium text-cream transition-colors hover:bg-cream/10"
            >
              Learn About Foster Care
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.5} />
                <path
                  d="M10 8.5 14 12l-4 3.5"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <a
              href="#our-process-videos"
              className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 font-sans text-sm font-medium text-pine transition-colors hover:bg-white"
            >
              Play Video
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
