import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/content/testimonials";

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading eyebrow="Stories of Love and Transformation" title="Heartwarming tales of resilience and hope" align="center" className="mx-auto" />

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <figure
            key={t.name}
            className={`relative rounded-[2rem_0.5rem_2rem_0.5rem] border border-pine/10 p-8 ${
              i % 2 === 0 ? "bg-mint" : "bg-white"
            }`}
          >
            <span className="font-display text-5xl leading-none text-leaf/50">&ldquo;</span>
            <blockquote className="mt-2 text-[1.05rem] leading-relaxed text-ink/85">{t.quote}</blockquote>
            <figcaption className="mt-6 font-sans text-sm font-semibold text-pine">{t.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
