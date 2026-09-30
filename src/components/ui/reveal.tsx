"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "bottom" | "right" | "left";
  /** Extra offset from the viewport bottom before triggering, e.g. "-15%". */
  triggerOffset?: string;
};

export function Reveal({ children, className = "", delay = 0, from = "bottom", triggerOffset = "0px" }: Props) {
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
          : from === "right"
            ? "translate-x-14 opacity-0"
            : from === "left"
              ? "-translate-x-14 opacity-0"
              : "translate-y-8 opacity-0"
      } ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
