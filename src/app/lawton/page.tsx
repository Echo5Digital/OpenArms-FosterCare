import type { Metadata } from "next";
import { siteConfig, offices } from "@/lib/site-config";
import { graph, webPageSchema, localBusinessSchema } from "@/lib/schema";
import { LocationPageTemplate } from "@/components/sections/location-page-template";

const office = offices.find((o) => o.id === "lawton")!;

const description =
  "Open Arms Foster Care provides the highest level of care and support to children in need and foster families in Lawton, OK, including therapeutic foster care and emergency placements.";

export const metadata: Metadata = {
  title: "Lawton Foster Care Office",
  description,
  alternates: { canonical: "/lawton" },
  openGraph: {
    title: "Lawton - Open Arms Foster Care",
    description,
    url: "/lawton",
    images: [{ url: "/images/og/lawton.png", width: 650, height: 650, alt: "Therapeutic foster care in Lawton, Oklahoma" }],
  },
};

export default function LawtonPage() {
  const schema = graph(
    webPageSchema({ url: `${siteConfig.url}/lawton/`, name: "Lawton - Open Arms Foster Care", description }),
    localBusinessSchema("lawton"),
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LocationPageTemplate
        office={office}
        intro="Welcome to Open Arms Foster Care! Our mission is to provide the highest level of care and support to children in need and foster families in Lawton, OK. We specialize in therapeutic foster care services, offering compassionate and personalized support for children who require emotional and psychological healing. Whether you’re looking to become a foster parent or need specialized foster care services, we are here to guide you every step of the way."
        whyChoose={[
          {
            title: "Specialized Therapeutic Foster Care",
            body: "Many children in foster care need more than just a safe home — they require therapeutic care to help them recover from trauma in a structured, supportive environment.",
          },
          {
            title: "Experienced and Compassionate Staff",
            body: "Our team includes experienced social workers, case managers, and therapists dedicated to supporting foster children and parents.",
          },
          {
            title: "Comprehensive Foster Parent Support",
            body: "Training, resources, and ongoing assistance so foster families feel confident and prepared to provide the best care possible.",
          },
          {
            title: "Continuous Care and Advocacy",
            body: "We advocate for both children and foster parents, ensuring every child's needs are met and every parent has the resources they need to succeed.",
          },
        ]}
        therapeutic={[
          "Therapeutic foster care is a specialized form of foster care for children who have experienced significant trauma or have special emotional or behavioral needs. These children often need additional support beyond what traditional foster care provides.",
          "At Open Arms Foster Care, we offer therapeutic foster care services in Lawton, OK, where trained and supported foster parents work with children who need extra attention, therapy, and coping strategies — combining emotional support with professional therapy for the best possible outcomes.",
        ]}
        supportFeatures={[
          { title: "Training Programs", body: "Thorough, ongoing foster parent training covering trauma through stable-environment strategies." },
          { title: "24/7 Support", body: "Advice, guidance, and resources whenever a foster parent needs help." },
          { title: "Access to Resources", body: "Child development, mental health support, and legal guidance in one place." },
          { title: "Monthly Support Groups", body: "Connect with other Lawton foster parents to share experiences and learn from each other." },
          { title: "Case Management and Advocacy", body: "A dedicated case manager coordinates services for the family and the child." },
        ]}
        emergency={[
          "In some cases, children are removed from their homes suddenly due to immediate safety concerns and need a safe place to stay while the court determines next steps. Emergency foster care is an essential service in these situations, providing immediate care and protection.",
          "At Open Arms Foster Care, we offer emergency foster care in Lawton, OK, ensuring that children in need of urgent placement receive the care and attention they deserve while their longer-term needs are assessed.",
        ]}
        becomeParentSteps={[
          { title: "Initial Application", body: "Share some basic information about you and your family." },
          { title: "Background Checks & Home Study", body: "We confirm your home is a safe, supportive environment." },
          { title: "Foster Parent Training", body: "Understand the requirements and responsibilities of fostering." },
          { title: "Ongoing Support", body: "Continuous training, resources, and access to support services." },
          { title: "Placement", body: "Be matched with a child who needs a loving home." },
        ]}
        closing="Foster parents are the cornerstone of the foster care system. At Open Arms Foster Care, we are grateful for the incredible commitment of our foster families in Lawton, OK, and we are here to support them every step of the way."
      />
    </>
  );
}
