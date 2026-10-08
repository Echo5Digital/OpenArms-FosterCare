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
    title: "Therapeutic Foster Care",
    href: "/therapeutic-foster-care-agency",
    image: "/rfjs.jpeg",
    alt: "A man with glasses resting a comforting arm on the shoulder of a boy who looks down, seated together in an office",
    position: "object-[center_12%]",
  },
  {
    title: "Post-Placement Therapy",
    href: "/post-placement-therapy",
    image: "/istockphoto-2187351214-612x612.jpg",
    alt: "A father, mother and their smiling son sitting together on a sofa while a counselor takes notes",
    position: "object-[center_25%]",
  },
  {
    title: "Support for School Staff",
    href: "/support-for-school-staff",
    image: "/girl-holding-black-plane-table-90kb.jpg",
    alt: "A teacher leaning over a classroom desk to help a girl holding a clipboard, with a younger girl beside them",
    position: "object-[center_30%]",
  },
];

export function Services() {
  return (
    <section className="relative bg-mint py-14 sm:py-16">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Programmes"
          title="Foster Care Services Tailored to Your Needs"
          align="center"
          className="mx-auto lg:max-w-4xl"
          titleClassName="font-sans text-[2rem] font-bold leading-tight tracking-tight text-pine sm:text-[2.4rem]"
        />
        <p className="mx-auto mt-4 max-w-xl text-center text-[1.05rem] leading-relaxed text-slate">
          Open Arms Foster Care is proud to offer a range of services designed to support both children and foster
          parents.
        </p>

        <div className="mt-9 grid gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
          {services.map((service, i) => (
            <Link
              key={service.href}
              href={service.href}
              // the fourth card drops to a second row and sits centred, under the second card
              className={`group relative flex h-40 items-end overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1 sm:h-48 lg:h-52 ${
                i === 3 ? "sm:col-start-2" : ""
              }`}
            >
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className={`object-cover transition-transform duration-500 group-hover:scale-105 ${service.position ?? ""}`}
              />
              <div className="absolute inset-0 bg-linear-to-t from-pine-deep/85 via-pine-deep/30 to-pine-deep/10" />
              <h3 className="relative z-10 p-4 font-sans text-base font-bold leading-snug text-cream sm:p-5 sm:text-lg lg:p-6 lg:text-xl">
                {service.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
