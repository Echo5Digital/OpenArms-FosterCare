import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";

const features = [
  {
    title: "Dedicated Case Management",
    body: "One point of contact to guide you through the process and answer questions along the way.",
    icon: (
      <path
        d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 2c-3.3 0-6 1.6-6 3.6V18h9.5M17 8v4m0 0v4m0-4h4m-4 0h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Foster Parent Training",
    body: "Trauma-informed preparation plus ongoing workshops and refreshers throughout the year.",
    icon: (
      <path
        d="M4 6h16v9H12l-3 3v-3H4V6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Peer Support",
    body: "Connection with other foster parents who understand the journey.",
    icon: (
      <path
        d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm8 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3 18c0-2.2 2.2-4 5-4s5 1.8 5 4M11 18c0-2.2 2.2-4 5-4s5 1.8 5 4"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Post-Placement Support",
    body: "Coordinated help once a child is in your home, including access to our clinical team.",
    icon: (
      <path
        d="M4 11 12 4l8 7M6 10v8h12v-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Guidance for Challenging Moments",
    body: "Practical, compassionate help when situations get hard.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth={1.6} />
        <path d="M12 8v5M12 16h.01" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
      </>
    ),
  },
] as const;

export function FosterFamilySupport() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <Image
        src="/cute-family-walking-sunset-summer-park-100kb.jpg"
        alt=""
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-cream-alt/60" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-leaf-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Foster Parent Support
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl font-sans text-2xl font-bold leading-tight tracking-tight text-pine sm:text-4xl">
            Support for Foster Families — Before, During, and <span className="text-leaf-deep">After Placement</span>
          </h2>
          <div className="mx-auto mt-5 h-0.5 w-16 bg-leaf" />
          <p className="mx-auto mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-slate">
            Foster parents are at the heart of everything we do, so we build support around you rather than leaving
            you to figure it out alone. Families working with Open Arms can expect:
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group w-full rounded-2xl border-2 border-leaf bg-white/70 sm:border-white/60 p-6 text-center shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-leaf hover:shadow-xl hover:shadow-leaf/20 sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-pine shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-leaf group-hover:text-pine-deep">
                <svg viewBox="0 0 24 24" className="h-6 w-6">
                  {feature.icon}
                </svg>
              </span>
              <h3 className="mt-4 font-sans text-base font-semibold text-pine">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{feature.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <ButtonLink href="/sign-up-now" variant="secondary">
            Request Foster Parent Information
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
