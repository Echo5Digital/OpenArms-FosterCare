import type { Metadata } from "next";
import { BlogListing, blogDescription } from "./blog-listing";

export const metadata: Metadata = {
  title: "Blog",
  description: blogDescription,
  alternates: { canonical: "/blog" },
  openGraph: { title: "Blog - Open Arms Foster Care", url: "/blog" },
};

export default function BlogIndexPage() {
  return <BlogListing page={1} />;
}
