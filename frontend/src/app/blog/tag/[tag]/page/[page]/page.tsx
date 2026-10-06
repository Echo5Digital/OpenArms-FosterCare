import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogListing } from "../../../../blog-listing";
import { allTags, getTagBySlug, pageCount } from "@/lib/content/posts";

export function generateStaticParams() {
  // only tags with more than one page of posts have pages 2 and up
  return allTags.flatMap((t) => Array.from({ length: pageCount(t.count) - 1 }, (_, i) => ({ tag: t.slug, page: String(i + 2) })));
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string; page: string }> }): Promise<Metadata> {
  const { tag, page } = await params;
  const info = getTagBySlug(tag);
  if (!info) return {};
  return {
    title: `${info.name} - Blog - Page ${page}`,
    alternates: { canonical: `/blog/tag/${info.slug}/page/${page}` },
  };
}

export default async function BlogTagPagePagination({ params }: { params: Promise<{ tag: string; page: string }> }) {
  const { tag, page } = await params;
  const info = getTagBySlug(tag);
  const pageNum = Number(page);
  if (!info || !Number.isInteger(pageNum) || pageNum < 2 || pageNum > pageCount(info.count)) notFound();

  return <BlogListing page={pageNum} tag={info} />;
}
