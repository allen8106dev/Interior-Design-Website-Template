import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ImageWithFallback } from '@/components/ui/ImageWithFallback'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

interface AboutProps {
  compact?: boolean
}

export function About({ compact = false }: AboutProps) {
  const { about } = siteConfig

  return (
    <section className="py-20 lg:py-28" aria-labelledby="about-heading">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[var(--radius-lg)]">
                <ImageWithFallback
                  src={about.image}
                  alt={about.imageAlt}
                  className="aspect-[4/5] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 hidden max-w-[220px] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-soft)] md:block">
                <p className="font-display text-lg leading-snug text-[var(--color-ink)]">
                  Est. {siteConfig.company.foundedYear}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[var(--color-ink-muted)]">
                  {siteConfig.company.address.city}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div>
              <SectionHeading
                eyebrow={about.eyebrow}
                title={about.title}
                titleAs="h2"
              />
              <div id="about-heading" className="sr-only">
                {about.title}
              </div>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--color-ink-muted)] sm:text-lg">
                {about.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              {!compact ? (
                <blockquote className="mt-8 border-l-2 border-[var(--color-accent)] pl-5 font-display text-xl italic leading-relaxed text-[var(--color-ink-soft)]">
                  {about.philosophy}
                </blockquote>
              ) : null}
              <div className="mt-8">
                <Button href={about.ctaHref} variant="outline" icon={<ArrowRight size={16} />}>
                  {about.ctaLabel}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
