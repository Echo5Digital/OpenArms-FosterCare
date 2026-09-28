import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

/**
 * Signature "notch" button: a single corner is cut at an angle instead of the
 * generic rounded-rectangle CTA, with an underline-sweep hover instead of a
 * flat color-swap or drop-shadow lift.
 */
export function ButtonLink({ href, children, variant = "primary", className = "" }: Props) {
  const base =
    "group relative inline-flex items-center gap-2.5 px-7 py-3.5 font-sans text-[0.95rem] font-semibold tracking-tight transition-colors duration-300";
  const shape = "[clip-path:polygon(0_0,100%_0,100%_calc(100%-14px),calc(100%-14px)_100%,0_100%)]";

  const variants: Record<string, string> = {
    primary: `${shape} bg-pine text-cream hover:bg-pine-deep`,
    secondary: `${shape} bg-leaf text-pine-deep hover:bg-leaf-deep`,
    ghost: `${shape} bg-transparent text-pine ring-1 ring-inset ring-pine/25 hover:ring-pine/60`,
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
