import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig, offices } from "@/lib/site-config";
import { pageSchema } from "@/lib/schema";
import { therapeuticFaqs } from "@/lib/content/faqs";
import { TherapeuticHero } from "@/components/sections/therapeutic-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { ImageSlider } from "@/components/ui/image-slider";
import { Reveal } from "@/components/ui/reveal";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { HealingHopeContactForm } from "@/components/forms/healing-hope-contact-form";

const description =
  "Serve children in need as a therapeutic foster parent in Oklahoma City, Tulsa, or Lawton. Open Arms Foster Care provides training, 24/7 support, and a community to guide you every step of the way.";

export const metadata: Metadata = {
  title: "Become a Therapeutic Foster Parent in Oklahoma",
  description,
  alternates: { canonical: "/therapeutic-foster-care-agency" },
  openGraph: {
    title: "Therapeutic Foster Care Agency | Oklahoma City - Open Arms Foster Care",
    description:
      "Open Arms Foster Care offers the best therapeutic foster care agency in Oklahoma City — compassionate support and healing homes for children in a safe, nurturing environment.",
    url: "/therapeutic-foster-care-agency",
  },
};

const cards = [
  {
    title: "Why Foster with Open Arms?",
    image: "/therapeutic-card-15.webp",
    items: [
      "24/7 support and guidance",
      "Comprehensive training provided",
      "Dedicated caseworkers and resources",
      "A community of foster families by your side",
      "Accessible mental health care.",
    ],
  },
  {
    title: "Who Can Apply?",
    image: "/therapeutic-card-16.webp",
    items: [
      "Are 21 years or older",
      "Are a resident of Oklahoma with a stable home environment",
      "Are willing to complete background checks and training",
      "Are ready to open your heart to a child in need",
    ],
  },
  {
    title: "Next Steps",
    image: "/therapeutic-card-17.webp",
    items: [
      "Fill out the application form below.",
      "Our team will contact you for an initial consultation.",
      "Begin the training and home study process.",
    ],
  },
];

const bento = [
  { type: "image" as const, image: cards[0].image, alt: "A family celebrating a new home together" },
  { type: "text" as const, dark: false, title: cards[0].title, items: cards[0].items },
  { type: "image" as const, image: cards[1].image, alt: "A caregiver playing with two young children" },
  { type: "text" as const, dark: true, title: cards[1].title, items: cards[1].items },
  { type: "image" as const, image: cards[2].image, alt: "A teacher leading a group of children in a letter activity" },
  { type: "text" as const, dark: true, title: cards[2].title, items: cards[2].items },
];

const journey = [
  { title: "Fill Out the Application Form Below", text: "Share your contact info and interest." },
  { title: "Initial Consultation", text: "Our team will connect with you to answer questions." },
  { title: "Training & Home Study", text: "We walk you through each step of becoming licensed." },
  { title: "Begin Your Foster Journey", text: "Welcome a child into your home with full support." },
];

const heartPath = "M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.4a4.3 4.3 0 0 1 7.5 2.4C19.5 15.4 12 20 12 20Z";

const impact = [
  {
    prefix: "",
    value: "300",
    suffix: "+",
    label: "children placed in safe, loving homes each year",
    icon: "M3 11.5 12 4l9 7.5M5.5 10v9.5h13V10M10 19.5v-5h4v5",
  },
  {
    prefix: "",
    value: "100",
    suffix: "+",
    label: "active foster families across the state",
    icon: "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16.5 4.3a3.5 3.5 0 0 1 0 6.4M18 14.3c1.8.8 3 2.6 3 4.7",
  },
  {
    prefix: "Nearly",
    value: "20",
    suffix: "",
    label: "years serving Oklahoma communities",
    icon: "M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7ZM4 10h16M8 3v4M16 3v4",
  },
  {
    prefix: "",
    value: "97",
    suffix: "%",
    label: "of foster parents say they feel prepared and supported",
    icon: heartPath,
  },
];

const mapsSearch = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

const locations = [
  {
    id: "oklahoma-city",
    lines: ["1101 Sovereign Row", "Suite A", "Oklahoma City, OK 73108"],
    link: mapsSearch("1101 Sovereign Row, Oklahoma City, OK 73108"),
  },
  {
    id: "tulsa",
    lines: ["5401 S. Sheridan Suite 104", "Tulsa, OK 74145"],
    link: mapsSearch("5401 S Sheridan Rd, Tulsa, OK 74145"),
  },
  {
    id: "lawton",
    lines: ["309 SW 11th St", "Suite 102", "Lawton, OK 73501"],
    link: mapsSearch("309 SW 11th St, Lawton, OK 73501"),
  },
];

