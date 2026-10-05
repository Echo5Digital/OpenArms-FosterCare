import Link from "next/link";
import type { ReactNode } from "react";
import { allPosts, allTags, formatPostDate } from "@/lib/content/posts";
import { BlogSearch } from "./blog-search";
import { BlogTags, type TagsDesign } from "./blog-tags";
import { CalendarIcon } from "./post-meta";

const searchablePosts = allPosts.map((p) => ({
  slug: p.slug,
  title: p.title,
  terms: `${p.title} ${p.tags.join(" ")}`.toLowerCase(),
}));

const LATEST_COUNT = 5;

/** Which look the Tags widget uses: "pills", "cloud", "list" or "dark" (see blog-tags.tsx). */
const TAGS_DESIGN: TagsDesign = "pills";

function Widget({ title, children, tone = "light" }: { title: string; children: ReactNode; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <section className={`rounded-[1.25rem] border p-6 sm:p-7 ${dark ? "border-pine-deep bg-pine" : "border-pine/10 bg-white"}`}>
      <div className={`relative mb-6 border-b pb-3 ${dark ? "border-cream/15" : "border-pine/10"}`}>
        <h2 className={`font-sans text-xl font-bold tracking-tight ${dark ? "text-cream" : "text-pine"}`}>{title}</h2>
        <span aria-hidden className="absolute -bottom-px left-0 h-0.5 w-[90px] bg-leaf" />
      </div>
      {children}
    </section>
  );
}

/** `activeTags` are the tags of the post being read; they stand out in the tag list. */
export function BlogSidebar({ activeTags = [] }: { activeTags?: string[] }) {
  return (
    // On wide screens the sidebar stays in view just under the site header. It is taller than most screens, so it
    // scrolls inside itself (thin leaf-green scrollbar) and every card stays reachable; on phones it flows below the posts.
    <aside
      aria-label="Blog sidebar"
      className="flex flex-col gap-8 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:self-start lg:overflow-y-auto lg:pr-1 [scrollbar-color:var(--leaf)_transparent] [scrollbar-width:thin]"
    >
      <Widget title="Search Here">
        <BlogSearch posts={searchablePosts} />
      </Widget>

      <Widget title="Category">
        <ul>
          <li>
            <Link
              href="/blog"
              className="flex items-center justify-between rounded-xl bg-mint px-4 py-3 font-sans text-[0.95rem] font-semibold text-pine transition-colors hover:bg-leaf/40"
            >
              Blog
              <span className="text-slate">({allPosts.length})</span>
            </Link>
          </li>
        </ul>
      </Widget>

      <Widget title="Latest Blog">
        <ul className="flex flex-col gap-5">
          {allPosts.slice(0, LATEST_COUNT).map((post) => (
            <li key={post.slug}>
              <p className="flex items-center gap-2 font-sans text-xs text-slate">
                <span className="text-leaf-deep">
                  <CalendarIcon className="h-3.5 w-3.5" />
                </span>
                <time dateTime={post.datePublished}>{formatPostDate(post.datePublished)}</time>
              </p>
              <Link href={`/${post.slug}`} className="mt-1.5 block font-sans text-[1.05rem] font-semibold leading-snug text-pine transition-colors hover:text-leaf-deep">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </Widget>

      {allTags.length > 0 && (
        <Widget title="Tags" tone={TAGS_DESIGN === "dark" ? "dark" : "light"}>
          <BlogTags design={TAGS_DESIGN} activeTags={activeTags} />
        </Widget>
      )}
    </aside>
  );
}
