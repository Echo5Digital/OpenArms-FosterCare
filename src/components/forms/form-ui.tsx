/** Pill-shaped field styling shared by the Sign Up and Recruitment Inquiry forms. */

export const fieldClass =
  "w-full rounded-full border border-leaf bg-[#e2e8e5] px-[1.1rem] py-[1.2rem] font-sans text-sm text-ink outline-none transition-all placeholder:text-ink/45 focus:border-leaf-deep focus:bg-white focus:ring-4 focus:ring-leaf/25";

export const labelClass = "font-sans text-[0.95rem] font-bold leading-tight text-pine-deep";

export function Required() {
  return (
    <span aria-hidden className="ml-1 text-red-600">
      *
    </span>
  );
}
