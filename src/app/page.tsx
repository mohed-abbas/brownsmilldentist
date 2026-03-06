import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { StatsBar } from "@/components/stats-bar";
import { OurFeatures } from "@/components/our-features";
import { MoreFeatures } from "@/components/more-features";
import { OurDoctors } from "@/components/our-doctors";
import { Testimonials } from "@/components/testimonials";
import { AdvanceCare } from "@/components/advance-care";
import { ContactSection } from "@/components/contact-section";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Browns Mills Dental Center",
  description:
    "Comprehensive dental care for all. Expert dental professionals providing general, cosmetic, and restorative dentistry in Browns Mills, NJ.",
  url: "https://brownsmillsdentalcenter.com",
  telephone: "(609) 893-5200",
  email: "brownsmillsdentalcenter@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "77 Juliustown Rd",
    addressLocality: "Browns Mills",
    addressRegion: "NJ",
    postalCode: "08015",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.9726,
    longitude: -74.5826,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  medicalSpecialty: "Dentistry",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content" className="container-page pt-5 xl:pt-[22px]">
        <div className="flex flex-col gap-5 xl:gap-[21px]">
          <Navbar />
          <Hero />
          <StatsBar />
        </div>
        <div className="section-gap-top">
          <OurFeatures />
        </div>
        <div className="section-gap-top">
          <MoreFeatures />
        </div>
        <div className="section-gap-top">
          <OurDoctors />
        </div>
        <div className="section-gap-top">
          <Testimonials />
        </div>
        <div className="section-gap-top">
          <AdvanceCare />
        </div>
        <div className="section-gap-top">
          <ContactSection />
        </div>
      </main>
    </>
  );
}
