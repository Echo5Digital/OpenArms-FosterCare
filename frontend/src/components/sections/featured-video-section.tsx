import { ScrollVideo } from "@/components/ui/scroll-video";

export function FeaturedVideoSection({
  id,
  videoId,
  title,
  eyebrow = "Watch",
  heading = "See Our Work in Action",
}: {
  /** Anchor so other pages can link straight to this video (e.g. /about-us#our-video). */
  id?: string;
  videoId: string;
  title: string;
  eyebrow?: string;
  heading?: string;
}) {
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&playsinline=1`;

  return (
    <section id={id} className="scroll-mt-24 bg-[rgb(235,243,238)] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1000px] text-center">
        <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-leaf-deep">
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {eyebrow}
        </span>
        <h2 className="mt-3 font-display text-[2.1rem] font-medium leading-[1.15] tracking-tight text-pine sm:text-[2.6rem]">
          {heading}
        </h2>

        <div className="relative mt-12 overflow-hidden rounded-[2rem] bg-pine shadow-[0_40px_80px_-30px_rgba(15,33,27,0.4)] ring-1 ring-pine/10">
          <div className="relative aspect-video w-full">
            <ScrollVideo src={src} title={title} />
          </div>
        </div>
      </div>
    </section>
  );
}
