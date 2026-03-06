import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/content";
import { Footer } from "@/components/footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-dm-sans-next",
});

export const metadata: Metadata = {
  title: {
    default: site.seo.title,
    template: `%s | ${site.brand}`,
  },
  description: site.seo.description,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://brownsmillsdentalcenter.com",
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.brand,
    title: site.seo.title,
    description: site.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <link
          rel="preload"
          href="/fonts/Haffer-TRIAL-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        {children}
        <Footer />
      </body>
    </html>
  );
}
