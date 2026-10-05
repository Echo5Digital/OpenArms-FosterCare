import Link from "next/link";
import { BlogLayout } from "@/components/blog/blog-layout";
import { PostListItem } from "@/components/blog/post-list-item";
import { POSTS_PER_PAGE, getPostsPage, totalPages } from "@/lib/content/posts";
import { itemListSchema, pageSchema, pageUrl } from "@/lib/schema";

export const blogDescription = "Stories, guidance, and resources for Oklahoma foster families from Open Arms Foster Care.";

const pageHref = (p: number) => (p === 1 ? "/blog" : `/blog/page/${p}`);
const pageBox = "flex h-12 min-w-12 items-center justify-center rounded-lg border px-4 font-sans text-[0.95rem] font-semibold transition-colors";

export function BlogListing({ page }: { page: number }) {
  const posts = getPostsPage(page);

  const schema = pageSchema({
    path: page === 1 ? "/blog" : `/blog/page/${page}`,
    name: page === 1 ? "Blog - Open Arms Foster Care" : `Blog - Page ${page} - Open Arms Foster Care`,
    description: blogDescription,
    type: "CollectionPage",
    breadcrumb:
      page === 1
        ? "Blog"
        : [
            { name: "Blog", path: "/blog" },
            { name: `Page ${page}`, path: `/blog/page/${page}` },
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

      <BlogLayout>
        <h1 className="sr-only">Stories, guidance, and resources for Oklahoma foster families</h1>

        <div className="flex flex-col gap-14">
          {posts.map((post, i) => (
            <PostListItem key={post.slug} post={post} preloadImage={i === 0} />
          ))}
        </div>

        {totalPages > 1 && (
          <nav aria-label="Blog pagination" className="mt-16 flex flex-wrap items-center gap-2">
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
