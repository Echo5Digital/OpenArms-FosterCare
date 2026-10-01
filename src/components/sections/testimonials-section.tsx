"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { testimonials } from "@/lib/content/testimonials";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    const id = setInterval(() => {
      setDirection("right");
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const goTo = (next: number) => {
    setDirection(next > index || (index === testimonials.length - 1 && next === 0) ? "right" : "left");
    setIndex(next);
  };

  const active = testimonials[index];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pine-deep via-[rgb(6,48,39)] to-pine-deep px-5 py-20 sm:px-8 sm:py-28">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-leaf/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-leaf/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-leaf/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-leaf/10 blur-3xl" />

      {[
        { key: "tl", className: "left-0 top-0 -scale-x-100 -scale-y-100" },
        { key: "tr", className: "right-0 top-0 -scale-y-100" },
        { key: "br", className: "bottom-0 right-0" },
        { key: "bl", className: "bottom-0 left-0 -scale-x-100" },
      ].map(({ key, className }) => (
        <svg
          key={key}
          className={`pointer-events-none absolute h-[260px] w-[400px] opacity-60 ${className}`}
          viewBox="0 0 400 260"
          fill="none"
          aria-hidden
        >
          <path
            d="M440 90 C 340 90, 320 90, 280 130 C 240 170, 200 170, 160 170"
            stroke={`url(#testimonialLine1-${key})`}
            strokeWidth="1.5"
          />
          <path
            d="M440 190 C 360 190, 330 240, 250 240 C 160 240, 140 190, 40 190"
            stroke={`url(#testimonialLine2-${key})`}
            strokeWidth="1.5"
          />
          <circle cx="160" cy="170" r="4" fill="var(--leaf)" />
          <circle cx="250" cy="240" r="4" fill="var(--leaf)" />
          <defs>
            <linearGradient id={`testimonialLine1-${key}`} x1="400" y1="0" x2="160" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--leaf)" stopOpacity="0" />
              <stop offset="1" stopColor="var(--leaf)" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id={`testimonialLine2-${key}`} x1="400" y1="0" x2="40" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--leaf)" stopOpacity="0" />
              <stop offset="1" stopColor="var(--leaf)" stopOpacity="0.35" />
            </linearGradient>
          </defs>
        </svg>
      ))}

      <div className="relative mx-auto max-w-[900px] text-center">
        <span className="inline-flex items-center rounded-full bg-leaf px-5 py-2 font-sans text-sm font-semibold text-pine-deep shadow-sm">
          Testimonials
        </span>
        <h2 className="mt-6 font-sans text-[2.15rem] font-bold leading-tight tracking-tight text-cream sm:text-[2.8rem]">
          Hear from our clients
        </h2>
        <p className="mt-4 text-lg text-cream/70">Our clients love working with us, just read what they have to say!</p>

        <div className="relative mt-14 overflow-hidden">
          <figure
            key={active.name}
            className={`mx-auto w-full max-w-2xl rounded-2xl bg-white p-8 text-left shadow-[0_40px_90px_-30px_rgba(0,0,0,0.5)] ring-1 ring-leaf/20 sm:p-10 ${
              direction === "right" ? "animate-slide-in-right" : "animate-slide-in-left"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                  <Image src={active.avatar} alt={active.name} fill sizes="44px" className="object-cover" />
                </span>
                <figcaption className="font-sans text-base font-semibold text-pine">{active.name}</figcaption>
              </div>
              <Image src="/icon (1).svg" alt="" width={22} height={22} className="shrink-0" />
            </div>

            <div role="img" aria-label="5 out of 5 stars" className="mt-4 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Image key={i} src="/f (1).svg" alt="" width={16} height={15} />
              ))}
            </div>

            <blockquote className="mt-4 text-[1.05rem] leading-relaxed text-slate">{active.quote}</blockquote>
          </figure>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2.5">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Show testimonial from ${t.name}`}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index ? "w-7 bg-leaf" : "w-2.5 bg-cream/30 hover:bg-cream/50"
              }`}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="https://www.google.com/search?q=openarms+fostercare&rlz=1C1MRUS_enIN1162IN1169&oq=&gs_lcrp=EgZjaHJvbWUqCQgBEEUYOxjCAzIJCAAQRRg7GMIDMgkIARBFGDsYwgMyCQgCEEUYOxjCAzIJCAMQRRg7GMIDMgkIBBBFGDsYwgMyCQgFEEUYOxjCAzIJCAYQRRg7GMIDMgkIBxBFGDsYwgPSAQkyOTEzajBqMTWoAgiwAgHxBalrTsFDOeUQ8QWpa07BQznlEA&sourceid=chrome&source=chrome.rb&ie=UTF-8#sv=CCYSwwEKEgoDdGJzEgtscmY6ITNzSUFFPQoaCgFxEhVvcGVuIGFybXMgZm9zdGVyIGNhcmUKBwoDdWRtEgAQARoQcHYtL2cvMTFtNl9xN2dmMCosCg0vZy8xMW02X3E3Z2YwIhsKFW9wZW4gYXJtcyBmb3N0ZXIgY2FyZRACGAMyRgoVb3BlbiBhcm1zIGZvc3RlciBjYXJlWhciFW9wZW4gYXJtcyBmb3N0ZXIgY2FyZZIBE2Zvc3Rlcl9jYXJlX3NlcnZpY2UYCiDoouy5Bw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-leaf px-7 py-3.5 font-sans text-sm font-semibold text-pine-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-leaf-deep hover:shadow-lg"
          >
            Read More Reviews
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path
                d="M4 12h15m0 0-6-6m6 6-6 6"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
