import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import type { Faq } from "@/lib/content/faqs";

export function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
  eyebrow = "Ask Away",
  image,
}: {
  faqs: Faq[];
  title?: string;
  eyebrow?: string;
  image?: { src: string; alt: string; position?: string };
}) {
  return (
    <section className="bg-cream-alt px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow={eyebrow} title={title} />
            {image && (
              <div className="relative mt-10 aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] shadow-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className={`object-cover ${image.position ?? "object-center"}`}
                />
              </div>
            )}
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </div>
    </section>
  );
}
