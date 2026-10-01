import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { graph, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { ContactHero } from "@/components/sections/contact-hero";
import { ContactMain } from "@/components/sections/contact-main";
import { ContactOffices } from "@/components/sections/contact-offices";
import { ContactNewsletter } from "@/components/sections/contact-newsletter";

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

      <ContactHero />
      <ContactMain />
      <ContactOffices />
      <ContactNewsletter />
    </>
  );
}
