import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { graph, webPageSchema, serviceCatalogSchema, faqPageSchema } from "@/lib/schema";
import { homeFaqs } from "@/lib/content/faqs";
import { Hero } from "@/components/sections/home/hero";
import { TrustedAgency } from "@/components/sections/home/trusted-agency";
import { Services } from "@/components/sections/home/services";
import { ProcessSteps } from "@/components/sections/home/process-steps";
import { Growth } from "@/components/sections/home/growth";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqSection } from "@/components/sections/faq-section";
import { TeamSection } from "@/components/sections/team-section";
import { HealingHopeSection } from "@/components/sections/healing-hope-section";
import { OfficesSection } from "@/components/sections/offices-section";
import { ClosingCta } from "@/components/sections/home/closing-cta";

export const metadata: Metadata = {
  title: "Foster Care in Oklahoma City | Become a Foster Parent | Open Arms",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Foster Care Agency in Oklahoma City | Open Arms Foster Care",
    description:
      "Open Arms is a foster care agency serving Oklahoma City, Tulsa, and Lawton — with foster parent training, ongoing support, and therapeutic foster care. Call (405) 894-0320.",
    url: "/",
    images: [
      {
        url: "/images/og/home.jpg",
        width: 512,
        height: 269,
        alt: "Foster Care Agency Oklahoma City",
      },
    ],
  },
};

export default function HomePage() {
  const schema = graph(
    webPageSchema({
      url: `${siteConfig.url}/`,
      name: "Foster Care in Oklahoma City | Become a Foster Parent | Open Arms",
      description: siteConfig.description,
    }),
    serviceCatalogSchema(),
    faqPageSchema(homeFaqs),
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Hero />
      <TrustedAgency />
      <Services />
      <ProcessSteps />
      <Growth />
      <TestimonialsSection />
      <FaqSection faqs={homeFaqs} eyebrow="Ask a Question" title="Answers to your questions about our programs" />
      <TeamSection />
      <HealingHopeSection />
      <OfficesSection />
      <ClosingCta />
    </>
  );
}
