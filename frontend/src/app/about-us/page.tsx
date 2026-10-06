import type { Metadata } from "next";
import { pageSchema } from "@/lib/schema";
import { aboutFaqs } from "@/lib/content/faqs";
import { AboutHero } from "@/components/sections/about-hero";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FeaturedVideoSection } from "@/components/sections/featured-video-section";
import { FaqSection } from "@/components/sections/faq-section";
import { TeamSection } from "@/components/sections/team-section";

const description =
  "We focus on therapeutic foster care, supportive foster care, and intensive treatment family care to ensure children receive the best emotional, behavioral, and social support in Oklahoma City, Tulsa, and Lawton.";

export const metadata: Metadata = {
  title: "About Us",
  description,
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About Us - Open Arms Foster Care | Therapeutic Foster Care Agency | Oklahoma City",
    description,
    url: "/about-us",
  },
};

export default function AboutUsPage() {
  const schema = pageSchema({
    path: "/about-us",
    name: "About Us - Open Arms Foster Care | Therapeutic Foster Care Agency | Oklahoma City",
    description,
    type: "AboutPage",
    breadcrumb: "About Us",
    faqs: aboutFaqs,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <AboutHero />

      <TeamSection />
      <TestimonialsSection />
      <FeaturedVideoSection
        id="our-video"
        videoId="-91IhSDY3OU"
        title="Foster Care + Mental Health Counseling | Open Arms Foster Care, OK"
        eyebrow="Watch"
        heading="Foster Care + Mental Health Counseling"
      />
      <FaqSection
        faqs={aboutFaqs}
        eyebrow="Common Questions"
        title="Answers about our foster care programs"
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
    </>
  );
}
