import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageSchema, pageUrl, articleSchema } from "@/lib/schema";
import { allPosts, getPostBySlug } from "@/lib/content/posts";
import { getPostImage } from "@/lib/content/posts/images";
import { BlogLayout } from "@/components/blog/blog-layout";
import { CommentForm } from "@/components/blog/comment-form";
import { PostBody } from "@/components/blog/post-body";
import { PostMeta } from "@/components/blog/post-meta";
import { PostNav } from "@/components/blog/post-nav";
import { PostPhoto } from "@/components/blog/post-photo";
import { PostShare } from "@/components/blog/post-share";
import { RelatedPosts } from "@/components/blog/related-posts";
import { FaqAccordion } from "@/components/ui/faq-accordion";

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

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const cover = getPostImage(post);
  const coverSizes = "(min-width: 1400px) 980px, (min-width: 1280px) 70vw, (min-width: 1024px) 62vw, 100vw";

  // a post can place its FAQs inside the article; otherwise they follow it
  const faqsInBody = post.body.some((block) => block.type === "faqs");

  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
  // allPosts is newest-first, so the post before this one in the list is the newer one
  const index = allPosts.indexOf(post);
  const newer = allPosts[index - 1];
  const older = allPosts[index + 1];

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

      <BlogLayout activeTags={post.tags}>
        <article className="overflow-hidden rounded-[1.25rem] bg-white">
          <PostPhoto src={cover} alt={post.title} sizes={coverSizes} preload />

          <div className="p-6 sm:p-10">
            <PostMeta post={post} />
            <h1 className="mt-3 font-sans text-[1.9rem] font-bold leading-tight tracking-tight text-pine sm:text-4xl">{post.title}</h1>

            <div className="mt-8">
              <PostBody blocks={post.body} faqs={post.faqs} />
            </div>

            {post.faqs && post.faqs.length > 0 && !faqsInBody && (
              <div className="mt-14">
                <h2 className="font-cabinet text-2xl font-bold tracking-tight text-pine sm:text-[1.7rem]">
                  {post.faqTitle ?? "Common Questions Foster Parents Ask"}
                </h2>
                <div className="mt-6">
                  <FaqAccordion faqs={post.faqs} />
                </div>
              </div>
            )}

            <PostShare url={pageUrl(`/${post.slug}`)} title={post.title} />
            <PostNav older={older} newer={newer} />
            <RelatedPosts posts={related} />
          </div>
        </article>

        <CommentForm postTitle={post.title} />
      </BlogLayout>
    </>
  );
}
