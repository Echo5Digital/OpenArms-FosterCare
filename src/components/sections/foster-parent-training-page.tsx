import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceHero } from "@/components/sections/service-hero";
import { FaqSection } from "@/components/sections/faq-section";
import { AppointmentRequestForm } from "@/components/forms/appointment-request-form";
import type { Faq } from "@/lib/content/faqs";

const curriculum = [
  {
    title: "Understanding the Role of a Foster Parent",
    body: "Insight into the foster care system and the needs of children in care, so you can approach the role with confidence and compassion.",
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
    bottomImage: {
      src: "/cute-family-walking-sunset-summer-park-100kb.jpg",
      alt: "A family walking together in a park at sunset",
    },
  },
  {
    title: "Comprehensive Curriculum",
    body: "Covers child development, behavioral management, trauma-informed care, cultural competence, and self-care.",
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
    image: {
      src: "/close-up-girl-therapy-session-with-parents-100kb.jpg",
      alt: "A close-up moment between a child and her parents during a therapy session",
    },
  },
  {
    title: "Interactive Learning Environment",
    body: "Engaging sessions let foster parents connect, share experiences, and practice skills through discussion and hands-on exercises.",
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
    bottomImage: {
      src: "/happy-family-outdoors-spending-time-together-100kb.jpg",
      alt: "A happy family spending time together outdoors",
    },
  },
] as const;

const headingFont = "font-sans text-[2.1rem] font-bold leading-tight tracking-tight text-pine sm:text-[2.6rem]";

export function FosterParentTrainingPage({ faqs }: { faqs: Faq[] }) {
  return (
    <>
      <ServiceHero
        title="Foster Parent Training"
        highlight="Training"
        intro={"We equip foster parents with essential skills and knowledge to create a nurturing environment. Our program empowers parents to support children in care effectively."}
        image="/hhhh.jpeg"
        imageAlt="A mother embracing her daughter warmly at home"
        imagePosition="object-[30%_center] sm:object-center"
        crumb="Foster Parent Training"
      />

      {/* What You'll Learn */}
      <section className="bg-[rgb(235,243,238)] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            eyebrow="What You'll Learn"
            title="Preparing You for Every Step of the Journey"
            align="center"
            className="mx-auto"
            titleClassName={headingFont}
          />

          <div className="mt-14 rounded-[2.5rem] bg-gradient-to-br from-mint via-leaf/30 to-leaf-deep/20 p-6 shadow-[0_30px_60px_-30px_rgba(15,33,27,0.25)] ring-1 ring-pine/8 sm:p-10 lg:p-12">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-xl lg:aspect-auto lg:h-full lg:min-h-[420px]">
                <Image
                  src="/child-doing-therapy-session-with-psychologist-100kb.jpg"
                  alt="Foster parent training in session"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-contain"
                />
              </div>

              <div>
                <p className="text-[1.05rem] leading-relaxed text-slate">
                  Becoming a foster parent is a meaningful journey, one that requires the right preparation, support,
                  and education. At Open Arms Foster Care, we offer comprehensive{" "}
                  <span className="font-semibold text-pine">foster parenting training programs</span> that equip
                  individuals and families with the skills they need to provide safe, stable, and loving homes for
                  children in care.
                </p>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-slate">
                  Our training programs are state-approved and designed to meet the diverse needs of both new and
                  experienced foster parents. From understanding child development and trauma to learning discipline
                  strategies and legal responsibilities, every aspect of fostering is covered in our curriculum.
                </p>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-slate">
                  For those in the metro area, we host regular foster parenting classes in Oklahoma City, available in
                  both in-person and virtual formats. These classes are led by experienced professionals and include
                  interactive sessions that prepare you for real-world caregiving challenges.
                </p>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-slate">
                  Open Arms also specializes in{" "}
                  <span className="font-semibold text-pine">therapeutic foster care in Oklahoma City</span>, and we
                  offer advanced training for parents interested in supporting children with emotional or behavioral
                  needs. This specialized training focuses on trauma-informed care, crisis management, and ongoing
                  therapeutic support — all essential for helping children with complex backgrounds heal and thrive.
                </p>
                <p className="mt-6 max-w-xl font-display text-xl italic leading-snug text-pine">
                  Whether you&rsquo;re just starting your foster care journey or looking to expand your skills, our
                  training programs provide the knowledge, tools, and confidence you need. With Open Arms,
                  you&rsquo;re not just fostering — you&rsquo;re changing lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Curriculum */}
      <section className="bg-mint/50 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            eyebrow="Training Curriculum"
            title="Foster Parent Training Programs"
            align="center"
            className="mx-auto"
            titleClassName={headingFont}
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {curriculum.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-2xl bg-white text-center shadow-sm ring-1 ring-pine/8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                {"image" in item && item.image && (
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(min-width: 640px) 33vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="p-8">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-mint text-pine transition-transform duration-300 group-hover:scale-110 group-hover:bg-leaf group-hover:text-pine-deep">
                    <svg viewBox="0 0 24 24" className="h-6 w-6">
                      {item.icon}
                    </svg>
                  </span>
                  <h3 className="mt-5 font-display text-lg font-medium leading-snug text-pine">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate">{item.body}</p>
                </div>

                {"bottomImage" in item && item.bottomImage && (
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={item.bottomImage.src}
                      alt={item.bottomImage.alt}
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
        title="Answers about foster parent training programs"
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
                src="/happy-family-outdoors-spending-time-together-100kb.jpg"
                alt="A happy family spending time together outdoors"
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
