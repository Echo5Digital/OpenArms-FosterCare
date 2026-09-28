import Image from "next/image";
import Link from "next/link";
import { testimonials } from "@/lib/content/testimonials";

export function TestimonialsSection() {
  return (
    <section className="bg-[rgb(6,48,39)] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1400px] text-center">
        <h2 className="font-display text-3xl font-semibold text-cream sm:text-4xl">Hear from our clients</h2>
        <p className="mt-4 text-lg text-cream/70">Our clients love working with us, just read what they have to say!</p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-white p-7 text-left shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                    <Image src={t.avatar} alt={t.name} fill sizes="44px" className="object-cover" />
                  </span>
                  <figcaption className="font-sans text-base font-semibold text-pine">{t.name}</figcaption>
                </div>
                <Image src="/icon (1).svg" alt="" width={22} height={22} className="shrink-0" />
              </div>

              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Image key={i} src="/f (1).svg" alt="" width={16} height={15} />
                ))}
              </div>

              <blockquote className="mt-4 text-[0.98rem] leading-relaxed text-slate">{t.quote}</blockquote>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="https://www.google.com/maps/place/?q=place_id:0x87b21b41ebb1afc9:0xfd532a9b7829c708"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-leaf px-7 py-3.5 font-sans text-sm font-semibold text-pine-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-leaf-deep hover:shadow-lg"
          >
            Read More Reviews
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path
                d="M4 12h15m0 0-6-6m6 6-6 6"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
