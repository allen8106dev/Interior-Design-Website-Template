/**
 * =============================================================================
 * SITE CONFIGURATION — PRIMARY CUSTOMIZATION FILE
 * =============================================================================
 *
 * DEMO CONTENT — REPLACE BEFORE CLIENT DEPLOYMENT
 *
 * New client workflow:
 * 1. Copy this project
 * 2. Update company, branding, seo, ctas, and contact fields below
 * 3. Replace hero / about / project / service images
 * 4. Replace projects, services, testimonials, stats (verified numbers only)
 * 5. Sync branding colors in `src/index.css` (@theme)
 * 6. Set formEndpoint (optional) and deploy
 *
 * Do not hardcode company details inside React components — change them here.
 * =============================================================================
 */

import type { SiteConfig } from '@/types/site'

/** High-quality Unsplash demos — swap for client photography before launch. */
const images = {
  hero: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=80',
  about: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
  living: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80',
  kitchen: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=80',
  bedroom: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=80',
  villa: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
  dining: 'https://images.unsplash.com/photo-1617806118233-18e1de3d13f1?auto=format&fit=crop&w=1400&q=80',
  bathroom: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1400&q=80',
  office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
  detail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=80',
  corridor: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80',
  lounge: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
} as const

export const siteConfig: SiteConfig = {
  demoNotice:
    'DEMO CONTENT — REPLACE BEFORE CLIENT DEPLOYMENT. All company details, stats, projects, and testimonials are fictional placeholders.',

  company: {
    name: 'Atelier Habitat',
    shortName: 'Atelier Habitat',
    tagline: 'Thoughtful interiors, designed around you.',
    description:
      'Atelier Habitat is a fictional interior design studio creating calm, considered spaces for homes and workplaces across Pune and Maharashtra.',
    phone: '+919876543210',
    phoneDisplay: '+91 98765 43210',
    whatsapp: '919876543210',
    email: 'hello@atelierhabitat.demo',
    address: {
      line1: '12, Lane 3, Baner Road',
      line2: 'Near Balewadi High Street',
      city: 'Pune',
      state: 'Maharashtra',
      postalCode: '411045',
      country: 'India',
    },
    serviceAreas: ['Pune', 'Pimpri-Chinchwad', 'Wakad', 'Baner', 'Kothrud', 'Maharashtra'],
    foundedYear: 2014,
    mapLink: 'https://maps.google.com/?q=Baner+Road+Pune',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2!2d73.78!3d18.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMzJzAwLjAiTiA3M8KwNDYnNDguMCJF!5e0!3m2!1sen!2sin!4v1',
  },

  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    pinterest: 'https://pinterest.com/',
  },

  branding: {
    logoText: 'Atelier Habitat',
    primaryColor: '#2F3D36',
    accentColor: '#A67C52',
  },

  seo: {
    siteUrl: 'https://atelierhabitat.demo',
    defaultTitle: 'Atelier Habitat | Interior Design Studio in Pune',
    titleTemplate: '%s | Atelier Habitat',
    defaultDescription:
      'Premium residential and commercial interior design in Pune. Space planning, modular kitchens, and end-to-end execution by Atelier Habitat.',
    ogImage: images.hero,
    locale: 'en_IN',
  },

  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ],

  footerNav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],

  hero: {
    eyebrow: 'Interior Design Studio · Pune',
    headline: 'Thoughtful interiors, designed around you.',
    subheadline:
      'We craft calm, functional spaces for modern Indian homes — from first sketch to final handover — with clarity, craft, and care.',
    primaryCta: { label: 'Book a Consultation', href: '/contact' },
    secondaryCta: { label: 'View Our Projects', href: '/projects' },
    image: images.hero,
    imageAlt: 'Sunlit modern living room with soft neutrals and sculptural seating',
    indicator: { label: 'Projects completed', value: '150+' },
  },

  about: {
    eyebrow: 'About the studio',
    title: 'Spaces that feel personal, not performative.',
    paragraphs: [
      'Atelier Habitat is a fictional design studio built for this template. In a real deployment, this section introduces the firm’s story, values, and approach.',
      'We believe interiors should support how people actually live — quiet mornings, shared meals, focused work, and restful evenings — without visual noise.',
    ],
    philosophy:
      'Design philosophy: listen first, edit ruthlessly, and let material, light, and proportion do the quiet work.',
    image: images.about,
    imageAlt: 'Minimal interior corner with textured plaster walls and warm wood',
    ctaLabel: 'Our story',
    ctaHref: '/about',
  },

  /** DEMO STATS — replace with verified client numbers only. */
  stats: [
    { value: '10+', label: 'Years Experience' },
    { value: '150+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: 'Pune', label: '& Maharashtra' },
  ],

  /**
   * Press / features — leave empty unless you have real, approved mentions.
   * Do not invent awards or publications. Demo entries below are clearly labeled.
   */
  press: [
    { id: 'press-1', label: '[Demo] Local Design Journal' },
    { id: 'press-2', label: '[Demo] City Living Feature' },
    { id: 'press-3', label: '[Demo] Studio Spotlight' },
  ],

  services: [
    {
      id: 'svc-residential',
      slug: 'residential-interiors',
      title: 'Residential Interiors',
      shortDescription: 'Complete home interiors tailored to how your family lives.',
      description:
        'End-to-end residential design covering layouts, material palettes, furniture, lighting, and styling for apartments and houses.',
      icon: 'home',
      image: images.living,
    },
    {
      id: 'svc-kitchen',
      slug: 'modular-kitchens',
      title: 'Modular Kitchens',
      shortDescription: 'Efficient, beautiful kitchens designed around your cooking habits.',
      description:
        'Custom modular kitchen planning with storage strategy, appliance integration, durable finishes, and refined detailing.',
      icon: 'utensils',
      image: images.kitchen,
    },
    {
      id: 'svc-living',
      slug: 'living-room-design',
      title: 'Living Room Design',
      shortDescription: 'Gathering spaces that feel open, warm, and intentionally composed.',
      description:
        'Living and lounge design focused on conversation, comfort, natural light, and a clear visual hierarchy.',
      icon: 'sofa',
      image: images.lounge,
    },
    {
      id: 'svc-bedroom',
      slug: 'bedroom-interiors',
      title: 'Bedroom Interiors',
      shortDescription: 'Restful bedrooms with calm materials and smart storage.',
      description:
        'Bedroom suites designed for rest — soft palettes, layered lighting, wardrobe systems, and quiet detailing.',
      icon: 'bed',
      image: images.bedroom,
    },
    {
      id: 'svc-commercial',
      slug: 'commercial-interiors',
      title: 'Commercial Interiors',
      shortDescription: 'Workplaces and retail environments that feel considered and clear.',
      description:
        'Offices, studios, and boutique commercial spaces planned for brand presence, flow, and daily usability.',
      icon: 'building',
      image: images.office,
    },
    {
      id: 'svc-renovation',
      slug: 'renovation-remodeling',
      title: 'Renovation & Remodeling',
      shortDescription: 'Thoughtful upgrades that respect structure and elevate daily life.',
      description:
        'Selective renovation and remodeling for homes ready for a second chapter — clearer layouts and refined finishes.',
      icon: 'hammer',
      image: images.corridor,
    },
    {
      id: 'svc-planning',
      slug: 'space-planning',
      title: 'Space Planning',
      shortDescription: 'Layouts that unlock flow, storage, and natural light.',
      description:
        'Measured space planning and circulation studies that make compact homes feel generous and logical.',
      icon: 'layout',
      image: images.detail,
    },
    {
      id: 'svc-furniture',
      slug: 'custom-furniture',
      title: 'Custom Furniture',
      shortDescription: 'Made-to-measure pieces that fit your rooms precisely.',
      description:
        'Bespoke furniture and joinery designed as part of the architecture — not as afterthoughts.',
      icon: 'armchair',
      image: images.dining,
    },
  ],

  projects: [
    {
      id: 'proj-1',
      slug: 'modern-3bhk-pune',
      title: 'Modern 3BHK',
      location: 'Pune',
      category: 'Residential',
      year: 2024,
      coverImage: images.living,
      coverImageAlt: 'Open-plan living area with linen sofa and soft daylight',
      featured: true,
      area: '1,450 sq.ft',
      duration: '4 months',
      description:
        'A light-filled apartment designed for a young family — calm neutrals, generous storage, and rooms that flow without visual clutter.',
      challenge:
        'A typical builder layout with fragmented storage and limited natural light in the deeper zones of the home.',
      solution:
        'We opened key sightlines, introduced a muted material palette, and designed continuous joinery that absorbs daily clutter.',
      materials: ['European oak', 'Lime plaster', 'Belgian linen', 'Honed limestone'],
      designElements: ['Floor-to-ceiling joinery', 'Soft architectural lighting', 'Muted neutral palette'],
      servicesProvided: ['Residential Interiors', 'Space Planning', 'Custom Furniture'],
      gallery: [
        { src: images.living, alt: 'Living room seating arrangement' },
        { src: images.dining, alt: 'Dining area with sculptural pendant' },
        { src: images.kitchen, alt: 'Kitchen with warm timber cabinetry' },
        { src: images.bedroom, alt: 'Primary bedroom with soft textiles' },
        { src: images.detail, alt: 'Material and joinery detail' },
        { src: images.bathroom, alt: 'Bathroom with stone vanity' },
      ],
    },
    {
      id: 'proj-2',
      slug: 'minimalist-apartment-wakad',
      title: 'Minimalist Apartment',
      location: 'Wakad',
      category: 'Residential',
      year: 2023,
      coverImage: images.bedroom,
      coverImageAlt: 'Minimal bedroom with soft linen bedding',
      featured: true,
      area: '980 sq.ft',
      duration: '3 months',
      description:
        'A restrained apartment for a couple who wanted fewer things, better light, and rooms that feel unhurried.',
      challenge:
        'A compact footprint that needed to support work-from-home without feeling like an office.',
      solution:
        'We used a quiet palette, multi-use furniture, and carefully placed lighting to create soft zones within a single open plan.',
      materials: ['White oak', 'Cotton linen', 'Matte microcement'],
      designElements: ['Concealed storage', 'Work niche', 'Layered ambient lighting'],
      servicesProvided: ['Residential Interiors', 'Bedroom Interiors', 'Space Planning'],
      gallery: [
        { src: images.bedroom, alt: 'Bedroom overview' },
        { src: images.about, alt: 'Textured wall and seating niche' },
        { src: images.detail, alt: 'Furniture detail' },
        { src: images.corridor, alt: 'Hallway with concealed storage' },
      ],
    },
    {
      id: 'proj-3',
      slug: 'contemporary-villa-baner',
      title: 'Contemporary Villa',
      location: 'Baner',
      category: 'Residential',
      year: 2024,
      coverImage: images.villa,
      coverImageAlt: 'Contemporary villa living space with double-height volume',
      featured: true,
      area: '3,200 sq.ft',
      duration: '7 months',
      description:
        'A villa interior balancing architectural scale with intimate, livable rooms — stone, timber, and soft textiles throughout.',
      challenge:
        'Large volumes that risked feeling cold or impersonal without careful layering.',
      solution:
        'We introduced warm materials at human scale, defined seating zones, and used lighting to soften vertical proportions.',
      materials: ['Italian marble', 'Teak', 'Bouclé textiles', 'Brushed brass'],
      designElements: ['Double-height living', 'Zoning with soft furniture', 'Warm vertical lighting'],
      servicesProvided: ['Residential Interiors', 'Custom Furniture', 'Living Room Design'],
      gallery: [
        { src: images.villa, alt: 'Villa living volume' },
        { src: images.lounge, alt: 'Lounge seating' },
        { src: images.dining, alt: 'Formal dining' },
        { src: images.kitchen, alt: 'Open kitchen' },
        { src: images.bedroom, alt: 'Suite bedroom' },
        { src: images.bathroom, alt: 'Spa bathroom' },
      ],
    },
    {
      id: 'proj-4',
      slug: 'luxury-kitchen-kothrud',
      title: 'Luxury Kitchen',
      location: 'Kothrud',
      category: 'Kitchen',
      year: 2023,
      coverImage: images.kitchen,
      coverImageAlt: 'Luxury modular kitchen with stone counters',
      featured: true,
      area: '220 sq.ft',
      duration: '8 weeks',
      description:
        'A kitchen renovation focused on workflow, durable surfaces, and a refined material story that connects to the adjacent dining room.',
      challenge:
        'An outdated U-shaped kitchen with poor appliance placement and insufficient pantry storage.',
      solution:
        'A reconfigured layout with a central prep zone, tall pantry wall, and continuous stone surfaces for a calm, luxury finish.',
      materials: ['Quartzite', 'Walnut veneer', 'Soft-close hardware'],
      designElements: ['Tall pantry wall', 'Continuous stone counters', 'Integrated appliance bank'],
      servicesProvided: ['Modular Kitchens', 'Renovation & Remodeling'],
      gallery: [
        { src: images.kitchen, alt: 'Kitchen overview' },
        { src: images.dining, alt: 'Connected dining space' },
        { src: images.detail, alt: 'Hardware and finish detail' },
      ],
    },
    {
      id: 'proj-5',
      slug: 'boutique-studio-office',
      title: 'Boutique Studio Office',
      location: 'Pune',
      category: 'Commercial',
      year: 2022,
      coverImage: images.office,
      coverImageAlt: 'Bright commercial studio with timber desks',
      featured: false,
      area: '1,100 sq.ft',
      duration: '10 weeks',
      description:
        'A compact creative office designed for focus and collaboration — clear zoning, acoustic softness, and brand-aligned materials.',
      challenge:
        'An open floor plate that needed private focus areas without building heavy partitions.',
      solution:
        'We used low furniture, soft screening, and lighting layers to create distinct work modes within one volume.',
      materials: ['Ash timber', 'Acoustic felt', 'Porcelain tile'],
      designElements: ['Soft screening', 'Focus pods', 'Brand-aligned palette'],
      servicesProvided: ['Commercial Interiors', 'Space Planning', 'Custom Furniture'],
      gallery: [
        { src: images.office, alt: 'Open work area' },
        { src: images.corridor, alt: 'Circulation and meeting nook' },
        { src: images.detail, alt: 'Joinery detail' },
      ],
    },
    {
      id: 'proj-6',
      slug: 'calm-bathroom-suite',
      title: 'Calm Bathroom Suite',
      location: 'Baner',
      category: 'Renovation',
      year: 2023,
      coverImage: images.bathroom,
      coverImageAlt: 'Spa-like bathroom with stone vanity',
      featured: false,
      area: '95 sq.ft',
      duration: '5 weeks',
      description:
        'A bathroom remodel centered on stone, soft lighting, and a spa-like daily ritual for a primary suite.',
      challenge:
        'A dated layout with awkward wet areas and insufficient storage.',
      solution:
        'We reorganized wet and dry zones, introduced a floating vanity, and selected materials that feel calm under warm light.',
      materials: ['Travertine', 'Matte porcelain', 'Brushed nickel'],
      designElements: ['Floating vanity', 'Wet/dry zoning', 'Warm recessed lighting'],
      servicesProvided: ['Renovation & Remodeling'],
      gallery: [
        { src: images.bathroom, alt: 'Bathroom vanity' },
        { src: images.detail, alt: 'Material close-up' },
        { src: images.about, alt: 'Adjacent dressing area' },
      ],
    },
  ],

  /** DEMO TESTIMONIALS — replace with real client permission before publishing. */
  testimonials: [
    {
      id: 't-1',
      name: 'Demo Client A',
      location: 'Baner, Pune',
      projectType: '3BHK Interior',
      rating: 5,
      review:
        '[DEMO REVIEW] Replace with a real client testimonial. The studio listened carefully, presented clear options, and the finished home feels calm and practical.',
    },
    {
      id: 't-2',
      name: 'Demo Client B',
      location: 'Wakad',
      projectType: 'Apartment Remodel',
      rating: 5,
      review:
        '[DEMO REVIEW] Replace before launch. Communication stayed transparent throughout execution, and the detailing exceeded what we expected for the timeline.',
    },
    {
      id: 't-3',
      name: 'Demo Client C',
      location: 'Kothrud',
      projectType: 'Kitchen Renovation',
      rating: 5,
      review:
        '[DEMO REVIEW] Placeholder only. The kitchen workflow is dramatically better, and the materials still look refined after daily use.',
    },
  ],

  process: [
    {
      id: 'p-1',
      step: 1,
      title: 'Consultation',
      description: 'We learn how you live, review your space, and align on priorities, budget direction, and timeline.',
    },
    {
      id: 'p-2',
      step: 2,
      title: 'Concept & Planning',
      description: 'Mood, layout options, and material direction come together so decisions feel clear before detailing begins.',
    },
    {
      id: 'p-3',
      step: 3,
      title: 'Design Development',
      description: 'Drawings, finishes, furniture, and lighting are refined into a complete, buildable design package.',
    },
    {
      id: 'p-4',
      step: 4,
      title: 'Execution',
      description: 'Site coordination, quality checks, and progress reviews keep the build aligned with the approved design.',
    },
    {
      id: 'p-5',
      step: 5,
      title: 'Final Handover',
      description: 'Styling, snagging, and a walkthrough ensure the space is ready for everyday life.',
    },
  ],

  differentiators: [
    {
      id: 'd-1',
      title: 'Personalized Design',
      description: 'Every project starts with how you actually live — not a recycled mood board.',
      icon: 'sparkles',
    },
    {
      id: 'd-2',
      title: 'Transparent Process',
      description: 'Clear stages, documented decisions, and no surprise detours mid-project.',
      icon: 'list-checks',
    },
    {
      id: 'd-3',
      title: 'Quality Materials',
      description: 'Finishes and furnishings selected for longevity, not short-lived trends.',
      icon: 'gem',
    },
    {
      id: 'd-4',
      title: 'Experienced Team',
      description: 'Designers and site coordinators who understand both aesthetics and execution.',
      icon: 'users',
    },
    {
      id: 'd-5',
      title: 'End-to-End Execution',
      description: 'From concept through handover, one accountable studio leads the work.',
      icon: 'route',
    },
    {
      id: 'd-6',
      title: 'Attention to Detail',
      description: 'Joinery, lighting, and proportion receive the same care as the hero rooms.',
      icon: 'focus',
    },
  ],

  faqs: [
    {
      id: 'faq-1',
      question: 'How does the design process work?',
      answer:
        'We begin with a consultation, move into concept and planning, develop detailed drawings and finishes, coordinate execution, and close with a final handover walkthrough.',
    },
    {
      id: 'faq-2',
      question: 'What areas do you serve?',
      answer:
        'This demo studio lists Pune, Pimpri-Chinchwad, Wakad, Baner, Kothrud, and wider Maharashtra. Update service areas in siteConfig for each client.',
    },
    {
      id: 'faq-3',
      question: 'Do you handle execution?',
      answer:
        'Yes — the template positions the studio for end-to-end delivery, including site coordination and quality reviews. Adjust this answer if a client offers design-only services.',
    },
    {
      id: 'faq-4',
      question: 'How long does an interior project take?',
      answer:
        'Timelines vary by scope. A focused room refresh may take weeks; a full apartment or villa interior often spans a few months from concept to handover.',
    },
    {
      id: 'faq-5',
      question: 'Do you provide 3D visualizations?',
      answer:
        'Most projects include visualizations to help clients approve layouts and material direction before execution begins. Confirm deliverables per client package.',
    },
    {
      id: 'faq-6',
      question: 'How do consultations work?',
      answer:
        'Book a consultation via the contact form, phone, or WhatsApp. We discuss your space, goals, and next steps — with no obligation to proceed.',
    },
  ],

  ctas: {
    primary: { label: 'Book a Consultation', href: '/contact' },
    secondary: { label: 'View Our Projects', href: '/projects' },
    whatsapp: { label: 'WhatsApp Us' },
    consultation: { label: 'Book a Consultation', href: '/contact' },
    enquire: { label: 'Enquire Now', href: '/contact' },
    startProject: { label: 'Start Your Project', href: '/contact' },
  },

  sections: {
    featuredProjects: {
      eyebrow: 'Selected work',
      title: 'Interiors that feel lived-in from day one.',
      description:
        'Demo projects for layout and storytelling — replace with your client’s real photography and case studies.',
      viewAllLabel: 'View all projects',
    },
    services: {
      eyebrow: 'What we do',
      title: 'Services shaped around real homes and workplaces.',
      description:
        'From first layout decisions to custom joinery and full execution — configured entirely from siteConfig.',
    },
    process: {
      eyebrow: 'How we work',
      title: 'A clear process from first conversation to handover.',
      description:
        'Clients buy confidence as much as design. This sequence keeps decisions calm and accountable.',
    },
    whyChooseUs: {
      eyebrow: 'Why choose us',
      title: 'Design discipline with delivery you can trust.',
      description:
        'Differentiators are fully configurable — tailor this list to each studio’s real strengths.',
    },
    testimonials: {
      eyebrow: 'Client voices',
      title: 'What collaboration can feel like.',
      description:
        'DEMO TESTIMONIALS — replace with real reviews and written permission before client deployment.',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Answers before the first site visit.',
      description: 'Common questions interior clients ask — edit freely in siteConfig.faqs.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s talk about your project.',
      description: 'Call, WhatsApp, or send a short brief — whichever feels easiest.',
    },
    cta: {
      eyebrow: 'Start a conversation',
      title: 'Ready to start your project?',
      description:
        'Tell us about your home or workplace. We’ll help you understand scope, timeline, and the right next step.',
    },
    statsNote: 'Demo stats — replace with verified figures',
    projectsPage: {
      eyebrow: 'Projects',
      title: 'A selection of spaces we’ve shaped.',
      description:
        'DEMO PROJECTS — replace covers, galleries, and case-study copy with real client work before deployment.',
    },
    servicesPage: {
      eyebrow: 'Services',
      title: 'Design services for homes and workplaces.',
      description:
        'Explore how we plan, design, and execute interiors — from single rooms to full residences.',
    },
    contactPage: {
      eyebrow: 'Contact',
      title: 'Book a consultation or send an enquiry.',
      description:
        'Share a few details about your space — or message us on WhatsApp for a faster start.',
    },
  },

  /** Leave empty to use the built-in mock submitter. Set to Formspree/EmailJS URL later. */
  formEndpoint: '',
}

export default siteConfig