export default function TherapeuticFosterCarePage() {
  const schema = pageSchema({
    path: "/therapeutic-foster-care-agency",
    name: "Become a Therapeutic Foster Parent in Oklahoma",
    description,
    breadcrumb: "Therapeutic Foster Care",
    service: { serviceType: "Therapeutic Foster Care" },
    faqs: therapeuticFaqs,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <TherapeuticHero />

      {/* Intro */}
      <section className="relative mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="pointer-events-none absolute -left-10 top-10 h-64 w-64 rounded-full bg-leaf/15 blur-3xl" />
        <div className="relative grid items-stretch gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
          <Reveal className="h-full">
            <div className="relative h-full min-h-[22rem]">
              <div className="absolute -bottom-3 -left-3 h-full w-full rounded-[2rem_2rem_2rem_5rem] border-2 border-leaf" />
              <div className="relative h-full min-h-[22rem] overflow-hidden rounded-[2rem_2rem_2rem_5rem] shadow-xl">
                <Image
                  src="/close-up-girl-therapy-session-with-parents-100kb.jpg"
                  alt="A child and caregiver sharing a warm moment"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="h-full">
            <div className="flex h-full flex-col justify-center rounded-[2rem_2rem_5rem_2rem] bg-mint p-8 sm:p-12">
              <span className="mb-5 block h-1 w-14 rounded-full bg-leaf" />
              <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-pine sm:text-[2.1rem]">
                Everyone Deserves a Space to Be Heard and Heal
              </h2>
              <p className="mt-5 text-[1.02rem] leading-relaxed text-pine/85">
                Open your heart and home to a child in need.
                <br />
                At <strong className="font-bold text-pine">Open Arms Foster Care</strong>, we guide you through every
                step of becoming a foster parent, from training to licensing to ongoing support. Our team is here to
                ensure you have the tools, encouragement, and resources to succeed in this life-changing journey
              </p>
              <div className="mt-8">
                <ButtonLink href="/sign-up-now" variant="secondary">
                  Sign Up Now
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Commitment */}
      <section className="mx-auto max-w-[1200px] px-5 pb-20 sm:px-8 sm:pb-28">
        <Reveal>
          <ImageSlider
            slides={[
              {
                src: "/foster-1030x687-1.jpeg",
                alt: "A foster family sitting together on a sofa during a session with their caseworker",
              },
              { src: "/family-lesson-time-100kb.jpg", alt: "A family enjoying lesson time together" },
              { src: "/drinking-bodybuilding-bottle-sport-athletic-active-100kb.jpg", alt: "An active, healthy family moment" },
              { src: "/close-up-girl-therapist-high-five-100kb.jpg", alt: "A girl giving her therapist a high five" },
              { src: "/family-with-binoculars (1).jpg", alt: "A family exploring together with binoculars" },
              {
                src: "/teenager-girl-making-progress-self-love-self-acceptance-therapy-100kb.jpg",
                alt: "A teenager making progress in therapy",
              },
            ]}
          />
        </Reveal>

        <Reveal className="mt-14">
          <span className="mb-5 block h-1 w-14 rounded-full bg-leaf" />
          <h2 className="max-w-xl font-sans text-3xl font-bold leading-tight tracking-tight text-pine sm:text-[2.1rem]">
            Therapeutic Foster Care in Oklahoma
            <br />– Our Commitment
          </h2>
          <div className="mt-6 space-y-4 text-[1.02rem] leading-relaxed text-ink/85">
            <p>
              At Open Arms Foster Care, we are committed to providing high-quality therapeutic foster care for
              children and youth facing emotional, behavioral, or psychological challenges. Our program offers a
              stable, family-centered environment where children can begin to heal with the help of well-trained,
              compassionate foster parents.
            </p>
            <p>
              We are a trusted and experienced foster care agency in Oklahoma, deeply committed to child welfare,
              family empowerment, and trauma-informed care.
              <br />
              We work closely with the Oklahoma Department of Human Services (OKDHS) and other community organizations
              to ensure every child receives the support, services, and advocacy they deserve.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {bento.map((tile, i) => (
            <Reveal key={i} delay={(i % 3) * 120} className="h-full">
              {tile.type === "image" ? (
                <div className="group relative h-72 overflow-hidden rounded-[1.75rem] shadow-md md:h-full">
                  <Image
                    src={tile.image}
                    alt={tile.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/25 via-transparent to-transparent" />
                </div>
              ) : (
                <div
                  className={`flex h-full flex-col gap-6 rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl ${
                    tile.dark
                      ? "bg-pine text-white shadow-md"
                      : "border border-pine/10 bg-cream-alt text-pine hover:shadow-leaf/20"
                  }`}
                >
                  <h3 className="font-sans text-[1.7rem] font-medium leading-tight tracking-tight">{tile.title}</h3>
                  <ul className="flex flex-1 flex-col">
                    {tile.items.map((item) => (
                      <li
                        key={item}
                        className={`flex flex-1 items-center gap-3 border-t py-3 text-[0.95rem] leading-snug ${
                          tile.dark ? "border-white/15 text-white/90" : "border-pine/10 text-ink/75"
                        }`}
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf">
                          <svg viewBox="0 0 12 12" className="h-3 w-3 text-pine-deep" aria-hidden>
                            <path d="m2.5 6.2 2.4 2.3 4.6-4.8" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* To Healing & Hope */}
      <section className="mx-auto max-w-[1200px] px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="h-full">
            <div className="relative h-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-pine-deep via-leaf-deep to-leaf p-8 shadow-xl sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-leaf/20 blur-3xl" />
              <h2 className="relative font-display text-4xl font-medium tracking-tight text-white sm:text-[2.6rem]">
                To Healing &amp; Hope
              </h2>
              <p className="relative mt-3 text-base text-white/90">
                Fill out some info and we will be reaching out shortly!
              </p>
              <div className="relative mt-8">
                <HealingHopeContactForm />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="h-full">
            <div className="relative h-full min-h-[24rem] overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src="/father-spending-time-with-his-daughter-outdoors-father-s-day 1-100kb.jpg"
                alt="A father embracing his daughter outdoors"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* How to Get Started + Our Impact */}
      <section className="mx-auto max-w-[1200px] px-5 pb-20 sm:px-8 sm:pb-28">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Four Simple Steps"
            title="How to Get Started – Your Next Steps"
            className="max-w-3xl"
            titleClassName="font-sans text-3xl font-bold leading-tight tracking-tight text-pine sm:text-[2.6rem]"
          />
        </Reveal>

        {/* Journey path: numbered stops joined by a dashed line (horizontal from lg up, vertical below) */}
        <ol className="mt-14 grid gap-8 lg:grid-cols-4 lg:gap-6">
          {journey.map((step, i) => {
            const last = i === journey.length - 1;
            return (
              <li key={step.title} className="relative">
                {!last && (
                  <span
                    aria-hidden
                    className="absolute left-7 top-7 h-[calc(100%+2rem)] -translate-x-1/2 border-l-2 border-dashed border-leaf lg:left-1/2 lg:h-0 lg:w-[calc(100%+1.5rem)] lg:translate-x-0 lg:border-l-0 lg:border-t-2"
                  />
                )}
                <Reveal delay={i * 120} className="h-full">
                  <div className="flex h-full gap-5 lg:flex-col lg:items-center lg:gap-6">
                    <span
                      className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-display text-2xl font-semibold shadow-lg ring-8 ring-cream ${
                        last ? "bg-pine text-leaf" : "bg-leaf text-pine-deep"
                      }`}
                    >
                      {last ? (
                        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-label="Final step">
                          <path d={heartPath} fill="currentColor" />
                        </svg>
                      ) : (
                        i + 1
                      )}
                    </span>
                    <div className="flex-1 rounded-[1.5rem] bg-white p-6 shadow-md ring-1 ring-pine/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-leaf/20 lg:w-full lg:text-center">
                      <h3 className="font-sans text-[1.05rem] font-bold leading-snug text-pine">{step.title}</h3>
                      <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/75">{step.text}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>

        {/* Impact band */}
        <Reveal className="mt-16 sm:mt-20">
          <div className="relative overflow-hidden rounded-[2rem] bg-pine-deep px-6 py-12 shadow-xl sm:rounded-[2.5rem] sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-leaf/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-leaf/10 blur-3xl" />
            <div className="relative">
              <h2 className="text-center font-sans text-3xl font-bold leading-tight tracking-tight text-white sm:text-[2.6rem]">
                Our Impact in Oklahoma
              </h2>
              <span className="mx-auto mt-5 block h-1 w-14 rounded-full bg-leaf" />

              <div className="mt-12 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-white/10">
                {impact.map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center px-4 text-center lg:px-6">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-leaf/15 text-leaf ring-1 ring-leaf/30">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.7}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d={stat.icon} />
                      </svg>
                    </span>
                    <p className="mt-6 flex items-baseline justify-center gap-2 leading-none">
                      {stat.prefix && <span className="font-sans text-sm font-semibold text-leaf">{stat.prefix}</span>}
                      <span className="font-display text-[3.4rem] font-medium tracking-tight text-white sm:text-6xl">
                        {stat.value}
                        <span className="text-leaf">{stat.suffix}</span>
                      </span>
                    </p>
                    <p className="mt-4 max-w-[15rem] text-[0.95rem] leading-snug text-white/75">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="bg-cream-alt px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-[1200px] items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className="flex flex-col justify-center">
            <SectionHeading
              eyebrow="Ask Question"
              title="Frequently asked questions"
              titleClassName="font-cabinet text-[2.1rem] font-bold leading-tight tracking-tight text-pine sm:text-[2.6rem]"
            />
            <div className="mt-8">
              <FaqAccordion faqs={therapeuticFaqs} />
            </div>
          </Reveal>

          <Reveal delay={120} className="h-full">
            <div className="relative h-full min-h-[24rem] lg:min-h-[28rem]">
              <div className="absolute -right-3 -top-3 h-full w-full rounded-[2rem_5rem_2rem_2rem] border-2 border-leaf" />
              <div className="relative h-full min-h-[24rem] overflow-hidden rounded-[2rem_5rem_2rem_2rem] shadow-xl lg:min-h-[28rem]">
                <Image
                  src="/cute-family-playing-summer-field-100kb.jpg"
                  alt="A family playing together in a sunlit field"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/50 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full bg-pine py-2.5 pl-4 pr-2.5 shadow-lg">
                <span className="font-sans text-xs leading-tight text-cream/70">
                  Call Us Anytime
                  <br />
                  <span className="font-semibold text-cream">{siteConfig.phone}</span>
                </span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-leaf text-pine-deep">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                    <path
                      d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.5c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.7}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="absolute -bottom-5 right-6 h-28 w-28 overflow-hidden rounded-full border-4 border-cream-alt shadow-xl sm:h-32 sm:w-32">
                <Image
                  src="/medium-shot-girl-holding-toy-100kb.jpg"
                  alt="A smiling child hugging a toy"
                  fill
                  sizes="150px"
                  className="object-cover object-[center_25%]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Locations */}
      <section className="mx-auto max-w-[1400px] px-3 pb-20 sm:px-5 sm:pb-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-mint to-cream-alt p-6 sm:rounded-[2.5rem] sm:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-leaf/20 blur-3xl" />
            <div className="relative mx-auto max-w-3xl text-center">
              <span className="mx-auto mb-5 block h-1 w-14 rounded-full bg-leaf" />
              <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-pine sm:text-[2.6rem]">
                Our Locations – Local Support in Three Cities
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/85">
                We offer in-person training, support meetings, and resources at each location so you always have help
                nearby.
              </p>
            </div>

            <div className="relative mt-12 grid gap-6 md:grid-cols-3">
              {locations.map((loc, i) => {
                const office = offices.find((o) => o.id === loc.id)!;
                return (
                  <Reveal key={loc.id} delay={i * 120} className="h-full">
                    <div className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-md ring-1 ring-pine/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-leaf/25">
                      <div className="relative">
                        <iframe
                          src={office.mapEmbedSrc}
                          width="100%"
                          height="260"
                          style={{ border: 0 }}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`Map to Open Arms Foster Care ${office.city} office`}
                          className="block grayscale-[35%] transition-all duration-500 group-hover:grayscale-0"
                        />
                        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-pine px-3.5 py-1.5 font-sans text-xs font-semibold text-cream shadow-lg">
                          <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
                          {office.city}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col justify-between gap-5 p-6">
                        <address className="space-y-1 text-[0.95rem] not-italic leading-relaxed text-ink">
                          {loc.lines.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                        </address>
                        <a
                          href={loc.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-fit items-center gap-2 rounded-full bg-leaf px-5 py-2.5 font-sans text-sm font-semibold text-pine-deep transition-colors hover:bg-leaf-deep"
                        >
                          Get Directions
                          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                            <path d="M4 12h15m0 0-6-6m6 6-6 6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
