import type { Metadata } from "next";
import type { ReactNode } from "react";

// private area: never listed by search engines
export const metadata: Metadata = {
  title: "Lead Dashboard",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-[#eef3ef] font-sans text-ink">{children}</div>;
}
