import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { footer } from "@/content";

export function Footer() {
  return (
    <footer className="gradient-footer mt-32 pt-16 pb-12 md:pt-20 md:pb-14 xl:pt-24 xl:pb-16">
      <div className="container-page">
        {/* Link columns */}
        <ScrollReveal animation="fade-up">
        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-8 xl:gap-x-12"
        >
          {footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[1.125rem] font-medium leading-[1.47] text-text-on-dark mb-6">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-text-on-dark-muted transition-colors duration-[var(--duration-fast)] hover:text-text-on-dark"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        </ScrollReveal>

        {/* Divider area — copyright + socials */}
        <div className="mt-16 md:mt-20 xl:mt-24 flex flex-col items-center gap-5">
          <p className="text-[1rem] leading-[1.625] text-text-on-dark text-center">
            {footer.copyright}
          </p>
          <div className="flex items-center gap-5">
            {footer.socials.map((social) => (
              <Link
                key={social.alt}
                href={social.href}
                aria-label={social.alt}
                className="opacity-80 transition-opacity duration-[var(--duration-fast)] hover:opacity-100"
              >
                <img
                  src={social.icon}
                  alt={social.alt}
                  width={social.width}
                  height={social.height}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
