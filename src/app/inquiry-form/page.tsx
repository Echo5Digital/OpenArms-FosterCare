import type { Metadata } from "next";
import { pageSchema } from "@/lib/schema";
import { RecruitmentInquiryForm } from "@/components/forms/recruitment-inquiry-form";

const description = "Open Arms recruitment inquiry form for prospective foster homes.";

export const metadata: Metadata = {
  title: "Recruitment Inquiry Form",
  description,
  robots: { index: false, follow: false },
  alternates: { canonical: "/inquiry-form" },
};

export default function InquiryFormPage() {
  const schema = pageSchema({
    path: "/inquiry-form",
    name: "Recruitment Inquiry Form - Open Arms Foster Care",
    description,
    breadcrumb: "Recruitment Inquiry Form",
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-white px-3 pb-6 pt-3 sm:px-5 sm:pb-8 sm:pt-4">
        <div className="mx-auto max-w-[1830px] rounded-[1.9rem] bg-[#ebf0ee] px-5 pb-8 pt-6 sm:px-10">
          <div className="mx-auto max-w-[1260px]">
            <h1 className="font-sans text-[2.2rem] font-medium leading-[1.1] tracking-tight text-pine-deep sm:text-[3.25rem]">
              Open Arms Recruitment Inquiry Form
            </h1>
            <p className="mt-1 font-sans text-base text-pine-deep">Fill out some info and we will be reaching out shortly!</p>
            <div className="mt-8">
              <RecruitmentInquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
