import { processVideos, type ProcessVideo } from "@/lib/content/process-videos";
import { ScrollVideo } from "@/components/ui/scroll-video";

function VideoCard({ video }: { video: ProcessVideo }) {
  const src = `https://www.youtube.com/embed/${video.id}?autoplay=1&loop=1&playlist=${video.id}&controls=0&modestbranding=1&rel=0&playsinline=1`;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-pine shadow-lg">
      <ScrollVideo src={src} title={video.title} />
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
      className="flex min-h-screen flex-col justify-center bg-[linear-gradient(135deg,var(--cream)_0%,var(--mint)_35%,var(--leaf)_100%)] py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1600px] px-5 text-center sm:px-10 lg:px-16">
        <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-pine">
          Work Process
        </span>
        <h2 className="mt-3 font-sans text-4xl font-bold tracking-tight text-pine sm:text-5xl">Our Process</h2>

        <div className="mt-14 flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {row1.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {row2.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {row3.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
