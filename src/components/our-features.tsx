import Link from "next/link";
import { Sparkles, HeartPulse, Crown, ShieldCheck, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/feature-card";
import { features as featuresContent } from "@/content";

const iconMap: Record<string, LucideIcon> = { Sparkles, HeartPulse, Crown, ShieldCheck };

export function OurFeatures() {
  return (
    <section aria-label="Our Features" className="flex flex-col gap-10 md:gap-14 xl:flex-row xl:items-center xl:justify-between xl:gap-0">
      {/* Left Column — Text + CTA */}
      <div className="flex w-full flex-col xl:w-[614px] xl:shrink-0">
        <div className="flex flex-col gap-[18px]">
          <p className="text-heading-sm text-text-primary">{featuresContent.label}</p>
          <h2 className="text-display-section text-text-primary">
            {featuresContent.headline}
          </h2>
        </div>

        <p className="text-body-lg text-text-secondary mt-8 xl:mt-[55px]">
          {featuresContent.description}
        </p>

        <div className="mt-8 xl:mt-[55px]">
          <Button
            variant="teal"
            size="brand-default"
            asChild
            className="font-semibold"
          >
            <Link href={featuresContent.cta.href}>{featuresContent.cta.label}</Link>
          </Button>
        </div>
      </div>

      {/* Right Column — 2×2 Card Grid */}
      <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-[21px] xl:w-[700px] xl:shrink-0">
        {featuresContent.cards.map((card, i) => (
          <FeatureCard
            key={i}
            icon={iconMap[card.icon]}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}
