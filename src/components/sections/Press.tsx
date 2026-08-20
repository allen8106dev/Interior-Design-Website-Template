/** Optional press / feature mentions. Renders nothing when `siteConfig.press` is empty. */

import { siteConfig } from '@/data/siteConfig'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

export function Press() {
  const { press } = siteConfig
  if (!press.length) return null

  return (
    <section
      className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-10 lg:py-12"
      aria-label="Features and mentions"
    >
      <Container>
        <Reveal>
          <p className="mb-6 text-center text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--color-ink-faint)]">
            Featured · demo placeholders — replace with approved credits only
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {press.map((item) => (
              <li key={item.id}>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-lg tracking-wide text-[var(--color-ink-muted)] transition hover:text-[var(--color-ink)] sm:text-xl"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="font-display text-lg tracking-wide text-[var(--color-ink-muted)] sm:text-xl">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
