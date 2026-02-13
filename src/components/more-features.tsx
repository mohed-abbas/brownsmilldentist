import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MoreFeatures() {
  return (
    <section aria-label="More Features">
      {/* === TOP ZONE === */}
      <div className="flex flex-col gap-8 xl:flex-row xl:justify-between xl:gap-0">
        {/* Left column — headline + sub-row */}
        <div className="flex flex-col xl:w-[44.1%] xl:shrink-0">
          <h2 className="text-heading-xl text-teal-500">
            More Intelligence and Tools to Analyze Providers Effectively
          </h2>

          {/* Sub-row: small image + text/CTA */}
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:gap-[74px] xl:mt-[82px]">
            <div className="relative aspect-[341/254] w-full shrink-0 overflow-hidden rounded-[var(--radius-container)] sm:w-[49%] xl:w-[341px]">
              <Image
                src="/assets/images/more-features-1.jpg"
                alt="Patient smiling during dental visit"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 49vw, 341px"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-body-lg text-text-secondary max-w-[277px]">
                Our app and Concierge team make it easy to find the best
                providers that are in-network, available and near you
              </p>
              <div className="mt-8 xl:mt-[42px]">
                <Button
                  variant="outline-teal"
                  size="brand-default"
                  asChild
                  className="font-semibold"
                >
                  <Link href="#how-it-works">
                    See how it works
                    <ArrowRight className="!size-6" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right column — large image */}
        <div className="relative aspect-[617/528] w-full overflow-hidden rounded-[var(--radius-container)] xl:w-[44.4%] xl:shrink-0">
          <Image
            src="/assets/images/more-features-2.jpg"
            alt="Dentist providing care to patient"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 44vw"
          />
        </div>
      </div>

      {/* === BOTTOM ZONE === */}
      <div className="mt-8 flex flex-col gap-8 sm:mt-10 sm:flex-row sm:items-end sm:gap-[37px] xl:mt-[32px]">
        {/* Left image */}
        <div className="relative aspect-[416/428] w-full overflow-hidden rounded-[var(--radius-container)] sm:w-1/3 xl:w-[416px] xl:shrink-0">
          <Image
            src="/assets/images/more-features-4.jpg"
            alt="Dental mirror close-up"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 416px"
          />
        </div>

        {/* Center image */}
        <div className="relative aspect-[416/428] w-full overflow-hidden rounded-[var(--radius-container)] sm:w-1/3 xl:w-[416px] xl:shrink-0">
          <Image
            src="/assets/images/more-features-3.jpg"
            alt="Modern dental equipment"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 416px"
          />
        </div>

        {/* Text block */}
        <div className="flex flex-col gap-[33px] sm:w-1/3 xl:w-[484px] xl:shrink-0">
          <h2 className="text-heading-xl text-teal-500">
            Simplified Solutions for Finding Your Doctor
          </h2>
          <p className="text-body-lg text-text-secondary">
            Our app and Concierge team make it easy to find the best providers
            that are in-network, available and near you
          </p>
        </div>
      </div>
    </section>
  );
}
