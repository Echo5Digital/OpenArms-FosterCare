import Link from "next/link";
import { BlogLayout } from "@/components/blog/blog-layout";
import { PostListItem } from "@/components/blog/post-list-item";
import { POSTS_PER_PAGE, allPosts, getPostsByTag, pageCount, paginate, type TagInfo } from "@/lib/content/posts";
import { itemListSchema, pageSchema, pageUrl } from "@/lib/schema";

export const blogDescription = "Stories, guidance, and resources for Oklahoma foster families from Open Arms Foster Care.";

const pageBox = "flex h-12 min-w-12 items-center justify-center rounded-lg border px-4 font-sans text-[0.95rem] font-semibold transition-colors";

/** The blog listing (page 1 is /blog), or the posts carrying one tag (/blog/tag/<tag>), 10 to a page. */
export function BlogListing({ page, tag }: { page: number; tag?: TagInfo }) {
  const everything = tag ? getPostsByTag(tag.slug) : allPosts;
  const totalPages = pageCount(everything.length);
  const posts = paginate(everything, page);

  const basePath = tag ? `/blog/tag/${tag.slug}` : "/blog";
  const pageHref = (p: number) => (p === 1 ? basePath : `${basePath}/page/${p}`);
  const label = tag ? `${tag.name} - Blog` : "Blog";

  const schema = pageSchema({
    path: pageHref(page),
    name: page === 1 ? `${label} - Open Arms Foster Care` : `${label} - Page ${page} - Open Arms Foster Care`,
    description: tag ? `Open Arms Foster Care blog posts about ${tag.name}.` : blogDescription,
    type: "CollectionPage",
    breadcrumb: [
      { name: "Blog", path: "/blog" },
      ...(tag ? [{ name: tag.name, path: basePath }] : []),
      ...(page > 1 ? [{ name: `Page ${page}`, path: pageHref(page) }] : []),
    ],
    extra: [
      itemListSchema(
        posts.map((post) => ({ name: post.title, url: pageUrl(`/${post.slug}`) })),
        (page - 1) * POSTS_PER_PAGE + 1,
      ),
    ],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <BlogLayout
        activeTags={tag ? [tag.name] : undefined}
        heading={
          tag ? (
            <>
              <p className="text-center font-sans text-xs font-semibold uppercase tracking-[0.2em] text-leaf-deep">Posts tagged</p>
              <h1 className="mt-3 text-center font-sans text-3xl font-bold tracking-tight text-pine sm:text-4xl">{tag.name}</h1>
              <span aria-hidden className="mx-auto mt-4 block h-1 w-20 rounded-full bg-leaf" />
              <p className="mt-4 text-center font-sans text-sm text-slate">
                {tag.count} {tag.count === 1 ? "post" : "posts"} ·{" "}
                <Link href="/blog" className="font-semibold text-leaf-deep underline underline-offset-4 hover:text-pine">
                  View all posts
                </Link>
              </p>
            </>
          ) : (
            <>
              <h1 className="text-center font-sans text-4xl font-bold tracking-tight text-pine sm:text-5xl">
                BLOG
                <span className="sr-only">: Stories, guidance, and resources for Oklahoma foster families</span>
              </h1>
              <span aria-hidden className="mx-auto mt-4 block h-1 w-20 rounded-full bg-leaf" />
            </>
          )
        }
      >
        <div className="flex flex-col gap-14">
          {posts.map((post, i) => (
            <PostListItem key={post.slug} post={post} preloadImage={i === 0} />
          ))}
        </div>

        {totalPages > 1 && (
          <nav aria-label={tag ? `${tag.name} pagination` : "Blog pagination"} className="mt-16 flex flex-wrap items-center gap-2">
            {page > 1 && (
              <Link href={pageHref(page - 1)} rel="prev" className={`${pageBox} border-pine/15 text-pine hover:bg-pine hover:text-cream`}>
                Prev
              </Link>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={pageHref(p)}
                aria-current={p === page ? "page" : undefined}
                className={`${pageBox} ${
                  p === page ? "border-pine bg-pine text-cream" : "border-pine/15 text-pine hover:bg-pine hover:text-cream"
                }`}
              >
                {p}
              </Link>
            ))}
            {page < totalPages && (
              <Link href={pageHref(page + 1)} rel="next" className={`${pageBox} border-pine/15 text-pine hover:bg-pine hover:text-cream`}>
                Next
              </Link>
            )}
          </nav>
        )}
      </BlogLayout>
    </>
  );
}
