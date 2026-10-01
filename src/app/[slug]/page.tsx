import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageSchema, pageUrl, articleSchema } from "@/lib/schema";
import { allPosts, getPostBySlug } from "@/lib/content/posts";
import { PageHero } from "@/components/sections/page-hero";
import { PostBody } from "@/components/blog/post-body";
import { PostCard } from "@/components/blog/post-card";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { HealingHopeSection } from "@/components/sections/healing-hope-section";
import { SocialIcons } from "@/components/ui/social-icons";

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      url: `/${post.slug}`,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const schema = pageSchema({
    path: `/${post.slug}`,
    name: post.metaTitle,
    description: post.metaDescription,
    breadcrumb: [
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/${post.slug}` },
    ],
    faqs: post.faqs,
    extra: [
      articleSchema({
        url: pageUrl(`/${post.slug}`),
        headline: post.title,
        description: post.metaDescription,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
      }),
    ],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <PageHero
        eyebrow={formatDate(post.datePublished)}
        title={post.title}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]}
      />

      <article className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.4fr]">
          <PostBody blocks={post.body} />

          <aside className="hidden lg:block">
            <div className="sticky top-28 flex flex-col gap-8">
              <div className="rounded-[0.5rem_1.75rem_0.5rem_1.75rem] bg-mint p-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-wide text-leaf-deep">Share</p>
                <div className="mt-3">
                  <SocialIcons className="text-pine" />
                </div>
              </div>
              {post.tags.length > 0 && (
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-wide text-slate">Topics</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-pine/15 px-3 py-1 text-xs text-slate">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>

        {post.faqs && post.faqs.length > 0 && (
          <div className="mt-16 max-w-2xl border-t border-pine/10 pt-12">
            <h2 className="font-display text-2xl font-medium text-pine">Frequently Asked Questions</h2>
            <div className="mt-6">
              <FaqAccordion faqs={post.faqs} />
            </div>
          </div>
        )}
      </article>

      {related.length > 0 && (
        <section className="mx-auto max-w-[1400px] px-5 pb-20 sm:px-8 sm:pb-28">
          <h2 className="font-display text-2xl font-medium text-pine">More from the Blog</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}

      <HealingHopeSection />
    </>
  );
}
