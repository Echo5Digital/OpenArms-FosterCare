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

/** Hidden trap for spam bots: people never see or fill it, so anything typed in is thrown away by the server. */
export function Honeypot() {
  return (
    <div aria-hidden className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
      <label>
        Leave this field empty
        <input type="text" name="company_fax" tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  );
}

/** Shown under a form when sending failed. */
export function FormError({ message, className = "" }: { message: string | null; className?: string }) {
  if (!message) return null;
  return (
    <p
      role="alert"
      className={`rounded-2xl bg-red-50 px-4 py-3 font-sans text-sm font-medium text-red-700 ring-1 ring-red-200 ${className}`}
    >
      {message}
    </p>
  );
}
