import { ScrollReveal } from "@/components/scroll-reveal";

interface TreatmentProcessProps {
  steps: string[];
}

export function TreatmentProcess({ steps }: TreatmentProcessProps) {
  return (
    <ScrollReveal animation="fade-up" className="mt-12 md:mt-16 xl:mt-20">
      <h3 className="text-heading-md text-text-primary">
        Treatment Process
      </h3>

      <div className="relative mt-8">
        <div
          aria-hidden="true"
          className="absolute left-[19px] top-0 bottom-0 w-px bg-teal-100 sm:left-[23px]"
        />

        <ol className="flex flex-col gap-0">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <li key={i} className="relative flex gap-5 sm:gap-7">
                <div className="relative z-[1] flex flex-col items-center pt-1">
                  <div className="flex size-[38px] shrink-0 items-center justify-center rounded-full border-[3px] border-teal-500 bg-white text-body-sm font-semibold text-teal-500 sm:size-[46px] sm:text-body-md">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>

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
  );
}
