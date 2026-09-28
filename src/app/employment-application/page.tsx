import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { graph, webPageSchema } from "@/lib/schema";
import { EmploymentApplicationForm } from "@/components/forms/employment-application-form";

const description =
  "Open Arms Foster Care employment application. We're excited you're interested in joining our team — this application helps us understand your background, experience, and passion for supporting children and families.";

export const metadata: Metadata = {
  title: "Employment Application",
  description,
  alternates: { canonical: "/employment-application" },
  openGraph: { title: "Employment Application - Open Arms Foster Care", description, url: "/employment-application" },
};

export default function EmploymentApplicationPage() {
  const schema = graph(
    webPageSchema({
      url: `${siteConfig.url}/employment-application/`,
      name: "Employment Application - Open Arms Foster Care",
      description,
    }),
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative overflow-hidden bg-pine py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-leaf/15 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-leaf">Careers</span>
          <h1 className="mt-4 font-display text-[2.4rem] font-medium leading-[1.1] tracking-tight text-cream sm:text-[3rem]">
            Open Arms Foster Care Employment Application
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/75">
            We&apos;re excited you&apos;re interested in joining our team at Open Arms Foster Care. This application helps us
            understand your background, experience, and passion for supporting children and families. Please
            complete all sections thoroughly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl rounded-[2rem_2rem_4rem_2rem] border border-pine/10 bg-white p-8 sm:p-12">
          <EmploymentApplicationForm />
        </div>
      </section>
    </>
  );
}
