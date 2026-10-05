import Link from "next/link";
import { getPostImage } from "@/lib/content/posts/images";
import type { BlogPost } from "@/lib/content/posts/types";
import { PostMeta } from "./post-meta";
import { PostPhoto } from "./post-photo";

export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section aria-labelledby="related-posts-heading" className="mt-14">
      <h2 id="related-posts-heading" className="font-sans text-2xl font-bold tracking-tight text-pine sm:text-[1.7rem]">
        Related Posts
      </h2>

      <div className="mt-6 grid gap-8 sm:grid-cols-2">
        {posts.map((post) => {
          const href = `/${post.slug}`;
          return (
            <div key={post.slug} className="group">
              <Link href={href} tabIndex={-1} aria-hidden className="block">
                <PostPhoto
                  src={getPostImage(post)}
                  alt=""
                  sizes="(min-width: 1400px) 450px, (min-width: 640px) 32vw, 100vw"
                  className="rounded-xl"
                  imageClassName="transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <PostMeta post={post} showCategory={false} className="mt-4" />
              <h3 className="mt-2 font-sans text-xl font-bold leading-snug tracking-tight text-pine">
                <Link href={href} className="transition-colors hover:text-leaf-deep">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-3 line-clamp-3 text-[0.95rem] leading-relaxed text-slate">{post.excerpt}</p>
              <Link
                href={href}
                className="mt-4 inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wide text-pine transition-colors hover:text-leaf-deep"
              >
                Read More
                <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1">
                  <path d="M2 8h11m0 0-5-5m5 5-5 5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
