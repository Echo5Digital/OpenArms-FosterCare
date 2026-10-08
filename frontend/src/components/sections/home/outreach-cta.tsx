import Image from "next/image";
import { HoverPrefetchLink as Link } from "@/components/ui/hover-prefetch-link";

type Photo = { src: string; alt: string; position: string };

const photos: Photo[] = [
  {
    src: "/cute-family-playing-summer-park-100kb.jpg",
    alt: "A father kneeling in the grass and hugging his young daughter",
    position: "object-[center_25%]",
  },
  {
    src: "/cute-family-playing-summer-field-100kb.jpg",
    alt: "A father and mother lifting their two sons into the air in a green field",
    position: "object-[center_35%]",
  },
  {
    src: "/medium-shot-girl-holding-toy-100kb.jpg",
    alt: "A smiling child in an orange sweater hugging a stuffed toy",
    position: "object-[center_30%]",
  },
  {
    src: "/cheerful-little-black-haired-girl-standing-city-park-kid-enjoying-leisure-time-outdoors-summer-medium-shot-vertical-childhood-concept-100kb.jpg",
    alt: "A smiling girl with bangs standing in a sunny park",
    position: "object-[center_20%]",
  },
];

/** A snapshot with a white border, a strip of gold tape on top and a small heart in the border. */
function Polaroid({ photo, className = "" }: { photo: Photo; className?: string }) {
  return (
    <figure
      className={`bg-white p-2 pb-9 shadow-[0_22px_40px_-18px_rgba(15,33,27,0.5)] ring-1 ring-pine/10 ${className}`}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-mint">
        <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1536px) 176px, 160px" className={`object-cover ${photo.position}`} />
      </div>
      <span
        aria-hidden
        className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 -rotate-3 bg-[rgb(217,179,101)]/80 shadow-sm"
      />
      <svg aria-hidden viewBox="0 0 24 24" className="absolute bottom-2.5 right-3 h-4 w-4 text-[rgb(217,179,101)]" fill="currentColor">
        <path d="M12 21s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 8.2a4.3 4.3 0 0 1 7.5 2.6C19.5 16.4 12 21 12 21Z" />
      </svg>
    </figure>
  );
}

/**
 * A closing message with the two main calls to action; it sits just above the office locations. The message is framed
 * by a "family photo wall": snapshots with gold tape, two on each side from xl up, a row of three above the text below
 * that. All static.
 */
export function OutreachCta() {
  return (
    <section className="overflow-hidden bg-white px-5 py-14 sm:px-8 sm:py-20 xl:py-24">
      <div className="relative mx-auto max-w-[1500px] xl:flex xl:min-h-[27rem] xl:items-center xl:justify-center">
        {/* phones and tablets: three snapshots in a row above the text */}
        <div className="mb-10 flex justify-center xl:hidden">
          <Polaroid photo={photos[0]} className="relative w-[7.25rem] -rotate-6 sm:w-36" />
          <Polaroid photo={photos[2]} className="relative z-10 -ml-4 w-[7.25rem] -translate-y-2 rotate-2 sm:w-36" />
          <Polaroid photo={photos[1]} className="relative -ml-4 w-[7.25rem] rotate-5 sm:w-36" />
        </div>

        {/* xl and up: two snapshots on each side of the text */}
        <div className="hidden xl:block">
          <Polaroid photo={photos[0]} className="absolute left-[2%] top-0 w-40 -rotate-6 2xl:left-[5%] 2xl:w-44" />
          <Polaroid photo={photos[2]} className="absolute bottom-0 left-[12%] w-40 rotate-4 2xl:left-[15%] 2xl:w-44" />
          <Polaroid photo={photos[1]} className="absolute right-[12%] top-0 w-40 rotate-5 2xl:right-[15%] 2xl:w-44" />
          <Polaroid photo={photos[3]} className="absolute bottom-0 right-[2%] w-40 -rotate-4 2xl:right-[5%] 2xl:w-44" />
        </div>

        <div className="relative mx-auto max-w-[36rem] text-center">
          <span aria-hidden className="mx-auto block h-1 w-14 rounded-full bg-[rgb(217,179,101)]" />
          <p className="mt-7 text-pretty font-sans text-[1.2rem] font-medium leading-relaxed text-pine sm:text-[1.45rem] sm:leading-[1.6]">
            Every child deserves a safe, supportive place to grow, and every foster family deserves a partner who has
            their back. Reach out today to learn more or begin the process of becoming a foster parent.
          </p>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Link
              href="/sign-up-now"
              className="group inline-flex h-[3.25rem] items-center justify-center gap-3.5 rounded-xl bg-[rgb(217,179,101)] px-7 font-sans text-[0.95rem] font-semibold text-pine-deep shadow-[0_14px_28px_-14px_rgba(15,33,27,0.55)] transition-colors hover:bg-[rgb(230,195,121)] focus-visible:outline-solid focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-pine-deep"
            >
              Start Your Foster Care Journey
              <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
                <path
                  d="M4 12h15m0 0-6-6m6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link
              href="/contact-us"
              className="group inline-flex h-[3.25rem] items-center justify-center gap-3.5 rounded-xl border border-[rgb(182,192,182)] bg-[rgb(246,245,240)] pl-7 pr-2.5 font-sans text-[0.95rem] font-semibold text-pine transition-colors hover:bg-white focus-visible:outline-solid focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-pine-deep"
            >
              Talk With Our Team
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-pine-deep text-white transition-transform duration-300 group-hover:scale-110">
                <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4">
                  <path
                    d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.5c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
