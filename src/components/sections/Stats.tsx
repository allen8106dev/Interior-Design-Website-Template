import { siteConfig } from '@/data/siteConfig'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

export function Stats() {
  const { stats, sections } = siteConfig
  if (!stats.length) return null

  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]" aria-label="Studio highlights">
      <Container className="py-10 lg:py-12">
        {sections.statsNote ? (
          <p className="mb-6 text-center text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--color-ink-faint)]">
            {sections.statsNote}
          </p>
        ) : null}
        <ul className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delayMs={i * 60}>
              <li className="text-center lg:border-r lg:border-[var(--color-border)] lg:last:border-r-0">
                <p className="font-display text-4xl font-medium text-[var(--color-ink)] sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--color-ink-muted)]">
                  {stat.label}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
