import { TestimonialCard } from "@/components/testimonial-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { testimonials as testimonialsContent } from "@/content";

export function Testimonials() {
  return (
    <section
      aria-label="Testimonials"
      className="relative overflow-hidden rounded-[var(--radius-container)] gradient-hero px-6 py-14 sm:px-10 sm:py-16 xl:px-16 xl:py-20"
    >
      {/* Atmospheric radial glow behind header */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-teal-400/[0.08] blur-[140px]"
      />

      {/* Large decorative background quote mark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-8 select-none font-medium leading-none text-white/[0.025] sm:-right-4 sm:-top-4"
        style={{ fontSize: "28rem" }}
      >
        &ldquo;
      </div>

      {/* Header */}
      <ScrollReveal animation="fade-up" className="relative mx-auto max-w-[600px] text-center">
        <p className="text-body-sm font-medium tracking-[0.2em] uppercase text-teal-300">
          {testimonialsContent.eyebrow}
        </p>
        <h2 className="mt-4 text-display-section text-text-on-dark">
          {testimonialsContent.headline}
        </h2>
        <p className="mt-5 text-body-lg text-text-on-dark-muted">
          {testimonialsContent.description}
        </p>
      </ScrollReveal>

      {/* Staggered Cards Grid */}
      <div className="relative mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:mt-16 xl:grid-cols-3 xl:gap-6">
        {testimonialsContent.testimonials.map((testimonial, i) => (
          <ScrollReveal
            key={i}
            animation="fade-up"
            delay={i * 120}
            className={i === 1 ? "xl:-translate-y-4" : ""}
          >
            <TestimonialCard {...testimonial} featured={i === 0} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
