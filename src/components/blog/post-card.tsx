import Link from "next/link";
import type { BlogPost } from "@/lib/content/posts/types";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export function PostCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  if (featured) {
    return (
      <Link
        href={`/${post.slug}`}
        className="group grid gap-6 overflow-hidden rounded-[2rem_2rem_4rem_2rem] border border-pine/10 bg-pine p-8 sm:grid-cols-[0.9fr_1.1fr] sm:p-10"
      >
        <div className="flex flex-col justify-center">
          <span className="font-sans text-xs font-semibold uppercase tracking-wide text-leaf">
            {formatDate(post.datePublished)}
          </span>
          <h2 className="mt-3 font-display text-2xl font-medium leading-snug text-cream sm:text-3xl">
            {post.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-cream/70">{post.excerpt}</p>
          <span className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-leaf">
            Read the Story
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1">
              <path d="M2 8h11m0 0-5-5m5 5-5 5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        <div className="blob-mask hidden bg-leaf/20 sm:block" />
      </Link>
    );
  }

  return (
    <Link
      href={`/${post.slug}`}
      className="group flex flex-col rounded-[0.5rem_2rem_0.5rem_2rem] border border-pine/10 bg-white p-6 transition-colors hover:border-leaf/50"
    >
      <span className="font-sans text-xs font-semibold uppercase tracking-wide text-leaf-deep">
        {formatDate(post.datePublished)}
      </span>
      <h3 className="mt-3 font-display text-lg font-medium leading-snug text-pine">{post.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">{post.excerpt}</p>
      <span className="mt-5 inline-flex items-center gap-2 font-sans text-sm font-semibold text-leaf-deep">
        Read More
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1">
          <path d="M2 8h11m0 0-5-5m5 5-5 5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
