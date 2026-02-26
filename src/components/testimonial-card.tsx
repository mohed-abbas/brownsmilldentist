import Image from "next/image";
import { Star } from "lucide-react";
import type { Testimonial } from "@/content/types";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

interface TestimonialCardProps extends Testimonial {
  featured?: boolean;
}

export function TestimonialCard({
  quote,
  author,
  role,
  image,
  rating,
  featured,
}: TestimonialCardProps) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border backdrop-blur-sm transition-all duration-[var(--duration-slow)] ease-[var(--ease-default)] ${
        featured
          ? "border-white/[0.12] bg-white/[0.10] hover:border-white/20 hover:bg-white/[0.14]"
          : "border-white/[0.07] bg-white/[0.06] hover:border-white/[0.14] hover:bg-white/[0.10]"
      }`}
      style={{
        boxShadow: featured
          ? "0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.06)"
          : "inset 0 1px 0 rgba(255, 255, 255, 0.04)",
      }}
    >
      {/* Top teal accent strip */}
      <div className="h-[2px] w-full bg-gradient-to-r from-teal-300/60 via-teal-500/40 to-transparent" />

      <div className="flex flex-1 flex-col px-7 py-8 sm:px-8 sm:py-9">
        {/* Decorative quote mark — large, positioned as design element */}
        <span
          aria-hidden="true"
          className="pointer-events-none select-none text-[5rem] font-medium leading-[0.8] text-teal-300/20 transition-colors duration-[var(--duration-slow)] group-hover:text-teal-300/30"
        >
          &ldquo;
        </span>

        {/* Stars */}
        {rating && (
          <div className="mt-3 flex gap-1" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                className={`size-[17px] ${
                  i < rating
                    ? "fill-teal-300 text-teal-300"
                    : "fill-transparent text-white/20"
                }`}
              />
            ))}
          </div>
        )}

        {/* Quote */}
        <blockquote className="mt-5 flex-1">
          <p className="text-body-md leading-[1.75] text-text-on-dark/80">
            {quote}
          </p>
        </blockquote>

        {/* Author (optional) */}
        {author && (
          <div className="mt-7 flex items-center gap-3.5 border-t border-white/[0.08] pt-6">
            <div className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-teal-500/15">
              {image ? (
                <Image
                  src={image}
                  alt={author}
                  width={44}
                  height={44}
                  className="size-full object-cover"
                />
              ) : (
                <span className="text-body-sm font-medium text-teal-300">
                  {getInitials(author)}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-body-sm font-medium text-text-on-dark">
                {author}
              </span>
              {role && (
                <span className="text-body-sm text-text-on-dark-muted">
                  {role}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
