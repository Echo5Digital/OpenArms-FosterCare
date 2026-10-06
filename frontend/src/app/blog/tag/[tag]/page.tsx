import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogListing } from "../../blog-listing";
import { allTags, getTagBySlug } from "@/lib/content/posts";

export function generateStaticParams() {
  return allTags.map((t) => ({ tag: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag } = await params;
  const info = getTagBySlug(tag);
  if (!info) return {};
  return {
    title: `${info.name} - Blog`,
    description: `Open Arms Foster Care blog posts about ${info.name}.`,
    alternates: { canonical: `/blog/tag/${info.slug}` },
  };
}

export default async function BlogTagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const info = getTagBySlug(tag);
  if (!info) notFound();

  return <BlogListing page={1} tag={info} />;
}
