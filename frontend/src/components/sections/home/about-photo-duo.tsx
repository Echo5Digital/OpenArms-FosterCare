"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const VIDEO_ID = "306of9f6Q0U";
const PLAYLIST_ID = "PLYKl1GQf-sNAJ77-sKKVrBm4D1jiFMyDz";

export function AboutPhotoDuo() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div className="relative mx-auto w-full max-w-xl">
        <div className="relative grid grid-cols-2 gap-4 sm:gap-6">
          <div className="drop-shadow-[0_22px_30px_rgba(15,33,27,0.22)]">
            <div
              className="relative aspect-[3/4.2] overflow-hidden rounded-3xl"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 25%)",
                maskImage: "linear-gradient(to bottom, transparent 0%, black 25%)",
              }}
            >
              <Image
                src="/parents-kid-doing-therapy 1-100kb.jpg"
                alt="A family in a supportive therapy session with their foster care counselor"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="translate-y-6 drop-shadow-[0_22px_30px_rgba(15,33,27,0.22)] sm:translate-y-[60px]">
            <div className="relative aspect-[3/4.2] overflow-hidden rounded-3xl">
              <Image
                src="/close-up-girl-therapy-session-with-parents-100kb.jpg"
                alt="A close-up moment between a child and her parents during a therapy session"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_12px_30px_rgba(15,33,27,0.28)] transition-transform duration-300 hover:scale-110 sm:h-[90px] sm:w-[90px]"
          >
            <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 text-leaf-deep sm:h-9 sm:w-9" aria-hidden>
              <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5Z" fill="currentColor" />
            </svg>
          </button>
        </div>
        <div className="hidden h-[60px] sm:block" />
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-pine-deep/85 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?list=${PLAYLIST_ID}&autoplay=1&rel=0&modestbranding=1`}
              title="Open Arms Foster Care"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close video"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-pine transition-colors hover:bg-leaf"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
