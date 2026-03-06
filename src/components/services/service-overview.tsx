import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import type { ServiceDetail } from "@/content/types";

interface ServiceOverviewProps {
  service: ServiceDetail;
}

export function ServiceOverview({ service }: ServiceOverviewProps) {
  return (
    <div className="mt-12 md:mt-16 xl:mt-20 flex flex-col gap-8 xl:flex-row xl:gap-10">
      <ScrollReveal animation="fade-up" className="flex-1">
        <h3 className="text-heading-md text-text-primary">
          {service.overview.heading}
        </h3>
        <p className="mt-5 text-body-lg text-text-secondary leading-[1.6]">
          {service.overview.body}
        </p>
      </ScrollReveal>

      {service.concerns.length > 0 && (
        <ScrollReveal animation="slide-right" delay={200} className="w-full xl:w-[380px] xl:shrink-0">
          <div className="rounded-[var(--radius-card)] bg-white p-6 shadow-card sm:p-8">
            <h4 className="text-heading-sm text-text-primary mb-5">
              Common Concerns
            </h4>
            <ul className="flex flex-col gap-3.5">
              {service.concerns.map((concern, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-body-md text-text-secondary"
                >
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-500/10">
                    <Check
                      className="size-3 text-teal-500"
                      aria-hidden="true"
                    />
                  </span>
                  {concern}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}
