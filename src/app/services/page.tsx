import type { Metadata } from "next";
import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { ServicesHero } from "@/components/services-hero";
import { ServicesTabs } from "@/components/services-tabs";
import { WhyChooseSection } from "@/components/why-choose-section";
import { servicesPage } from "@/content";

export const metadata: Metadata = {
  title: servicesPage.seo.title,
  description: servicesPage.seo.description,
};

function ServicesTabsSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="rounded-[var(--radius-container)] bg-teal-50 px-2.5 py-2.5 sm:px-3 sm:py-3">
        <div className="flex flex-wrap gap-1.5">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="h-10 w-28 rounded-[var(--radius-button)] bg-teal-100" />
          ))}
        </div>
      </div>
      <div className="mt-14 space-y-6">
        <div className="h-48 rounded-[var(--radius-container)] bg-teal-50" />
        <div className="h-32 rounded-[var(--radius-card)] bg-gray-100" />
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <main id="main-content" className="container-page pt-5 xl:pt-[22px]">
        <div className="flex flex-col gap-5 xl:gap-[21px]">
          <Navbar />
          <ServicesHero />
        </div>
        <div className="mt-10 md:mt-14 xl:mt-20">
          <Suspense fallback={<ServicesTabsSkeleton />}>
            <ServicesTabs services={servicesPage.services} />
          </Suspense>
        </div>
        <div className="section-gap-top">
          <WhyChooseSection />
        </div>
      </main>
    </>
  );
}
