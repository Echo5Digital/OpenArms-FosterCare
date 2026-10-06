"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Slide = { src: string; alt: string; position?: string };

const ROTATE_MS = 2500;
const RESET_MS = 700;
const VISIBLE = 2;

/** Auto-advancing, endlessly looping strip of image cards (two visible at a time). */
export function ImageSlider({ slides }: { slides: Slide[] }) {
  const [page, setPage] = useState(0);
  const [animate, setAnimate] = useState(true);
  const pageCount = slides.length;
  const pageRef = useRef(page);
  pageRef.current = page;

  const track = [...slides, ...slides.slice(0, VISIBLE)];

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
    <div className="overflow-hidden rounded-[2rem]">
      <div
        className={`flex gap-4 ease-in-out ${animate ? "transition-transform duration-700" : ""}`}
        style={{ transform: `translateX(calc((-100% - 1rem) * ${page} / ${VISIBLE}))` }}
      >
        {track.map((slide, i) => (
          <div
            key={`${slide.src}-${i}`}
            className="relative h-[16rem] w-[calc(50%-0.5rem)] shrink-0 overflow-hidden rounded-[1.5rem] shadow-lg sm:h-[26rem]"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(min-width: 1200px) 600px, 50vw"
              className={`object-cover ${slide.position ?? "object-center"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/35 via-transparent to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}
