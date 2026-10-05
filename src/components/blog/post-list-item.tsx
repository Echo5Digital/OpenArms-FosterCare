import Link from "next/link";
import { getPostImage } from "@/lib/content/posts/images";
import type { BlogPost } from "@/lib/content/posts/types";
import { PostMeta } from "./post-meta";
import { PostPhoto } from "./post-photo";

/** One row of the blog listing: photo on top, then date and category, title, excerpt and a Read More button. */
export function PostListItem({ post, preloadImage = false }: { post: BlogPost; preloadImage?: boolean }) {
  const href = `/${post.slug}`;

  return (
    <article className="group">
      <Link href={href} tabIndex={-1} aria-hidden className="block">
        <PostPhoto
          src={getPostImage(post)}
          alt=""
          preload={preloadImage}
          sizes="(min-width: 1400px) 980px, (min-width: 1280px) 70vw, (min-width: 1024px) 62vw, 100vw"
          className="rounded-[1.25rem]"
          imageClassName="transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <PostMeta post={post} className="mt-6" />

      <h2 className="mt-3 font-sans text-2xl font-bold leading-tight tracking-tight text-pine sm:text-[1.9rem]">
        <Link href={href} className="transition-colors hover:text-leaf-deep">
          {post.title}
        </Link>
      </h2>

      <p className="mt-4 line-clamp-3 text-base leading-relaxed text-slate">{post.excerpt}</p>

      <div className="mt-6">
        {/* dark green pill with a leaf-green arrow; on hover a leaf-green fill slides across and the colours swap */}
        <Link
          href={href}
          className="group/btn relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-pine py-2 pl-7 pr-2 font-sans text-[0.95rem] font-semibold text-cream transition-colors duration-300 hover:text-pine-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-mint motion-reduce:transition-none"
        >
          <span
            aria-hidden
            className="absolute inset-0 -translate-x-full bg-leaf transition-transform duration-300 ease-out group-hover/btn:translate-x-0 motion-reduce:transition-none"
          />
          <span className="relative">Read More</span>
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-leaf text-pine-deep transition-colors duration-300 group-hover/btn:bg-pine group-hover/btn:text-leaf motion-reduce:transition-none">
            <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 motion-reduce:transition-none">
              <path d="M4 12h15m0 0-6-6m6 6-6 6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>
      </div>
    </article>
  );
}
