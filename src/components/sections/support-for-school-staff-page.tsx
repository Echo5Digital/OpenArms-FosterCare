import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaqSection } from "@/components/sections/faq-section";
import { AppointmentRequestForm } from "@/components/forms/appointment-request-form";
import type { Faq } from "@/lib/content/faqs";

const features = [
  {
    title: "Tailored Educational Workshops",
    body: "Workshops on recognizing trauma, building trust, fostering resilience, and collaborating with foster families.",
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
    imageSrc: "/7d777914526136d901afc867c3cf8bbb.jpg",
    imageAlt: "An educator working one-on-one with a child",
    imagePosition: "object-top",
  },
  {
    title: "Interactive Learning and Resources",
    body: "Real-life scenarios, group activities, and resources that help educators effectively support foster children.",
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
    imageSrc: "/fam10.jpg",
    imageAlt: "A family relaxing together at home",
    imagePosition: "object-right",
    imagePlacement: "top",
  },
  {
    title: "Ongoing Support and Collaboration",
    body: "Continued support through training, consultations, and networking between schools and foster care professionals.",
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
    imageSrc: "/cute-family-walking-sunset-summer-park-100kb.jpg",
    imageAlt: "A family and caregiver network supporting a child together",
  },
] as const;

const headingFont = "font-sans text-[2.1rem] font-bold leading-tight tracking-tight text-pine sm:text-[2.6rem]";

export function SupportForSchoolStaffPage({ faqs }: { faqs: Faq[] }) {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[420px] w-full overflow-hidden sm:min-h-[480px]">
        <Image
          src="/close-up-girl-therapy-session-with-parents-100kb.jpg"
          alt="A caring adult supporting a child, reflecting the trust school staff help build"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pine-deep/85 via-pine-deep/45 to-pine-deep/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/70 via-transparent to-transparent" />

        <div className="relative mx-auto flex h-full min-h-[420px] w-full max-w-[1400px] flex-col justify-center px-5 py-16 sm:min-h-[480px] sm:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 inline-flex w-fit items-center gap-2 rounded-full bg-pine-deep/80 px-5 py-2 font-sans text-sm font-semibold text-cream backdrop-blur-sm"
          >
            <a href="/" className="hover:text-leaf">Home</a>
            <span className="text-cream/50">&gt;</span>
            <a href="/services" className="hover:text-leaf">Services</a>
            <span className="text-cream/50">&gt;</span>
            <span>Support for School Staff</span>
          </nav>

          <h1 className="max-w-2xl font-sans text-5xl font-bold leading-tight text-white sm:text-6xl">
            Support for School Staff
          </h1>
          <p className="mt-5 max-w-xl font-sans text-lg leading-relaxed text-cream/90">
            Open Arms Initiative provides training to help school staff understand foster children&rsquo;s unique
            challenges and create a supportive classroom environment.
          </p>

          <div className="mt-8">
            <a
              href="/sign-up-now"
              className="inline-flex items-center rounded-full bg-leaf px-7 py-3.5 font-sans text-base font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-leaf-deep"
            >
              Start Your Journey Today
            </a>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-[rgb(235,243,238)] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            eyebrow="What to Expect"
            title="Support for School Staff"
            align="center"
            className="mx-auto"
            titleClassName={headingFont}
          />

          <div className="mt-14 rounded-[2.5rem] bg-gradient-to-br from-mint via-leaf/30 to-leaf-deep/20 p-6 shadow-[0_30px_60px_-30px_rgba(15,33,27,0.25)] ring-1 ring-pine/8 sm:p-10 lg:p-12">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-xl lg:aspect-auto lg:h-full lg:min-h-[420px]">
                <Image
                  src="/medium-shot-girl-holding-toy-100kb.jpg"
                  alt="A child in a supportive learning environment"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-contain"
                />
              </div>

              <div>
                <p className="text-[1.05rem] leading-relaxed text-slate">
                  Foster children carry experiences that show up in the classroom in ways that aren&rsquo;t always
                  easy to read — a change in routine, a new caregiver, a court date, can all shape a school day long
                  before a teacher hears about it. Open Arms partners directly with school staff so those signals are
                  easier to recognize and respond to with steadiness rather than guesswork.
                </p>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-slate">
                  Our sessions are built for the realities of a school day: short, practical workshops that fit into
                  existing professional development time and give teachers, counselors, and administrators concrete
                  tools rather than abstract theory.
                </p>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-slate">
                  We also stay connected after training. When a foster child in your school experiences a placement
                  change or a difficult season, our team is a phone call away to help school staff understand
                  what&rsquo;s happening and how best to support that student without needing details that
                  aren&rsquo;t theirs to share.
                </p>
                <p className="mt-6 max-w-xl font-sans text-xl not-italic leading-snug text-pine">
                  Whether you&rsquo;re a classroom teacher, a school counselor, or an administrator building
                  district-wide practices, Open Arms is here to make sure every foster child in an Oklahoma classroom
                  is met with understanding instead of assumptions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-mint/50 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            eyebrow="Our Approach"
            title="How We Support School Staff"
            align="center"
            className="mx-auto"
            titleClassName={headingFont}
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {features.map((card) => (
              <div
                key={card.title}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white text-center shadow-sm ring-1 ring-pine/8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className={`p-8 ${"imagePlacement" in card && card.imagePlacement === "top" ? "order-2" : "order-1"}`}>
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-mint text-pine transition-transform duration-300 group-hover:scale-110 group-hover:bg-leaf group-hover:text-pine-deep">
                    <svg viewBox="0 0 24 24" className="h-6 w-6">
                      {card.icon}
                    </svg>
                  </span>
                  <h3 className="mt-5 font-display text-lg font-medium leading-snug text-pine">{card.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate">{card.body}</p>
                </div>

                <div
                  className={`relative aspect-[4/3] w-full ${"imagePlacement" in card && card.imagePlacement === "top" ? "order-1" : "order-2"}`}
                >
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    sizes="(min-width: 640px) 33vw, 90vw"
                    className={`object-cover ${"imagePosition" in card ? card.imagePosition : "object-center"}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        faqs={faqs}
        eyebrow="Common Questions"
        title="Answers about supporting foster students"
        titleClassName={headingFont}
        image={{
          src: "/family-with-baby-standing-outside-house-100kb.jpg",
          alt: "A family standing together outside their home",
          position: "object-[center_30%]",
        }}
        secondaryImage={{
          src: "/teenager-girl-making-progress-self-love-self-acceptance-therapy-100kb.jpg",
          alt: "A teenager making progress in a supportive session",
        }}
      />

      {/* Join Our Sessions */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-[0_30px_70px_-30px_rgba(15,33,27,0.3)] ring-1 ring-pine/8">
          <div className="grid lg:grid-cols-[1fr_0.9fr]">
            <div className="relative order-1 min-h-[320px] overflow-hidden rounded-tl-[4rem] lg:order-2 lg:min-h-0">
              <Image
                src="/parents-kid-doing-therapy 1-100kb.jpg"
                alt="A family working together in a supportive session"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="order-2 p-8 sm:p-12 lg:order-1 lg:p-14">
              <h2 className={headingFont}>Join Our Sessions</h2>
              <span className="mt-3 block h-1 w-14 rounded-full bg-leaf" />
              <p className="mt-4 max-w-md text-[1.05rem] leading-relaxed text-slate">
                Join our sessions to support foster children&rsquo;s success in school. Open Arms Initiative is here
                to partner with educators for every child&rsquo;s growth.
              </p>

              <div className="mt-8">
                <AppointmentRequestForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
