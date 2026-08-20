import { Quote } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Testimonials() {
  const { testimonials } = siteConfig

  if (!testimonials.length) {
    return (
      <section className="bg-[var(--color-canvas-muted)] py-20">
        <Container>
          <p className="text-[var(--color-ink-muted)]">
            Testimonials will appear here once you add approved client reviews.
          </p>
        </Container>
      </section>
    )
  }

  return (
    <section className="bg-[var(--color-canvas-muted)] py-20 lg:py-28" aria-labelledby="testimonials-heading">
      <Container>
        <SectionHeading
          eyebrow={siteConfig.sections.testimonials.eyebrow}
          title={siteConfig.sections.testimonials.title}
          description={siteConfig.sections.testimonials.description}
          className="mb-12 sm:mb-14"
          titleAs="h2"
        />
        <h2 id="testimonials-heading" className="sr-only">
          Testimonials
        </h2>

        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((item, index) => (
            <Reveal key={item.id} delayMs={index * 80}>
              <figure className="flex h-full flex-col border border-[var(--color-border)] bg-[var(--color-surface)] p-7">
                <Quote className="text-[var(--color-warm)]" size={28} strokeWidth={1.25} aria-hidden />
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-[var(--color-ink-soft)]">
                  {item.review}
                </blockquote>
                <figcaption className="mt-8 border-t border-[var(--color-border)] pt-5">
                  <p className="font-medium text-[var(--color-ink)]">{item.name}</p>
                  <p className="mt-1 text-sm text-[var(--color-ink-muted)]">
                    {[item.location, item.projectType].filter(Boolean).join(' · ')}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
