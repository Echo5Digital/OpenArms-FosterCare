import Link from "next/link";
import { mainNav, siteConfig } from "@/lib/site-config";
import { LogoLink } from "@/components/layout/logo-link";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NavDropdown } from "@/components/layout/nav-dropdown";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-pine/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-3 sm:px-8">
        <LogoLink />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.children ? (
              <NavDropdown key={item.label} label={item.label} items={item.children} />
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
            className="font-display text-lg font-medium text-pine underline decoration-leaf decoration-2 underline-offset-4"
          >
            {siteConfig.phone}
          </a>
          <Link
            href="/sign-up-now"
            className="group relative inline-flex items-center gap-2 rounded-full bg-pine px-5 py-2.5 font-sans text-sm font-semibold text-cream transition-colors hover:bg-pine-deep"
          >
            Start Fostering
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
