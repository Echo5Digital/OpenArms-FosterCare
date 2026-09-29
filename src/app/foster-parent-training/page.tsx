import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { graph, webPageSchema, faqPageSchema } from "@/lib/schema";
import { fosterParentTrainingFaqs } from "@/lib/content/faqs";
import { FosterParentTrainingPage as FosterParentTrainingContent } from "@/components/sections/foster-parent-training-page";

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
      <FosterParentTrainingContent faqs={fosterParentTrainingFaqs} />
    </>
  );
}
