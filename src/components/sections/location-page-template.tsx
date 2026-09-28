import { PageHero } from "@/components/sections/page-hero";
import { HealingHopeSection } from "@/components/sections/healing-hope-section";
import { ProseBlock } from "@/components/ui/prose-block";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig, type Office } from "@/lib/site-config";
import type { ReactNode } from "react";

type Feature = { title: string; body: string };

export function LocationPageTemplate({
  office,
  intro,
  whyChoose,
  therapeutic,
  supportFeatures,
  emergency,
  becomeParentSteps,
  closing,
}: {
  office: Office;
  intro: string;
  whyChoose: { title: string; body: string }[];
  therapeutic: ReactNode[];
  supportFeatures: Feature[];
  emergency: ReactNode[];
  becomeParentSteps: Feature[];
  closing: string;
}) {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title={office.city}
        intro={intro}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Locations" }, { label: office.city }]}
      />

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <div className="overflow-hidden rounded-[1.5rem_1.5rem_3rem_1.5rem] border border-pine/10">
              <iframe
                src={office.mapEmbedSrc}
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map to Open Arms Foster Care ${office.city} office`}
              />
            </div>
            <div className="mt-6 rounded-[0.5rem_2rem_0.5rem_2rem] bg-mint p-6">
              <p className="font-display text-lg font-medium text-pine">{office.city} Office</p>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {office.streetAddress}
                <br />
                {office.addressLocality}, {office.addressRegion} {office.postalCode}
              </p>
              <a href={siteConfig.phoneHref} className="mt-3 inline-block font-sans text-sm font-semibold text-leaf-deep">
                {siteConfig.phone}
              </a>
            </div>
            <ButtonLink href="/contact-us" variant="ghost" className="mt-6 inline-flex">
              Contact Now
            </ButtonLink>
          </div>

          <div>
            <h2 className="font-display text-2xl font-medium text-pine sm:text-3xl">
              Why Choose Open Arms Foster Care in {office.city}?
            </h2>
            <div className="mt-6 flex flex-col gap-5">
              {whyChoose.map((item, i) => (
                <div key={item.title} className="flex gap-4">
                  <span className="font-display text-2xl font-light text-leaf-deep/70">0{i + 1}</span>
                  <div>
                    <h3 className="font-sans text-base font-semibold text-pine">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grain relative bg-mint py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="font-display text-2xl font-medium text-pine sm:text-3xl">
            Therapeutic Foster Care in {office.city}, OK
          </h2>
          <ProseBlock className="mt-6 max-w-3xl">
            {therapeutic.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </ProseBlock>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="font-display text-2xl font-medium text-pine sm:text-3xl">
          Foster Parent Support Services in {office.city}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {supportFeatures.map((f) => (
            <div key={f.title} className="rounded-[0.5rem_2rem_0.5rem_2rem] border border-pine/10 bg-white p-6">
              <h3 className="font-sans text-base font-semibold text-pine">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grain relative bg-pine py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="font-display text-2xl font-medium text-cream sm:text-3xl">
            Emergency Foster Care in {office.city}
          </h2>
          <ProseBlock className="mt-6 max-w-3xl [&_p]:text-cream/75 [&_strong]:text-cream">
            {emergency.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </ProseBlock>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="font-display text-2xl font-medium text-pine sm:text-3xl">
          How to Become a Foster Parent in {office.city}
        </h2>
        <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {becomeParentSteps.map((step, i) => (
            <li key={step.title} className="relative border-l-2 border-leaf/40 pl-5">
              <span className="absolute -left-[11px] top-0 flex h-5 w-5 items-center justify-center rounded-full bg-leaf font-sans text-[0.65rem] font-bold text-pine-deep">
                {i + 1}
              </span>
              <h3 className="font-display text-base font-medium leading-snug text-pine">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{step.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-12 max-w-2xl font-display text-xl italic leading-snug text-pine">{closing}</p>
      </section>

      <HealingHopeSection />
    </>
  );
}
