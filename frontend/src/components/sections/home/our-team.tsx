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
            <Reveal key={member.name} delay={(i % 5) * 70} className="flex lg:block">
              {/* below lg the cards are small, so the photo sits in a framed card with the name underneath, centred, and never covers a face; from lg up the name floats over the photo */}
              <article className="group relative flex w-full flex-col overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-white via-white to-mint p-2 shadow-md shadow-pine/10 ring-1 ring-pine/10 transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-leaf/30 group-hover/grid:not-hover:opacity-55 lg:block lg:aspect-[9/10] lg:bg-none lg:bg-mint lg:p-0">
                <div className="relative aspect-[9/10] w-full shrink-0 overflow-hidden rounded-[1.25rem] bg-mint ring-1 ring-pine/10 lg:absolute lg:inset-0 lg:aspect-auto lg:rounded-none lg:ring-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* name, with the credential after it ("Jamie James - LPC"); on lg+ it is a frosted tag over the photo that fills with the brand green on hover */}
                <div className="relative flex min-h-[6.5rem] flex-1 flex-col items-center justify-start rounded-2xl px-2 pb-2 pt-3 text-center transition-colors duration-500 group-hover:bg-leaf lg:absolute lg:inset-x-2.5 lg:bottom-2.5 lg:min-h-0 lg:flex-none lg:items-start lg:justify-start lg:bg-white/85 lg:px-3.5 lg:py-2.5 lg:text-left lg:shadow-lg lg:backdrop-blur-md">
                  <span aria-hidden className="mb-2 block h-0.5 w-8 rounded-full bg-leaf transition-all duration-500 group-hover:w-12 group-hover:bg-pine-deep lg:hidden" />
                  <h3 className="font-sans text-[0.9rem] font-bold leading-snug text-pine-deep sm:text-[0.95rem]">
                    {member.name}
                    {member.credential ? ` - ${member.credential}` : ""}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[0.66rem] font-semibold uppercase leading-snug tracking-[0.08em] text-leaf-deep transition-colors duration-500 group-hover:text-pine-deep lg:mt-0.5 lg:text-xs lg:font-normal lg:normal-case lg:tracking-normal lg:text-ink/70 lg:group-hover:text-pine-deep/80">
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
