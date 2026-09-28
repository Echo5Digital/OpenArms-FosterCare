import { SectionHeading } from "@/components/ui/section-heading";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import type { Faq } from "@/lib/content/faqs";

export function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
  eyebrow = "Ask Away",
}: {
  faqs: Faq[];
  title?: string;
  eyebrow?: string;
}) {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <FaqAccordion faqs={faqs} />
      </div>
    </section>
  );
}
