import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { pageSchema, serviceCatalogSchema } from "@/lib/schema";
import { homeFaqs } from "@/lib/content/faqs";
import { Hero } from "@/components/sections/home/hero";
import { TrustedAgency } from "@/components/sections/home/trusted-agency";
import { Services } from "@/components/sections/home/services";
import { ProcessSteps } from "@/components/sections/home/process-steps";
import { PlantWaterGrow } from "@/components/sections/home/plant-water-grow";
import { FosterCarePrograms } from "@/components/sections/home/foster-care-programs";
import { WhyOpenArms } from "@/components/sections/home/why-open-arms";
import { HomeTestimonials } from "@/components/sections/home/home-testimonials";
import { FaqSection } from "@/components/sections/faq-section";
import { EmergencyFosterCare } from "@/components/sections/home/emergency-foster-care";
import { TherapeuticFosterCare } from "@/components/sections/home/therapeutic-foster-care";
import { HealingHopeSection } from "@/components/sections/healing-hope-section";
import { OfficesSection } from "@/components/sections/offices-section";
import { OutreachCta } from "@/components/sections/home/outreach-cta";

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
      <TrustedAgency />
      <Services />
      <HealingHopeSection form="contact" variant="card" />
      <ProcessSteps />
      <PlantWaterGrow />
      <TherapeuticFosterCare />
      <WhyOpenArms />
      <HomeTestimonials />
      <EmergencyFosterCare />
      <FaqSection
        faqs={homeFaqs}
        eyebrow="Ask a Question"
        title="Answers to your questions about our programs"
        titleClassName="font-sans text-[2.1rem] font-bold leading-tight tracking-tight text-pine sm:text-[2.6rem]"
        aside={<FosterCarePrograms />}
      />
      <OfficesSection />
      <OutreachCta />
    </>
  );
}
