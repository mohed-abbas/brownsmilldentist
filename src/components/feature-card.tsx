import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <article className="flex w-full flex-col bg-white rounded-[var(--radius-card)] shadow-card transition-all duration-[var(--duration-normal)] ease-[var(--ease-default)] hover:shadow-card-hover hover:-translate-y-0.5 overflow-hidden p-5 sm:aspect-square sm:p-[21px]">
      {/* Icon */}
      <div className="flex size-[62px] shrink-0 items-center justify-center rounded-full bg-teal-500">
        <Icon className="size-6 text-white" aria-hidden="true" />
      </div>

      {/* Title */}
      <h3 className="text-heading-md text-text-primary mt-auto">
        {title}
      </h3>

      {/* Description */}
      <p className="text-body-lg text-text-secondary mt-[15px]">
        {description}
      </p>
    </article>
  );
}
