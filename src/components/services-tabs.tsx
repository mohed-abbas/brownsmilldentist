"use client";

import { useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ServiceTabNav } from "@/components/services/service-tab-nav";
import { ServiceIntro } from "@/components/services/service-intro";
import { ServiceOverview } from "@/components/services/service-overview";
import { TreatmentProcess } from "@/components/services/treatment-process";
import { BenefitsGrid } from "@/components/services/benefits-grid";
import { ServiceFAQ } from "@/components/services/service-faq";
import type { ServiceDetail } from "@/content/types";

interface ServicesTabsProps {
  services: ServiceDetail[];
}

export function ServicesTabs({ services }: ServicesTabsProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const paramService = searchParams.get("service");
  const activeId =
    services.find((s) => s.id === paramService)?.id ?? services[0].id;

  const handleTabChange = useCallback(
    (id: string) => {
      router.replace(`/services?service=${id}`, { scroll: false });
    },
    [router],
  );

  const active = services.find((s) => s.id === activeId) ?? services[0];

  return (
    <div id="service-detail" className="scroll-mt-8">
      <ServiceTabNav
        services={services}
        activeId={activeId}
        onTabChange={handleTabChange}
      />

      <div
        key={active.id}
        id={`panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={active.id}
        className="pt-10 md:pt-14 xl:pt-16"
      >
        <ServiceIntro service={active} />
        <ServiceOverview service={active} />
        <TreatmentProcess steps={active.process} />
        <BenefitsGrid benefits={active.benefits} />
        <ServiceFAQ items={active.faq} />
      </div>
    </div>
  );
}
