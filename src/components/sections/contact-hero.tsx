import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

export function ContactHero() {
  return (
    <section className="px-3 pt-3 sm:px-5 sm:pt-4">
      {/* phones: text on green, then the whole photo underneath; sm and up: photo behind the text */}
      <div className="relative isolate mx-auto flex max-w-[1600px] flex-col overflow-hidden rounded-[2rem] bg-pine-deep sm:block sm:rounded-[2.5rem] sm:bg-transparent">
        <div className="absolute inset-0 -z-10 hidden bg-gradient-to-b from-pine-deep/65 via-pine/40 to-leaf/90 sm:block" />
        <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-pine-deep/60 via-pine-deep/25 to-transparent sm:block" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-pine via-pine-deep to-pine-deep sm:hidden" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.2]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1.4px)",
            backgroundSize: "28px 28px",
            maskImage: "linear-gradient(to bottom, black, transparent 85%)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />
        <div className="pointer-events-none absolute -right-20 -top-28 -z-10 h-80 w-80 rounded-full border-[28px] border-white/10" />
        <div className="pointer-events-none absolute -bottom-24 right-[18%] -z-10 h-64 w-64 rounded-full bg-leaf/40 blur-3xl" />

        <div className="relative order-1 mx-auto w-full max-w-[1400px] px-6 pb-6 pt-12 sm:px-10 sm:pb-20 sm:pt-16 lg:px-16 lg:pb-24 lg:pt-20">
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="inline-flex items-center gap-2 rounded-full bg-pine-deep px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15"
            >
              <Link href="/" className="transition-colors hover:text-leaf">
                Home
              </Link>
              <span aria-hidden className="text-leaf">
                &gt;
              </span>
              <span>Contact us</span>
            </nav>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 font-sans text-[2.8rem] font-extrabold leading-[1.02] tracking-tight text-white sm:text-[4.2rem] lg:text-[5rem]">
              Contact us
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 max-w-xl text-lg font-medium text-white/90 sm:text-xl">
              Get in Touch with Us for Any Questions or Support!
            </p>
          </Reveal>
        </div>

        <div className="relative order-2 aspect-[3/2] w-full [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_16%)] [mask-image:linear-gradient(to_bottom,transparent,black_16%)] sm:absolute sm:inset-0 sm:-z-20 sm:aspect-auto sm:[-webkit-mask-image:none] sm:[mask-image:none]">
          <Image
            src="/gygy.jpeg"
            alt="A smiling boy looking up at his mother on a park bench"
            fill
            priority
            sizes="(min-width: 640px) 100vw, 92vw"
            className="object-cover object-[25%_center] sm:object-[60%_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-leaf/45 to-transparent sm:hidden" />
        </div>
      </div>
    </section>
  );
}
