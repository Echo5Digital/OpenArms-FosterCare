import type { ReactNode } from "react";

export function ProseBlock({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-slate [&_strong]:text-pine [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-pine [&_h3]:!mt-8 ${className}`}
    >
      {children}
    </div>
  );
}

export function StatCallout({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[0.5rem_1.75rem_0.5rem_1.75rem] bg-mint px-6 py-5">
      <p className="font-display text-3xl font-semibold text-pine">{value}</p>
      <p className="mt-1 text-sm leading-snug text-slate">{label}</p>
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[1.02rem] leading-relaxed text-slate">
          <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-leaf/25">
            <span className="h-1.5 w-1.5 rounded-full bg-leaf-deep" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
