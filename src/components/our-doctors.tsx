"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { doctors as doctorsContent } from "@/content";

export function OurDoctors() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const doctors = doctorsContent.doctors;
  const doctor = doctors[currentIndex];

  const canPrev = currentIndex > 0;
  const canNext = currentIndex < doctors.length - 1;

  const prev = useCallback(() => {
    if (canPrev) setCurrentIndex((i) => i - 1);
  }, [canPrev]);

  const next = useCallback(() => {
    if (canNext) setCurrentIndex((i) => i + 1);
  }, [canNext]);

  return (
    <section aria-label="Our Doctors">
      <div className="flex flex-col gap-10 xl:gap-[85px]">
        {/* Header */}
        <ScrollReveal animation="fade-up" className="flex items-end justify-between gap-8">
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
              disabled={!canPrev}
              aria-label="Previous doctor"
              className="flex size-[60px] items-center justify-center rounded-full border-2 border-[rgba(31,31,31,0.3)] text-[rgba(31,31,31,0.5)] transition-colors duration-[var(--duration-normal)] ease-[var(--ease-default)] hover:border-[rgba(31,31,31,0.5)] hover:text-[rgba(31,31,31,0.7)] disabled:cursor-default disabled:border-[rgba(31,31,31,0.15)] disabled:text-[rgba(31,31,31,0.2)] xl:size-[85px]"
            >
              <ArrowLeft className="size-5 xl:size-7" />
            </button>
            <button
              onClick={next}
              disabled={!canNext}
              aria-label="Next doctor"
              className="flex size-[60px] items-center justify-center rounded-full bg-teal-500 text-white transition-colors duration-[var(--duration-normal)] ease-[var(--ease-default)] hover:bg-teal-400 disabled:cursor-default disabled:opacity-40 xl:size-[85px]"
            >
              <ArrowRight className="size-5 xl:size-7" />
            </button>
          </div>
        </ScrollReveal>

        {/* Featured Doctor Slideshow */}
        <ScrollReveal animation="scale-in" delay={100} className="overflow-hidden rounded-[var(--radius-container)] bg-white shadow-[0px_8px_14px_0px_rgba(0,0,0,0.07)]">
          <div className="flex flex-col xl:flex-row">
            {/* Image — cross-fade only on images */}
            <div className="relative aspect-[4/3] w-full shrink-0 sm:aspect-[3/2] xl:aspect-auto xl:w-[420px] xl:min-h-[440px]">
              {doctors.map((doc, i) => (
                <div
                  key={doc.name}
                  className="absolute inset-0 transition-opacity duration-[var(--duration-slow)] ease-[var(--ease-default)]"
                  style={{ opacity: i === currentIndex ? 1 : 0 }}
                  aria-hidden={i !== currentIndex}
                >
                  <Image
                    src={doc.image}
                    alt={doc.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 460px"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>

            {/* Content — instant swap, no text overlap */}
            <div className="flex flex-1 flex-col justify-center px-6 py-6 sm:px-8 xl:px-12 xl:py-8">
              <p className="text-body-md font-medium tracking-wide text-teal-500 uppercase">
                {doctor.role}
              </p>
              <h3 className="mt-3 text-heading-xl text-text-primary">
                {doctor.name}
                {doctor.qualifications && (
                  <span className="ml-2 text-body-lg font-normal text-text-secondary">
                    {doctor.qualifications}
                  </span>
                )}
              </h3>
              {doctor.bio && (
                <p className="mt-5 text-body-lg leading-relaxed text-text-secondary">
                  {doctor.bio}
                </p>
              )}

              {/* Dot indicators */}
              <div className="mt-8 flex items-center gap-2.5">
                {doctors.map((doc, i) => (
                  <button
                    key={doc.name}
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`View ${doc.name}`}
                    aria-current={i === currentIndex ? "true" : undefined}
                    className={`h-2.5 rounded-full transition-all duration-[var(--duration-normal)] ease-[var(--ease-default)] ${
                      i === currentIndex
                        ? "w-8 bg-teal-500"
                        : "w-2.5 bg-text-primary/20 hover:bg-text-primary/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

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
