import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { buildPageTitle } from '@/utils/site'
import { siteConfig } from '@/data/siteConfig'

interface SeoProps {
  title?: string
  description?: string
  image?: string
  path?: string
  type?: 'website' | 'article'
  noIndex?: boolean
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function useSeo({
  title,
  description,
  image,
  path,
  type = 'website',
  noIndex = false,
}: SeoProps = {}) {
  const location = useLocation()
  const pagePath = path ?? location.pathname
  const canonical = `${siteConfig.seo.siteUrl.replace(/\/$/, '')}${pagePath === '/' ? '' : pagePath}`
  const pageTitle = buildPageTitle(title)
  const desc = description ?? siteConfig.seo.defaultDescription
  const ogImage = image ?? siteConfig.seo.ogImage

  useEffect(() => {
    document.title = pageTitle
    upsertMeta('name', 'description', desc)
    upsertMeta('name', 'robots', noIndex ? 'noindex,nofollow' : 'index,follow')
    upsertMeta('property', 'og:title', pageTitle)
    upsertMeta('property', 'og:description', desc)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:image', ogImage)
    upsertMeta('property', 'og:locale', siteConfig.seo.locale)
    upsertMeta('property', 'og:site_name', siteConfig.company.name)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', pageTitle)
    upsertMeta('name', 'twitter:description', desc)
    upsertMeta('name', 'twitter:image', ogImage)
    if (siteConfig.seo.twitterHandle) {
      upsertMeta('name', 'twitter:site', siteConfig.seo.twitterHandle)
    }
    upsertLink('canonical', canonical)
  }, [pageTitle, desc, ogImage, canonical, type, noIndex])
}
