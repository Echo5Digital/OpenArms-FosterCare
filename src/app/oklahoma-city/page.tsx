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
        heroBreadcrumb={[{ label: "Home", href: "/" }, { label: "Oklahoma" }]}
        appointmentForm={{
          src: "/front-view-grandmother-granddaughter-100kb.png",
          alt: "A grandmother holding her smiling granddaughter",
        }}
        intro="Our charge is to give the loftiest position of care and support to children in need and foster families throughout Oklahoma City. We specialize in remedial foster care services, delivering compassionate, individualized support to children who bear emotional and cerebral mending. Whether you are considering getting a foster parent or seeking technical foster care services, Open Arms Foster Care is then to guide you every step of the way across the state of Oklahoma City."
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
        therapeuticLocation="Oklahoma City"
        therapeutic={[
          "Therapeutic foster care is a specialized form of foster care designed for children who have experienced trauma or who face emotional challenges. These children often require more intensive support than traditional foster care can offer, and therapeutic programs are tailored to help them process trauma, regulate emotions, and develop healthy coping strategies.",
          "At Open Arms Foster Care, we provide therapeutic foster care services throughout Oklahoma City, with trained foster parents who are equipped to care for children with emotional and behavioral needs. Our approach combines compassionate, family-based support with access to professional therapy and behavioral health resources, creating a safe, structured environment where children can begin to heal and thrive.",
          "Our program focuses on building trust, emotional stability, and long-term well-being for each child because every child deserves a path toward healing and hope.",
        ]}
        supportIntro="Becoming a foster parent is a rewarding journey, but it also comes with challenges that require ongoing support and guidance. At Open Arms Foster Care, we provide comprehensive foster parent support services across Oklahoma to ensure that every foster parent feels confident, prepared, and empowered. We believe that when foster parents are well-supported, they are better equipped to provide the compassionate, consistent care that every child deserves."
        supportLead="Here’s what you can expect from our foster parent support services:"
        supportFeatures={[
          {
            title: "Training Programs",
            body: "We provide thorough and ongoing foster parent training in Oklahoma City. Our training programs cover everything from understanding trauma to managing challenging behaviors and providing a stable environment for children.",
          },
          {
            title: "24/7 Support",
            body: "Foster parents need access to support at any time. Our team is available 24/7 to offer advice, guidance, and resources whenever a foster parent needs help.",
          },
          {
            title: "Access to Resources",
            body: "We provide our foster families with resources on child development, mental health support, legal guidance, and more. We ensure that foster parents have everything they need to navigate the foster care system successfully.",
          },
          {
            title: "Monthly Support Groups",
            body: "Connecting with other foster parents is an essential part of the experience. Our monthly support groups provide an opportunity for foster parents in Oklahoma City to share their experiences, discuss challenges, and learn from each other.",
          },
          {
            title: "Case Management and Advocacy",
            body: "Each foster family is assigned a dedicated case manager who provides ongoing support, coordinates services, and advocates on behalf of the family and the child.",
          },
        ]}
        emergency={[
          "In certain situations, children must be removed from their homes immediately due to urgent safety concerns. During these critical moments, emergency foster care plays a vital role by providing a safe and stable environment while the courts and child welfare professionals determine the next steps.",
          "At Open Arms Foster Care, we offer emergency foster care services throughout Oklahoma, ensuring that children in crisis receive immediate protection, comfort, and support. With Open Arms, children in Oklahoma City facing urgent situations are never alone — we are here to protect and support them when they need it most.",
        ]}
        becomeIntro="Becoming a foster parent is a life-changing decision—one that calls for compassion, commitment, and a deep desire to support children in need of love, care, and stability. If you’re considering becoming a foster parent in Oklahoma, Open Arms Foster Care is here to guide you through every step of the journey."
        becomeLead="Here’s what you can expect when you begin the foster parent application process in Oklahoma:"
        becomeParentSteps={[
          {
            title: "Initial Application",
            body: "Start by completing our online application. This will give us some basic information about you and your family.",
          },
          {
            title: "Background Checks and Home Study",
            body: "We will conduct background checks and a home study to ensure that your home is a safe and supportive environment for children.",
          },
          {
            title: "Foster Parent Training",
            body: "Our comprehensive training program will help you understand the requirements and responsibilities of being a foster parent.",
          },
          {
            title: "Ongoing Support",
            body: "Once approved, you will receive continuous support, including training, resources, and access to our foster parent support services.",
          },
          {
            title: "Placement",
            body: "After completing the necessary steps, you can be matched with a child who needs a loving home.",
          },
        ]}
      />
    </>
  );
}
