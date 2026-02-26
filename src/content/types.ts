export interface LinkItem {
  label: string;
  href: string;
}

export interface ImageRef {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface SiteContent {
  brand: string;
  seo: {
    title: string;
    description: string;
  };
}

export interface NavigationContent {
  links: LinkItem[];
  cta: LinkItem;
}

export interface HeroContent {
  badges: string[];
  headline: string;
  subtext: string;
  cta: LinkItem;
  membersStats: string;
  doctorStats: string;
  sideText: string;
  avatars: {
    patients: ImageRef[];
    doctors: ImageRef[];
  };
  images: {
    center: ImageRef;
    rightCard: ImageRef;
  };
}

export interface Partner {
  name: string;
  icon: string | null;
}

export interface PartnersContent {
  partners: Partner[];
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  slug: string;
}

export interface FeaturesContent {
  label: string;
  headline: string;
  description: string;
  cta: LinkItem;
  cards: FeatureCard[];
}

export interface MoreFeaturesContent {
  top: {
    headline: string;
    description: string;
    cta: LinkItem;
    images: {
      small: ImageRef;
      large: ImageRef;
    };
  };
  bottom: {
    headline: string;
    description: string;
    images: {
      left: ImageRef;
      center: ImageRef;
    };
  };
}

export interface Doctor {
  name: string;
  qualifications?: string;
  role: string;
  image: string;
  alt: string;
  bio?: string;
}

export interface DoctorsContent {
  headline: string;
  description: string;
  doctors: Doctor[];
}

export interface FaqItem {
  value: string;
  title: string;
  content: string;
}

export interface FaqContent {
  headline: string;
  description: string;
  subHeadline: string;
  image: ImageRef;
  items: FaqItem[];
}

export interface FormField {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}

export interface ContactInfoItem {
  title: string;
  description: string;
}

export interface ContactContent {
  headline: string;
  subheadline: string;
  form: {
    fields: FormField[];
    optInLabel: string;
    submitLabel: string;
  };
  info: ContactInfoItem[];
}

export interface FooterColumn {
  title: string;
  links: LinkItem[];
}

export interface SocialLink {
  icon: string;
  alt: string;
  href: string;
  width: number;
  height: number;
}

export interface FooterContent {
  columns: FooterColumn[];
  copyright: string;
  socials: SocialLink[];
}

export interface Testimonial {
  quote: string;
  author?: string;
  role?: string;
  image?: string;
  rating?: number;
}

export interface TestimonialsContent {
  eyebrow: string;
  headline: string;
  description: string;
  testimonials: Testimonial[];
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  id: string;
  icon: string;
  title: string;
  headline: string;
  intro: string[];
  overview: {
    heading: string;
    body: string;
  };
  concerns: string[];
  process: string[];
  benefits: string[];
  faq: ServiceFaq[];
}

export interface ServicesPageContent {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
  };
  services: ServiceDetail[];
  whyChoose: {
    headline: string;
    description: string;
  };
  cta: {
    headline: string;
    description: string;
    button: LinkItem;
  };
}
