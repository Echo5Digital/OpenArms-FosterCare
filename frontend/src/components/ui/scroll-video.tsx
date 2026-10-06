"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  title: string;
  /** Classes for the iframe. The parent must be position: relative. */
  className?: string;
  allow?: string;
  allowFullScreen?: boolean;
};

/**
 * A YouTube video that only plays while it is on screen: the player is added once the video is mostly in view (so it
 * starts then) and taken away again when it scrolls off, which stops it and its sound.
 */
export function ScrollVideo({
  src,
  title,
  className = "absolute inset-0 h-full w-full",
  allow = "autoplay; encrypted-media; picture-in-picture",
  allowFullScreen,
}: Props) {
  const holder = useRef<HTMLDivElement>(null);
  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    const node = holder.current;
    if (!node) return;

    // start at half in view, stop below a fifth, so a video on the edge of the screen doesn't flicker on and off
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.5) setOnScreen(true);
        else if (entry.intersectionRatio < 0.2) setOnScreen(false);
      },
      { threshold: [0, 0.2, 0.5] },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={holder} className="absolute inset-0">
      {onScreen && <iframe src={src} title={title} className={className} allow={allow} allowFullScreen={allowFullScreen} />}
    </div>
  );
}
