import type { Metadata } from "next";
import { Fraunces, Public_Sans, Baloo_2 } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { graph, organizationSchema, websiteSchema } from "@/lib/schema";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteChrome } from "@/components/layout/site-chrome";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

const baloo2 = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  display: "swap",
});

// The heading font of the FAQ sections, same as on the previous openarmsfostercare.com site (Fontshare, free licence).
// Only used there, so it isn't preloaded on every page.
const cabinetGrotesk = localFont({
  src: "./fonts/CabinetGrotesk-Bold.woff2",
  weight: "700",
  variable: "--font-cabinet-grotesk",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Foster Care in Oklahoma City | Become a Foster Parent | Open Arms",
    template: "%s | Open Arms Foster Care",
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_US",
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${publicSans.variable} ${baloo2.variable} ${cabinetGrotesk.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(graph(organizationSchema(), websiteSchema())),
          }}
        />
        <SiteChrome header={<SiteHeader />} footer={<SiteFooter />}>
          {children}
        </SiteChrome>
      </body>
    </html>
  );
}
