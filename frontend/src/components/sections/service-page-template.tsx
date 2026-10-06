import { PageHero } from "@/components/sections/page-hero";
import { FaqSection } from "@/components/sections/faq-section";
import { HealingHopeSection } from "@/components/sections/healing-hope-section";
import { ProseBlock } from "@/components/ui/prose-block";
import type { Faq } from "@/lib/content/faqs";
import type { ReactNode } from "react";

type Feature = { title: string; body: string };

export function ServicePageTemplate({
  eyebrow,
  title,
  intro,
  features,
  articleParagraphs,
  faqs,
  faqEyebrow,
  faqTitle,
  closing,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  features: Feature[];
  articleParagraphs: ReactNode[];
  faqs: Faq[];
  faqEyebrow: string;
  faqTitle: string;
  closing?: string;
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        breadcrumb={[{ label: "Home", href: "/" }, { label: title }]}
      />

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-6 sm:grid-cols-3">
          {features.map((f, i) => (
            <div key={f.title} className="relative rounded-[0.5rem_2rem_0.5rem_2rem] border border-pine/10 bg-mint/60 p-7">
              <span className="font-display text-3xl font-light text-leaf-deep/70">0{i + 1}</span>
              <h2 className="mt-3 font-display text-lg font-medium leading-snug text-pine">{f.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate">{f.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <ProseBlock className="max-w-3xl">
            {articleParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </ProseBlock>
        </div>

        {closing && (
          <p className="mt-10 max-w-2xl font-display text-xl italic leading-snug text-pine">{closing}</p>
        )}
      </section>

      <FaqSection faqs={faqs} eyebrow={faqEyebrow} title={faqTitle} />
      <HealingHopeSection />
    </>
  );
}
