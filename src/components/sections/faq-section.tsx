import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { siteConfig } from "@/lib/site-config";
import type { Faq } from "@/lib/content/faqs";

export function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
  eyebrow = "Ask Away",
  image,
  secondaryImage,
  titleClassName,
}: {
  faqs: Faq[];
  title?: string;
  eyebrow?: string;
  image?: { src: string; alt: string; position?: string };
  secondaryImage?: { src: string; alt: string; position?: string };
  titleClassName?: string;
}) {
  return (
    <section className="bg-cream-alt px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow={eyebrow} title={title} titleClassName={titleClassName} />
            {image && (
              <div className="relative mt-10 w-full max-w-sm">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 90vw"
                    className={`object-cover ${image.position ?? "object-center"}`}
                  />
                </div>

                <div className="absolute -right-4 top-10 flex items-center gap-3 rounded-full bg-pine py-2.5 pl-4 pr-2.5 shadow-lg sm:-right-8">
                  <span className="font-sans text-xs leading-tight text-cream/70">
                    Call Us Anytime
                    <br />
                    <span className="font-semibold text-cream">{siteConfig.phone}</span>
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-leaf text-pine-deep">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                      <path
                        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.5c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.7}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>

                {secondaryImage && (
                  <div className="absolute -bottom-10 -left-6 h-32 w-28 overflow-hidden rounded-[1.5rem] border-4 border-cream-alt shadow-xl sm:-left-10 sm:h-40 sm:w-36">
                    <Image
                      src={secondaryImage.src}
                      alt={secondaryImage.alt}
                      fill
                      sizes="200px"
                      className={`object-cover ${secondaryImage.position ?? "object-center"}`}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </div>
    </section>
  );
}
