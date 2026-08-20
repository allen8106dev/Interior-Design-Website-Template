import { siteConfig } from '@/data/siteConfig'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function WhyChooseUs() {
  const { differentiators } = siteConfig

  return (
    <section className="py-20 lg:py-28" aria-labelledby="why-heading">
      <Container>
        <SectionHeading
          eyebrow="Why choose us"
          title="Design discipline with delivery you can trust."
          description="Differentiators are fully configurable — tailor this list to each studio’s real strengths."
          className="mb-12 sm:mb-14"
          titleAs="h2"
        />
        <h2 id="why-heading" className="sr-only">
          Why choose us
        </h2>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {differentiators.map((item, index) => (
            <Reveal key={item.id} delayMs={index * 50}>
              <li className="border-t border-[var(--color-border)] pt-6">
                <div className="mb-4 text-[var(--color-accent)]">
                  <Icon name={item.icon} size={24} />
                </div>
                <h3 className="font-display text-2xl text-[var(--color-ink)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)] sm:text-base">
                  {item.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
