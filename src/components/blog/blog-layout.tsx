import type { ReactNode } from "react";
import { BlogSidebar } from "./blog-sidebar";

/** Shared shell for the blog listing and the single post pages: mint background, content column and sidebar. */
export function BlogLayout({ children, activeTags }: { children: ReactNode; activeTags?: string[] }) {
  return (
    <section className="bg-mint">
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 sm:py-20">
        {/* two-thirds / one-third on small laptops; on wider screens the sidebar stays slim so the content gets the room */}
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-14 xl:grid-cols-[minmax(0,1fr)_320px] xl:gap-10">
          <div className="min-w-0 lg:col-span-2 xl:col-span-1">{children}</div>
          <BlogSidebar activeTags={activeTags} />
        </div>
      </div>
    </section>
  );
}
