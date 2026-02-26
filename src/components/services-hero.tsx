import { servicesPage } from "@/content";

export function ServicesHero() {
  const { hero } = servicesPage;

  return (
    <section
      aria-label="Services Hero"
      className="relative overflow-hidden rounded-[var(--radius-container)] gradient-hero px-6 py-16 sm:px-10 sm:py-20 xl:px-16 xl:py-28"
    >
      {/* Atmospheric radial glow — top center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-teal-400/[0.06] blur-[160px]"
      />
      {/* Secondary glow — bottom right for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-teal-300/[0.05] blur-[120px]"
      />

      <div className="relative mx-auto max-w-[680px] text-center">
        <p className="text-body-sm font-semibold tracking-[0.25em] uppercase text-teal-300">
          {hero.eyebrow}
        </p>
        <h1 className="mt-5 text-display-section text-text-on-dark">
          {hero.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-[520px] text-body-lg text-text-on-dark-muted">
          {hero.description}
        </p>
      </div>
    </section>
  );
}
