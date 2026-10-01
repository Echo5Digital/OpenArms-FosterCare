import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceHero } from "@/components/sections/service-hero";
import { FaqSection } from "@/components/sections/faq-section";
import { AppointmentRequestForm } from "@/components/forms/appointment-request-form";
import type { Faq } from "@/lib/content/faqs";

const approachCards = [
  {
    title: "Pro Bono Therapy Services",
    body: "Free therapy for foster families, focused on healing and growth in a safe, supportive environment.",
    icon: (
      <path
        d="M12 20s-7-4.4-9.3-8.8C1.1 8 2.6 4.8 5.6 4.1c1.9-.5 3.9.3 5 2 .1.1.3.1.4 0 1.1-1.7 3.1-2.5 5-2 3 .7 4.5 3.9 2.9 7.1C19 15.6 12 20 12 20Z"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    imageSrc: "/child-doing-therapy-session-with-psychologist-100kb.jpg",
    imageAlt: "A child during a therapy session with a psychologist",
    imagePosition: "bottom",
  },
  {
    title: "Ongoing Support for Families",
    body: "Therapists guide parents and caregivers in strengthening family bonds and improving communication.",
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
    imageSrc: "/teenager-girl-making-progress-self-love-self-acceptance-therapy-100kb.jpg",
    imageAlt: "A teenager making progress in a supportive therapy session",
    imagePosition: "top",
  },
  {
    title: "Creating a Sense of Stability",
    body: "We help families build routines that promote security, consistency, and belonging for every child.",
    icon: (
      <path
        d="M4 11 12 4l8 7M6 10v9h12v-9M10 19v-5h4v5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    imageSrc: "/mother-son-looking-tablet-100kb.jpg",
    imageAlt: "A mother and son looking at a tablet together at home",
    imagePosition: "bottom",
  },
] as const;

const headingFont = "font-sans text-[2.1rem] font-bold leading-tight tracking-tight text-pine sm:text-[2.6rem]";

export function PostPlacementTherapyPage({ faqs }: { faqs: Faq[] }) {
  return (
    <>
      <ServiceHero
        title="Post-Placement Therapy"
        highlight="Therapy"
        intro={"At Open Arms Initiative, we support foster care and adoption journeys starting with placement. Our Post-Placement Therapy helps children and families adjust emotionally in their new home."}
        image="/fs4 (2).jpg"
        imageAlt="A family talking with a caseworker during a supportive foster care consultation"
        imagePosition="object-center"
        crumb="Post-Placement Therapy"
      />

      {/* What to Expect */}
      <section className="bg-[rgb(235,243,238)] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            eyebrow="What to Expect"
            title="Support for Every Step After Placement"
            align="center"
            className="mx-auto"
            titleClassName={headingFont}
          />

          <div className="mt-14 rounded-[2.5rem] bg-gradient-to-br from-mint via-leaf/30 to-leaf-deep/20 p-6 shadow-[0_30px_60px_-30px_rgba(15,33,27,0.25)] ring-1 ring-pine/8 sm:p-10 lg:p-12">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-xl lg:aspect-auto lg:h-full lg:min-h-[420px]">
                <Image
                  src="/family-with-binoculars (1).jpg"
                  alt="A family enjoying time together outdoors after placement"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-contain"
                />
              </div>

              <div>
                <p className="text-[1.05rem] leading-relaxed text-slate">
                  Transitioning to a new family can be a complex process for children, often filled with a mix of
                  emotions, including excitement, anxiety, and uncertainty. Our licensed therapists specialize in
                  post-placement support, helping children and their families process these feelings and build
                  strong, healthy relationships.
                </p>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-slate">
                  Post-placement therapy supports both the child and their family. Therapists guide parents and
                  caregivers in overcoming challenges, strengthening family bonds, improving communication, and
                  developing personalized parenting strategies.
                </p>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-slate">
                  Stability is crucial for children in foster care and adoption. Our post-placement therapy aims to
                  help families establish routines and practices that promote a sense of security and belonging. We
                  work with families to develop strategies that encourage consistency, open communication, and
                  emotional support, ensuring that children feel safe and valued in their new homes.
                </p>
                <p className="mt-6 max-w-xl font-sans text-xl not-italic leading-snug text-pine">
                  If you are a foster or adoptive family seeking support after placement, we invite you to reach out
                  to us.
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
            title="Post-Placement Therapy Services"
            align="center"
            className="mx-auto"
            titleClassName={headingFont}
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {approachCards.map((card) => (
              <div
                key={card.title}
                className="group overflow-hidden rounded-2xl bg-white text-center shadow-sm ring-1 ring-pine/8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                {card.imagePosition === "top" && (
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      fill
                      sizes="(min-width: 640px) 33vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="p-8">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-mint text-pine transition-transform duration-300 group-hover:scale-110 group-hover:bg-leaf group-hover:text-pine-deep">
                    <svg viewBox="0 0 24 24" className="h-6 w-6">
                      {card.icon}
                    </svg>
                  </span>
                  <h3 className="mt-5 font-display text-lg font-medium leading-snug text-pine">{card.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate">{card.body}</p>
                </div>

                {card.imagePosition !== "top" && (
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      fill
                      sizes="(min-width: 640px) 33vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        faqs={faqs}
        eyebrow="Common Questions"
        title="Answers about post-placement therapy"
        titleClassName={headingFont}
        image={{
          src: "/handsome-father-with-cute-little-son-100kb.jpg",
          alt: "A father joyfully lifting his son into the air outdoors",
          position: "object-[center_30%]",
        }}
        secondaryImage={{
          src: "/side-view-grandmother-grandson-playing-sticking-their-tongues-out-100kb.jpg",
          alt: "A grandmother sharing a warm, playful moment with her grandson at home",
        }}
      />

      {/* Request an Appointment */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-[0_30px_70px_-30px_rgba(15,33,27,0.3)] ring-1 ring-pine/8">
          <div className="grid lg:grid-cols-[1fr_0.9fr]">
            <div className="relative order-1 min-h-[320px] overflow-hidden rounded-tl-[4rem] lg:order-2 lg:min-h-0">
              <Image
                src="/beautiful-boy-playing-with-bubbles-sunny-day-garden-100kb.jpg"
                alt="Father and son blowing bubbles together in a garden"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="order-2 p-8 sm:p-12 lg:order-1 lg:p-14">
              <h2 className={headingFont}>Request an Appointment</h2>
              <span className="mt-3 block h-1 w-14 rounded-full bg-leaf" />
              <p className="mt-4 max-w-md text-[1.05rem] leading-relaxed text-slate">
                Fill out some info and we&rsquo;ll be reaching out shortly to help you find the right support.
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
