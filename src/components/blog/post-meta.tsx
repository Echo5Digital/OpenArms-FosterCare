import { HoverPrefetchLink as Link } from "@/components/ui/hover-prefetch-link";
import { formatPostDate } from "@/lib/content/posts";
import type { BlogPost } from "@/lib/content/posts/types";

export function CalendarIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="12" height="11" rx="1.5" />
      <path d="M2 6.5h12M5.5 1.5v3M10.5 1.5v3" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M1.5 4.5a1 1 0 0 1 1-1h3.2l1.5 1.8h6.3a1 1 0 0 1 1 1v6.2a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1z" />
    </svg>
  );
}

/** Publish date and category, the small line above a post title. */
export function PostMeta({
  post,
  showCategory = true,
  className = "",
}: {
  post: BlogPost;
  showCategory?: boolean;
  className?: string;
}) {
  return (
    <ul className={`flex flex-wrap items-center gap-x-6 gap-y-1 font-sans text-[0.9rem] text-slate ${className}`}>
      <li className="flex items-center gap-2">
        <span className="text-leaf-deep">
          <CalendarIcon />
        </span>
        <time dateTime={post.datePublished}>{formatPostDate(post.datePublished)}</time>
      </li>
      {showCategory && (
        <li className="flex items-center gap-2">
          <span className="text-leaf-deep">
            <FolderIcon />
          </span>
          <Link href="/blog" className="hover:text-leaf-deep">
            Blog
          </Link>
        </li>
      )}
    </ul>
  );
}
