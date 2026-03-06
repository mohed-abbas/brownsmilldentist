import siteJson from "./site.json";
import navigationJson from "./navigation.json";
import heroJson from "./hero.json";
import partnersJson from "./partners.json";
import featuresJson from "./features.json";
import moreFeaturesJson from "./more-features.json";
import doctorsJson from "./doctors.json";
import testimonialsJson from "./testimonials.json";
import faqJson from "./faq.json";
import contactJson from "./contact.json";
import footerJson from "./footer.json";
import servicesJson from "./services.json";

import type {
  SiteContent,
  NavigationContent,
  HeroContent,
  PartnersContent,
  FeaturesContent,
  MoreFeaturesContent,
  DoctorsContent,
  TestimonialsContent,
  FaqContent,
  ContactContent,
  FooterContent,
  ServicesPageContent,
} from "./types";

export const site = siteJson satisfies SiteContent;
export const navigation = navigationJson satisfies NavigationContent;
export const hero = heroJson satisfies HeroContent;
export const partners = partnersJson satisfies PartnersContent;
export const features = featuresJson satisfies FeaturesContent;
export const moreFeatures = moreFeaturesJson satisfies MoreFeaturesContent;
export const doctors = doctorsJson satisfies DoctorsContent;
export const testimonials = testimonialsJson satisfies TestimonialsContent;
export const faq = faqJson satisfies FaqContent;
export const contact = contactJson satisfies ContactContent;
export const footer = footerJson satisfies FooterContent;
export const servicesPage = servicesJson satisfies ServicesPageContent;
