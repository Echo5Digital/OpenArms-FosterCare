import type { Metadata } from "next";
import { siteConfig, offices } from "@/lib/site-config";
import { graph, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { ButtonLink } from "@/components/ui/button-link";

const description = "Get in touch with Open Arms Foster Care for any questions or support — call, email, or visit one of our three Oklahoma offices.";

export const metadata: Metadata = {
  title: "Contact Us",
  description,
  alternates: { canonical: "/contact-us" },
  openGraph: { title: "Contact Us - Open Arms Foster Care", description, url: "/contact-us" },
};

export default function ContactUsPage() {
  const schema = graph(
    webPageSchema({ url: `${siteConfig.url}/contact-us/`, name: "Contact Us - Open Arms Foster Care", description }),
    breadcrumbSchema([
      { name: "Home", url: `${siteConfig.url}/` },
      { name: "Contact Us", url: `${siteConfig.url}/contact-us/` },
    ]),
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <PageHero
        eyebrow="Contact Us"
        title="We're Here to Help"
        intro="Reach out to us for any inquiries or assistance. Our offices are located in three Oklahoma cities, and we now also offer remote options during initial parent trainings for added convenience."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-sans text-xs font-semibold uppercase tracking-wide text-leaf-deep">Call or Email</h2>
              <a href={siteConfig.phoneHref} className="mt-3 block font-display text-2xl font-medium text-pine">
                {siteConfig.phone}
              </a>
              <a href={siteConfig.emailHref} className="mt-1 block text-sm text-slate">
                {siteConfig.email}
              </a>
            </div>

            <div className="flex flex-col gap-4">
              {offices.map((office) => (
                <div key={office.id} className="rounded-[0.5rem_1.75rem_0.5rem_1.75rem] border border-pine/10 bg-mint/60 p-5">
                  <p className="font-display text-lg font-medium text-pine">{office.city}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate">
                    {office.streetAddress}
                    <br />
                    {office.addressLocality}, {office.addressRegion} {office.postalCode}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-[0.5rem_2rem_0.5rem_2rem] bg-pine p-6">
              <h3 className="font-display text-lg font-medium text-cream">Want to Join Our Team?</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                We&apos;re always looking for compassionate professionals to join Open Arms.
              </p>
              <ButtonLink href="/careers" variant="secondary" className="mt-4 inline-flex">
                View Careers
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-[2rem_2rem_4rem_2rem] border border-pine/10 bg-white p-8 sm:p-10">
            <h2 className="font-display text-2xl font-medium text-pine">Get in Touch</h2>
            <p className="mt-2 text-sm text-slate">Reach out to us for any questions or support.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
