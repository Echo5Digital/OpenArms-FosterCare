import Link from "next/link";
import type { ReactNode } from "react";
import { allPosts, allTags, formatPostDate } from "@/lib/content/posts";
import { BlogSearch } from "./blog-search";
import { CalendarIcon } from "./post-meta";

const searchablePosts = allPosts.map((p) => ({
  slug: p.slug,
  title: p.title,
  terms: `${p.title} ${p.tags.join(" ")}`.toLowerCase(),
}));

const LATEST_COUNT = 5;

function Widget({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-[1.25rem] border border-pine/10 bg-white p-6 sm:p-7">
      <div className="relative mb-6 border-b border-pine/10 pb-3">
        <h2 className="font-sans text-xl font-bold tracking-tight text-pine">{title}</h2>
        <span aria-hidden className="absolute -bottom-px left-0 h-0.5 w-[90px] bg-leaf" />
      </div>
      {children}
    </section>
  );
}

/** `activeTags` are the tags of the post being read; they stand out in the tag list. */
export function BlogSidebar({ activeTags = [] }: { activeTags?: string[] }) {
  return (
    <aside aria-label="Blog sidebar" className="flex flex-col gap-8">
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
        <Widget title="Tags">
          <ul className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <li
                key={tag}
                className={`rounded-full border px-3 py-1 text-xs ${
                  activeTags.includes(tag) ? "border-leaf bg-leaf/20 font-semibold text-pine" : "border-pine/15 text-slate"
                }`}
              >
                {tag}
              </li>
            ))}
          </ul>
        </Widget>
      )}
    </aside>
  );
}
