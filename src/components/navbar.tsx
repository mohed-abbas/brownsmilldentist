"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { site, navigation } from "@/content";

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="reveal-fade-in gradient-hero relative z-30 flex h-[98px] items-center justify-between rounded-[var(--radius-container)] px-[25px]"
      >
        <Link
          href="/"
          className="text-heading-md font-semibold text-white tracking-[-0.02em]"
        >
          {site.brand}
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-[67px]">
          {navigation.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body-md text-white transition-opacity duration-200 hover:opacity-80"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Button
          variant="hero"
          size="brand-default"
          asChild
          className="hidden md:inline-flex font-semibold"
        >
          <Link href={navigation.cta.href}>{navigation.cta.label}</Link>
        </Button>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-50 flex size-12 items-center justify-center md:hidden"
        >
          <div className="flex w-[26px] flex-col items-end gap-[6px]">
            <span
              className="block h-[2px] rounded-full bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                width: open ? 26 : 26,
                transform: open ? "translateY(8px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-[2px] rounded-full bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                width: open ? 0 : 18,
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block h-[2px] rounded-full bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                width: open ? 26 : 22,
                transform: open ? "translateY(-8px) rotate(-45deg)" : "none",
              }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-20 flex flex-col gradient-hero transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Atmospheric glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/[0.08] blur-[140px]"
        />

        <div className="relative flex flex-1 flex-col items-center justify-center gap-10 px-8">
          {navigation.links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[clamp(1.75rem,5vw,2.5rem)] font-medium text-white tracking-[-0.03em] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-teal-300"
              style={{
                transitionDelay: open ? `${150 + i * 80}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* CTA button */}
          <div
            className="mt-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transitionDelay: open ? `${150 + navigation.links.length * 80}ms` : "0ms",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <Button
              variant="hero"
              size="brand-default"
              asChild
              className="font-semibold"
            >
              <Link href={navigation.cta.href} onClick={() => setOpen(false)}>
                {navigation.cta.label}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
