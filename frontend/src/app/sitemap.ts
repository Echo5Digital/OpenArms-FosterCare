import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { allPosts, allTags, pageCount, totalPages } from "@/lib/content/posts";

const staticRoutes = [
  "",
  "about-us",
  "therapeutic-foster-care-agency",
  "foster-parent-training",
  "child-welfare-advocacy",
  "post-placement-therapy",
  "support-for-school-staff",
  "referrals",
  "oklahoma-city",
  "tulsa",
  "lawton",
  "contact-us",
  "sign-up-now",
  "inquiry-form",
  "careers",
  "employment-application",
  "blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}/${route}`.replace(/\/$/, "") || siteConfig.url,
    lastModified: now,
    changeFrequency: route === "" || route === "blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "blog" ? 0.7 : 0.8,
  }));

  const blogPaginationEntries: MetadataRoute.Sitemap = Array.from({ length: totalPages - 1 }, (_, i) => ({
    url: `${siteConfig.url}/blog/page/${i + 2}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  const postEntries: MetadataRoute.Sitemap = allPosts.map((post) => ({
    url: `${siteConfig.url}/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // one page per tag, plus extra pages for tags with more than 10 posts
  const tagEntries: MetadataRoute.Sitemap = allTags.flatMap((tag) =>
    Array.from({ length: pageCount(tag.count) }, (_, i) => ({
      url: `${siteConfig.url}/blog/tag/${tag.slug}${i === 0 ? "" : `/page/${i + 1}`}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.4,
    })),
  );

  return [...staticEntries, ...blogPaginationEntries, ...tagEntries, ...postEntries];
}
