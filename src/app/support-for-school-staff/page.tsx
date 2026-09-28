import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { graph, webPageSchema, faqPageSchema } from "@/lib/schema";
import { schoolStaffFaqs } from "@/lib/content/faqs";
import { ServicePageTemplate } from "@/components/sections/service-page-template";

const description =
  "Open Arms provides training and resources to help school staff in Oklahoma understand foster children's unique challenges and create a supportive classroom environment.";

export const metadata: Metadata = {
  title: "Support for School Staff",
  description,
  alternates: { canonical: "/support-for-school-staff" },
  openGraph: {
    title: "Support for School Staff | Open Arms Foster Care",
    description,
    url: "/support-for-school-staff",
  },
};

export default function SupportForSchoolStaffPage() {
  const schema = graph(
    webPageSchema({
      url: `${siteConfig.url}/support-for-school-staff/`,
      name: "Support for School Staff | Open Arms Foster Care",
      description,
    }),
    faqPageSchema(schoolStaffFaqs),
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServicePageTemplate
        eyebrow="Services"
        title="Support for School Staff"
        intro="Open Arms Initiative provides training to help school staff understand foster children's unique challenges and create a supportive classroom environment."
        features={[
          {
            title: "Tailored Educational Workshops",
            body: "Workshops on recognizing trauma, building trust, fostering resilience, and collaborating with foster families.",
          },
          {
            title: "Interactive Learning and Resources",
            body: "Real-life scenarios, group activities, and resources that help educators effectively support foster children.",
          },
          {
            title: "Ongoing Support and Collaboration",
            body: "Continued support through training, consultations, and networking between schools and foster care professionals.",
          },
        ]}
        articleParagraphs={[
          "Foster children carry experiences that show up in the classroom in ways that aren't always easy to read — a change in routine, a new caregiver, a court date, can all shape a school day long before a teacher hears about it. Open Arms partners directly with school staff so those signals are easier to recognize and respond to with steadiness rather than guesswork.",
          "Our sessions are built for the realities of a school day: short, practical workshops that fit into existing professional development time and give teachers, counselors, and administrators concrete tools rather than abstract theory.",
          "We also stay connected after training. When a foster child in your school experiences a placement change or a difficult season, our team is a phone call away to help school staff understand what's happening and how best to support that student without needing details that aren't theirs to share.",
          "Whether you're a classroom teacher, a school counselor, or an administrator building district-wide practices, Open Arms is here to make sure every foster child in an Oklahoma classroom is met with understanding instead of assumptions.",
        ]}
        faqs={schoolStaffFaqs}
        faqEyebrow="Common Questions"
        faqTitle="Answers about supporting foster students"
        closing="Join our sessions to support foster children's success in school. Open Arms Initiative is here to partner with educators for every child's growth."
      />
    </>
  );
}
