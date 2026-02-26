import Link from "next/link";
import { Button } from "@/components/ui/button";
import { servicesPage } from "@/content";

export function WhyChooseSection() {
  const { whyChoose, cta } = servicesPage;

  return (
    <section
      aria-label="Why Choose Us"
      className="relative overflow-hidden rounded-[var(--radius-container)] gradient-hero px-6 py-16 sm:px-10 sm:py-20 xl:px-16 xl:py-24"
    >
      {/* Atmospheric radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-teal-400/[0.08] blur-[140px]"
      />
      {/* Bottom-left glow for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-[300px] w-[300px] rounded-full bg-teal-300/[0.06] blur-[100px]"
      />

      <div className="relative mx-auto max-w-[600px] text-center">
        <h2 className="text-heading-xl text-text-on-dark">
          {whyChoose.headline}
        </h2>
        <p className="mt-5 text-body-lg text-text-on-dark-muted">
          {whyChoose.description}
        </p>

        <div className="mt-8">
          <Button
            variant="hero"
            size="brand-default"
            asChild
            className="font-semibold"
          >
            <Link href={cta.button.href}>{cta.button.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
