"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

/** Wraps pages in the public site's header and footer, except on the private /admin dashboard. */
export function SiteChrome({ header, footer, children }: { header: ReactNode; footer: ReactNode; children: ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/admin" || pathname.startsWith("/admin/")) return <>{children}</>;

  return (
    <>
      {header}
      <main className="flex-1">{children}</main>
      {footer}
    </>
  );
}
