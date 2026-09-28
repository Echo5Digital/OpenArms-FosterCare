import type { Metadata } from "next";
import { BlogListing } from "./blog-listing";

export const metadata: Metadata = {
  title: "Blog",
  description: "Stories, guidance, and resources for Oklahoma foster families from Open Arms Foster Care.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "Blog - Open Arms Foster Care", url: "/blog" },
};

export default function BlogIndexPage() {
  return <BlogListing page={1} />;
}
