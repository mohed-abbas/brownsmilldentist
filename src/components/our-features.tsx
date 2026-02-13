import Link from "next/link";
import { AudioLines, Grid2x2, Activity, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/feature-card";

const features = [
  {
    icon: AudioLines,
    title: "Online Consultation with Experts:",
    description: "Get immediate access to a trusted network.",
  },
  {
    icon: Grid2x2,
    title: "Online Consultation with Experts:",
    description: "Get immediate access to a trusted network.",
  },
  {
    icon: Activity,
    title: "Online Consultation with Experts:",
    description: "Get immediate access to a trusted network.",
  },
  {
    icon: Command,
    title: "Online Consultation with Experts:",
    description: "Get immediate access to a trusted network.",
  },
];

export function OurFeatures() {
  return (
    <section aria-label="Our Features" className="flex flex-col gap-10 md:gap-14 xl:flex-row xl:items-center xl:justify-between xl:gap-0">
      {/* Left Column — Text + CTA */}
      <div className="flex w-full flex-col xl:w-[614px] xl:shrink-0">
        <div className="flex flex-col gap-[18px]">
          <p className="text-heading-sm text-text-primary">Our Feature</p>
          <h2 className="text-display-section text-text-primary">
            Transforming Health from Routine to Exploration
          </h2>
        </div>

        <p className="text-body-lg text-text-secondary mt-8 xl:mt-[55px]">
          With our superior features, you can live your health journey
          stress-free and with passion
        </p>

        <div className="mt-8 xl:mt-[55px]">
          <Button
            variant="teal"
            size="brand-default"
            asChild
            className="font-semibold"
          >
            <Link href="#features">Explore More</Link>
          </Button>
        </div>
      </div>

      {/* Right Column — 2×2 Card Grid */}
      <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-[21px] xl:w-[700px] xl:shrink-0">
        {features.map((feature, i) => (
          <FeatureCard
            key={i}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
