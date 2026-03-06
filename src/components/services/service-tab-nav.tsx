import { iconMap } from "@/lib/icon-map";
import type { ServiceDetail } from "@/content/types";

interface ServiceTabNavProps {
  services: ServiceDetail[];
  activeId: string;
  onTabChange: (id: string) => void;
}

export function ServiceTabNav({ services, activeId, onTabChange }: ServiceTabNavProps) {
  return (
    <div className="sticky top-0 z-20 pt-1 pb-3">
      <div
        role="tablist"
        aria-label="Service categories"
        className="rounded-[var(--radius-container)] bg-teal-50 px-2.5 py-2.5 sm:px-3 sm:py-3"
      >
        <div className="flex flex-wrap gap-1.5">
          {services.map((service) => {
            const TabIcon = iconMap[service.icon];
            const isActive = service.id === activeId;
            return (
              <button
                key={service.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${service.id}`}
                onClick={() => onTabChange(service.id)}
                className={`flex items-center gap-2 rounded-[var(--radius-button)] px-4 py-2.5 text-body-md whitespace-nowrap transition-all duration-[var(--duration-normal)] ease-[var(--ease-default)] ${
                  isActive
                    ? "bg-white text-teal-500 shadow-card font-medium"
                    : "bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/50"
                }`}
              >
                {TabIcon && (
                  <TabIcon
                    className={`size-[18px] shrink-0 ${isActive ? "text-teal-500" : ""}`}
                    aria-hidden="true"
                  />
                )}
                {service.title}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
