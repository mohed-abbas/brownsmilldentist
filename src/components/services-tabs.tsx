"use client";

import { useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Sparkles,
  HeartPulse,
  Crown,
  Smile,
  Syringe,
  ShieldCheck,
  Wrench,
  Check,
  type LucideIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/scroll-reveal";
import type { ServiceDetail } from "@/content/types";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  HeartPulse,
  Crown,
  Smile,
  Syringe,
  ShieldCheck,
  Wrench,
};

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
  const ActiveIcon = iconMap[active.icon];

  return (
    <div id="service-detail" className="scroll-mt-8">
      {/* ─── Sticky Pill Tab Navigation ─── */}
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
                  onClick={() => handleTabChange(service.id)}
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

      {/* ─── Content Panel ─── */}
      <div
        key={active.id}
        id={`panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={active.id}
        className="pt-10 md:pt-14 xl:pt-16"
      >
        {/* ── Service Intro Banner ── */}
        <ScrollReveal animation="fade-up" duration={750}>
          <div className="rounded-[var(--radius-container)] bg-teal-50 px-6 py-10 sm:px-10 sm:py-12 xl:px-14 xl:py-14">
            <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:gap-10">
              <div className="flex size-16 shrink-0 items-center justify-center rounded-[var(--radius-button)] bg-teal-500 xl:size-20">
                {ActiveIcon && (
                  <ActiveIcon
                    className="size-7 text-white xl:size-9"
                    aria-hidden="true"
                  />
                )}
              </div>
              <div className="flex flex-col gap-4 xl:gap-5">
                <h2 className="text-heading-xl text-text-primary">
                  {active.headline}
                </h2>
                {active.intro.map((p, i) => (
                  <p key={i} className="text-body-lg text-text-secondary max-w-[680px]">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Overview + Concerns — Two-Column ── */}
        <div className="mt-12 md:mt-16 xl:mt-20 flex flex-col gap-8 xl:flex-row xl:gap-10">
          {/* Overview text */}
          <ScrollReveal animation="fade-up" className="flex-1">
            <h3 className="text-heading-md text-text-primary">
              {active.overview.heading}
            </h3>
            <p className="mt-5 text-body-lg text-text-secondary leading-[1.6]">
              {active.overview.body}
            </p>
          </ScrollReveal>

          {/* Concerns card */}
          {active.concerns.length > 0 && (
            <ScrollReveal animation="slide-right" delay={200} className="w-full xl:w-[380px] xl:shrink-0">
              <div className="rounded-[var(--radius-card)] bg-white p-6 shadow-card sm:p-8">
                <h4 className="text-heading-sm text-text-primary mb-5">
                  Common Concerns
                </h4>
                <ul className="flex flex-col gap-3.5">
                  {active.concerns.map((concern, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-body-md text-text-secondary"
                    >
                      <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-500/10">
                        <Check
                          className="size-3 text-teal-500"
                          aria-hidden="true"
                        />
                      </span>
                      {concern}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          )}
        </div>

        {/* ── Treatment Process — Vertical Timeline ── */}
        <ScrollReveal animation="fade-up" className="mt-12 md:mt-16 xl:mt-20">
          <h3 className="text-heading-md text-text-primary">
            Treatment Process
          </h3>

          <div className="relative mt-8">
            {/* Vertical timeline line */}
            <div
              aria-hidden="true"
              className="absolute left-[19px] top-0 bottom-0 w-px bg-teal-100 sm:left-[23px]"
            />

            <ol className="flex flex-col gap-0">
              {active.process.map((step, i) => {
                const isLast = i === active.process.length - 1;
                return (
                  <li key={i} className="relative flex gap-5 sm:gap-7">
                    {/* Node on the timeline */}
                    <div className="relative z-[1] flex flex-col items-center pt-1">
                      <div className="flex size-[38px] shrink-0 items-center justify-center rounded-full border-[3px] border-teal-500 bg-white text-body-sm font-semibold text-teal-500 sm:size-[46px] sm:text-body-md">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Content card */}
                    <div className={`flex-1 ${isLast ? "pb-0" : "pb-6 sm:pb-8"}`}>
                      <div className="rounded-[var(--radius-button)] bg-teal-50 px-5 py-4 sm:px-6 sm:py-5">
                        <p className="text-body-md text-text-primary font-medium sm:text-body-lg">
                          {step}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </ScrollReveal>

        {/* ── Benefits — Card Grid ── */}
        <div className="mt-12 md:mt-16 xl:mt-20">
          <ScrollReveal animation="fade-up">
            <h3 className="text-heading-md text-text-primary">Benefits</h3>
          </ScrollReveal>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {active.benefits.map((benefit, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                <div className="flex items-start gap-4 rounded-[var(--radius-card)] bg-white p-5 shadow-card transition-all duration-[var(--duration-normal)] ease-[var(--ease-default)] hover:shadow-card-hover hover:-translate-y-0.5 sm:p-6">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-teal-500/10">
                    <Check
                      className="size-4 text-teal-500"
                      aria-hidden="true"
                    />
                  </span>
                  <p className="text-body-md text-text-primary font-medium pt-1.5">
                    {benefit}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* ── FAQ — Contained Accordion ── */}
        <ScrollReveal animation="fade-up" className="mt-12 md:mt-16 xl:mt-20">
          <div className="rounded-[var(--radius-container)] bg-teal-50 px-6 py-10 sm:px-10 sm:py-12 xl:px-14 xl:py-14">
            <h3 className="text-heading-md text-text-primary mb-8">
              Frequently Asked Questions
            </h3>
            <Accordion type="single" collapsible>
              {active.faq.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-b border-teal-900/10 last:border-b-0"
                >
                  <AccordionTrigger className="py-5 text-[clamp(1.125rem,2vw,1.375rem)] font-medium tracking-[-0.02em] text-text-primary hover:no-underline [&>svg]:size-5 [&>svg]:text-teal-500">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-body-md text-text-secondary leading-[1.6]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
