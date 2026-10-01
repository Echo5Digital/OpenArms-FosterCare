export const siteConfig = {
  name: "Open Arms Foster Care",
  legalName: "Open Arms Foster Care",
  shortName: "Open Arms",
  url: "https://www.openarmsfostercare.com",
  tagline: "Your Trusted Partner in Foster Care Across Oklahoma",
  description:
    "Open Arms is a foster care agency in Oklahoma City, also serving Tulsa and Lawton. Become a foster parent with training, ongoing support, and therapeutic foster care. Call (405) 894-0320.",
  phone: "(405) 894-0320",
  phoneHref: "tel:+14058940320",
  email: "info@openarmsfostercare.com",
  emailHref: "mailto:info@openarmsfostercare.com",
  social: {
    facebook: "https://www.facebook.com/openarmsfostercare/",
    instagram: "https://www.instagram.com/openarmsfostercare/",
    youtube: "https://www.youtube.com/@openarmsfostercare",
  },
  logo: "/images/logo.png",
} as const;

export type Office = {
  id: "oklahoma-city" | "tulsa" | "lawton";
  city: string;
  slug: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: "OK";
  postalCode: string;
  geo: { lat: number; lng: number };
  placeId: string;
  mapEmbedSrc: string;
};

export const offices: Office[] = [
  {
    id: "oklahoma-city",
    city: "Oklahoma City",
    slug: "oklahoma-city",
    streetAddress: "1101 Sovereign Row, Suite A",
    addressLocality: "Oklahoma City",
    addressRegion: "OK",
    postalCode: "73108",
    geo: { lat: 35.4553363422356, lng: -97.60168308840393 },
    placeId: "0x87b21b41ebb1afc9:0xfd532a9b7829c708",
    mapEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.9781105343677!2d-97.60168308840393!3d35.4553363422356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b21b41ebb1afc9%3A0xfd532a9b7829c708!2sOpen%20Arms%20Foster%20Care!5e0!3m2!1sen!2sae!4v1754030938539!5m2!1sen!2sae",
  },
  {
    id: "tulsa",
    city: "Tulsa",
    slug: "tulsa",
    streetAddress: "5401 S. Sheridan, Suite 104",
    addressLocality: "Tulsa",
    addressRegion: "OK",
    postalCode: "74145",
    geo: { lat: 36.118072553172716, lng: -96.0231340577244 },
    placeId: "0x87b693f2f220c491:0x7d470b0330bec1bb",
    mapEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51567.858927268484!2d-96.0231340577244!3d36.118072553172716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b693f2f220c491%3A0x7d470b0330bec1bb!2sOpen%20Arms%20Foster%20Care!5e0!3m2!1sen!2sae!4v1754030504284!5m2!1sen!2sae",
  },
  {
    id: "lawton",
    city: "Lawton",
    slug: "lawton",
    streetAddress: "309 SW 11th St, Suite 102",
    addressLocality: "Lawton",
    addressRegion: "OK",
    postalCode: "73501",
    geo: { lat: 34.604793988239464, lng: -98.40789668843439 },
    placeId: "0x87ad1f80f8ba4c75:0x88a5ecf5ee1b9ce7",
    mapEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9749876342503!2d-98.40789668843439!3d34.604793988239464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ad1f80f8ba4c75%3A0x88a5ecf5ee1b9ce7!2sOpen%20Arms%20Foster%20Care!5e0!3m2!1sen!2sae!4v1754030968948!5m2!1sen!2sae",
  },
];

export type NavLink = { label: string; href: string };

export type NavItem = NavLink & {
  children?: NavLink[];
  /** Picks the photo shown with the links in the header dropdown. */
  menu?: "services" | "locations";
};

export const mainNav: NavItem[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Therapeutic Foster Care", href: "/therapeutic-foster-care-agency" },
  {
    label: "Services",
    href: "/foster-parent-training",
    menu: "services",
    children: [
      { label: "Foster Parent Training", href: "/foster-parent-training" },
      { label: "Post-Placement Therapy", href: "/post-placement-therapy" },
      { label: "Support for School Staff", href: "/support-for-school-staff" },
    ],
  },
  { label: "Referrals", href: "/referrals" },
  {
    label: "Locations",
    href: "/oklahoma-city",
    menu: "locations",
    children: [
      { label: "Oklahoma City", href: "/oklahoma-city" },
      { label: "Tulsa", href: "/tulsa" },
      { label: "Lawton", href: "/lawton" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];

export const footerServiceLinks: NavLink[] = [
  { label: "Foster Parent Training", href: "/foster-parent-training" },
  { label: "Child Welfare Advocacy", href: "/child-welfare-advocacy" },
  { label: "Post-Placement Therapy", href: "/post-placement-therapy" },
  { label: "Support for School Staff", href: "/support-for-school-staff" },
];

export const footerOfficeLinks: NavLink[] = [
  { label: "Oklahoma City, Oklahoma", href: "/oklahoma-city" },
  { label: "Lawton, Oklahoma", href: "/lawton" },
  { label: "Tulsa, Oklahoma", href: "/tulsa" },
];
