import Link from "next/link";
import { allTags, tagSlug, type TagInfo } from "@/lib/content/posts";

/**
 * Four looks for the sidebar Tags widget. Every tag is a link to its page of posts (/blog/tag/<tag>).
 *  - pills: outlined chips with a post count; a leaf-green fill on hover
 *  - cloud: chips sized by how many posts use the tag; flip to dark green on hover
 *  - list:  rows like the Category widget, name on the left and count on the right (first 8, the rest open on request)
 *  - dark:  the widget on dark green, with soft chips that light up leaf green on hover (use with tone="dark")
 */
export type TagsDesign = "pills" | "cloud" | "list" | "dark";

const focus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2";

function href(tag: TagInfo) {
  return `/blog/tag/${tag.slug}`;
}

function cloudSize(count: number) {
  if (count >= 16) return "text-[1.05rem] font-semibold";
  if (count >= 8) return "text-[0.95rem] font-semibold";
  if (count >= 3) return "text-[0.85rem] font-medium";
  return "text-xs font-medium";
}

const LIST_VISIBLE = 8;

function ListRow({ tag, active }: { tag: TagInfo; active: boolean }) {
  return (
    <li>
      <Link
        href={href(tag)}
        className={`flex items-center justify-between gap-3 rounded-xl px-4 py-2.5 font-sans text-[0.9rem] font-medium transition-colors ${focus} ${
          active ? "bg-pine text-cream" : "bg-mint text-pine hover:bg-leaf/40"
        }`}
      >
        <span>{tag.name}</span>
        <span className={`shrink-0 rounded-full px-2 text-xs font-semibold ${active ? "bg-leaf text-pine-deep" : "bg-white text-leaf-deep"}`}>{tag.count}</span>
      </Link>
    </li>
  );
}

/** `activeTags` are highlighted: the tags of the post being read, or the tag whose page is open. */
export function BlogTags({ design, activeTags = [] }: { design: TagsDesign; activeTags?: string[] }) {
  const active = new Set(activeTags.map(tagSlug));
  const isActive = (t: TagInfo) => active.has(t.slug);

  if (design === "cloud") {
    return (
      <ul className="flex flex-wrap items-center gap-2">
        {allTags.map((t) => (
          <li key={t.slug}>
            <Link
              href={href(t)}
              title={`${t.count} ${t.count === 1 ? "post" : "posts"}`}
              className={`inline-block rounded-lg px-3 py-1.5 font-sans transition-colors ${cloudSize(t.count)} ${focus} ${
                isActive(t) ? "bg-leaf text-pine-deep" : "bg-mint text-pine hover:bg-pine hover:text-cream"
              }`}
            >
              {t.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  if (design === "list") {
    const shown = allTags.slice(0, LIST_VISIBLE);
    const rest = allTags.slice(LIST_VISIBLE);
    return (
      <>
        <ul className="flex flex-col gap-2">
          {shown.map((t) => (
            <ListRow key={t.slug} tag={t} active={isActive(t)} />
          ))}
        </ul>
        {rest.length > 0 && (
          <details className="group mt-2">
            <summary
              className={`flex cursor-pointer list-none items-center justify-center gap-2 rounded-xl border border-pine/15 px-4 py-2.5 font-sans text-sm font-semibold text-pine transition-colors hover:border-leaf hover:bg-leaf/20 [&::-webkit-details-marker]:hidden ${focus}`}
            >
              <span className="group-open:hidden">Show all {allTags.length} tags</span>
              <span className="hidden group-open:inline">Show fewer</span>
              <svg aria-hidden viewBox="0 0 12 12" className="h-3 w-3 transition-transform group-open:rotate-180">
                <path d="m2 4 4 4 4-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <ul className="mt-2 flex flex-col gap-2">
              {rest.map((t) => (
                <ListRow key={t.slug} tag={t} active={isActive(t)} />
              ))}
            </ul>
          </details>
        )}
      </>
    );
  }

  if (design === "dark") {
    return (
      <ul className="flex flex-wrap gap-2">
        {allTags.map((t) => (
          <li key={t.slug}>
            <Link
              href={href(t)}
              className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-sans text-[0.8rem] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf ${
                isActive(t)
                  ? "border-leaf bg-leaf font-semibold text-pine-deep"
                  : "border-cream/20 bg-cream/5 text-cream/85 hover:border-leaf hover:bg-leaf hover:text-pine-deep"
              }`}
            >
              {t.name}
              <span className={`text-[0.7rem] font-semibold ${isActive(t) ? "text-pine" : "text-leaf"}`}>{t.count}</span>
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  // pills (default)
  return (
    <ul className="flex flex-wrap gap-2">
      {allTags.map((t) => (
        <li key={t.slug}>
          <Link
            href={href(t)}
            className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-sans text-[0.8rem] transition-colors ${focus} ${
              isActive(t)
                ? "border-leaf bg-leaf/25 font-semibold text-pine"
                : "border-pine/15 text-slate hover:border-leaf hover:bg-leaf/20 hover:text-pine"
            }`}
          >
            {t.name}
            <span className="rounded-full bg-mint px-1.5 text-[0.7rem] font-semibold text-leaf-deep">{t.count}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
