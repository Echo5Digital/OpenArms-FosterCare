import { HoverPrefetchLink as Link } from "@/components/ui/hover-prefetch-link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "ghost-light";
  className?: string;
};

/**
 * Pill-shaped button matching the navbar's "Start Fostering" CTA shape.
 */
export function ButtonLink({ href, children, variant = "primary", className = "" }: Props) {
  const base =
    "group relative inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 font-sans text-[0.95rem] font-semibold tracking-tight transition-colors duration-300";

  const variants: Record<string, string> = {
    primary: "bg-pine text-cream hover:bg-pine-deep",
    secondary: "bg-leaf text-pine-deep hover:bg-leaf-deep",
    ghost: "bg-transparent text-pine ring-1 ring-inset ring-pine/25 hover:ring-pine/60",
    "ghost-light": "bg-transparent text-cream ring-1 ring-inset ring-cream/40 hover:ring-cream/70",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      <span>{children}</span>
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
      >
        <path
          d="M4 12h15m0 0-6-6m6 6-6 6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
