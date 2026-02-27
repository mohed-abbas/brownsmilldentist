import Link from "next/link";
import { Button } from "@/components/ui/button";
import { site, navigation } from "@/content";

export function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="reveal-fade-in gradient-hero flex h-[98px] items-center justify-between rounded-[var(--radius-container)] px-[25px]"
    >
      <Link
        href="/"
        className="text-heading-md font-semibold text-white tracking-[-0.02em]"
      >
        {site.brand}
      </Link>

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

      <Button
        variant="hero"
        size="brand-default"
        asChild
        className="hidden md:inline-flex font-semibold"
      >
        <Link href={navigation.cta.href}>{navigation.cta.label}</Link>
      </Button>
    </nav>
  );
}
