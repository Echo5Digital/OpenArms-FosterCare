"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav, siteConfig } from "@/lib/site-config";
import { LogoLink } from "@/components/layout/logo-link";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NavDropdown } from "@/components/layout/nav-dropdown";

export function SiteHeader() {
  const pathname = usePathname();
  const isHomeOverlay = pathname === "/";

  return (
    <header
      className={
        isHomeOverlay
          ? "absolute inset-x-0 top-0 z-50"
          : "sticky top-0 z-50 border-b border-pine/10 bg-cream/95 shadow-[0_2px_16px_-8px_rgba(15,33,27,0.15)] backdrop-blur-md"
      }
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-3 sm:px-8">
        <LogoLink />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.children ? (
              <NavDropdown key={item.label} label={item.label} items={item.children} menu={item.menu} />
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 font-sans text-[0.95rem] font-medium text-ink/85 transition-colors hover:text-pine"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden shrink-0 items-center gap-5 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 font-sans text-[0.95rem] font-semibold text-pine transition-colors hover:text-leaf-deep"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
              <path
                d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.5c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.7}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {siteConfig.phone}
          </a>
          <Link
            href="/sign-up-now"
            className="inline-flex items-center gap-2 rounded-full bg-leaf px-6 py-3 font-sans text-sm font-semibold text-pine-deep shadow-[0_10px_24px_-10px_rgba(141,197,64,0.7)] transition-colors hover:bg-leaf-deep"
          >
            Start Fostering
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
