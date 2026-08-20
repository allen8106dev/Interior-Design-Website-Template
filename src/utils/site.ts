import { siteConfig } from '@/data/siteConfig'
import type { ProjectItem, ServiceItem } from '@/types/site'

export function getWhatsAppUrl(message?: string): string {
  const phone = siteConfig.company.whatsapp.replace(/\D/g, '')
  const text = encodeURIComponent(
    message ??
      `Hello ${siteConfig.company.name}, I would like to discuss an interior design project.`,
  )
  return `https://wa.me/${phone}?text=${text}`
}

export function getTelUrl(): string {
  return `tel:${siteConfig.company.phone}`
}

export function getMailtoUrl(subject?: string): string {
  const base = `mailto:${siteConfig.company.email}`
  if (!subject) return base
  return `${base}?subject=${encodeURIComponent(subject)}`
}

export function formatAddress(): string {
  const { address } = siteConfig.company
  return [address.line1, address.line2, `${address.city}, ${address.state} ${address.postalCode}`, address.country]
    .filter(Boolean)
    .join(', ')
}

export function getFeaturedProjects(limit = 4): ProjectItem[] {
  const featured = siteConfig.projects.filter((p) => p.featured)
  const list = featured.length > 0 ? featured : siteConfig.projects
  return list.slice(0, limit)
}

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return siteConfig.projects.find((p) => p.slug === slug)
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return siteConfig.services.find((s) => s.slug === slug)
}

export function buildPageTitle(pageTitle?: string): string {
  if (!pageTitle) return siteConfig.seo.defaultTitle
  return siteConfig.seo.titleTemplate.replace('%s', pageTitle)
}

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}
