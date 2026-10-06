import type { BlogPost } from "./types";
import { posts as postList } from "./data";

export const allPosts: BlogPost[] = [...postList].sort(
  (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug);
}

/** URL-safe form of a tag, so "Foster parent training" and "foster parent training" are one tag with one page. */
export function tagSlug(tag: string) {
  return tag
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export type TagInfo = {
  slug: string;
  /** The spelling used most often across the posts. */
  name: string;
  /** How many posts carry the tag. */
  count: number;
};

/** Every tag used across the posts (spellings that differ only in capitals are merged), most-used first. */
export const allTags: TagInfo[] = (() => {
  const bySlug = new Map<string, { spellings: Map<string, number>; posts: Set<string> }>();
  for (const post of allPosts) {
    for (const tag of post.tags) {
      const slug = tagSlug(tag);
      const entry = bySlug.get(slug) ?? { spellings: new Map<string, number>(), posts: new Set<string>() };
      entry.spellings.set(tag, (entry.spellings.get(tag) ?? 0) + 1);
      entry.posts.add(post.slug);
      bySlug.set(slug, entry);
    }
  }
  return [...bySlug.entries()]
    .map(([slug, { spellings, posts }]) => ({
      slug,
      name: [...spellings.entries()].sort((a, b) => b[1] - a[1])[0][0],
      count: posts.size,
    }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
})();

export function getTagBySlug(slug: string): TagInfo | undefined {
  return allTags.find((t) => t.slug === slug);
}

/** Posts carrying a tag, newest first. */
export function getPostsByTag(slug: string): BlogPost[] {
  return allPosts.filter((p) => p.tags.some((t) => tagSlug(t) === slug));
}

export function formatPostDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}

export const POSTS_PER_PAGE = 10;

export const pageCount = (postTotal: number) => Math.max(1, Math.ceil(postTotal / POSTS_PER_PAGE));

/** One page (1-based) of any list of posts. */
export function paginate<T>(items: T[], page: number): T[] {
  const start = (page - 1) * POSTS_PER_PAGE;
  return items.slice(start, start + POSTS_PER_PAGE);
}

export function getPostsPage(page: number) {
  return paginate(allPosts, page);
}

export const totalPages = pageCount(allPosts.length);
