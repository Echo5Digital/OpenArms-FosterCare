import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { pageSchema, serviceCatalogSchema } from "@/lib/schema";
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
import { BecomingFosterParent } from "@/components/sections/home/becoming-foster-parent";
import { EmergencyFosterCare } from "@/components/sections/home/emergency-foster-care";
import { OurTeam } from "@/components/sections/home/our-team";
import { TherapeuticFosterCare } from "@/components/sections/home/therapeutic-foster-care";
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
  const schema = pageSchema({
    path: "/",
    name: "Foster Care in Oklahoma City | Become a Foster Parent | Open Arms",
    description: siteConfig.description,
    faqs: homeFaqs,
    extra: [serviceCatalogSchema()],
  });

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
      <OurProcessVideos />
      <NurturingFutures />
      <WhatIsFosterCare />
      <FosterCarePrograms />
      <WhyOpenArms />
      <TestimonialsSection />
      <OurTeam />
      <TherapeuticFosterCare />
      <BecomingFosterParent />
      <EmergencyFosterCare />
      <FaqSection
        faqs={homeFaqs}
        eyebrow="Ask a Question"
        title="Answers to your questions about our programs"
        titleClassName="font-sans text-[2.1rem] font-bold leading-tight tracking-tight text-pine sm:text-[2.6rem]"
        image={{
          src: "/handsome-father-with-cute-little-son-100kb.jpg",
          alt: "A father joyfully lifting his son into the air outdoors",
          position: "object-[center_30%]",
        }}
        secondaryImage={{
          src: "/side-view-grandmother-grandson-playing-sticking-their-tongues-out-100kb.jpg",
          alt: "A grandmother sharing a warm, playful moment with her grandson at home",
        }}
      />
      <HealingHopeSection form="contact" />
      <OfficesSection />
      <ClosingCta />
    </>
  );
}
