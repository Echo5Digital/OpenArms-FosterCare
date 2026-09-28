"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import type { NavLink } from "@/lib/site-config";

export function NavDropdown({ label, items }: { label: string; items: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  function show() {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  }
  function hide() {
    timeout.current = setTimeout(() => setOpen(false), 120);
  }

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button
        type="button"
        className="flex items-center gap-1.5 px-4 py-2 font-sans text-[0.95rem] font-medium text-ink/85 transition-colors hover:text-pine"
        aria-expanded={open}
      >
        {label}
        <svg viewBox="0 0 12 8" className={`h-2 w-2.5 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden>
          <path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-20 w-64 -translate-x-1/2 pt-3">
          <div className="grain relative overflow-hidden rounded-[1.25rem_1.25rem_2.5rem_1.25rem] border border-pine/10 bg-cream p-2 shadow-[0_18px_40px_-16px_rgba(15,33,27,0.35)]">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative z-10 block rounded-xl px-4 py-3 font-sans text-sm font-medium text-ink/85 transition-colors hover:bg-mint hover:text-pine"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
