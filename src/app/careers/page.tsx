import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { graph, webPageSchema } from "@/lib/schema";
import { PageHero } from "@/components/sections/page-hero";
import { JobAccordion } from "@/components/ui/job-accordion";
import { JobApplicationForm } from "@/components/forms/job-application-form";

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
  const schema = graph(
    webPageSchema({ url: `${siteConfig.url}/careers/`, name: "Careers - Open Arms Foster Care", description }),
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <PageHero
        eyebrow="Careers"
        title="We're Hiring!"
        intro={description}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="font-display text-2xl font-medium text-pine sm:text-3xl">Current Open Positions</h2>
        <div className="mt-8 max-w-2xl">
          <JobAccordion jobs={jobs} />
        </div>
      </section>

      <section id="applynow" className="mx-auto max-w-[1400px] px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="rounded-[2rem_2rem_4rem_2rem] border border-pine/10 bg-mint/60 p-8 sm:p-12">
          <h2 className="font-display text-2xl font-medium text-pine">Apply</h2>
          <p className="mt-2 max-w-md text-sm text-slate">Fill out some info and we will be reaching out shortly!</p>
          <div className="mt-8">
            <JobApplicationForm />
          </div>
        </div>
      </section>
    </>
  );
}
