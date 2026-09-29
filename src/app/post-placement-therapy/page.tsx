import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { graph, webPageSchema, faqPageSchema } from "@/lib/schema";
import { postPlacementFaqs } from "@/lib/content/faqs";
import { PostPlacementTherapyPage as PostPlacementTherapyContent } from "@/components/sections/post-placement-therapy-page";

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
      <PostPlacementTherapyContent faqs={postPlacementFaqs} />
    </>
  );
}
