"use client";

import { HoverPrefetchLink as Link } from "@/components/ui/hover-prefetch-link";
import { useRouter } from "next/navigation";
import { useId, useState } from "react";

export type SearchablePost = { slug: string; title: string; terms: string };

/** Filters the (small, static) post list as you type. Enter opens the top match. */
export function BlogSearch({ posts }: { posts: SearchablePost[] }) {
  const router = useRouter();
  const inputId = useId();
  const [query, setQuery] = useState("");

  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const results = words.length ? posts.filter((p) => words.every((w) => p.terms.includes(w))).slice(0, 6) : [];

  return (
    <form
      role="search"
      className="relative"
      onSubmit={(e) => {
        e.preventDefault();
        if (results[0]) router.push(`/${results[0].slug}`);
      }}
    >
      <label htmlFor={inputId} className="sr-only">
        Search the blog
      </label>
      <input
        id={inputId}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search here"
        autoComplete="off"
        className="h-14 w-full rounded-[1.25rem] border border-pine/10 bg-white pl-5 pr-14 font-sans text-base text-ink outline-none transition-colors placeholder:text-slate/70 focus:border-leaf"
      />
      <button type="submit" aria-label="Search" className="absolute right-4 top-1/2 -translate-y-1/2 text-pine hover:text-leaf-deep">
        <svg aria-hidden viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
          <circle cx="9" cy="9" r="6" />
          <path d="m13.5 13.5 4 4" />
        </svg>
      </button>

      {words.length > 0 && (
        <ul className="absolute inset-x-0 top-full z-10 mt-2 overflow-hidden rounded-[1.25rem] border border-pine/10 bg-white py-2 shadow-lg">
          {results.length > 0 ? (
            results.map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}`} className="block px-5 py-2.5 font-sans text-sm leading-snug text-pine hover:bg-mint">
                  {p.title}
                </Link>
              </li>
            ))
          ) : (
            <li className="px-5 py-2.5 font-sans text-sm text-slate">No posts found.</li>
          )}
        </ul>
      )}
    </form>
  );
}
