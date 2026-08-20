/**
 * Deployment-agnostic public URL helpers.
 *
 * With Vite `base: './'` and HashRouter, the same build works at domain root,
 * under a GitHub Pages repo subpath, and on typical static hosts — without
 * changing source or vite config per deploy.
 */

import { siteConfig } from '@/data/siteConfig'

/** Origin of the running site, falling back to configured SEO siteUrl. */
export function getSiteOrigin(): string {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin
  }
  return siteConfig.seo.siteUrl.replace(/\/$/, '')
}

/**
 * Path to the directory that serves index.html (no trailing slash), e.g.
 * "" for https://example.com/ or "/my-repo" for GitHub Pages project sites.
 */
export function getAppBasePath(): string {
  if (typeof window === 'undefined') return ''

  const { pathname } = window.location
  // Strip a trailing index.html if present
  const cleaned = pathname.replace(/\/index\.html$/i, '/')
  // HashRouter keeps the document path at the app root (plus optional trailing slash)
  if (cleaned === '/' || cleaned === '') return ''
  return cleaned.replace(/\/$/, '')
}

/** Absolute URL for a router path such as "/" or "/projects/foo". */
export function getAbsoluteAppUrl(routePath = '/'): string {
  const origin = getSiteOrigin()
  const basePath = getAppBasePath()
  const normalized =
    !routePath || routePath === '/'
      ? '/'
      : routePath.startsWith('/')
        ? routePath
        : `/${routePath}`

  // Hash URLs keep assets resolving from the app root on every host.
  if (normalized === '/') {
    return `${origin}${basePath}/`
  }
  return `${origin}${basePath}/#${normalized}`
}

/**
 * Resolve a file from `public/` in a base-safe way (dev + production).
 * Pass paths like "favicon.svg" or "/favicon.svg".
 */
export function publicUrl(filePath: string): string {
  const cleaned = filePath.replace(/^\//, '')
  const base = import.meta.env.BASE_URL
  // BASE_URL is "/" in some contexts and "./" when using relative base
  if (base === './' || base === '.') {
    return `./${cleaned}`
  }
  const prefix = base.endsWith('/') ? base : `${base}/`
  return `${prefix}${cleaned}`
}
