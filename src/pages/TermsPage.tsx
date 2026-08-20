import { PageContainer } from '@/components/layout/PageContainer'
import { PageHero } from '@/components/sections/PageHero'
import { Container } from '@/components/ui/Container'
import { useSeo } from '@/hooks/useSeo'
import { siteConfig } from '@/data/siteConfig'

export function TermsPage() {
  useSeo({
    title: 'Terms',
    description: `Terms of use placeholder for ${siteConfig.company.name}.`,
    path: '/terms',
    noIndex: true,
  })

  return (
    <PageContainer>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="Placeholder page — replace with counsel-approved terms before client launch."
      />
      <Container narrow className="space-y-5 py-16 leading-relaxed text-[var(--color-ink-muted)]">
        <p>
          These placeholder terms apply to the demo website for {siteConfig.company.name}. Replace
          them with terms appropriate to the client’s services, jurisdiction, and booking practices.
        </p>
        <p>
          Suggested topics: website use, intellectual property of project imagery, limitation of
          liability for online content, and how project contracts supersede website copy.
        </p>
      </Container>
    </PageContainer>
  )
}
