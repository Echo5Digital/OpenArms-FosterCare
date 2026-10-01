import type { Metadata } from "next";
import { pageSchema } from "@/lib/schema";
import { childWelfareAdvocacyFaqs } from "@/lib/content/faqs";
import { ServicePageTemplate } from "@/components/sections/service-page-template";

const description =
  "Open Arms Foster Care advocates for children and families throughout Oklahoma's child welfare system, coordinating case management, court representation, and OKDHS partnership.";

export const metadata: Metadata = {
  title: "Child Welfare Advocacy",
  description,
  alternates: { canonical: "/child-welfare-advocacy" },
  openGraph: { title: "Child Welfare Advocacy | Open Arms Foster Care", description, url: "/child-welfare-advocacy" },
};

export default function ChildWelfareAdvocacyPage() {
  const schema = pageSchema({
    path: "/child-welfare-advocacy",
    name: "Child Welfare Advocacy | Open Arms Foster Care",
    description,
    breadcrumb: "Child Welfare Advocacy",
    service: { serviceType: "Child Welfare Advocacy" },
    faqs: childWelfareAdvocacyFaqs,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServicePageTemplate
        eyebrow="Services"
        title="Child Welfare Advocacy"
        intro="Every child and family in Oklahoma's foster care system deserves a voice. Our advocacy team works alongside caseworkers, courts, and OKDHS to make sure that voice is heard."
        features={[
          {
            title: "Case Management & Coordination",
            body: "A dedicated case manager tracks every child's plan, coordinates services, and keeps foster parents informed at each step.",
          },
          {
            title: "Court & OKDHS Representation",
            body: "We work directly with the Oklahoma Department of Human Services and represent each child's best interests through case reviews and proceedings.",
          },
          {
            title: "Family & Community Partnership",
            body: "We connect at-risk families with resources and support, working toward reunification whenever it's safely possible.",
          },
        ]}
        articleParagraphs={[
          "A foster care agency does more than arrange placements — it advocates. At Open Arms Foster Care, our child welfare advocacy work means making sure every child's needs, and every foster family's voice, are represented clearly and consistently throughout the system.",
          "We work closely with the Oklahoma Department of Human Services (OKDHS) and other community organizations on case planning, court proceedings, and permanency decisions, so families never have to navigate the system's complexity alone.",
          "For foster parents, that advocacy shows up as a dedicated case manager who coordinates every moving part of a placement: therapy referrals, school communication, medical appointments, and court dates. For children and biological families, it means someone actively working toward the most stable, healthy outcome, whether that's reunification, a therapeutic placement, or another form of permanency.",
          "Advocacy also means listening. Our team meets regularly with foster parents and, where appropriate, biological families to understand what's working and what isn't, then adjusts the plan accordingly rather than treating a case as a fixed checklist.",
        ]}
        faqs={childWelfareAdvocacyFaqs}
        faqEyebrow="Common Questions"
        faqTitle="Answers about child welfare advocacy"
        closing="Advocacy and case management ensure both the children and foster parents receive the attention and resources they need — that's the standard we hold ourselves to on every case."
      />
    </>
  );
}
