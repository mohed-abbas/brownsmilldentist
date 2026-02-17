"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { doctors as doctorsContent } from "@/content";

const GAP = 20;

function useVisibleCount() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    function update() {
      if (window.innerWidth >= 1280) setCount(3);
      else if (window.innerWidth >= 768) setCount(2);
      else setCount(1);
    }

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

export function OurDoctors() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = useVisibleCount();

  const maxIndex = Math.max(0, doctorsContent.doctors.length - visibleCount);
  const clampedIndex = Math.min(currentIndex, maxIndex);
  if (clampedIndex !== currentIndex) setCurrentIndex(clampedIndex);
  const isScrollable = maxIndex > 0;
  const canPrev = clampedIndex > 0;
  const canNext = clampedIndex < maxIndex;

  const prev = useCallback(() => {
    if (canPrev) setCurrentIndex((i) => i - 1);
  }, [canPrev]);

  const next = useCallback(() => {
    if (canNext) setCurrentIndex((i) => i + 1);
  }, [canNext]);

  const cardWidth = `calc((100% - ${(visibleCount - 1) * GAP}px) / ${visibleCount})`;
  const translateX = `translateX(calc(-${currentIndex} * (100% + ${GAP}px) / ${visibleCount}))`;

  return (
    <section aria-label="Our Doctors">
      <div className="flex flex-col gap-10 xl:gap-[85px]">
        {/* Header */}
        <div className="flex items-end justify-between gap-8">
          <div className="flex max-w-[515px] flex-col gap-[29px]">
            <h2 className="text-display-section text-text-primary">
              {doctorsContent.headline}
            </h2>
            <p className="text-body-lg text-text-secondary">
              {doctorsContent.description}
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="hidden shrink-0 items-center gap-[11px] sm:flex">
            <button
              onClick={prev}
              disabled={isScrollable && !canPrev}
              aria-label="Previous doctor"
              className="flex size-[60px] items-center justify-center rounded-full border-2 border-[rgba(31,31,31,0.3)] text-[rgba(31,31,31,0.5)] transition-colors duration-[var(--duration-normal)] ease-[var(--ease-default)] hover:border-[rgba(31,31,31,0.5)] hover:text-[rgba(31,31,31,0.7)] disabled:cursor-default disabled:border-[rgba(31,31,31,0.15)] disabled:text-[rgba(31,31,31,0.2)] xl:size-[85px]"
            >
              <ArrowLeft className="size-5 xl:size-7" />
            </button>
            <button
              onClick={next}
              disabled={isScrollable && !canNext}
              aria-label="Next doctor"
              className="flex size-[60px] items-center justify-center rounded-full bg-teal-500 text-white transition-colors duration-[var(--duration-normal)] ease-[var(--ease-default)] hover:bg-teal-400 disabled:cursor-default disabled:opacity-40 xl:size-[85px]"
            >
              <ArrowRight className="size-5 xl:size-7" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-[var(--duration-slower)] ease-[var(--ease-default)]"
            style={{
              gap: `${GAP}px`,
              transform: translateX,
            }}
            role="group"
            aria-label="Doctor cards"
          >
            {doctorsContent.doctors.map((doctor) => (
              <article
                key={doctor.name}
                className="shrink-0 overflow-hidden rounded-[var(--radius-container)] bg-white shadow-[0px_8px_14px_0px_rgba(0,0,0,0.07)]"
                style={{ width: cardWidth }}
              >
                <div className="px-[18px] pt-5">
                  <div className="relative aspect-[424/414] w-full overflow-hidden rounded-[19px]">
                    <Image
                      src={doctor.image}
                      alt={doctor.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) calc(100vw - 76px), (max-width: 1280px) calc(50vw - 56px), 424px"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center pb-5 pt-[30px]">
                  <h3 className="text-heading-md font-medium text-text-primary">
                    {doctor.name}
                  </h3>
                  <p className="mt-[10px] text-body-lg text-text-secondary">
                    {doctor.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Mobile navigation arrows */}
        <div className="flex items-center justify-center gap-[11px] sm:hidden">
          <button
            onClick={prev}
            disabled={!canPrev}
            aria-label="Previous doctor"
            className="flex size-[50px] items-center justify-center rounded-full border-2 border-[rgba(31,31,31,0.3)] text-[rgba(31,31,31,0.5)] transition-colors duration-[var(--duration-normal)] ease-[var(--ease-default)] disabled:cursor-default disabled:border-[rgba(31,31,31,0.15)] disabled:text-[rgba(31,31,31,0.2)]"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            onClick={next}
            disabled={!canNext}
            aria-label="Next doctor"
            className="flex size-[50px] items-center justify-center rounded-full bg-teal-500 text-white transition-colors duration-[var(--duration-normal)] ease-[var(--ease-default)] disabled:cursor-default disabled:opacity-40"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
