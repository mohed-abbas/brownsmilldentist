import Link from "next/link";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Partner", href: "#" },
      { label: "Story", href: "#" },
      { label: "Case Study", href: "#" },
      { label: "Customer Support", href: "#" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Get help", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Newcomers", href: "#" },
    ],
  },
  {
    title: "Learning",
    links: [
      { label: "Legal", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Communities", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Tutorials", href: "#" },
      { label: "Editorials", href: "#" },
      { label: "Product", href: "#" },
      { label: "Newsroom", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: "/assets/icons/icon-facebook.svg", alt: "Facebook", href: "#", width: 9, height: 18 },
  { icon: "/assets/icons/icon-twitter.svg", alt: "Twitter", href: "#", width: 20, height: 16 },
  { icon: "/assets/icons/icon-instagram.svg", alt: "Instagram", href: "#", width: 20, height: 20 },
  { icon: "/assets/icons/icon-combined-shape.svg", alt: "Vimeo", href: "#", width: 16, height: 16 },
];

export function Footer() {
  return (
    <footer className="gradient-footer mt-32 pt-16 pb-12 md:pt-20 md:pb-14 xl:pt-24 xl:pb-16">
      <div className="container-page">
        {/* Link columns */}
        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-8 xl:gap-x-12"
        >
          {footerColumns.map((column) => (
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

        {/* Divider area — copyright + socials */}
        <div className="mt-16 md:mt-20 xl:mt-24 flex flex-col items-center gap-5">
          <p className="text-[1rem] leading-[1.625] text-text-on-dark text-center">
            &copy; 2026 Dentu. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
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
