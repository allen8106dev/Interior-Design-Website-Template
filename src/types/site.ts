/**
 * DEMO CONTENT — REPLACE BEFORE CLIENT DEPLOYMENT
 *
 * All business copy, contact details, stats, and media below are fictional
 * placeholders for the "Atelier Habitat" demo studio. Swap values in
 * `src/data/siteConfig.ts` when customizing for a real client.
 */

export interface NavLink {
  label: string
  href: string
}

export interface SocialLinks {
  instagram?: string
  facebook?: string
  linkedin?: string
  pinterest?: string
  youtube?: string
}

export interface CompanyInfo {
  name: string
  shortName: string
  tagline: string
  description: string
  phone: string
  phoneDisplay: string
  whatsapp: string
  email: string
  address: {
    line1: string
    line2?: string
    city: string
    state: string
    postalCode: string
    country: string
  }
  serviceAreas: string[]
  foundedYear: number
  mapEmbedUrl?: string
  mapLink?: string
}

export interface Branding {
  logoText?: string
  logoSrc?: string
  logoAlt?: string
  primaryColor: string
  accentColor: string
  favicon?: string
}

export interface SeoConfig {
  siteUrl: string
  defaultTitle: string
  titleTemplate: string
  defaultDescription: string
  ogImage: string
  twitterHandle?: string
  locale: string
}

export interface StatItem {
  value: string
  label: string
}

export interface ServiceItem {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  icon: string
  image?: string
}

export interface ProjectImage {
  src: string
  alt: string
  caption?: string
}

export interface ProjectItem {
  id: string
  slug: string
  title: string
  location: string
  /** Project type shown in meta (e.g. Residential, Kitchen). */
  category: string
  year: number
  coverImage: string
  coverImageAlt: string
  gallery: ProjectImage[]
  /** Short design / concept description. */
  description: string
  challenge?: string
  solution?: string
  /** Materials used — wood, stone, textiles, etc. */
  materials?: string[]
  /** Notable design elements / finishes. */
  designElements?: string[]
  servicesProvided: string[]
  area?: string
  duration?: string
  featured?: boolean
  beforeAfter?: {
    before: ProjectImage
    after: ProjectImage
  }
}

export interface TestimonialItem {
  id: string
  name: string
  location?: string
  review: string
  projectType?: string
  rating?: number
  image?: string
}

/** Optional press / feature mentions — leave empty or use only real, approved credits. */
export interface PressItem {
  id: string
  label: string
  href?: string
}

export interface ProcessStep {
  id: string
  step: number
  title: string
  description: string
}

export interface Differentiator {
  id: string
  title: string
  description: string
  icon: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface CtaConfig {
  primary: { label: string; href: string }
  secondary: { label: string; href: string }
  whatsapp: { label: string }
  consultation: { label: string; href: string }
  enquire: { label: string; href: string }
  startProject: { label: string; href: string }
}

export interface SectionCopy {
  eyebrow: string
  title: string
  description?: string
}

export interface SectionsContent {
  featuredProjects: SectionCopy & { viewAllLabel: string }
  services: SectionCopy
  process: SectionCopy
  whyChooseUs: SectionCopy
  testimonials: SectionCopy
  faq: SectionCopy
  contact: SectionCopy
  cta: { eyebrow: string; title: string; description: string }
  statsNote?: string
  projectsPage: SectionCopy
  servicesPage: SectionCopy
  contactPage: SectionCopy
}

export interface AboutContent {
  eyebrow: string
  title: string
  paragraphs: string[]
  philosophy: string
  image: string
  imageAlt: string
  ctaLabel: string
  ctaHref: string
}

export interface HeroContent {
  eyebrow: string
  headline: string
  subheadline: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  image: string
  imageAlt: string
  indicator?: { label: string; value: string }
}

export interface SiteConfig {
  demoNotice: string
  company: CompanyInfo
  social: SocialLinks
  branding: Branding
  seo: SeoConfig
  navigation: NavLink[]
  footerNav: NavLink[]
  hero: HeroContent
  about: AboutContent
  stats: StatItem[]
  /** Optional press row — only add real, approved mentions. Empty = hidden. */
  press: PressItem[]
  services: ServiceItem[]
  projects: ProjectItem[]
  testimonials: TestimonialItem[]
  process: ProcessStep[]
  differentiators: Differentiator[]
  faqs: FaqItem[]
  ctas: CtaConfig
  sections: SectionsContent
  formEndpoint?: string
}
