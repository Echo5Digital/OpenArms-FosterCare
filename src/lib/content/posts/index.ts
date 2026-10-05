import type { BlogPost } from "./types";
import { posts as postList } from "./data";

export const allPosts: BlogPost[] = [...postList].sort(
  (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug);
}

/** Every tag used across the posts, most-used first. */
export const allTags: string[] = (() => {
  const counts = new Map<string, number>();
  for (const tag of allPosts.flatMap((p) => p.tags)) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([tag]) => tag);
})();

export function formatPostDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}

export const POSTS_PER_PAGE = 10;

export function getPostsPage(page: number) {
  const start = (page - 1) * POSTS_PER_PAGE;
  return allPosts.slice(start, start + POSTS_PER_PAGE);
}

export const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE));
