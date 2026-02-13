import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BadgeTag } from "@/components/badge-tag";
import { AvatarStack } from "@/components/avatar-stack";

const heroAvatars = [
  { src: "/assets/images/avatar-1.jpg", alt: "Happy patient" },
  { src: "/assets/images/avatar-2.jpg", alt: "Happy patient" },
  { src: "/assets/images/avatar-3.jpg", alt: "Happy patient" },
];

const doctorAvatars = [
  { src: "/assets/images/avatar-4.jpg", alt: "Expert doctor" },
  { src: "/assets/images/avatar-5.jpg", alt: "Expert doctor" },
  { src: "/assets/images/avatar-6.jpg", alt: "Expert doctor" },
];

export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="gradient-hero relative overflow-hidden rounded-[var(--radius-container)] xl:h-[874px]"
    >
      {/* Desktop layout: absolute positioning to match Figma overlapping columns */}

      {/* Left Column */}
      <div className="relative z-10 flex flex-col gap-10 px-6 pt-8 pb-6 sm:gap-16 sm:px-10 sm:pt-16 sm:pb-10 xl:absolute xl:left-[51px] xl:top-[94px] xl:w-[512px] xl:gap-[92px] xl:px-0 xl:pt-0 xl:pb-0">
        {/* Badges + Headline */}
        <div className="flex flex-col gap-[26px]">
          <div className="flex gap-[7px] flex-wrap">
            <BadgeTag>Dental Care</BadgeTag>
            <BadgeTag>Oral Health</BadgeTag>
          </div>
          <h1 className="text-display-hero text-white">
            Expert Care for Beautiful Smiles
          </h1>
        </div>

        {/* Subtext + CTA */}
        <div className="flex flex-col gap-[34px] max-w-[325px]">
          <p className="text-body-lg text-white">
            Trust our experienced professionals to maintain and enhance the
            beauty for your smile with every visit
          </p>

          <div className="flex items-center gap-[30px]">
            <Button
              variant="hero"
              size="brand-default"
              asChild
              className="font-semibold"
            >
              <Link href="#contact">Try for free</Link>
            </Button>
            <AvatarStack avatars={heroAvatars} />
          </div>

          <p className="text-body-lg text-white tracking-[-0.02em]">
            5.4M+ Happy Members
          </p>
        </div>
      </div>

      {/* Center Column — Hero Image (desktop: absolute, overlaps left column) */}
      <div className="hidden xl:block xl:absolute xl:left-[478px] xl:bottom-[5%] xl:w-[573px] xl:h-[807px]">
        <Image
          src="/assets/images/hero-center.png"
          alt="Dental professionals providing expert care"
          width={573}
          height={807}
          className="size-full object-contain"
          priority
        />
      </div>

      {/* Right Column (desktop only) */}
      <div className="hidden xl:flex xl:absolute xl:left-[1102px] xl:bottom-[5%] xl:w-[290px] flex-col gap-[92px]">
        {/* Doctor Stats */}
        <div className="flex flex-col gap-[23px] w-[281px]">
          <p className="text-body-md text-white tracking-[-0.02em]">
            458 EXPERT DOCTOR
          </p>
          <div className="flex items-center justify-between w-full">
            <AvatarStack avatars={doctorAvatars} />
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
            We take meticulous care of your dental needs to ensure a healthy,
            lasting smile
          </p>
          <div className="h-[509px] w-full overflow-hidden rounded-[var(--radius-container)]">
            <Image
              src="/assets/images/hero-right-card.jpg"
              alt="Dental care in action"
              width={290}
              height={509}
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mobile/Tablet: Show center image below content */}
      <div className="relative xl:hidden flex justify-center px-6 pb-8">
        <Image
          src="/assets/images/hero-center.png"
          alt="Dental professionals providing expert care"
          width={573}
          height={807}
          className="max-w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}
