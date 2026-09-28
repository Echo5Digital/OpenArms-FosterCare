import { siteConfig, offices } from "@/lib/site-config";
import type { Faq } from "@/lib/content/faqs";

const ORG_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteConfig.legalName,
    url: `${siteConfig.url}/`,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    telephone: "+1-405-894-0320",
    email: siteConfig.email,
    address: offices.map((o) => ({
      "@type": "PostalAddress",
      streetAddress: o.streetAddress,
      addressLocality: o.addressLocality,
      addressRegion: o.addressRegion,
      postalCode: o.postalCode,
      addressCountry: "US",
    })),
    areaServed: offices.map((o) => ({ "@type": "City", name: o.city })),
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram, siteConfig.social.youtube],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${siteConfig.url}/`,
    name: siteConfig.legalName,
    publisher: { "@id": ORG_ID },
  };
}

export function webPageSchema(opts: { url: string; name: string; description: string; imageUrl?: string }) {
  return {
    "@type": "WebPage",
    "@id": `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    ...(opts.imageUrl
      ? { primaryImageOfPage: { "@type": "ImageObject", url: opts.imageUrl } }
      : {}),
  };
}

export function faqPageSchema(faqs: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function localBusinessSchema(officeId: (typeof offices)[number]["id"]) {
  const office = offices.find((o) => o.id === officeId)!;
  return {
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/${office.slug}/#localbusiness`,
    name: `${siteConfig.legalName} — ${office.city}`,
    parentOrganization: { "@id": ORG_ID },
    telephone: "+1-405-894-0320",
    email: siteConfig.email,
    url: `${siteConfig.url}/${office.slug}/`,
    address: {
      "@type": "PostalAddress",
      streetAddress: office.streetAddress,
      addressLocality: office.addressLocality,
      addressRegion: office.addressRegion,
      postalCode: office.postalCode,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: office.geo.lat,
      longitude: office.geo.lng,
    },
    areaServed: { "@type": "City", name: office.city },
  };
}

export function serviceCatalogSchema() {
  return {
    "@type": "Service",
    "@id": `${siteConfig.url}/#service`,
    serviceType: "Foster Care Agency",
    provider: { "@id": ORG_ID },
    description:
      "Open Arms Foster Care helps Oklahoma families become foster parents and provides training, case management, therapeutic foster care, emergency foster care, and post-placement support.",
    areaServed: offices.map((o) => ({ "@type": "City", name: o.city })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Foster Care Services",
      itemListElement: [
        { name: "Therapeutic Foster Care", url: `${siteConfig.url}/therapeutic-foster-care-agency/` },
        { name: "Emergency Foster Care", url: `${siteConfig.url}/referrals/` },
        { name: "Foster Parent Training", url: `${siteConfig.url}/foster-parent-training/` },
        { name: "Post-Placement Therapy", url: `${siteConfig.url}/post-placement-therapy/` },
        { name: "Support for School Staff", url: `${siteConfig.url}/support-for-school-staff/` },
        { name: "Child Welfare Advocacy", url: `${siteConfig.url}/child-welfare-advocacy/` },
      ].map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item.name, url: item.url },
      })),
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema(opts: {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  imageUrl?: string;
}) {
  return {
    "@type": "Article",
    "@id": `${opts.url}#article`,
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: { "@id": `${opts.url}#webpage` },
    ...(opts.imageUrl ? { image: opts.imageUrl } : {}),
  };
}

export function graph(...nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
