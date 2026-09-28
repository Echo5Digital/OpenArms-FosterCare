import type { Metadata } from "next";
import { siteConfig, offices } from "@/lib/site-config";
import { graph, webPageSchema, faqPageSchema } from "@/lib/schema";
import { therapeuticFaqs } from "@/lib/content/faqs";
import { PageHero } from "@/components/sections/page-hero";
import { ProseBlock, StatCallout, CheckList } from "@/components/ui/prose-block";
import { FaqSection } from "@/components/sections/faq-section";
import { HealingHopeSection } from "@/components/sections/healing-hope-section";
import { ButtonLink } from "@/components/ui/button-link";

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

const impact = [
  { value: "300+", label: "children placed in safe, loving homes each year" },
  { value: "100+", label: "active foster families across the state" },
  { value: "~20 yrs", label: "serving Oklahoma communities" },
  { value: "97%", label: "of foster parents say they feel prepared and supported" },
];

export default function TherapeuticFosterCarePage() {
  const schema = graph(
    webPageSchema({
      url: `${siteConfig.url}/therapeutic-foster-care-agency/`,
      name: "Become a Therapeutic Foster Parent in Oklahoma",
      description,
    }),
    faqPageSchema(therapeuticFaqs),
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <PageHero
        eyebrow="Therapeutic Foster Care"
        title="Everyone Deserves a Space to Be Heard and Heal"
        intro="Open your heart and home to a child in need. At Open Arms Foster Care, we guide you through every step of becoming a foster parent, from training to licensing to ongoing support."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Therapeutic Foster Care" }]}
      />

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-medium text-pine sm:text-3xl">
              Therapeutic Foster Care in Oklahoma — Our Commitment
            </h2>
            <ProseBlock className="mt-6">
              <p>
                At Open Arms Foster Care, we are committed to providing high-quality therapeutic foster care for
                children and youth facing emotional, behavioral, or psychological challenges. Our program offers a
                stable, family-centered environment where children can begin to heal with the help of well-trained,
                compassionate foster parents.
              </p>
              <p>
                We are a trusted and experienced foster care agency in Oklahoma, deeply committed to child welfare,
                family empowerment, and trauma-informed care. We work closely with the Oklahoma Department of Human
                Services (OKDHS) and other community organizations to ensure every child receives the support,
                services, and advocacy they deserve.
              </p>
            </ProseBlock>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-sans text-sm font-semibold uppercase tracking-wide text-leaf-deep">
                Why Foster with Open Arms?
              </h3>
              <div className="mt-4">
                <CheckList
                  items={[
                    "24/7 support and guidance",
                    "Comprehensive training provided",
                    "Dedicated caseworkers and resources",
                    "A community of foster families by your side",
                    "Accessible mental health care",
                  ]}
                />
              </div>
            </div>
            <div>
              <h3 className="font-sans text-sm font-semibold uppercase tracking-wide text-leaf-deep">Who Can Apply?</h3>
              <div className="mt-4">
                <CheckList
                  items={[
                    "Are 21 years or older",
                    "Are a resident of Oklahoma with a stable home environment",
                    "Are willing to complete background checks and training",
                    "Are ready to open your heart to a child in need",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impact.map((s) => (
            <StatCallout key={s.label} value={s.value} label={s.label} />
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start gap-6 rounded-[2rem_2rem_4rem_2rem] bg-pine p-9 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-medium text-cream">How to Get Started — Your Next Steps</h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-cream/70">
              Fill out the application, meet your consultation team, complete training and a home study, then welcome
              a child into your home with full support.
            </p>
          </div>
          <ButtonLink href="/sign-up-now" variant="secondary">
            Sign Up Now
          </ButtonLink>
        </div>
      </section>

      <FaqSection faqs={therapeuticFaqs} eyebrow="Common Questions" title="Frequently asked questions" />

      <section className="mx-auto max-w-[1400px] px-5 pb-20 sm:px-8 sm:pb-28">
        <h2 className="font-display text-2xl font-medium text-pine sm:text-3xl">
          Our Locations — Local Support in Three Cities
        </h2>
        <p className="mt-4 max-w-2xl text-slate">
          We offer in-person training, support meetings, and resources at each location so you always have help
          nearby.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {offices.map((o) => (
            <div key={o.id} className="rounded-[0.5rem_1.75rem_0.5rem_1.75rem] border border-pine/10 bg-mint/60 p-6">
              <p className="font-display text-lg font-medium text-pine">{o.city}</p>
              <p className="mt-1 text-sm text-slate">
                {o.streetAddress}, {o.addressLocality}, {o.addressRegion} {o.postalCode}
              </p>
            </div>
          ))}
        </div>
      </section>

      <HealingHopeSection />
    </>
  );
}
