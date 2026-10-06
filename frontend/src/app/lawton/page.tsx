import type { Metadata } from "next";
import { offices } from "@/lib/site-config";
import { pageSchema, localBusinessSchema, localBusinessId } from "@/lib/schema";
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
  const schema = pageSchema({
    path: "/lawton",
    name: "Lawton - Open Arms Foster Care",
    description,
    breadcrumb: "Lawton",
    aboutId: localBusinessId("lawton"),
    extra: [localBusinessSchema("lawton")],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LocationPageTemplate
        office={office}
        appointmentForm={{
          src: "/mother-daughter-spending-time-together-outside-park-mother-s-day-100kb.png",
          alt: "A mother kissing her smiling daughter on the cheek",
          className: "object-cover object-bottom",
          boxClassName: "aspect-[771/1080] max-w-[20rem] sm:max-w-[24rem] lg:max-w-[28rem]",
        }}
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
          "Therapeutic foster care is a specialized form of foster care for children who have experienced significant trauma or have special emotional or behavioral needs. These children often need additional support beyond what traditional foster care provides, and therapeutic foster care programs are designed to help them manage their emotions, behaviors, and reactions to past trauma.",
          "At Open Arms Foster Care, we offer therapeutic foster care services in Lawton, OK, where trained and supported foster parents work with children who need extra attention, therapy, and coping strategies. Our therapeutic foster care program is unique because it combines emotional support with professional therapy to ensure the best possible outcomes for the children in care.",
        ]}
        supportHeading="Foster Parent Support Services in Lawton, OK"
        supportIntro="Being a foster parent is a rewarding but challenging responsibility. To ensure that foster parents feel supported and confident, Open Arms Foster Care offers comprehensive foster parent support services in Lawton, OK. We believe that a well-supported foster parent can provide the best care for the children placed in their home."
        supportLead="Here’s what you can expect from our foster parent support services:"
        supportFeatures={[
          {
            title: "Training Programs",
            body: "We provide thorough and ongoing foster parent training in Lawton. Our training programs cover everything from understanding trauma to managing challenging behaviors and providing a stable environment for children.",
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
            body: "Connecting with other foster parents is an essential part of the experience. Our monthly support groups provide an opportunity for foster parents in Lawton to share their experiences, discuss challenges, and learn from each other.",
          },
          {
            title: "Case Management and Advocacy",
            body: "Each foster family is assigned a dedicated case manager who provides ongoing support, coordinates services, and advocates on behalf of the family and the child.",
          },
        ]}
        emergencyLocation="Lawton, OK"
        emergency={[
          "In some cases, children are removed from their homes suddenly due to immediate safety concerns. These children need a safe place to stay while the court determines what the next steps will be. Emergency foster care is an essential service in these situations, providing immediate care and protection.",
          "At Open Arms Foster Care, we offer emergency foster care in Lawton, OK, ensuring that children in need of urgent placement receive the care and attention they deserve. Our emergency foster care program is designed to offer a stable environment where children can feel safe while their longer-term needs are being assessed.",
          "Emergency foster care is temporary, but during this time, we ensure that children receive access to medical care, education, and emotional support. Our experienced team works quickly to match children with available foster parents who can provide them with a welcoming and supportive environment.",
        ]}
        becomeHeading="How to Become a Foster Parent in Lawton, OK"
        becomeIntro="Becoming a foster parent is a life-changing decision that requires dedication, compassion, and a willingness to help children who need love and stability. If you are interested in becoming a foster parent in Lawton, OK, Open Arms Foster Care is here to help you through the process."
        becomeLead="Here’s what you can expect when you apply to become a foster parent:"
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
        closingHeading="The Importance of Foster Parents"
        closing="Foster parents are the cornerstone of the foster care system. They offer children a safe, loving environment, helping them heal and grow through difficult times. At Open Arms Foster Care, we are grateful for the incredible commitment of our foster families in Lawton, OK, and we are here to support them every step of the way."
      />
    </>
  );
}
