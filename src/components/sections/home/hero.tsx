"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Foster Parent Training",
    image: "/handsome-father-with-cute-little-son-100kb.jpg",
  },
  {
    title: "Support for Every Placement",
    image: "/family-with-baby-standing-outside-house-100kb.jpg",
  },
  {
    title: "Post-Placement Therapy",
    image: "/teen-girl-participates-drawing-activity-as-part-psychotherapy-100kb.jpg",
  },
  {
    title: "Support for School Staff",
    image: "/mother-son-looking-tablet-100kb.jpg",
  },
] as const;

const ROTATE_MS = 2000;
const RESET_MS = 700;
const HERO_VIDEO_ID = "X4SzWVxBvZI";

const track = [...cards, cards[0]];

export function Hero() {
  const [page, setPage] = useState(0);
  const [animate, setAnimate] = useState(true);
  const pageCount = cards.length - 1;
  const pageRef = useRef(page);
  pageRef.current = page;

  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;

    const advance = () => {
      const next = pageRef.current + 1;
      setAnimate(true);
      setPage(next);

      if (next === pageCount) {
        id = setTimeout(() => {
          setAnimate(false);
          setPage(0);
          id = setTimeout(advance, ROTATE_MS);
        }, RESET_MS);
      } else {
        id = setTimeout(advance, ROTATE_MS);
      }
    };

    id = setTimeout(advance, ROTATE_MS);
    return () => clearTimeout(id);
  }, [pageCount]);

  return (
    <section className="relative isolate overflow-hidden bg-cream p-5 pt-0">
      <div className="absolute inset-0 -z-10">
        <Image src="/echo5-image-1790661911908.png" alt="" fill sizes="100vw" className="object-cover" />
      </div>

      <div className="relative overflow-hidden rounded-[2rem] pt-[5.5rem] lg:mt-[5.5rem] lg:flex lg:min-h-[calc(100vh-5.5rem)] lg:flex-col lg:justify-center lg:pt-0">
        <div className="absolute inset-y-0 left-0 hidden w-[22%] overflow-hidden rounded-[2rem] bg-[#111a16] lg:block">
          <Image
            src="/bgbanner.png"
            alt=""
            fill
            sizes="22vw"
            className="object-cover opacity-20"
          />
        </div>

        <div className="relative grid grid-cols-1 gap-8 p-6 pb-10 sm:p-10 lg:grid-cols-[0.62fr_1fr] lg:items-center lg:gap-16 lg:p-16">
          <div className="relative mx-auto hidden w-full max-w-sm lg:mx-0 lg:block lg:max-w-none lg:justify-self-end">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.5rem] bg-pine-deep lg:aspect-auto lg:h-[580px]">
              <iframe
                src={`https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_VIDEO_ID}&controls=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&iv_load_policy=3`}
                title="Open Arms Foster Care"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[177.78vw] min-h-full w-[100%] min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2"
                allow="autoplay; encrypted-media; picture-in-picture"
                loading="eager"
              />
            </div>

            <div className="absolute -top-5 -left-5 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full shadow-lg sm:h-24 sm:w-24">
              <Image src="/images/fav.png" alt="" width={96} height={96} className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="lg:pl-12 xl:pl-20">
            <h1 className="max-w-[720px] xl:max-w-[980px] font-display text-[2rem] font-medium leading-[1.15] tracking-tight text-pine sm:text-[2.6rem] lg:text-[3.4rem]">
              Foster Care in Oklahoma City,
              <br />
              Helping Children and Foster Families Thrive
              <span className="ml-3 hidden h-14 w-14 shrink-0 translate-y-2 items-center justify-center overflow-hidden rounded-full align-middle sm:inline-flex sm:h-16 sm:w-16">
                <Image src="/images/fav.png" alt="" width={64} height={64} className="h-full w-full object-cover" />
              </span>
            </h1>

            <div className="mt-7 max-w-[720px] xl:max-w-[980px] overflow-hidden">
              <div
                className={`flex gap-4 ease-in-out ${animate ? "transition-transform duration-700" : ""}`}
                style={{ transform: `translateX(calc((-100% - 1rem) * ${page} / 2))` }}
              >
                {track.map((card, i) => (
                  <div
                    key={`${card.title}-${i}`}
                    className="relative flex h-[200px] w-[calc(50%-0.5rem)] shrink-0 items-end overflow-hidden rounded-[1.25rem]"
                  >
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/85 via-pine-deep/30 to-pine-deep/10" />
                    <h3 className="relative z-10 p-6 font-sans text-lg font-bold text-cream">{card.title}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/sign-up-now"
                className="inline-flex items-center gap-2.5 rounded-full bg-pine px-7 py-3.5 font-sans text-[0.95rem] font-semibold text-cream transition-colors hover:bg-leaf hover:text-pine-deep"
              >
                Start Your Foster Care Journey
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 font-sans text-[0.95rem] font-semibold text-pine ring-1 ring-inset ring-pine/25 transition-colors hover:bg-leaf hover:text-pine-deep hover:ring-leaf"
              >
                Talk With Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
