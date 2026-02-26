import type { Metadata } from "next";
import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { ServicesHero } from "@/components/services-hero";
import { ServicesTabs } from "@/components/services-tabs";
import { WhyChooseSection } from "@/components/why-choose-section";
import { Footer } from "@/components/footer";
import { servicesPage } from "@/content";

export const metadata: Metadata = {
  title: servicesPage.seo.title,
  description: servicesPage.seo.description,
};

export default function ServicesPage() {
  return (
    <>
      <main className="container-page pt-5 xl:pt-[42px]">
        <div className="flex flex-col gap-5 xl:gap-[41px]">
          <Navbar />
          <ServicesHero />
        </div>
        <div className="mt-10 md:mt-14 xl:mt-20">
          <Suspense>
            <ServicesTabs services={servicesPage.services} />
          </Suspense>
        </div>
        <div className="mt-[var(--section-gap-mobile)] md:mt-[var(--section-gap-tablet)] xl:mt-[var(--section-gap)]">
          <WhyChooseSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
