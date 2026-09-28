import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { graph, webPageSchema, faqPageSchema } from "@/lib/schema";
import { fosterParentTrainingFaqs } from "@/lib/content/faqs";
import { ServicePageTemplate } from "@/components/sections/service-page-template";

const description =
  "Enroll in foster parenting training programs in Oklahoma to learn the skills needed to care for children in need. Get ongoing support with foster parent support services in Oklahoma.";

export const metadata: Metadata = {
  title: "Foster Parenting Training Programs Oklahoma",
  description,
  alternates: { canonical: "/foster-parent-training" },
  openGraph: {
    title: "Foster Parenting Training Programs Oklahoma | Foster Parent Support Services Oklahoma",
    description,
    url: "/foster-parent-training",
  },
};

export default function FosterParentTrainingPage() {
  const schema = graph(
    webPageSchema({
      url: `${siteConfig.url}/foster-parent-training/`,
      name: "Foster Parenting Training Programs Oklahoma | Foster Parent Support Services Oklahoma",
      description,
    }),
    faqPageSchema(fosterParentTrainingFaqs),
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServicePageTemplate
        eyebrow="Services"
        title="Foster Parent Training"
        intro="We equip foster parents with essential skills and knowledge to create a nurturing environment. Our program empowers parents to support children in care effectively."
        features={[
          {
            title: "Understanding the Role of a Foster Parent",
            body: "Insight into the foster care system and the needs of children in care, so you can approach the role with confidence and compassion.",
          },
          {
            title: "Comprehensive Curriculum",
            body: "Covers child development, behavioral management, trauma-informed care, cultural competence, and self-care.",
          },
          {
            title: "Interactive Learning Environment",
            body: "Engaging sessions let foster parents connect, share experiences, and practice skills through discussion and hands-on exercises.",
          },
        ]}
        articleParagraphs={[
          "Becoming a foster parent is a meaningful journey, one that requires the right preparation, support, and education. At Open Arms Foster Care, we offer comprehensive foster parenting training programs that equip individuals and families with the skills they need to provide safe, stable, and loving homes for children in care.",
          "Our training programs are state-approved and designed to meet the diverse needs of both new and experienced foster parents. From understanding child development and trauma to learning discipline strategies and legal responsibilities, every aspect of fostering is covered in our curriculum.",
          "For those in the metro area, we host regular foster parenting classes in Oklahoma City, available in both in-person and virtual formats. These classes are led by experienced professionals and include interactive sessions that prepare you for real-world caregiving challenges.",
          "Open Arms also specializes in therapeutic foster care in Oklahoma City, and we offer advanced training for parents interested in supporting children with emotional or behavioral needs. This specialized training focuses on trauma-informed care, crisis management, and ongoing therapeutic support — all essential for helping children with complex backgrounds heal and thrive.",
          "Whether you're just starting your foster care journey or looking to expand your skills, our training programs provide the knowledge, tools, and confidence you need. With Open Arms, you're not just fostering — you're changing lives.",
        ]}
        faqs={fosterParentTrainingFaqs}
        faqEyebrow="Common Questions"
        faqTitle="Answers about foster parent training programs"
        closing="If you're interested in fostering or enhancing your skills, join us. Together, we can build a brighter future for children in care."
      />
    </>
  );
}
