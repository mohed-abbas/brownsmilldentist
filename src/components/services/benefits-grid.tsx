import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

interface BenefitsGridProps {
  benefits: string[];
}

export function BenefitsGrid({ benefits }: BenefitsGridProps) {
  return (
    <div className="mt-12 md:mt-16 xl:mt-20">
      <ScrollReveal animation="fade-up">
        <h3 className="text-heading-md text-text-primary">Benefits</h3>
      </ScrollReveal>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {benefits.map((benefit, i) => (
          <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
            <div className="flex items-start gap-4 rounded-[var(--radius-card)] bg-white p-5 shadow-card transition-all duration-[var(--duration-normal)] ease-[var(--ease-default)] hover:shadow-card-hover hover:-translate-y-0.5 sm:p-6">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-teal-500/10">
                <Check
                  className="size-4 text-teal-500"
                  aria-hidden="true"
                />
              </span>
              <p className="text-body-md text-text-primary font-medium pt-1.5">
                {benefit}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
