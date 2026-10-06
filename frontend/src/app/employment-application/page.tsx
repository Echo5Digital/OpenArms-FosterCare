import type { Metadata } from "next";
import { pageSchema } from "@/lib/schema";
import { JotformEmbed } from "@/components/ui/jotform-embed";

const description =
  "Open Arms Foster Care employment application. We're excited you're interested in joining our team — this application helps us understand your background, experience, and passion for supporting children and families.";

export const metadata: Metadata = {
  title: "Employment Application",
  description,
  alternates: { canonical: "/employment-application" },
  openGraph: { title: "Employment Application - Open Arms Foster Care", description, url: "/employment-application" },
};

export default function EmploymentApplicationPage() {
  const schema = pageSchema({
    path: "/employment-application",
    name: "Employment Application - Open Arms Foster Care",
    description,
    breadcrumb: "Employment Application",
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-mint">
        <div className="mx-auto max-w-[61.25rem] px-5 py-12 sm:px-8 sm:py-16">
          <h1 className="font-sans text-[2rem] font-bold leading-tight tracking-tight text-pine sm:text-[2.6rem]">
            Open Arms Foster Care
            <br />
            Employment Application
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink/80">
            We’re excited you’re interested in joining our team at Open Arms Foster Care. This application helps us
            understand your background, experience, and passion for supporting children and families. Please complete
            all sections thoroughly.
          </p>

          <div className="mt-8">
            <JotformEmbed
              src="https://form.jotform.com/251983806691166"
              title="Open Arms Foster Care Employment Application"
            />
          </div>
        </div>
      </section>
    </>
  );
}
