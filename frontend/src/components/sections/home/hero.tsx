import Image from "next/image";
import { HoverPrefetchLink as Link } from "@/components/ui/hover-prefetch-link";

type Tile = {
  title: string;
  image: string;
  alt: string;
  position?: string;
  /** Shape of the tile inside the two staggered columns. */
  className: string;
};

// two staggered columns (the right one sits lower); each tile has one big corner, so together they form one soft block
const tiles: Tile[] = [
  {
    title: "Foster Parent Training",
    image: "/medium-shot-smiley-therapist-with-family-90kb.jpg",
    alt: "A smiling therapist holding a clipboard, with a father, mother and their young son sitting on a sofa behind her",
    position: "object-[center_35%]",
    className: "aspect-[3/4] rounded-[1.5rem] rounded-tl-[4.5rem]",
  },
  {
    title: "Support for Every Placement",
    image: "/istockphoto-2187351214-612x612.jpg",
    alt: "A smiling boy sitting on a sofa between two adults while a caseworker takes notes in the foreground",
    position: "object-[center_35%]",
    className: "aspect-[4/3] rounded-[1.5rem] rounded-tr-[4.5rem]",
  },
  {
    title: "Post-Placement Therapy",
    image: "/istockphoto-1249785387-612x612.jpg",
    alt: "A therapist taking notes while a young child plays on a mat and a parent looks on in a living room",
    position: "object-center",
    className: "aspect-[4/3] rounded-[1.5rem] rounded-bl-[4.5rem]",
  },
  {
    title: "Support for School Staff",
    image: "/girl-holding-black-plane-table-90kb.jpg",
    alt: "A teacher leaning over a classroom desk to help a girl holding a clipboard, with a younger girl beside them",
    position: "object-[center_30%]",
    className: "aspect-[3/4] rounded-[1.5rem] rounded-br-[4.5rem]",
  },
];

