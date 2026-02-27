import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { moreFeatures } from "@/content";

export function MoreFeatures() {
  return (
    <section id="about" aria-label="More Features">
      {/* === TOP ZONE === */}
      <div className="flex flex-col gap-8 xl:flex-row xl:justify-between xl:gap-0">
        {/* Left column — headline + sub-row */}
        <div className="flex flex-col xl:w-[44.1%] xl:shrink-0">
          <ScrollReveal animation="fade-up">
            <h2 className="text-heading-xl text-teal-500">
              {moreFeatures.top.headline}
            </h2>
          </ScrollReveal>

          {/* Sub-row: small image + text/CTA */}
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:gap-[74px] xl:mt-[82px]">
            <ScrollReveal animation="scale-in" delay={150} className="relative aspect-[341/254] w-full shrink-0 overflow-hidden rounded-[var(--radius-container)] sm:w-[49%] xl:w-[341px]">
              <Image
                src={moreFeatures.top.images.small.src}
                alt={moreFeatures.top.images.small.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 49vw, 341px"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={300} className="flex flex-col justify-center">
              <p className="text-body-lg text-text-secondary">
                {moreFeatures.top.description}
              </p>
              <div className="mt-8 xl:mt-[42px]">
                <Button
                  variant="outline-teal"
                  size="brand-default"
                  asChild
                  className="font-semibold"
                >
                  <Link href={moreFeatures.top.cta.href}>
                    {moreFeatures.top.cta.label}
                    <ArrowRight className="!size-6" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Right column — large image */}
        <ScrollReveal animation="scale-in" delay={200} className="relative aspect-[617/528] w-full overflow-hidden rounded-[var(--radius-container)] xl:w-[44.4%] xl:shrink-0">
          <Image
            src={moreFeatures.top.images.large.src}
            alt={moreFeatures.top.images.large.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 44vw"
          />
        </ScrollReveal>
      </div>

      {/* === BOTTOM ZONE === */}
      <div className="mt-8 flex flex-col gap-8 sm:mt-10 sm:flex-row sm:items-end sm:gap-[37px] xl:mt-[32px]">
        {/* Left image */}
        <ScrollReveal animation="scale-in" className="relative aspect-[416/428] w-full overflow-hidden rounded-[var(--radius-container)] sm:w-1/3 xl:w-[416px] xl:shrink-0">
          <Image
            src={moreFeatures.bottom.images.left.src}
            alt={moreFeatures.bottom.images.left.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 416px"
          />
        </ScrollReveal>

        {/* Center image */}
        <ScrollReveal animation="scale-in" delay={200} className="relative aspect-[416/428] w-full overflow-hidden rounded-[var(--radius-container)] sm:w-1/3 xl:w-[416px] xl:shrink-0">
          <Image
            src={moreFeatures.bottom.images.center.src}
            alt={moreFeatures.bottom.images.center.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 416px"
          />
        </ScrollReveal>

        {/* Text block */}
        <ScrollReveal animation="fade-up" delay={350} className="flex flex-col gap-[33px] sm:w-1/3 xl:w-[484px] xl:shrink-0">
          <h2 className="text-heading-xl text-teal-500">
            {moreFeatures.bottom.headline}
          </h2>
          <p className="text-body-lg text-text-secondary">
            {moreFeatures.bottom.description}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
