import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { graph, webPageSchema, faqPageSchema } from "@/lib/schema";
import { postPlacementFaqs } from "@/lib/content/faqs";
import { ServicePageTemplate } from "@/components/sections/service-page-template";

const description =
  "Post-placement therapy helps foster children and families adjust emotionally after placement, with licensed therapists supporting healing and stability across Oklahoma.";

export const metadata: Metadata = {
  title: "Post-Placement Therapy",
  description,
  alternates: { canonical: "/post-placement-therapy" },
  openGraph: {
    title: "Post-Placement Therapy | Open Arms Foster Care",
    description,
    url: "/post-placement-therapy",
  },
};

export default function PostPlacementTherapyPage() {
  const schema = graph(
    webPageSchema({
      url: `${siteConfig.url}/post-placement-therapy/`,
      name: "Post-Placement Therapy | Open Arms Foster Care",
      description,
    }),
    faqPageSchema(postPlacementFaqs),
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServicePageTemplate
        eyebrow="Services"
        title="Post-Placement Therapy"
        intro="At Open Arms Initiative, we support foster care and adoption journeys starting with placement. Our post-placement therapy helps children and families adjust emotionally."
        features={[
          {
            title: "Pro Bono Therapy Services",
            body: "Free therapy for foster families, focused on healing and growth in a safe, supportive environment.",
          },
          {
            title: "Ongoing Support for Families",
            body: "Therapists guide parents and caregivers in strengthening family bonds and improving communication.",
          },
          {
            title: "Creating a Sense of Stability",
            body: "We help families build routines that promote security, consistency, and belonging for every child.",
          },
        ]}
        articleParagraphs={[
          "Transitioning to a new family can be a complex process for children, often filled with a mix of emotions, including excitement, anxiety, and uncertainty. Our licensed therapists specialize in post-placement support, helping children and their families process these feelings and build strong, healthy relationships.",
          "Post-placement therapy supports both the child and their family. Therapists guide parents and caregivers in overcoming challenges, strengthening family bonds, improving communication, and developing personalized parenting strategies.",
          "Stability is crucial for children in foster care and adoption. Our post-placement therapy aims to help families establish routines and practices that promote a sense of security and belonging. We work with families to develop strategies that encourage consistency, open communication, and emotional support, ensuring that children feel safe and valued in their new homes.",
          "Post-placement therapy supports both the child and the family, empowering parents and caregivers with guidance to handle post-placement challenges. Our therapists focus on strengthening family bonds, enhancing communication, and creating parenting strategies tailored to each child's needs.",
        ]}
        faqs={postPlacementFaqs}
        faqEyebrow="Common Questions"
        faqTitle="Answers about post-placement therapy"
        closing="If you are a foster or adoptive family seeking support after placement, we invite you to reach out to us."
      />
    </>
  );
}
