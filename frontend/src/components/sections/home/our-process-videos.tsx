import Image from "next/image";
import { processVideos, type ProcessVideo } from "@/lib/content/process-videos";
import { ScrollVideo } from "@/components/ui/scroll-video";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

function VideoCard({ video }: { video: ProcessVideo }) {
  const src = `https://www.youtube.com/embed/${video.id}?autoplay=1&loop=1&playlist=${video.id}&controls=0&modestbranding=1&rel=0&playsinline=1`;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white p-2 text-left shadow-lg shadow-pine/10 ring-1 ring-pine/10 transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-pine/20">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-pine">
        {/* the video's own picture, so the card is never empty before the player starts */}
        <Image
          src={`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`}
          alt=""
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <ScrollVideo src={src} title={`${video.title} – ${video.subtitle}`} />
      </div>

      <div className="flex flex-1 flex-col px-3 pb-3 pt-3.5">
        <span className="mb-2.5 block h-0.5 w-7 rounded-full bg-leaf transition-all duration-500 group-hover:w-14" />
        <span className="font-sans text-[0.62rem] font-bold uppercase tracking-[0.14em] text-leaf-deep">
          {video.category}
        </span>
        <h3 className="mt-1 line-clamp-2 font-sans text-[0.95rem] font-bold leading-snug text-pine">{video.title}</h3>
        <p className="mt-0.5 line-clamp-1 text-xs text-ink/60">{video.subtitle}</p>
      </div>
    </div>
  );
}

export function OurProcessVideos() {
  const row1 = processVideos.slice(0, 4);
  const row2 = processVideos.slice(4, 7);
  const row3 = processVideos.slice(7, 11);

  return (
    <section
      id="our-process-videos"
      className="relative overflow-hidden bg-[linear-gradient(135deg,var(--cream)_0%,var(--mint)_35%,var(--leaf)_100%)] py-20 sm:py-28"
    >
      <div aria-hidden className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-white/50 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-28 bottom-10 h-96 w-96 rounded-full bg-leaf/30 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1600px] px-5 text-center sm:px-10 lg:px-16">
        <Reveal>
          <SectionHeading
            eyebrow="Work Process"
            title="Our Process"
            align="center"
            titleClassName="font-sans text-4xl font-bold tracking-tight text-pine sm:text-5xl"
          />
          <p className="mx-auto mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-ink/70">
            Hear from the foster families and the people behind Open Arms, in their own words.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {row1.map((video, i) => (
              <Reveal key={video.id} delay={i * 90} className="h-full">
                <VideoCard video={video} />
              </Reveal>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {row2.map((video, i) => (
              <Reveal key={video.id} delay={i * 90} className="h-full">
                <VideoCard video={video} />
              </Reveal>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {row3.map((video, i) => (
              <Reveal key={video.id} delay={i * 90} className="h-full">
                <VideoCard video={video} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
