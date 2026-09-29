"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNav, siteConfig } from "@/lib/site-config";

export function MobileNav({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
      >
        <span className={`h-0.5 w-6 ${dark ? "bg-cream" : "bg-pine"}`} />
        <span className={`h-0.5 w-6 ${dark ? "bg-cream" : "bg-pine"}`} />
        <span className="h-0.5 w-4 self-end bg-leaf" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] bg-pine-deep/40" onClick={() => setOpen(false)}>
          <div
            className="grain absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col overflow-y-auto rounded-l-[2rem] bg-cream px-6 py-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xl font-medium text-pine">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-mint text-pine"
              >
                ✕
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-1">
              {mainNav.map((item) => (
                <div key={item.label} className="border-b border-pine/10 py-2">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 font-display text-lg font-medium text-ink"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-3 flex flex-col gap-0.5 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="py-1.5 font-sans text-sm text-slate"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <a href={siteConfig.phoneHref} className="mt-6 font-display text-lg font-medium text-pine">
              {siteConfig.phone}
            </a>
            <Link
              href="/sign-up-now"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center bg-pine px-5 py-3 text-center font-sans text-sm font-semibold text-cream"
            >
              Start Fostering
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
