import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import type { PostBlock, PostFaq } from "@/lib/content/posts/types";
import { PostPhoto } from "./post-photo";
import { PostTable } from "./post-table";

const text = "text-[1.0625rem] leading-[1.85] text-ink/80 sm:text-lg";

/** Turns **bold** and *italic* in a paragraph into emphasis; text without markers is returned as is. */
function withEmphasis(value: string): ReactNode {
  const parts = value.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  if (parts.length === 1) return value;
  return parts.map((part, i) => {
    if (part.startsWith("**")) return <strong key={i} className="font-semibold text-ink">{part.slice(2, -2)}</strong>;
    if (part.startsWith("*")) return <em key={i}>{part.slice(1, -1)}</em>;
    return part;
  });
}

export function PostBody({ blocks, faqs = [] }: { blocks: PostBlock[]; faqs?: PostFaq[] }) {
  return (
    <div>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} className="mt-12 font-sans text-2xl font-bold leading-snug tracking-tight text-pine first:mt-0 sm:text-[1.7rem]">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-8 font-sans text-xl font-bold leading-snug tracking-tight text-pine">
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className={`mt-5 ${text}`}>
                {withEmphasis(block.text)}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="mt-5 space-y-3">
                {block.items.map((item) => (
                  <li key={item} className={`flex items-start gap-3 ${text}`}>
                    <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf-deep" />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="mt-5 space-y-4">
                {block.items.map((item, idx) => (
                  <li key={item} className={`flex items-start gap-4 ${text}`}>
                    <span className="mt-[0.35em] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint font-sans text-xs font-bold text-pine">
                      {idx + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            );
          case "img":
            return <PostPhoto key={i} src={block.src} alt={block.alt} sizes="(min-width: 1280px) 900px, (min-width: 1024px) 560px, 100vw" className="mt-10 rounded-xl" />;
          case "table":
            return <PostTable key={i} caption={block.caption} headers={block.headers} rows={block.rows} />;
          case "faqs":
            return faqs.length > 0 ? (
              <div key={i} className="mt-14">
                <h2 className="font-sans text-2xl font-bold tracking-tight text-pine sm:text-[1.7rem]">{block.title}</h2>
                <div className="mt-6">
                  <FaqAccordion faqs={faqs} />
                </div>
              </div>
            ) : null;
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-10 rounded-r-xl border-l-4 border-leaf bg-mint px-7 py-6 font-sans text-xl font-medium italic leading-relaxed text-pine sm:text-[1.4rem]"
              >
                {block.text}
              </blockquote>
            );
          case "cta":
            return (
              <div key={i} className="my-10 rounded-xl border-t-4 border-leaf bg-pine px-7 py-8 sm:px-9">
                <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-leaf">{block.eyebrow}</p>
                <p className="mt-3 font-sans text-2xl font-bold leading-snug tracking-tight text-cream">{block.title}</p>
                <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-cream/80">{block.text}</p>
                <div className="mt-6">
                  <ButtonLink href={block.href} variant="secondary">
                    {block.label}
                  </ButtonLink>
                </div>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
