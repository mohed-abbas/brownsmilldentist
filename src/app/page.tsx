import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { PartnersBar } from "@/components/partners-bar";
import { OurFeatures } from "@/components/our-features";
import { MoreFeatures } from "@/components/more-features";
import { OurDoctors } from "@/components/our-doctors";
import { Testimonials } from "@/components/testimonials";
import { AdvanceCare } from "@/components/advance-care";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className="container-page pt-5 xl:pt-[42px]">
        <div className="flex flex-col gap-5 xl:gap-[41px]">
          <Navbar />
          <Hero />
          <PartnersBar />
        </div>
        <div className="mt-[var(--section-gap-mobile)] md:mt-[var(--section-gap-tablet)] xl:mt-[var(--section-gap)]">
          <OurFeatures />
        </div>
        <div className="mt-[var(--section-gap-mobile)] md:mt-[var(--section-gap-tablet)] xl:mt-[var(--section-gap)]">
          <MoreFeatures />
        </div>
        <div className="mt-[var(--section-gap-mobile)] md:mt-[var(--section-gap-tablet)] xl:mt-[var(--section-gap)]">
          <OurDoctors />
        </div>
        <div className="mt-[var(--section-gap-mobile)] md:mt-[var(--section-gap-tablet)] xl:mt-[var(--section-gap)]">
          <Testimonials />
        </div>
        <div className="mt-[var(--section-gap-mobile)] md:mt-[var(--section-gap-tablet)] xl:mt-[var(--section-gap)]">
          <AdvanceCare />
        </div>
        <div className="mt-[var(--section-gap-mobile)] md:mt-[var(--section-gap-tablet)] xl:mt-[var(--section-gap)]">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
