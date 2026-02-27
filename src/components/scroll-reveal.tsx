"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

type Animation = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  threshold?: number;
}

const animClassMap: Record<Animation, string> = {
  "fade-up": "reveal-fade-up",
  "fade-in": "reveal-fade-in",
  "slide-left": "reveal-slide-left",
  "slide-right": "reveal-slide-right",
  "scale-in": "reveal-scale-in",
};

export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration,
  className = "",
  style,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0");
          el.classList.add(animClassMap[animation]);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px 40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, threshold]);

  const cssVars = {
    ...(delay ? { "--reveal-delay": `${delay}ms` } : {}),
    ...(duration ? { "--reveal-duration": `${duration}ms` } : {}),
    ...style,
  } as CSSProperties;

  return (
    <div ref={ref} className={`opacity-0 ${className}`} style={cssVars}>
      {children}
    </div>
  );
}
