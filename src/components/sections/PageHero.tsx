import { Container } from '@/components/ui/Container'

interface PageHeroProps {
  eyebrow?: string
  title: string
  description?: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-canvas-muted)] pt-16 pb-14 lg:pt-20 lg:pb-16">
      <Container>
        {eyebrow ? (
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-ink-muted)]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-4xl font-display text-4xl font-medium leading-[1.1] text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-ink-muted)] sm:text-lg">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  )
}
