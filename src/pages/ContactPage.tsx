import { PageContainer } from '@/components/layout/PageContainer'
import { PageHero } from '@/components/sections/PageHero'
import { Contact } from '@/components/sections/Contact'
import { FAQ } from '@/components/sections/FAQ'
import { useSeo } from '@/hooks/useSeo'
import { siteConfig } from '@/data/siteConfig'

export function ContactPage() {
  useSeo({
    title: 'Contact',
    description: `Book a consultation with ${siteConfig.company.name}. Call, WhatsApp, or send an enquiry.`,
    path: '/contact',
  })

  return (
    <PageContainer>
      <PageHero
        eyebrow={siteConfig.sections.contactPage.eyebrow}
        title={siteConfig.sections.contactPage.title}
        description={siteConfig.sections.contactPage.description}
      />
      <Contact showMap />
      <FAQ />
    </PageContainer>
  )
}
