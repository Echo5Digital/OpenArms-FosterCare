import type { Metadata } from "next";
import { siteConfig, offices } from "@/lib/site-config";
import { graph, webPageSchema, localBusinessSchema } from "@/lib/schema";
import { LocationPageTemplate } from "@/components/sections/location-page-template";

const office = offices.find((o) => o.id === "tulsa")!;

const description =
  "Open Arms Foster Care provides compassionate, professional foster care services in Tulsa, OK — including therapeutic foster care, emergency placements, and ongoing parent support.";

export const metadata: Metadata = {
  title: "Tulsa Foster Care Office",
  description,
  alternates: { canonical: "/tulsa" },
  openGraph: {
    title: "Tulsa - Open Arms Foster Care",
    description,
    url: "/tulsa",
    images: [{ url: "/images/og/tulsa.png", width: 650, height: 650, alt: "Foster care support in Tulsa, Oklahoma" }],
  },
};

export default function TulsaPage() {
  const schema = graph(
    webPageSchema({ url: `${siteConfig.url}/tulsa/`, name: "Tulsa - Open Arms Foster Care", description }),
    localBusinessSchema("tulsa"),
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LocationPageTemplate
        office={office}
        intro="Welcome to Open Arms Foster Care, where our mission is to provide compassionate, professional foster care services in Tulsa, OK. Whether you're interested in becoming a foster parent or you're already part of the system and need support, we are here to guide you through every step of the process."
        whyChoose={[
          {
            title: "Experienced Professionals",
            body: "Our team is comprised of experienced social workers and case managers dedicated to ensuring children and foster families receive the best support.",
          },
          {
            title: "Therapeutic Foster Care",
            body: "We specialize in therapeutic foster care, which provides children with additional emotional and psychological support to help them heal and grow.",
          },
          {
            title: "Ongoing Support",
            body: "Continuous training, counseling, and resources for foster parents to ensure they feel confident and supported in their role.",
          },
          {
            title: "Comprehensive Programs",
            body: "A range of programs covering everything from emergency foster care to long-term placements, tailored to the child and the family.",
          },
        ]}
        therapeutic={[
          "Therapeutic foster care is a specialized service that focuses on helping children who have experienced trauma or have complex emotional and behavioral needs. These children often require additional support and attention to manage the effects of their past experiences.",
          "At Open Arms Foster Care, our therapeutic foster care services are designed to help children process their emotions and behaviors in a safe and supportive environment. Our trained foster parents work with our team of professionals to help the child develop healthy coping mechanisms and create a sense of stability and security.",
        ]}
        supportHeading="Best Foster Care Programs in Tulsa, OK"
        supportAlignHeader
        supportIntro="At Open Arms Foster Care, we offer some of the best foster care programs in Tulsa, designed to cater to the unique needs of both children and foster parents. Whether you’re looking to become a foster parent, need emergency foster care, or want to provide long-term care for a child, our programs are designed to make the process smooth and supportive."
        supportLead="Some of the programs offer include:"
        supportFeatures={[
          {
            title: "Emergency Foster Care in Tulsa, OK",
            body: "Sometimes, children need immediate placement due to unsafe conditions in their homes. Our emergency foster care program provides temporary housing for children who need to be placed in a safe environment right away. We ensure that children are placed in loving homes while they wait for long-term placement.",
          },
          {
            title: "Long-Term Foster Care",
            body: "Our long-term foster care program is designed for children who cannot safely return home and need to be placed in a stable, nurturing environment for an extended period. We support foster parents with the resources they need to provide consistent care for children in their homes.",
          },
          {
            title: "Specialized Foster Care",
            body: "Some children have unique needs that require specialized care, such as children with disabilities or behavioral issues. Our specialized foster care program pairs children with families who are equipped to meet those specific needs.",
          },
          {
            title: "Respite Care",
            body: "We also offer respite care, which provides short-term relief for foster parents who need a break from their caregiving responsibilities. This allows foster families to recharge while ensuring children continue to receive the care and support they need.",
          },
        ]}
        becomeHeading="Foster Parent Training in Tulsa, OK"
        becomeVariant="topics"
        becomeIntro={
          <>
            <p>
              Becoming a foster parent is a rewarding but challenging experience. At Open Arms Foster Care, we
              recognize the importance of providing thorough training and support to ensure that our foster parents
              feel confident and prepared.
            </p>
            <p>
              Our <strong>foster parent training in Tulsa</strong> equips you with the skills and knowledge needed to
              provide the best care for children in foster care. Training includes topics such as:
            </p>
          </>
        }
        becomeParentSteps={[
          {
            title: "Understanding Trauma",
            body: "We help foster parents understand the impact of trauma on children and how to respond to children who may be dealing with emotional and behavioral challenges.",
          },
          {
            title: "Behavioral Techniques",
            body: "Learn effective methods for managing difficult behaviors in children and providing a calm, structured environment.",
          },
          {
            title: "Legal and Ethical Guidelines",
            body: "Understanding the legal process and your rights as a foster parent is critical. Our training includes guidance on navigating the foster care system.",
          },
          {
            title: "Self-Care for Foster Parents",
            body: "We emphasize the importance of self-care, as fostering can be emotionally taxing. We offer tips for maintaining your well-being while caring for others.",
          },
        ]}
        closing="Our comprehensive training programs ensure that our foster parents are well-equipped to provide the best possible care for the children in their homes."
        ongoing={{
          heading: "Ongoing Support for Foster Parents",
          headingHighlight: "Foster Parents",
          intro:
            "At Open Arms Foster Care, we believe that fostering doesn’t end with training. We offer continuous support to our foster parents, including:",
          items: [
            {
              title: "Case Management",
              body: "Our case managers work closely with foster parents to ensure that both children and families receive the services they need.",
              image: "/fs4 (2).jpg",
              imageAlt: "A family meeting with their case manager",
              imagePosition: "object-[center_35%]",
            },
            {
              title: "Therapeutic Support",
              body: "For children in our therapeutic foster care program, we provide ongoing therapy and counseling to address emotional and behavioral issues.",
              image: "/child-doing-therapy-session-with-psychologist-100kb.jpg",
              imageAlt: "A young child drawing during a therapy session",
              imagePosition: "object-[center_52%]",
            },
            {
              title: "Peer Support",
              body: "Connecting with other foster parents can provide valuable insights and support. We facilitate support groups where foster parents can share experiences and advice.",
              image: "/family-with-binoculars (1).jpg",
              imageAlt: "A family laughing together outdoors",
              imagePosition: "object-[center_30%]",
            },
          ],
          startHeading: "How to Get Started with Open Arms Foster Care in Tulsa",
          startHighlight: "Tulsa",
          startParagraphs: [
            "If you’re ready to make a difference in the life of a child, getting started with Open Arms Foster Care is easy. We’ll guide you through the process of becoming a foster parent, including completing your application, undergoing background checks, and participating in training.",
            "Our team will walk you through the steps of becoming a foster parent in Tulsa, ensuring that you’re well-prepared for the journey ahead. Whether you’re interested in emergency foster care or therapeutic foster care, we are here to help you every step of the way.",
          ],
        }}
      />
    </>
  );
}
