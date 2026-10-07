"use client";

import type { CSSProperties } from "react";
import { HoverPrefetchLink as Link } from "@/components/ui/hover-prefetch-link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/lib/site-config";
import { LogoLink } from "@/components/layout/logo-link";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NavDropdown } from "@/components/layout/nav-dropdown";

/** Concave "ear" where the hanging tab meets the top edge: a quarter-circle cut out of a pine square. */
const ear = (corner: "0 100%" | "100% 100%"): CSSProperties => ({
  background: `radial-gradient(circle at ${corner}, transparent 1.5rem, var(--pine-deep) calc(1.5rem + 1px))`,
});

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={
        isHome
          ? "absolute inset-x-0 top-0 z-50 lg:pointer-events-none lg:sticky lg:-mb-[4.5rem] lg:overflow-x-clip"
          : "sticky top-0 z-50 border-b border-pine/10 bg-cream/95 shadow-[0_2px_16px_-8px_rgba(15,33,27,0.15)] backdrop-blur-md lg:pointer-events-none lg:overflow-x-clip lg:border-0 lg:bg-transparent lg:shadow-none lg:backdrop-blur-none"
      }
    >
      {/*
        From lg up, on every page, the header is a dark green tab that hangs from the top edge of the page: only as wide
        as its contents, rounded at the bottom, with curved ears where it meets the edge. On phones the home page's
        header floats over the hero; the other pages keep a cream bar.
      */}
      <div
        className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-3 sm:px-8 lg:pointer-events-auto lg:relative lg:w-fit lg:max-w-[calc(100%-3rem)] lg:justify-start lg:gap-4 lg:rounded-b-[2rem] lg:bg-pine-deep lg:py-3 lg:pl-6 lg:pr-3 lg:[filter:drop-shadow(0_14px_16px_rgba(15,33,27,0.28))] xl:gap-10 xl:pl-8 xl:pr-4"
      >
        <span aria-hidden className="absolute right-full top-0 hidden h-6 w-6 lg:block" style={ear("0 100%")} />
        <span aria-hidden className="absolute left-full top-0 hidden h-6 w-6 lg:block" style={ear("100% 100%")} />

        <LogoLink />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.children ? (
              <NavDropdown
                key={item.label}
                label={item.label}
                items={item.children}
                menu={item.menu}
                light
              />
            ) : item.href === "/contact-us" ? (
              <Link
                key={item.label}
                href={item.href}
                className="ml-1 inline-flex items-center whitespace-nowrap rounded-full bg-leaf px-4 py-2.5 font-sans text-[0.95rem] font-semibold text-pine-deep shadow-[0_10px_22px_-10px_rgba(141,197,64,0.8)] transition-colors hover:bg-leaf-deep focus-visible:outline-solid focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-pine-deep xl:px-5 xl:ml-2"
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="relative whitespace-nowrap px-2.5 py-2 font-sans text-[0.95rem] font-medium text-cream/90 transition-colors hover:text-leaf xl:px-4"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <MobileNav dark={isHome} />
      </div>
    </header>
  );
}
