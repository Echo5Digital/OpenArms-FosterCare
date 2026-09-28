import type { Metadata } from "next";
import { RecruitmentInquiryForm } from "@/components/forms/recruitment-inquiry-form";

export const metadata: Metadata = {
  title: "Recruitment Inquiry Form",
  description: "Open Arms recruitment inquiry form for prospective foster homes.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/inquiry-form" },
};

export default function InquiryFormPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-leaf-deep">
        Recruitment
      </span>
      <h1 className="mt-4 font-display text-3xl font-medium leading-tight text-pine sm:text-4xl">
        Open Arms Recruitment Inquiry Form
      </h1>
      <div className="mt-10 rounded-[2rem_2rem_4rem_2rem] border border-pine/10 bg-white p-8 sm:p-10">
        <RecruitmentInquiryForm />
      </div>
    </section>
  );
}
