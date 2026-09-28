"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function LogoLink() {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-2.5"
      onClick={(e) => {
        if (pathname === "/") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
    >
      <Image
        src="/images/logo.png"
        alt="Open Arms Foster Care"
        width={168}
        height={56}
        priority
        className="h-11 w-auto sm:h-12"
      />
    </Link>
  );
}
