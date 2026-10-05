import Link from "next/link";
import type { BlogPost } from "@/lib/content/posts/types";

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4">
      <path
        d={direction === "left" ? "M14 8H3m0 0 5-5M3 8l5 5" : "M2 8h11m0 0-5-5m5 5-5 5"}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NavLink({ post, direction }: { post: BlogPost; direction: "prev" | "next" }) {
  const circle = (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint text-slate transition-colors group-hover:bg-pine group-hover:text-cream">
      <ArrowIcon direction={direction === "prev" ? "left" : "right"} />
    </span>
  );

  return (
    <Link
      href={`/${post.slug}`}
      rel={direction}
      className="group inline-flex items-center gap-3 font-sans text-sm font-semibold tracking-wide text-slate transition-colors hover:text-pine"
    >
      {direction === "prev" && circle}
      <span>
        <span className="hidden sm:inline">{direction === "prev" ? "Prev Post" : "Next Post"}</span>
        <span className="sr-only">
          {direction === "prev" ? "Previous post" : "Next post"}: {post.title}
        </span>
      </span>
      {direction === "next" && circle}
    </Link>
  );
}

/** Older / newer post links with a button back to the full blog in the middle. */
export function PostNav({ older, newer }: { older?: BlogPost; newer?: BlogPost }) {
  if (!older && !newer) return null;

  return (
    <nav aria-label="Post navigation" className="mt-12 grid grid-cols-[1fr_auto_1fr] items-center gap-4 border-t border-pine/10 pt-6">
      <div>{older && <NavLink post={older} direction="prev" />}</div>
      <Link href="/blog" aria-label="All blog posts" className="text-pine transition-colors hover:text-leaf-deep">
        <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6 fill-current">
          <rect x="3" y="3" width="8" height="8" rx="1.5" />
          <rect x="13" y="3" width="8" height="8" rx="1.5" />
          <rect x="3" y="13" width="8" height="8" rx="1.5" />
          <rect x="13" y="13" width="8" height="8" rx="1.5" />
        </svg>
      </Link>
      <div className="justify-self-end">{newer && <NavLink post={newer} direction="next" />}</div>
    </nav>
  );
}
