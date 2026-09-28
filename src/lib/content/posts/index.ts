import type { BlogPost } from "./types";
import { posts as postList } from "./data";

export const allPosts: BlogPost[] = [...postList].sort(
  (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug);
}

export const POSTS_PER_PAGE = 10;

export function getPostsPage(page: number) {
  const start = (page - 1) * POSTS_PER_PAGE;
  return allPosts.slice(start, start + POSTS_PER_PAGE);
}

export const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE));
