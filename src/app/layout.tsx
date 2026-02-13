import type { Metadata } from "next";
import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const haffer = localFont({
  src: [
    {
      path: "../../public/fonts/Haffer-TRIAL-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Haffer-TRIAL-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Haffer-TRIAL-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-haffer",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brown's Mill Dentist",
  description:
    "Expert dental care for beautiful smiles. Trust our experienced professionals to maintain and enhance the beauty of your smile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${haffer.variable} ${dmSans.variable}`}>
      <body className="font-[family-name:var(--font-haffer)]">{children}</body>
    </html>
  );
}
