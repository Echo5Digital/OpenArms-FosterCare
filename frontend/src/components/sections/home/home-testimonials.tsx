"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HoverPrefetchLink as Link } from "@/components/ui/hover-prefetch-link";
import { Reveal } from "@/components/ui/reveal";
import { googleReviewsUrl, testimonials } from "@/lib/content/testimonials";

const quoteMark =
  "M9.2 6C6.3 7.3 4.5 9.9 4.5 13.2V18h5.7v-5.2H7.8c.1-1.6 1-2.8 2.6-3.6L9.2 6Zm9 0c-2.9 1.3-4.7 3.9-4.7 7.2V18h5.7v-5.2h-2.4c.1-1.6 1-2.8 2.6-3.6L18.2 6Z";

// the quote is the star of the section, so it is set big, and a little smaller the longer the review is
function quoteSize(length: number) {
  if (length <= 200) return "text-[1.45rem] leading-[1.25] sm:text-3xl lg:text-[2.2rem] lg:leading-[1.2]";
  if (length <= 300) return "text-[1.35rem] leading-[1.3] sm:text-[1.7rem] lg:text-[1.9rem] lg:leading-[1.25]";
  return "text-lg leading-[1.4] sm:text-xl lg:text-[1.4rem] lg:leading-[1.45]";
}

function Arrow({ flip }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 ${flip ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

export function HomeTestimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const active = testimonials[index];

  // a long review stays on screen longer, and the ring around the reviewer's photo fills for exactly that long
  const showFor = Math.max(6000, active.quote.length * 45);

  useEffect(() => {
    const id = setTimeout(() => setIndex((i) => (i + 1) % total), showFor);
    return () => clearTimeout(id);
  }, [index, showFor, total]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pine-deep via-pine to-pine-deep px-5 py-14 sm:px-8 sm:py-16">
      {/* no boxes: just light, a few thin rings and a faint dot grid behind the words */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-[38%] h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-leaf/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-leaf/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-leaf/10 blur-3xl" />
      {[60, 92, 128].map((size) => (
        <div
          key={size}
          aria-hidden
          style={{ width: `${size}vmin`, height: `${size}vmin` }}
          className="pointer-events-none absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
        />
      ))}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="inline-flex items-center rounded-full bg-leaf px-5 py-1.5 font-sans text-sm font-semibold text-pine-deep shadow-sm">
            Testimonials
          </span>
          <h2 className="mt-4 font-sans text-[1.8rem] font-bold leading-tight tracking-tight text-cream sm:text-4xl">
            Hear from our <span className="text-leaf">clients</span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-base leading-relaxed text-cream/65">
            Our clients love working with us, just read what they have to say!
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-8">
          <figure key={active.name} className="animate-panel-in flex min-h-[19rem] flex-col items-center justify-center lg:min-h-[18rem]">
            <svg viewBox="0 0 24 24" className="h-9 w-9 text-leaf sm:h-11 sm:w-11" fill="currentColor" aria-hidden>
              <path d={quoteMark} />
            </svg>

            <blockquote
              className={`mt-4 text-balance font-display font-medium tracking-tight text-cream ${quoteSize(active.quote.length)}`}
            >
              {active.quote}
            </blockquote>

            <figcaption className="mt-5 flex flex-col items-center gap-2">
              <span className="flex items-center gap-3">
                <span role="img" aria-label="5 out of 5 stars" className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Image key={i} src="/f (1).svg" alt="" width={17} height={16} />
                  ))}
                </span>
                <span aria-hidden className="h-4 w-px bg-white/25" />
                <Image src="/icon (1).svg" alt="Google" width={20} height={20} />
              </span>
              <span className="font-sans text-lg font-bold text-cream">{active.name}</span>
            </figcaption>
          </figure>
        </Reveal>

        {/* the reviewers: pick one, or step through with the arrows */}
        <div className="mt-7 flex flex-col items-center gap-6 lg:relative lg:flex-row lg:justify-center">
         <div className="flex items-center justify-center gap-3 sm:gap-6">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => setIndex((index - 1 + total) % total)}
            className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full text-cream ring-1 ring-white/25 transition hover:bg-leaf hover:text-pine-deep hover:ring-leaf"
          >
            <Arrow flip />
          </button>

          <div className="flex items-center gap-3 sm:gap-5">
            {testimonials.map((t, i) => {
              const selected = i === index;
              return (
                <button
                  key={t.name}
                  type="button"
                  title={t.name}
                  aria-label={`Show testimonial from ${t.name}`}
                  aria-current={selected ? "true" : undefined}
                  onClick={() => setIndex(i)}
                  className={`relative h-12 w-12 shrink-0 cursor-pointer rounded-full transition-all duration-500 sm:h-14 sm:w-14 ${
                    selected ? "scale-110" : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <Image src={t.avatar} alt="" fill sizes="56px" className="object-cover" />
                  </span>
                  <svg viewBox="0 0 36 36" className="absolute -inset-1.5 h-[calc(100%+0.75rem)] w-[calc(100%+0.75rem)] -rotate-90" fill="none" aria-hidden>
                    <circle cx="18" cy="18" r="17" stroke="currentColor" strokeWidth="1" className="text-white/20" />
                    {selected && (
                      <circle
                        key={index}
                        cx="18"
                        cy="18"
                        r="17"
                        pathLength={100}
                        strokeDasharray={100}
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        className="animate-ring-fill text-leaf"
                        stroke="currentColor"
                        style={{ animationDuration: `${showFor}ms` }}
                      />
                    )}
                  </svg>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => setIndex((index + 1) % total)}
            className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full text-cream ring-1 ring-white/25 transition hover:bg-leaf hover:text-pine-deep hover:ring-leaf"
          >
            <Arrow />
          </button>
         </div>

          <div className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">
            <Link
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-leaf px-6 py-3 font-sans text-sm font-semibold text-pine-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
            >
              Read More Reviews
              <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" aria-hidden>
                <path d="M4 12h15m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
