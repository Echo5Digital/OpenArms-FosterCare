import type { Metadata } from "next";
import { pageSchema } from "@/lib/schema";
import { CareersHero } from "@/components/sections/careers/careers-hero";
import { CareersHiring } from "@/components/sections/careers/careers-hiring";
import { CareersApply } from "@/components/sections/careers/careers-apply";
import { CareersCta } from "@/components/sections/careers/careers-cta";
import { JobAccordion } from "@/components/ui/job-accordion";
import { Reveal } from "@/components/ui/reveal";

const description =
  "Interested in joining our team of talented individuals dedicated to making a positive impact in the lives of the families we serve? Check out our current open positions and apply.";

export const metadata: Metadata = {
  title: "Careers",
  description,
  alternates: { canonical: "/careers" },
  openGraph: { title: "Careers - Open Arms Foster Care", description, url: "/careers" },
};

const requirements = [
  "Must be a Licensed Professional Counselor or Licensed Professional Counselor Under Supervision.",
  "Must have a master's degree in counseling.",
];

const jobs = [
  {
    title: "Therapist — Oklahoma City, OK",
    body: "We are looking to add more therapists to our staff! If you or someone you know is looking for a therapist position in Oklahoma City, fill out the application below. We would love to hear from you!",
    requirements,
  },
  {
    title: "Therapist — Lawton, OK",
    body: "We are looking to add more therapists to our staff! If you or someone you know is looking for a therapist position in Lawton, fill out the application below. We would love to hear from you!",
    requirements,
  },
  {
    title: "Therapist — Tulsa, OK",
    body: "We are looking to add more therapists to our staff! If you or someone you know is looking for a therapist position in Tulsa, fill out the application below. We would love to hear from you!",
    requirements,
  },
  {
    title: "Other",
    body: "If you don't see a specific role here that best fits you but would still like to apply for future positions, select \"Other\" in the application form below — we would love to hear from you!",
    requirements: [],
  },
];

export default function CareersPage() {
  const schema = pageSchema({
    path: "/careers",
    name: "Careers - Open Arms Foster Care",
    description,
    breadcrumb: "Careers",
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <CareersHero />
      <CareersHiring />

      <section className="mx-auto max-w-[1300px] px-5 py-14 sm:px-8 sm:py-20">
        <Reveal>
          <span className="block h-[3px] w-20 rounded-full bg-gradient-to-r from-leaf-deep to-leaf" />
          <h2 className="mt-5 font-sans text-[2.1rem] font-bold leading-[1.1] tracking-tight text-pine sm:text-[2.8rem]">
            Current{" "}
            <span className="bg-gradient-to-r from-leaf-deep to-leaf bg-clip-text text-transparent">Open Positions</span>
          </h2>
        </Reveal>
        <Reveal delay={100} className="mt-8">
          <JobAccordion jobs={jobs} />
        </Reveal>
      </section>

      <CareersApply />
      <CareersCta />
    </>
  );
}
