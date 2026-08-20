import { PageContainer } from '@/components/layout/PageContainer'
import { PageHero } from '@/components/sections/PageHero'
import { About } from '@/components/sections/About'
import { Stats } from '@/components/sections/Stats'
import { Process } from '@/components/sections/Process'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { CTA } from '@/components/sections/CTA'
import { useSeo } from '@/hooks/useSeo'
import { siteConfig } from '@/data/siteConfig'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

export function AboutPage() {
  useSeo({
    title: 'About',
    description: `Learn about ${siteConfig.company.name} — design philosophy, process, and approach to residential and commercial interiors.`,
    path: '/about',
  })

  return (
    <PageContainer>
      <PageHero
        eyebrow="About"
        title={`The studio behind ${siteConfig.company.name}.`}
        description={siteConfig.company.description}
      />
      <About />
      <Stats />
      <section className="bg-[var(--color-canvas-muted)] py-20 lg:py-24">
        <Container narrow>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-muted)]">Service areas</p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {siteConfig.company.serviceAreas.map((area) => (
                <li
                  key={area}
                  className="border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-ink-soft)]"
                >
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>
      <Process />
      <WhyChooseUs />
      <CTA title="Want to know if we’re the right fit?" />
    </PageContainer>
  )
}
