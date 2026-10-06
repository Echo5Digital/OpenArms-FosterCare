import type { BlogPost } from "./types";
import { allPosts } from "./index";

/**
 * Stock photos from /public used for posts that don't set their own `image`.
 * Replace the files, edit this list, or set `image` on a post to change what the blog shows.
 */
export const fallbackPostImages = [
  "/cute-family-playing-summer-field-100kb.jpg",
  "/family-lesson-time-100kb.jpg",
  "/Caring-for-Foster-Children-2.jpg",
  "/handsome-father-with-cute-little-son-100kb.jpg",
  "/teen-girl-participates-drawing-activity-as-part-psychotherapy-100kb.jpg",
  "/happy-family-outdoors-spending-time-together-100kb.jpg",
  "/mother-son-looking-tablet-100kb.jpg",
  "/cute-family-walking-sunset-summer-park-100kb.jpg",
  "/child-doing-therapy-session-with-psychologist-100kb.jpg",
  "/family-with-baby-standing-outside-house-100kb.jpg",
  "/medium-shot-girl-holding-toy-100kb.jpg",
  "/happy-family-field-autumn-mother-father-baby-play-nature-rays-sunset-100kb.jpg",
  "/teenager-girl-making-progress-self-love-self-acceptance-therapy-100kb.jpg",
  "/smiling-man-carrying-his-cute-daughter-park-100kb.jpg",
  "/close-up-girl-therapy-session-with-parents-100kb.jpg",
  "/cute-family-playing-summer-park-100kb.jpg",
  "/beautiful-boy-playing-with-bubbles-sunny-day-garden-100kb.jpg",
  "/side-view-grandmother-grandson-playing-sticking-their-tongues-out-100kb.jpg",
];

/**
 * Counting from the oldest post means a newly published post doesn't shuffle the photos of the existing ones,
 * and neighbouring posts always get different photos.
 */
export function getPostImage(post: BlogPost): string {
  if (post.image) return post.image;
  const fromOldest = allPosts.length - 1 - allPosts.indexOf(post);
  return fallbackPostImages[fromOldest % fallbackPostImages.length];
}
