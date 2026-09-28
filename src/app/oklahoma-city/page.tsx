import type { Metadata } from "next";
import { siteConfig, offices } from "@/lib/site-config";
import { graph, webPageSchema, localBusinessSchema } from "@/lib/schema";
import { LocationPageTemplate } from "@/components/sections/location-page-template";

const office = offices.find((o) => o.id === "oklahoma-city")!;

const description =
  "Our charge is to give the highest level of care and support to children in need and foster families throughout Oklahoma City. We specialize in therapeutic foster care.";

export const metadata: Metadata = {
  title: "Oklahoma City Foster Care Office",
  description,
  alternates: { canonical: "/oklahoma-city" },
  openGraph: {
    title: "Oklahoma City - Open Arms Foster Care",
    description,
    url: "/oklahoma-city",
    images: [{ url: "/images/og/oklahoma-city.png", width: 650, height: 650, alt: "Therapeutic foster care in Oklahoma City" }],
  },
};

export default function OklahomaCityPage() {
  const schema = graph(
    webPageSchema({ url: `${siteConfig.url}/oklahoma-city/`, name: "Oklahoma City - Open Arms Foster Care", description }),
    localBusinessSchema("oklahoma-city"),
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LocationPageTemplate
        office={office}
        intro="Our charge is to give the highest level of care and support to children in need and foster families throughout Oklahoma City. We specialize in therapeutic foster care services, delivering compassionate, individualized support to children who need emotional and psychological healing."
        whyChoose={[
          {
            title: "Specialized Therapeutic Foster Care",
            body: "Many children in foster care need more than just a safe place to live — they need healing. We specialize in therapeutic foster care, creating structured, supportive environments where children can recover from trauma and build emotional strength.",
          },
          {
            title: "Experienced and Compassionate Team",
            body: "Our staff includes dedicated social workers, case managers, and licensed therapists who bring years of experience and heartfelt commitment to every child and family we serve.",
          },
          {
            title: "Comprehensive Foster Parent Support",
            body: "We offer extensive support for foster parents across Oklahoma, including training programs, vital resources, and 24/7 assistance to help you feel prepared and empowered every step of the way.",
          },
          {
            title: "Consistent Care and Strong Advocacy",
            body: "We stand by both children and foster families — advocating for their needs and ensuring they receive the care, attention, and support necessary to thrive.",
          },
        ]}
        therapeutic={[
          "Therapeutic foster care is a specialized form of foster care designed for children who have experienced trauma or who face emotional challenges. These children often require more intensive support than traditional foster care can offer, and therapeutic programs are tailored to help them process trauma, regulate emotions, and develop healthy coping strategies.",
          "At Open Arms Foster Care, we provide therapeutic foster care services throughout Oklahoma City, with trained foster parents who are equipped to care for children with emotional and behavioral needs.",
          "Our approach combines compassionate, family-based support with access to professional therapy and behavioral health resources, creating a safe, structured environment where children can begin to heal and thrive.",
        ]}
        supportFeatures={[
          { title: "Training Programs", body: "Thorough and ongoing foster parent training covering trauma to behavioral management." },
          { title: "24/7 Support", body: "Our team is available around the clock to offer advice, guidance, and resources." },
          { title: "Access to Resources", body: "Child development, mental health support, and legal guidance, all in one place." },
          { title: "Monthly Support Groups", body: "Connect with other Oklahoma City foster parents to share experiences and learn together." },
          { title: "Case Management and Advocacy", body: "A dedicated case manager coordinates services and advocates on your behalf." },
        ]}
        emergency={[
          "In certain situations, children must be removed from their homes immediately due to urgent safety concerns. During these critical moments, emergency foster care plays a vital role by providing a safe and stable environment while the courts and child welfare professionals determine the next steps.",
          "At Open Arms Foster Care, we offer emergency foster care services throughout Oklahoma, ensuring that children in crisis receive immediate protection, comfort, and support. With Open Arms, children in Oklahoma City facing urgent situations are never alone — we are here to protect and support them when they need it most.",
        ]}
        becomeParentSteps={[
          { title: "Initial Application", body: "Complete our online application with basic information about your family." },
          { title: "Background Checks & Home Study", body: "We confirm your home is a safe, supportive environment." },
          { title: "Foster Parent Training", body: "Our program covers the requirements and responsibilities of fostering." },
          { title: "Ongoing Support", body: "Continuous training, resources, and support once you're approved." },
          { title: "Placement", body: "We match you with a child who needs a loving home." },
        ]}
        closing="Foster parents are the cornerstone of the foster care system. At Open Arms Foster Care, we are grateful for the incredible commitment of our foster families in Oklahoma, and we are here to support them every step of the way."
      />
    </>
  );
}
