import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BadgeTag } from "@/components/badge-tag";
import { AvatarStack } from "@/components/avatar-stack";
import { hero } from "@/content";
import type { CSSProperties } from "react";

function d(ms: number): CSSProperties {
  return { "--reveal-delay": `${ms}ms` } as CSSProperties;
}

export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="gradient-hero relative overflow-hidden rounded-[var(--radius-container)] xl:h-[874px]"
    >
      {/* Desktop layout: absolute positioning to match Figma overlapping columns */}

      {/* Left Column */}
      <div className="relative z-10 flex flex-col gap-10 px-6 pt-8 pb-6 sm:gap-16 sm:px-10 sm:pt-16 sm:pb-10 xl:absolute xl:left-[3.59%] xl:top-[94px] xl:w-[36.06%] xl:gap-[92px] xl:px-0 xl:pt-0 xl:pb-0">
        {/* Badges + Headline */}
        <div className="flex flex-col gap-[26px]">
          <div className="reveal-fade-up flex gap-[7px] flex-wrap" style={d(0)}>
            {hero.badges.map((badge) => (
              <BadgeTag key={badge}>{badge}</BadgeTag>
            ))}
          </div>
          <h1 className="reveal-fade-up text-display-hero text-white" style={d(120)}>
            {hero.headline}
          </h1>
        </div>

        {/* Subtext + CTA */}
        <div className="flex flex-col gap-[34px] max-w-[325px]">
          <p className="reveal-fade-up text-body-lg text-white" style={d(240)}>
            {hero.subtext}
          </p>

          <div className="reveal-fade-up flex items-center gap-[30px]" style={d(360)}>
            <Button
              variant="hero"
              size="brand-default"
              asChild
              className="font-semibold"
            >
              <Link href={hero.cta.href}>{hero.cta.label}</Link>
            </Button>
            <AvatarStack avatars={hero.avatars.patients} />
          </div>

          <p className="reveal-fade-up text-body-lg text-white tracking-[-0.02em]" style={d(440)}>
            {hero.membersStats}
          </p>
        </div>
      </div>

      {/* Center Column — Hero Image (desktop: absolute, overlaps left column) */}
      <div className="reveal-scale-in hidden xl:block xl:absolute xl:left-[33.66%] xl:top-[33px] xl:w-[40.35%] xl:h-[807px]" style={d(200)}>
        <Image
          src={hero.images.center.src}
          alt={hero.images.center.alt}
          width={hero.images.center.width!}
          height={hero.images.center.height!}
          className="size-full object-contain"
          priority
        />
      </div>

      {/* Right Column (desktop only) */}
      <div className="reveal-fade-up hidden xl:flex xl:absolute xl:left-[77.61%] xl:top-[77px] xl:w-[20.42%] xl:h-[763px] flex-col justify-between" style={d(500)}>
        {/* Doctor Stats */}
        <div className="flex flex-col gap-[23px] w-full">
          <p className="text-body-md text-white tracking-[-0.02em]">
            {hero.doctorStats}
          </p>
          <div className="flex items-center justify-between w-full">
            <AvatarStack avatars={hero.avatars.doctors} />
            <button
              aria-label="View all doctors"
              className="flex size-[50px] items-center justify-center rounded-full border border-white/30 text-white transition-colors duration-200 hover:bg-white/10"
            >
              <ArrowUpRight className="size-6" />
            </button>
          </div>
        </div>

        {/* Description + Image Card */}
        <div className="flex flex-col gap-[35px]">
          <p className="text-body-md text-white">
            {hero.sideText}
          </p>
          <div className="h-[509px] w-full overflow-hidden rounded-[var(--radius-container)]">
            <Image
              src={hero.images.rightCard.src}
              alt={hero.images.rightCard.alt}
              width={hero.images.rightCard.width!}
              height={hero.images.rightCard.height!}
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mobile/Tablet: Show center image below content */}
      <div className="reveal-scale-in relative xl:hidden flex justify-center px-6 pb-8" style={d(200)}>
        <Image
          src={hero.images.center.src}
          alt={hero.images.center.alt}
          width={hero.images.center.width!}
          height={hero.images.center.height!}
          className="max-w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}
