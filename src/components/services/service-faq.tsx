import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/scroll-reveal";
import type { ServiceFaq as ServiceFaqType } from "@/content/types";

interface ServiceFAQProps {
  items: ServiceFaqType[];
}

export function ServiceFAQ({ items }: ServiceFAQProps) {
  return (
    <ScrollReveal animation="fade-up" className="mt-12 md:mt-16 xl:mt-20">
      <div className="rounded-[var(--radius-container)] bg-teal-50 px-6 py-10 sm:px-10 sm:py-12 xl:px-14 xl:py-14">
        <h3 className="text-heading-md text-text-primary mb-8">
          Frequently Asked Questions
        </h3>
        <Accordion type="single" collapsible>
          {items.map((item, i) => (
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
  );
}
