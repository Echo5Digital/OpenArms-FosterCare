import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { graph, webPageSchema, faqPageSchema } from "@/lib/schema";
import { aboutFaqs } from "@/lib/content/faqs";
import { PageHero } from "@/components/sections/page-hero";
import { ProseBlock } from "@/components/ui/prose-block";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqSection } from "@/components/sections/faq-section";
import { TeamSection } from "@/components/sections/team-section";
import { ButtonLink } from "@/components/ui/button-link";

const description =
  "We focus on therapeutic foster care, supportive foster care, and intensive treatment family care to ensure children receive the best emotional, behavioral, and social support in Oklahoma City, Tulsa, and Lawton.";

export const metadata: Metadata = {
  title: "About Us",
  description,
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About Us - Open Arms Foster Care | Therapeutic Foster Care Agency | Oklahoma City",
    description,
    url: "/about-us",
  },
};

const pillars = [
  {
    title: "Comprehensive trauma-informed training.",
    body: "Every foster parent completes certified training built around real caregiving situations.",
  },
  {
    title: "Counseling services to support foster families.",
    body: "Licensed therapists work alongside families, giving children and caregivers real clinical support.",
  },
  {
    title: "Local offices in Oklahoma City, Tulsa, and Lawton for easy access.",
    body: "Help is never far away, with in-person support available across all three regions we serve.",
  },
];

export default function AboutUsPage() {
  const schema = graph(
    webPageSchema({
      url: `${siteConfig.url}/about-us/`,
      name: "About Us - Open Arms Foster Care | Therapeutic Foster Care Agency | Oklahoma City",
      description,
    }),
    faqPageSchema(aboutFaqs),
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <PageHero
        eyebrow="About Us"
        title="Your Trusted Partner in Foster Care Across Oklahoma"
        intro={description}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-6 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="relative rounded-[0.5rem_2rem_0.5rem_2rem] border border-pine/10 bg-mint/60 p-7"
            >
              <span className="font-display text-3xl font-light text-leaf-deep/70">0{i + 1}</span>
              <h2 className="mt-3 font-display text-lg font-medium leading-snug text-pine">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <ProseBlock>
            <p>
              Open Arms Foster Care supports children who need a safe, stable home and the families who open their
              doors to them. As an Oklahoma City foster care agency, we recruit, train, and walk alongside foster
              parents so no family has to navigate the process alone.
            </p>
            <p>
              Our work spans the full range of foster care — from becoming a first-time foster parent, to emergency
              placements, to therapeutic foster care for children with elevated emotional or behavioral needs.
              Families across Oklahoma connect with us through our offices in Oklahoma City, Tulsa, and Lawton.
            </p>
          </ProseBlock>
          <div className="flex flex-col justify-center gap-6 rounded-[2rem_2rem_4rem_2rem] bg-pine p-9">
            <p className="font-display text-2xl italic leading-snug text-cream">
              &ldquo;We focus on therapeutic foster care, supportive foster care, and intensive treatment family care
              to ensure children receive the best emotional, behavioral, and social support.&rdquo;
            </p>
            <ButtonLink href="/therapeutic-foster-care-agency" variant="secondary">
              Learn About Therapeutic Care
            </ButtonLink>
          </div>
        </div>
      </section>

      <TeamSection />
      <TestimonialsSection />
      <FaqSection faqs={aboutFaqs} eyebrow="Common Questions" title="Answers about our foster care programs" />
    </>
  );
}
