import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { PostCard } from "@/components/blog/post-card";
import { HealingHopeSection } from "@/components/sections/healing-hope-section";
import { POSTS_PER_PAGE, getPostsPage, totalPages } from "@/lib/content/posts";
import { itemListSchema, pageSchema, pageUrl } from "@/lib/schema";

export const blogDescription = "Stories, guidance, and resources for Oklahoma foster families from Open Arms Foster Care.";

export function BlogListing({ page }: { page: number }) {
  const posts = getPostsPage(page);
  const [featured, ...rest] = posts;

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

      <PageHero
        eyebrow="Blog"
        title="Stories, guidance, and resources for Oklahoma foster families"
        intro="Practical answers to the questions foster parents actually ask — from your first day of placement to navigating trauma-informed care."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        {featured && (
          <div className="mb-10">
            <PostCard post={featured} featured />
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        {totalPages > 1 && (
          <nav aria-label="Blog pagination" className="mt-16 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={p === 1 ? "/blog" : `/blog/page/${p}`}
                className={`flex h-10 w-10 items-center justify-center rounded-full font-sans text-sm font-semibold transition-colors ${
                  p === page ? "bg-pine text-cream" : "bg-mint text-pine hover:bg-leaf/40"
                }`}
              >
                {p}
              </Link>
            ))}
          </nav>
        )}
      </section>

      <HealingHopeSection />
    </>
  );
}
