import Link from "next/link";
import Image from "next/image";
import { siteConfig, footerServiceLinks, footerOfficeLinks } from "@/lib/site-config";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { SocialIcons } from "@/components/ui/social-icons";

export function SiteFooter() {
  return (
    <footer className="grain relative overflow-hidden bg-pine-deep text-cream/85">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-leaf/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Image
              src="/images/logo.png"
              alt="Open Arms Foster Care"
              width={168}
              height={56}
              className="h-11 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-xs font-display text-lg italic leading-snug text-cream/90">
              {siteConfig.tagline}
            </p>
            <div className="mt-6">
              <SocialIcons className="text-cream/70" />
            </div>
          </div>

          <div>
            <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-leaf">Services</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {footerServiceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-cream/75 transition-colors hover:text-cream">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-leaf">Our Offices</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {footerOfficeLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-cream/75 transition-colors hover:text-cream">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="text-sm text-cream/75 transition-colors hover:text-cream">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-sm text-cream/75 transition-colors hover:text-cream">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-leaf">Our Newsletter</h2>
            <p className="mt-4 text-sm text-cream/75">Follow our newsletter to stay tuned.</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="text-leaf">
              Open Arms Foster Care
            </Link>
            . All rights reserved.
          </p>
          <p>
            <a href={siteConfig.phoneHref} className="text-cream/70">
              {siteConfig.phone}
            </a>
            {" · "}
            <a href={siteConfig.emailHref} className="text-cream/70">
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
