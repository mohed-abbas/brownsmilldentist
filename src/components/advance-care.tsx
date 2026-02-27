"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/scroll-reveal";
import { faq } from "@/content";

export function AdvanceCare() {
  return (
    <section aria-label="Advanced Dental Care">
      {/* Header */}
      <ScrollReveal animation="fade-up" className="mx-auto flex max-w-[719px] flex-col items-center gap-6 text-center xl:gap-9">
        <h2 className="text-display-section text-text-primary">
          {faq.headline}
        </h2>
        <p className="text-body-lg text-text-secondary">
          {faq.description}
        </p>
      </ScrollReveal>

      {/* Overlapping Content */}
      <div className="mt-10 flex flex-col gap-6 md:mt-12 xl:relative xl:mt-[70px] xl:min-h-[561px]">
        {/* Clinic Image */}
        <ScrollReveal animation="slide-left" className="relative aspect-[820/561] w-full overflow-hidden rounded-[2.5rem] xl:w-[57.75%]">
          <Image
            src={faq.image.src}
            alt={faq.image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 57.75vw"
          />
        </ScrollReveal>

        {/* Why Choose Us Card */}
        <ScrollReveal animation="slide-right" delay={150} className="w-full rounded-[2.5rem] bg-[var(--surface-white)] px-6 py-8 shadow-[0px_8px_14px_0px_rgba(0,0,0,0.07)] md:px-8 md:py-10 xl:absolute xl:left-[42.25%] xl:top-[67px] xl:w-[57.75%] xl:px-10 xl:py-12">
          <div className="mx-auto flex w-full flex-col gap-8 xl:max-w-[739px] xl:gap-[51px]">
            <h3 className="font-medium text-text-primary text-[clamp(1.75rem,3.5vw,2.4375rem)] leading-[1.2] tracking-[-0.05em]">
              {faq.subHeadline}
            </h3>

            <Accordion type="single" collapsible>
              {faq.items.map((item) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="border-b border-[rgba(31,31,31,0.15)] last:border-b-0"
                >
                  <AccordionTrigger className="py-[14px] text-[clamp(1.25rem,2.8vw,2.1875rem)] font-normal tracking-[-0.04em] text-text-secondary hover:no-underline [&>svg]:size-6 [&>svg]:text-text-secondary">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-body-md text-text-secondary">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
