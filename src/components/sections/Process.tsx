import { siteConfig } from '@/data/siteConfig'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Process() {
  const { process } = siteConfig

  return (
    <section className="py-20 lg:py-28" aria-labelledby="process-heading">
      <Container>
        <SectionHeading
          eyebrow={siteConfig.sections.process.eyebrow}
          title={siteConfig.sections.process.title}
          description={siteConfig.sections.process.description}
          className="mb-12 sm:mb-14"
          titleAs="h2"
        />
        <h2 id="process-heading" className="sr-only">
          Design process
        </h2>

        <ol className="relative grid gap-0 md:grid-cols-5">
          {process.map((step, index) => (
            <Reveal key={step.id} delayMs={index * 70}>
              <li className="relative border-t border-[var(--color-border)] pt-6 md:border-t-0 md:border-l md:px-5 md:pt-0 md:first:border-l-0 md:first:pl-0">
                <span className="font-display text-4xl text-[var(--color-accent-soft)] md:text-5xl">
                  {String(step.step).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-xl text-[var(--color-ink)] sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
