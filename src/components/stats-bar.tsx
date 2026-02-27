"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 14, suffix: "k+", label: "Happy Patients" },
  { value: 5, suffix: "k+", label: "Active Members" },
  { value: 142, suffix: "+", label: "Professional" },
  { value: 20, suffix: "+", label: "Years Experience" },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf: number;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return count;
}

function StatItem({ stat, index, animate }: { stat: Stat; index: number; animate: boolean }) {
  const count = useCountUp(stat.value, 1600, animate);

  return (
    <div
      className="flex flex-col items-center gap-2 transition-opacity duration-700"
      style={{
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 120}ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 120}ms`,
      }}
    >
      <span className="text-[clamp(2.5rem,5vw,3.5rem)] font-medium leading-[1] tracking-[-0.04em] text-teal-500">
        {count}
        {stat.suffix}
      </span>
      <span className="text-body-md text-text-secondary">{stat.label}</span>
    </div>
  );
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) setAnimate(true);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
      rootMargin: "0px 0px 40px 0px",
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 gap-y-8 gap-x-4 py-4 sm:grid-cols-4 sm:gap-x-0"
    >
      {stats.map((stat, i) => (
        <div key={stat.label} className="flex justify-center">
          <StatItem stat={stat} index={i} animate={animate} />
        </div>
      ))}
    </div>
  );
}
