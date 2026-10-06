import Image from "next/image";
import { HoverPrefetchLink as Link } from "@/components/ui/hover-prefetch-link";
import type { NavItem, NavLink } from "@/lib/site-config";

type Menu = NonNullable<NavItem["menu"]>;

/** Cut-out photos (transparent PNGs) that stand beside the links; the optimizer serves a small copy. */
const photos: Record<Menu, { src: string; alt: string; desktop: string; phone: string }> = {
  services: {
    src: "/xn (1).png",
    alt: "A smiling mother hugging her young daughter",
    desktop: "w-[12rem] -right-11",
    phone: "w-[7.5rem] -right-1",
  },
  locations: {
    src: "/mother-child-being-happy-100kb (1) (1).png",
    alt: "A mother and her young son laughing together",
    desktop: "w-[15.5rem] -right-14",
    phone: "w-[9.5rem] -right-3",
  },
};

function Arrow({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M4 12h15m0 0-6-6m6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Dark card with underlined links and a cut-out photo.
 * - desktop: sits under the header link; `open` drives the staggered entrance and the photo spills over the right edge
 * - phone: sits inside the opened accordion of the phone menu, photo kept inside the card
 */
export function NavMenuCard({
  menu,
  title,
  items,
  onNavigate,
  variant = "desktop",
  open = true,
  tabbable = true,
}: {
  menu: Menu;
  title?: string;
  items: NavLink[];
  onNavigate: () => void;
  variant?: "desktop" | "phone";
  open?: boolean;
  tabbable?: boolean;
}) {
  const phone = variant === "phone";
  const photo = photos[menu];

  return (
    <div className={`relative ${phone ? "overflow-hidden rounded-2xl" : "w-[27rem]"}`}>
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-pine-deep via-pine-deep to-pine ${
          phone ? "min-h-[10.5rem] p-5 pr-[7.25rem]" : "min-h-[15.5rem] rounded-[1.4rem] p-8 shadow-[0_32px_70px_-24px_rgba(15,33,27,0.7)]"
        }`}
      >
        <div className="pointer-events-none absolute -bottom-16 -left-12 h-44 w-44 rounded-full bg-leaf/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-8 -top-20 h-44 w-44 rounded-full border-[16px] border-white/[0.05]" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.1]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1.4px)", backgroundSize: "22px 22px" }}
        />

        {title && (
          <h3 className="relative font-sans text-[1.7rem] font-bold leading-none tracking-tight text-white">{title}</h3>
        )}

        <ul className={`relative flex flex-col items-start ${title ? "mt-7 gap-4" : "gap-3.5"}`}>
          {items.map((item, i) => (
            <li
              key={item.href}
              style={phone ? undefined : { transitionDelay: open ? `${90 + i * 60}ms` : "0ms" }}
              className={
                phone
                  ? undefined
                  : `transition-all duration-300 motion-reduce:transition-none ${
                      open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
                    }`
              }
            >
              <Link
                href={item.href}
                onClick={onNavigate}
                tabIndex={tabbable ? undefined : -1}
                className={`group/link inline-flex items-center gap-3 border-b border-white/85 pb-1.5 font-sans font-bold leading-tight text-white transition-colors duration-300 hover:border-leaf hover:text-leaf focus-visible:border-leaf focus-visible:text-leaf focus-visible:outline-none ${
                  phone ? "text-[0.95rem]" : "text-[1.05rem]"
                }`}
              >
                {item.label}
                <Arrow className="h-[1.1rem] w-[1.1rem] shrink-0 transition-transform duration-300 group-hover/link:translate-x-1.5 group-focus-visible/link:translate-x-1.5" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* the photo stands on the card's bottom edge and spills over its right side */}
      <div
        aria-hidden
        style={phone ? undefined : { transitionDelay: open ? "130ms" : "0ms" }}
        className={`pointer-events-none absolute bottom-0 top-0 ${phone ? photo.phone : photo.desktop} ${
          phone
            ? ""
            : `transition-all duration-500 ease-out motion-reduce:transition-none ${
                open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
              }`
        }`}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={phone ? "160px" : "260px"}
          className="object-contain object-bottom drop-shadow-[0_14px_20px_rgba(0,0,0,0.35)]"
        />
      </div>
    </div>
  );
}
