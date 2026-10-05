import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
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
          sizes="(min-width: 1400px) 880px, (min-width: 1024px) 62vw, 100vw"
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
        <ButtonLink href={href} variant="ghost">
          Read More
        </ButtonLink>
      </div>
    </article>
  );
}
