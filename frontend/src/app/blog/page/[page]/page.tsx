import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogListing } from "../../blog-listing";
import { totalPages } from "@/lib/content/posts";

export function generateStaticParams() {
  return Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => ({ page: String(i + 2) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  return {
    title: `Blog — Page ${page}`,
    alternates: { canonical: `/blog/page/${page}` },
  };
}

export default async function BlogPagePagination({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const pageNum = Number(page);
  if (!Number.isInteger(pageNum) || pageNum < 2 || pageNum > totalPages) notFound();

  return <BlogListing page={pageNum} />;
}
