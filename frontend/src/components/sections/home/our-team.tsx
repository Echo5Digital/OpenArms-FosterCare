import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { teamMembers } from "@/lib/content/team";

export function OurTeam() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute -right-28 -top-20 h-96 w-96 rounded-full bg-leaf/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-mint blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* headline on the left, intro on the right, a hairline underneath */}
        <Reveal>
          <div className="grid items-end gap-6 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
            <div>
              <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-leaf-deep">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                Our Team
              </span>
              <h2 className="mt-4 font-sans text-[2.4rem] font-bold leading-[1.05] tracking-tight text-pine sm:text-5xl lg:text-[3.6rem]">
                The People
                <br />
                <span className="text-leaf-deep">Behind Our Success</span>
              </h2>
            </div>
            <p className="text-[1.05rem] leading-relaxed text-ink/70 lg:pb-2">
              Our team is a group of caring individuals dedicated to supporting children and families in their foster
              care journey. With warmth and understanding, we strive to create brighter futures for every child we
              serve.
            </p>
          </div>
          <div className="mt-10 h-px bg-gradient-to-r from-pine/30 via-pine/10 to-transparent" />
        </Reveal>

        {/* hovering one person softly dims everyone else, so the one you are on stands out */}
        <div className="group/grid mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5 xl:grid-cols-5">
          {teamMembers.map((member, i) => (
            <Reveal key={member.name} delay={(i % 5) * 70}>
              <article className="group relative aspect-[9/10] overflow-hidden rounded-[1.75rem] bg-mint shadow-md shadow-pine/10 ring-1 ring-pine/10 transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-leaf/30 group-hover/grid:not-hover:opacity-55">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {member.credential && (
                  <span className="absolute left-3 top-3 rounded-full bg-leaf px-2.5 py-1 font-sans text-[0.62rem] font-bold uppercase tracking-wide text-pine-deep shadow-md">
                    {member.credential}
                  </span>
                )}

                {/* frosted name tag; fills with the brand green when you point at the card */}
                <div className="absolute inset-x-2 bottom-2 rounded-2xl bg-white/85 px-3 py-2.5 shadow-lg backdrop-blur-md transition-colors duration-500 group-hover:bg-leaf sm:inset-x-2.5 sm:bottom-2.5 sm:px-3.5">
                  <h3 className="font-sans text-[0.82rem] font-bold leading-snug text-pine-deep sm:text-[0.95rem]">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 line-clamp-2 text-[0.68rem] leading-snug text-ink/70 transition-colors duration-500 group-hover:text-pine-deep/80 sm:text-xs">
                    {member.title}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
