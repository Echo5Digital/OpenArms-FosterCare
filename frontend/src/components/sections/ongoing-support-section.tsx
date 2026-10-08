import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { ExpandingPanels, type PanelItem } from "@/components/sections/expanding-panels";

export type OngoingSupportProps = {
  heading: string;
  /** Part of `heading` to underline with a green marker stroke. */
  headingHighlight?: string;
  intro: string;
  items: PanelItem[];
  startHeading: string;
  /** Part of `startHeading` to show in leaf green. */
  startHighlight?: string;
  startParagraphs: string[];
  /** A photo in the dark "how to get started" panel, in place of the animated path (default: the path). */
  startImage?: { src: string; alt: string; position?: string };
};

function split(text: string, part?: string) {
  const i = part ? text.indexOf(part) : -1;
  if (!part || i < 0) return null;
  return { before: text.slice(0, i), match: part, after: text.slice(i + part.length) };
}

const HEART = "M12 21s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 8.2a4.3 4.3 0 0 1 7.5 2.6C19.5 16.4 12 21 12 21Z";
const PATH = "M10 170C70 170 90 60 160 80C230 100 230 190 300 160C345 150 365 96 385 56";
// points on the path (middle of each curve segment)
const NODES: { x: number; y: number; delay: string }[] = [
  { x: 81, y: 118, delay: "0s" },
  { x: 230, y: 139, delay: "-0.8s" },
  { x: 352, y: 119, delay: "-1.6s" },
];

export function OngoingSupportSection({
  heading,
  headingHighlight,
  intro,
  items,
  startHeading,
  startHighlight,
  startParagraphs,
  startImage,
}: OngoingSupportProps) {
  const h = split(heading, headingHighlight);
  const s = split(startHeading, startHighlight);

  return (
    <section className="relative overflow-x-clip bg-white">
      <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-leaf/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-40 h-96 w-96 rounded-full bg-leaf/15 blur-3xl" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(25,53,45,0.16) 1px, transparent 1.4px)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        {/* heading + intro */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="mx-auto mb-5 block h-1 w-14 rounded-full bg-leaf" />
          <h2 className="font-sans text-[2rem] font-bold leading-tight tracking-tight text-pine sm:text-[2.7rem]">
            {h ? (
              <>
                {h.before}
                <span className="box-decoration-clone bg-[linear-gradient(transparent_62%,rgba(141,197,64,0.55)_62%)] px-1">
                  {h.match}
                </span>
                {h.after}
              </>
            ) : (
              heading
            )}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-ink/75">{intro}</p>
        </Reveal>

        {/* expanding photo panels */}
        <Reveal className="mt-12" delay={100}>
          <ExpandingPanels items={items} />
        </Reveal>

        {/* how to get started */}
        <Reveal className="mt-20 sm:mt-24">
          <div className="grid overflow-hidden rounded-[2rem_2rem_2rem_5rem] shadow-[0_40px_80px_-35px_rgba(15,33,27,0.55)] lg:grid-cols-[0.95fr_1.05fr]">
            {/* journey */}
            <div className="relative flex flex-col justify-between gap-10 overflow-hidden bg-gradient-to-br from-pine-deep via-pine to-[#1f4a36] p-8 text-white max-sm:px-7 max-sm:pb-12 max-sm:pt-9 sm:p-12">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-leaf/25 blur-3xl" />
              <span className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border-[22px] border-white/[0.05]" />

              <div className="relative">
                <span aria-hidden className="mb-5 block h-1 w-12 rounded-full bg-leaf sm:hidden" />
                <h2 className="relative max-w-md font-sans text-[1.9rem] font-bold leading-[1.15] tracking-tight sm:text-[2.4rem]">
                  {s ? (
                    <>
                      {s.before}
                      <span className="text-leaf">{s.match}</span>
                      {s.after}
                    </>
                  ) : (
                    startHeading
                  )}
                </h2>
              </div>

              {startImage ? (
                <div className="relative aspect-[9/4] w-full overflow-hidden rounded-[1.5rem] shadow-[0_24px_40px_-22px_rgba(0,0,0,0.6)] ring-1 ring-white/15 lg:aspect-auto lg:min-h-[13rem] lg:flex-1">
                  <Image
                    src={startImage.src}
                    alt={startImage.alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className={`object-cover ${startImage.position ?? "object-center"}`}
                  />
                </div>
              ) : (
                <svg aria-hidden viewBox="0 0 400 210" className="relative w-full max-w-md overflow-visible max-sm:hidden" fill="none">
                  <path d={PATH} stroke="#8dc540" strokeOpacity="0.18" strokeWidth="12" strokeLinecap="round" />
                  <path
                    d={PATH}
                    stroke="#8dc540"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="6 10"
                    className="animate-dash-flow"
                  />
                  <circle cx="10" cy="170" r="5" fill="#ffffff" />
                  {NODES.map((n) => (
                    <g key={n.x}>
                      <circle
                        cx={n.x}
                        cy={n.y}
                        r="11"
                        fill="#8dc540"
                        fillOpacity="0.45"
                        className="animate-pulse-ring [transform-box:fill-box] [transform-origin:center]"
                        style={{ animationDelay: n.delay }}
                      />
                      <circle cx={n.x} cy={n.y} r="7" fill="#8dc540" stroke="#ffffff" strokeWidth="3" />
                    </g>
                  ))}
                  <circle
                    cx="385"
                    cy="40"
                    r="22"
                    fill="#8dc540"
                    fillOpacity="0.2"
                    className="animate-pulse-ring [transform-box:fill-box] [transform-origin:center] [animation-delay:-1s]"
                  />
                  <g transform="translate(367 22) scale(1.5)">
                    <path d={HEART} fill="#8dc540" />
                  </g>
                </svg>
              )}
            </div>

            {/* copy */}
            <div className="relative flex flex-col justify-center bg-gradient-to-br from-[rgb(232,241,235)] to-[rgb(243,249,237)] p-7 max-lg:pt-12 sm:p-12 sm:max-lg:pt-12">
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="pointer-events-none absolute -bottom-20 -right-14 h-60 w-60 text-leaf/[0.12] max-sm:-bottom-14 max-sm:-right-10 max-sm:h-40 max-sm:w-40"
                fill="currentColor"
              >
                <path d={HEART} />
              </svg>
              <span className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-leaf to-leaf-deep text-pine-deep shadow-lg shadow-leaf/30 max-lg:absolute max-lg:left-7 max-lg:top-0 max-lg:mb-0 max-lg:-translate-y-1/2 max-lg:ring-4 max-lg:ring-[rgb(232,241,235)] sm:max-lg:left-12">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                  <path d={HEART} />
                </svg>
              </span>
              <div className="relative space-y-5">
                {startParagraphs.map((p, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "text-[1.05rem] font-medium leading-relaxed text-pine sm:text-[1.12rem]"
                        : "text-[1.03rem] leading-relaxed text-ink/75"
                    }
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
