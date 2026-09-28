export function Growth() {
  return (
    <section className="relative overflow-hidden bg-mint py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/3 rounded-full bg-leaf/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-leaf-deep">
          Growth Starts Here
        </span>
        <p className="mt-6 font-display text-3xl font-medium italic leading-tight text-pine sm:text-4xl">
          Plant. Water. Grow.
        </p>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate">
          At Open Arms Initiative, we plant seeds of hope, water them with truth and love, and trust the process to
          grow them in time — personalized support for foster parents and children to thrive emotionally,
          behaviorally, and socially.
        </p>

        <div className="mt-10 flex justify-center gap-3">
          {["🌱", "💧", "🌳"].map((sym) => (
            <span
              key={sym}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl shadow-sm"
            >
              {sym}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
