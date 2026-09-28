import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { graph, webPageSchema, serviceCatalogSchema, faqPageSchema } from "@/lib/schema";
import { homeFaqs } from "@/lib/content/faqs";
import { Hero } from "@/components/sections/home/hero";
import { TrustedAgencyBanner } from "@/components/sections/home/trusted-agency-banner";
import { TrustedAgency } from "@/components/sections/home/trusted-agency";
import { Services } from "@/components/sections/home/services";
import { ProcessSteps } from "@/components/sections/home/process-steps";
import { FosterFamilySupport } from "@/components/sections/foster-family-support";
import { PlantWaterGrow } from "@/components/sections/home/plant-water-grow";
import { NurturingFutures } from "@/components/sections/home/nurturing-futures";
import { OurProcessVideos } from "@/components/sections/home/our-process-videos";
import { WhatIsFosterCare } from "@/components/sections/home/what-is-foster-care";
import { FosterCarePrograms } from "@/components/sections/home/foster-care-programs";
import { WhyOpenArms } from "@/components/sections/home/why-open-arms";
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
      <TrustedAgencyBanner />
      <TrustedAgency />
      <Services />
      <ProcessSteps />
      <FosterFamilySupport />
      <PlantWaterGrow />
      <NurturingFutures />
      <OurProcessVideos />
      <WhatIsFosterCare />
      <FosterCarePrograms />
      <WhyOpenArms />
      <TestimonialsSection />
      <FaqSection
        faqs={homeFaqs}
        eyebrow="Ask a Question"
        title="Answers to your questions about our programs"
        image={{
          src: "/fs4 (2).jpg",
          alt: "A family talking with a caseworker during a supportive foster care consultation",
        }}
      />
      <TeamSection />
      <HealingHopeSection />
      <OfficesSection />
      <ClosingCta />
    </>
  );
}
