export function PlantWaterGrow() {
  return (
    <section className="relative flex flex-col justify-center bg-pine py-16 sm:min-h-screen sm:py-24">
      <div className="px-6 text-center sm:px-10 lg:px-16">
        <span className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-leaf">
          Growth Starts Here
        </span>
        <h2 className="mt-4 font-sans text-4xl font-bold leading-tight tracking-tight text-cream sm:text-6xl lg:text-7xl">
          Plant. Water. Grow.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/90 sm:text-lg">
          At Open Arms Initiative, we plant seeds of hope, water them with truth and love, and trust God to grow
          them in His time.
        </p>
      </div>

      <div className="mt-10 w-full px-6 sm:mt-12 sm:px-10 lg:px-16">
        <div className="relative mx-auto aspect-video w-full sm:w-3/4">
          <iframe
            src="https://www.youtube.com/embed/TAKbCOIbNF0"
            title="Open Arms Initiative - Transforming Lives Through Mental Health & Foster Care Support"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
