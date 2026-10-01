import { siteConfig, offices } from "@/lib/site-config";
import type { Faq } from "@/lib/content/faqs";

const ORG_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

type Node = Record<string, unknown>;

/** Canonical absolute URL for a site path: no trailing slash (matches the canonical tags and sitemap), the home page keeps its slash. */
export function pageUrl(path = "/") {
  const clean = path.replace(/\/+$/, "");
  if (clean === "") return `${siteConfig.url}/`;
  return `${siteConfig.url}${clean.startsWith("/") ? clean : `/${clean}`}`;
}

export type PageType = "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";

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

export function webPageSchema(opts: {
  url: string;
  name: string;
  description: string;
  imageUrl?: string;
  /** Defaults to "WebPage". */
  type?: PageType;
  /** @id of the entity the page is about (defaults to the organization). */
  aboutId?: string;
  /** Links the page to a BreadcrumbList node with the matching @id. */
  hasBreadcrumb?: boolean;
}) {
  return {
    "@type": opts.type ?? "WebPage",
    "@id": `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    inLanguage: "en-US",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": opts.aboutId ?? ORG_ID },
    ...(opts.hasBreadcrumb ? { breadcrumb: { "@id": `${opts.url}#breadcrumb` } } : {}),
    ...(opts.imageUrl
      ? { primaryImageOfPage: { "@type": "ImageObject", url: opts.imageUrl } }
      : {}),
  };
}

export function faqPageSchema(faqs: Faq[], url?: string) {
  return {
    "@type": "FAQPage",
    ...(url ? { "@id": `${url}#faq`, isPartOf: { "@id": `${url}#webpage` } } : {}),
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

type OfficeId = (typeof offices)[number]["id"];

export function localBusinessId(officeId: OfficeId) {
  const office = offices.find((o) => o.id === officeId)!;
  return `${pageUrl(`/${office.slug}`)}#localbusiness`;
}

export function localBusinessSchema(officeId: OfficeId) {
  const office = offices.find((o) => o.id === officeId)!;
  return {
    "@type": "ProfessionalService",
    "@id": localBusinessId(officeId),
    name: `${siteConfig.legalName} — ${office.city}`,
    parentOrganization: { "@id": ORG_ID },
    telephone: "+1-405-894-0320",
    email: siteConfig.email,
    url: pageUrl(`/${office.slug}`),
    image: `${siteConfig.url}${siteConfig.logo}`,
    hasMap: `https://www.google.com/maps/search/?api=1&query=${office.geo.lat},${office.geo.lng}`,
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
        { name: "Therapeutic Foster Care", url: pageUrl("/therapeutic-foster-care-agency") },
        // no dedicated page: emergency foster care is described on the home and location pages
        { name: "Emergency Foster Care" },
        { name: "Foster Parent Training", url: pageUrl("/foster-parent-training") },
        { name: "Post-Placement Therapy", url: pageUrl("/post-placement-therapy") },
        { name: "Support for School Staff", url: pageUrl("/support-for-school-staff") },
        { name: "Child Welfare Advocacy", url: pageUrl("/child-welfare-advocacy") },
      ].map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item.name, ...(item.url ? { url: item.url } : {}) },
      })),
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    // the last item is the page itself, so the id lines up with the WebPage's `breadcrumb` reference
    "@id": `${items[items.length - 1].url}#breadcrumb`,
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

export function serviceSchema(opts: { path: string; name: string; serviceType: string; description: string }) {
  const url = pageUrl(opts.path);
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url,
    provider: { "@id": ORG_ID },
    areaServed: offices.map((o) => ({ "@type": "City", name: o.city })),
    mainEntityOfPage: { "@id": `${url}#webpage` },
  };
}

export function itemListSchema(items: { name: string; url: string }[], startPosition = 1) {
  return {
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: startPosition + i,
      name: item.name,
      url: item.url,
    })),
  };
}

/**
 * Everything one page needs in a single call: the WebPage node (typed and linked to the site, the organization or an
 * office), its BreadcrumbList, and any extra nodes — all with ids that point at each other.
 */
export function pageSchema(opts: {
  /** Site path, e.g. "/about-us" (use "/" for the home page). */
  path: string;
  /** WebPage name — normally the page's meta title. */
  name: string;
  description: string;
  type?: PageType;
  imageUrl?: string;
  /** @id of the entity the page is about (defaults to the organization). */
  aboutId?: string;
  /**
   * Breadcrumb trail after "Home", the last item being this page. A string is shorthand for a single item (this
   * page). Leave out for the home page.
   */
  breadcrumb?: string | { name: string; path: string }[];
  /** Adds a Service node (the page describes this service). `name` defaults to the page's breadcrumb label. */
  service?: { serviceType: string; name?: string };
  faqs?: Faq[];
  extra?: Node[];
}) {
  const url = pageUrl(opts.path);
  const trail = typeof opts.breadcrumb === "string" ? [{ name: opts.breadcrumb, path: opts.path }] : opts.breadcrumb;
  const label = trail ? trail[trail.length - 1].name : opts.name;

  return graph(
    webPageSchema({
      url,
      name: opts.name,
      description: opts.description,
      imageUrl: opts.imageUrl,
      type: opts.type,
      aboutId: opts.aboutId,
      hasBreadcrumb: !!trail,
    }),
    ...(trail
      ? [
          breadcrumbSchema([
            { name: "Home", url: pageUrl("/") },
            ...trail.map((c) => ({ name: c.name, url: pageUrl(c.path) })),
          ]),
        ]
      : []),
    ...(opts.service
      ? [
          serviceSchema({
            path: opts.path,
            name: opts.service.name ?? label,
            serviceType: opts.service.serviceType,
            description: opts.description,
          }),
        ]
      : []),
    ...(opts.faqs ? [faqPageSchema(opts.faqs, url)] : []),
    ...(opts.extra ?? []),
  );
}

export function graph(...nodes: Node[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
