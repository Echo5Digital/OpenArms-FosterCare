"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HoverPrefetchLink as Link } from "@/components/ui/hover-prefetch-link";
import { SectionHeading } from "@/components/ui/section-heading";

const services: { title: string; href: string; image: string; alt: string; position?: string }[] = [
  {
    title: "Foster Parent Training",
    href: "/foster-parent-training",
    image: "/medium-shot-smiley-therapist-with-family-90kb.jpg",
    alt: "A smiling therapist holding a clipboard, with a father, mother and their young son sitting on a sofa behind her",
    position: "object-[center_25%]",
  },
  {
    title: "Post-Placement Therapy",
    href: "/post-placement-therapy",
    image: "/adorable-family-parents-with-son-100kb.jpg",
    alt: "A father, mother and their young son smiling as they lean on the back of a sofa",
    position: "object-[center_42%]",
  },
  {
    title: "Support for School Staff",
    href: "/support-for-school-staff",
    image: "/girl-holding-black-plane-table-90kb.jpg",
    alt: "A teacher leaning over a classroom desk to help a girl holding a clipboard, with a younger girl beside them",
    position: "object-[center_30%]",
  },
];

const ROTATE_MS = 2000;

export function Services() {
  const [page, setPage] = useState(0);
  const pageCount = services.length - 1;

  useEffect(() => {
    const id = setInterval(() => {
      setPage((p) => (p + 1) % pageCount);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [pageCount]);

  return (
    <section className="relative bg-mint py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Foster Care Services Tailored to Your Needs"
          align="center"
          className="mx-auto"
          titleClassName="font-sans text-[2.1rem] font-bold leading-tight tracking-tight text-pine sm:text-[2.6rem]"
        />
        <p className="mx-auto mt-5 max-w-xl text-center text-[1.05rem] leading-relaxed text-slate">
          Open Arms Foster Care is proud to offer a range of services designed to support both children and foster
          parents.
        </p>

        <div className="mt-14 overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(calc((-100% - 1.5rem) * ${page} / 2))` }}
          >
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative flex h-48 w-[calc(50%-0.75rem)] shrink-0 items-end overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1 sm:h-60"
              >
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="50vw"
                  className={`object-cover transition-transform duration-500 group-hover:scale-105 ${service.position ?? ""}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/85 via-pine-deep/30 to-pine-deep/10" />
                <h3 className="relative z-10 p-6 font-sans text-lg font-bold text-cream sm:text-xl">
                  {service.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === page ? "w-6 bg-pine" : "w-1.5 bg-pine/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