function PhotoTile({ tile, priority }: { tile: Tile; priority?: boolean }) {
  return (
    <div
      className={`group relative w-full overflow-hidden border-[5px] border-white shadow-[0_28px_50px_-26px_rgba(15,33,27,0.55)] ${tile.className}`}
    >
      <Image
        src={tile.image}
        alt={tile.alt}
        fill
        priority={priority}
        sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 24vw, 45vw"
        className={`object-cover transition-transform duration-700 group-hover:scale-105 ${tile.position ?? ""}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/55 via-transparent to-transparent" />
      <span className="absolute inset-x-2 bottom-2 flex items-center gap-2 rounded-xl bg-white/90 px-2.5 py-1.5 font-sans text-[0.68rem] font-bold leading-tight text-pine-deep shadow-lg backdrop-blur-sm sm:inset-x-3 sm:bottom-3 sm:rounded-2xl sm:px-4 sm:py-2.5 sm:text-sm">
        <span aria-hidden className="hidden h-2 w-2 shrink-0 rounded-full bg-leaf-deep sm:block" />
        {tile.title}
      </span>
    </div>
  );
}

/**
 * Home page banner: the heading, an intro paragraph and the two buttons on the left, the four service photos in a staggered grid on the
 * right. No video, no carousel.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[rgb(216,234,203)] p-5 pb-12 pt-0 lg:pb-16">
      {/* background: a gradient from rgb(25, 53, 45) to rgb(141, 197, 64), with a soft glow and a faint dot texture; its bottom corners are rounded */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 overflow-hidden rounded-b-[2.5rem] bg-[linear-gradient(180deg,rgb(25,53,45)_0%,rgb(25,53,45)_38%,rgb(141,197,64)_100%)] sm:rounded-b-[3.5rem] lg:bg-[linear-gradient(115deg,rgb(25,53,45)_0%,rgb(25,53,45)_28%,rgb(141,197,64)_100%)]"
      >
        <span className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl lg:-right-40 lg:-top-40 lg:h-[34rem] lg:w-[34rem]" />
        <span className="absolute -bottom-40 -left-32 h-[30rem] w-[30rem] rounded-full bg-leaf/15 blur-3xl" />
        <span
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1.2px, transparent 1.6px)",
            backgroundSize: "30px 30px",
            maskImage: "radial-gradient(ellipse at 20% 70%, black 0%, transparent 60%)",
            WebkitMaskImage: "radial-gradient(ellipse at 20% 70%, black 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative pt-[5.5rem] lg:mt-[5.5rem] lg:flex lg:min-h-[calc(100vh-7.5rem)] lg:items-center lg:pt-0">
        <div className="mx-auto grid w-full max-w-[1500px] items-center gap-14 px-1 sm:px-5 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-10 xl:gap-20">
          {/* heading + buttons */}
          <div className="pt-6 lg:pt-0">
            <h1 className="text-balance font-display text-[2.35rem] font-medium leading-[1.1] tracking-tight text-cream sm:text-[3.2rem] lg:text-[3rem] xl:text-[3.3rem] 2xl:text-[3.7rem] min-[1700px]:text-[4.3rem]">
              Foster Care in Oklahoma City,{" "}
              <br className="hidden min-[1700px]:block" />
              Helping Children and Foster Families{" "}
              <span className="relative inline-block text-leaf">
                Thrive
                <svg
                  aria-hidden
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1.5 left-0 h-3 w-full text-leaf"
                  fill="none"
                >
                  <path d="M2 8c40-7 100-7 196-1" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="mt-6 max-w-[38rem] text-pretty text-[1.02rem] leading-relaxed text-cream/85 sm:mt-7 sm:text-[1.1rem]">
              Open Arms Foster Care is a full-service foster care agency based in Oklahoma City, with additional offices
              in Tulsa and Lawton. We help Oklahoma families become foster parents and stay supported every step of the
              way, from training and licensing through placement and beyond, including specialized therapeutic foster
              care for children with higher needs.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-9">
              <Link
                href="/sign-up-now"
                className="group inline-flex items-center gap-3 rounded-full bg-leaf py-2 pl-7 pr-2 font-sans text-[0.95rem] font-semibold text-pine-deep shadow-[0_18px_34px_-14px_rgba(0,0,0,0.55)] transition-colors hover:bg-white"
              >
                Start Your Foster Care Journey
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pine-deep text-leaf transition-transform duration-300 group-hover:translate-x-1">
                  <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4">
                    <path
                      d="M4 12h15m0 0-6-6m6 6-6 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center rounded-full bg-white/10 px-7 py-3.5 font-sans text-[0.95rem] font-semibold text-white ring-1 ring-inset ring-white/45 backdrop-blur-sm transition-colors hover:bg-white hover:text-pine-deep hover:ring-white"
              >
                Talk With Our Team
              </Link>
            </div>
          </div>

          {/* photos */}
          <div className="relative mx-auto w-full max-w-[34rem] pb-8 sm:pb-12 lg:max-w-none">
            {/* a dark green block, a dot texture and a ring behind the photos */}
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[3.5rem] bg-[linear-gradient(135deg,#19352d_0%,#0f211b_100%)] shadow-[0_40px_80px_-30px_rgba(15,33,27,0.7)] sm:-inset-8"
            />
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[3.5rem] opacity-30 sm:-inset-8"
              style={{ backgroundImage: "radial-gradient(circle, #fff 1.2px, transparent 1.6px)", backgroundSize: "22px 22px" }}
            />
            {/* round "more about us" badge in the top-right corner of the photo block */}
            <Link
              href="/about-us"
              aria-label="More about Open Arms Foster Care"
              className="absolute -right-9 -top-11 z-20 hidden aspect-square w-[7.5rem] rounded-full bg-white text-pine shadow-[0_18px_34px_-14px_rgba(15,33,27,0.55)] transition-colors hover:text-leaf-deep lg:block xl:-right-10 xl:-top-12 xl:w-32"
            >
              <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full" aria-hidden>
                <defs>
                  <path id="hero-badge-ring" d="M60 60m-45 0a45 45 0 1 1 90 0a45 45 0 1 1-90 0" />
                </defs>
                <text fill="currentColor" fontSize="9.5" fontWeight="700" textLength="276" lengthAdjust="spacing">
                  <textPath href="#hero-badge-ring">MORE ABOUT US • OPEN ARMS FOSTER CARE •</textPath>
                </text>
              </svg>
              <span className="absolute inset-[22%] overflow-hidden rounded-full">
                <Image src="/images/fav.png" alt="" fill sizes="64px" className="object-cover" />
              </span>
            </Link>

            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              <div className="flex flex-col gap-3 sm:gap-5">
                <PhotoTile tile={tiles[0]} priority />
                <PhotoTile tile={tiles[2]} />
              </div>
              <div className="flex translate-y-8 flex-col gap-3 sm:translate-y-12 sm:gap-5">
                <PhotoTile tile={tiles[1]} priority />
                <PhotoTile tile={tiles[3]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
