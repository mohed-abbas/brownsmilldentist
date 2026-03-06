import { iconMap } from "@/lib/icon-map";
import { ScrollReveal } from "@/components/scroll-reveal";
import type { ServiceDetail } from "@/content/types";

interface ServiceIntroProps {
  service: ServiceDetail;
}

export function ServiceIntro({ service }: ServiceIntroProps) {
  const Icon = iconMap[service.icon];

  return (
    <ScrollReveal animation="fade-up" duration={750}>
      <div className="rounded-[var(--radius-container)] bg-teal-50 px-6 py-10 sm:px-10 sm:py-12 xl:px-14 xl:py-14">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:gap-10">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-[var(--radius-button)] bg-teal-500 xl:size-20">
            {Icon && (
              <Icon
                className="size-7 text-white xl:size-9"
                aria-hidden="true"
              />
            )}
          </div>
          <div className="flex flex-col gap-4 xl:gap-5">
            <h2 className="text-heading-xl text-text-primary">
              {service.headline}
            </h2>
            {service.intro.map((p, i) => (
              <p key={i} className="text-body-lg text-text-secondary max-w-[680px]">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
