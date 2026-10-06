import { Reveal } from "@/components/ui/reveal";
import { offices } from "@/lib/site-config";

// same order as the old contact page: Oklahoma City, Lawton, Tulsa
const order = ["oklahoma-city", "lawton", "tulsa"] as const;
const shown = order.map((id) => offices.find((o) => o.id === id)!);

export function ContactOffices() {
  return (
    <section className="px-3 pb-6 sm:px-5 sm:pb-8">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] bg-gradient-to-tr from-pine-deep via-pine to-leaf shadow-[0_40px_90px_-40px_rgba(15,33,27,0.7)] sm:rounded-[2.5rem]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1.4px)",
            backgroundSize: "28px 28px",
            maskImage: "linear-gradient(to right, transparent, black 40%, black)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 40%, black)",
          }}
        />
        <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border-[34px] border-white/10" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-leaf/20 blur-3xl" />

        <div className="relative grid gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[0.8fr_1.6fr] lg:gap-12 lg:px-14">
          <Reveal from="left" className="self-center">
            <span className="block h-[3px] w-20 rounded-full bg-leaf" />
            <h2 className="mt-5 font-sans text-[2.1rem] font-bold leading-[1.1] tracking-tight text-white sm:text-[2.8rem] lg:text-[3.1rem]">
              In-person and remote options
            </h2>
            <p className="mt-6 text-[1.02rem] leading-relaxed text-white/90">
              Our offices are located in three Oklahoma locations – Oklahoma City, Lawton, and Tulsa.
            </p>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-white/90">
              We now also have remote options available during initial parent trainings for added convenience.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-3 sm:gap-4 lg:gap-6">
            {shown.map((office, i) => (
              <Reveal key={office.id} delay={i * 120} className="h-full">
                <div className="group h-full transition-transform duration-500 hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden rounded-[1.25rem_1.25rem_1.25rem_0.5rem] bg-white/15 shadow-[0_25px_50px_-25px_rgba(0,0,0,0.6)] ring-4 ring-white/80 transition-shadow duration-500 group-hover:shadow-[0_30px_60px_-20px_rgba(141,197,64,0.7)] sm:h-72">
                    <iframe
                      src={office.mapEmbedSrc}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map to Open Arms Foster Care ${office.city} office`}
                      className="absolute inset-0 block h-full w-full border-0"
                    />
                  </div>
                  <p className="mt-4 flex items-start gap-2.5 font-sans text-[0.97rem] font-semibold leading-snug text-white">
                    <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-leaf" fill="currentColor" aria-hidden>
                      <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
                    </svg>
                    <span>
                      {office.streetAddress}
                      <br />
                      {office.addressLocality}, {office.addressRegion} {office.postalCode}
                    </span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
