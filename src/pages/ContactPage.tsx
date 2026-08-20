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
        eyebrow="Contact"
        title="Book a consultation."
        description="Share a few details about your space. Prefer messaging? WhatsApp is always available."
      />
      <Contact showMap />
      <FAQ />
    </PageContainer>
  )
}
