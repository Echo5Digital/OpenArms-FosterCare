import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { graph, webPageSchema, faqPageSchema } from "@/lib/schema";
import { schoolStaffFaqs } from "@/lib/content/faqs";
import { SupportForSchoolStaffPage as SupportForSchoolStaffContent } from "@/components/sections/support-for-school-staff-page";

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
      <SupportForSchoolStaffContent faqs={schoolStaffFaqs} />
    </>
  );
}
