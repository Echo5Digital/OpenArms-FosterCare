import type { PostBlock } from "@/lib/content/posts/types";

export function PostBody({ blocks }: { blocks: PostBlock[] }) {
  return (
    <div className="max-w-2xl">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} className="mt-12 font-display text-2xl font-medium leading-snug text-pine first:mt-0">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-8 font-display text-xl font-medium leading-snug text-pine">
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="mt-5 text-[1.05rem] leading-relaxed text-slate">
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="mt-5 space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[1.02rem] leading-relaxed text-slate">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf-deep" />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="mt-5 space-y-4">
                {block.items.map((item, idx) => (
                  <li key={item} className="flex items-start gap-4 text-[1.02rem] leading-relaxed text-slate">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint font-sans text-xs font-bold text-pine">
                      {idx + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
