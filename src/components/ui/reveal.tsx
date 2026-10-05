"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "bottom" | "right" | "left";
  /** Extra offset from the viewport bottom before triggering, e.g. "-15%". */
  triggerOffset?: string;
  /** Show the content straight away on phones; the scroll animation only plays from the md breakpoint up. */
  noMobileAnimation?: boolean;
};

const hiddenState = {
  right: "translate-x-14 opacity-0",
  left: "-translate-x-14 opacity-0",
  bottom: "translate-y-8 opacity-0",
};

const hiddenStateFromMd = {
  right: "md:translate-x-14 md:opacity-0",
  left: "md:-translate-x-14 md:opacity-0",
  bottom: "md:translate-y-8 md:opacity-0",
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  from = "bottom",
  triggerOffset = "0px",
  noMobileAnimation = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: `0px 0px ${triggerOffset} 0px` },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [triggerOffset]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "translate-x-0 translate-y-0 opacity-100"
          : (noMobileAnimation ? hiddenStateFromMd : hiddenState)[from]
      } ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
