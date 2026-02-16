import siteJson from "./site.json";
import navigationJson from "./navigation.json";
import heroJson from "./hero.json";
import partnersJson from "./partners.json";
import featuresJson from "./features.json";
import moreFeaturesJson from "./more-features.json";
import doctorsJson from "./doctors.json";
import faqJson from "./faq.json";
import contactJson from "./contact.json";
import footerJson from "./footer.json";

import type {
  SiteContent,
  NavigationContent,
  HeroContent,
  PartnersContent,
  FeaturesContent,
  MoreFeaturesContent,
  DoctorsContent,
  FaqContent,
  ContactContent,
  FooterContent,
} from "./types";

export const site = siteJson as SiteContent;
export const navigation = navigationJson as NavigationContent;
export const hero = heroJson as HeroContent;
export const partners = partnersJson as PartnersContent;
export const features = featuresJson as FeaturesContent;
export const moreFeatures = moreFeaturesJson as MoreFeaturesContent;
export const doctors = doctorsJson as DoctorsContent;
export const faq = faqJson as FaqContent;
export const contact = contactJson as ContactContent;
export const footer = footerJson as FooterContent;
