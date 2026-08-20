import { PageContainer } from '@/components/layout/PageContainer'
import { PageHero } from '@/components/sections/PageHero'
import { Container } from '@/components/ui/Container'
import { useSeo } from '@/hooks/useSeo'
import { siteConfig } from '@/data/siteConfig'

export function PrivacyPage() {
  useSeo({
    title: 'Privacy Policy',
    description: `Privacy policy placeholder for ${siteConfig.company.name}.`,
    path: '/privacy',
    noIndex: true,
  })

  return (
    <PageContainer>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Placeholder page — replace with counsel-approved privacy copy before client launch."
      />
      <Container narrow className="py-16 prose-like space-y-5 text-[var(--color-ink-muted)] leading-relaxed">
        <p>
          This is a template privacy policy placeholder for {siteConfig.company.name}. It does not
          constitute legal advice. Replace this content with a policy that reflects how the client
          actually collects, stores, and processes enquiry data.
        </p>
        <p>
          Typical sections include: what information is collected via forms, how contact details are
          used, cookie usage (if any), third-party processors (Formspree, analytics), retention
          periods, and user rights.
        </p>
        <p>
          Contact: <a href={`mailto:${siteConfig.company.email}`}>{siteConfig.company.email}</a>
        </p>
      </Container>
    </PageContainer>
  )
}
