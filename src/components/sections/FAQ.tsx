import { siteConfig } from '@/data/siteConfig'
import { Accordion } from '@/components/ui/Accordion'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function FAQ() {
  return (
    <section className="bg-[var(--color-surface)] py-20 lg:py-28" aria-labelledby="faq-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow={siteConfig.sections.faq.eyebrow}
              title={siteConfig.sections.faq.title}
              description={siteConfig.sections.faq.description}
              titleAs="h2"
            />
            <h2 id="faq-heading" className="sr-only">
              Frequently asked questions
            </h2>
          </Reveal>
          <Reveal delayMs={100}>
            <Accordion items={siteConfig.faqs} />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
