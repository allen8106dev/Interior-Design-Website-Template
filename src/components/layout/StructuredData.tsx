import { useEffect } from 'react'
import { siteConfig } from '@/data/siteConfig'
import { formatAddress } from '@/utils/site'
import { getAbsoluteAppUrl, getSiteOrigin, getAppBasePath } from '@/utils/basePath'

export function StructuredData() {
  useEffect(() => {
    const { company, seo, social, services } = siteConfig
    const sameAs = Object.values(social).filter(Boolean)
    const siteUrl = getAbsoluteAppUrl('/')
    const originBase = `${getSiteOrigin()}${getAppBasePath()}`

    const localBusiness = {
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      name: company.name,
      description: seo.defaultDescription,
      url: siteUrl,
      telephone: company.phone,
      email: company.email,
      image: seo.ogImage,
      address: {
        '@type': 'PostalAddress',
        streetAddress: [company.address.line1, company.address.line2].filter(Boolean).join(', '),
        addressLocality: company.address.city,
        addressRegion: company.address.state,
        postalCode: company.address.postalCode,
        addressCountry: company.address.country,
      },
      areaServed: company.serviceAreas,
      sameAs,
      foundingDate: String(company.foundedYear),
    }

    const organization = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: company.name,
      url: siteUrl,
      logo: siteConfig.branding.logoSrc
        ? siteConfig.branding.logoSrc.startsWith('http')
          ? siteConfig.branding.logoSrc
          : `${originBase}/${siteConfig.branding.logoSrc.replace(/^\//, '')}`
        : seo.ogImage,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: company.phone,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Marathi'],
      },
    }

    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: services.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name: service.title,
          description: service.shortDescription,
          provider: {
            '@type': 'Organization',
            name: company.name,
          },
          areaServed: formatAddress(),
        },
      })),
    }

    const scripts = [
      { id: 'ld-local', data: localBusiness },
      { id: 'ld-org', data: organization },
      { id: 'ld-services', data: serviceSchema },
    ]

    scripts.forEach(({ id, data }) => {
      let el = document.getElementById(id) as HTMLScriptElement | null
      if (!el) {
        el = document.createElement('script')
        el.type = 'application/ld+json'
        el.id = id
        document.head.appendChild(el)
      }
      el.textContent = JSON.stringify(data)
    })
  }, [])

  return null
}
