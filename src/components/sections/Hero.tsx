import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ImageWithFallback } from '@/components/ui/ImageWithFallback'
import { Reveal } from '@/components/ui/Reveal'

export function Hero() {
  const { hero } = siteConfig

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[var(--color-ink)] text-[var(--color-canvas)]">
      <div className="absolute inset-0">
        <ImageWithFallback
          src={hero.image}
          alt={hero.imageAlt}
          loading="eager"
          fetchPriority="high"
          className="h-full w-full scale-105 object-cover opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(28_27_26/0.82)] via-[rgb(28_27_26/0.55)] to-[rgb(28_27_26/0.25)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(28_27_26/0.75)] via-transparent to-[rgb(28_27_26/0.35)]" />
      </div>

      <Container className="relative flex min-h-[100svh] flex-col justify-end pb-16 pt-32 sm:pb-20 lg:justify-center lg:pb-24 lg:pt-28">
        <Reveal>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-white/70">
            {hero.eyebrow}
          </p>
        </Reveal>
        <Reveal delayMs={80}>
          <h1 className="max-w-4xl font-display text-[2.75rem] font-medium leading-[1.05] text-balance sm:text-5xl md:text-6xl lg:text-[4.5rem]">
            {siteConfig.company.name}
          </h1>
        </Reveal>
        <Reveal delayMs={140}>
          <p className="mt-4 max-w-2xl font-display text-2xl font-normal italic leading-snug text-white/90 sm:text-3xl lg:text-[2.15rem]">
            {hero.headline}
          </p>
        </Reveal>
        <Reveal delayMs={200}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {hero.subheadline}
          </p>
        </Reveal>
        <Reveal delayMs={260}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={hero.primaryCta.href} variant="primary" size="lg" icon={<ArrowRight size={18} />}>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="outline" size="lg" className="border-white/50 text-white hover:bg-white hover:text-[var(--color-ink)]">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </Reveal>

        {hero.indicator ? (
          <Reveal delayMs={320}>
            <div className="mt-14 inline-flex items-baseline gap-3 border-t border-white/20 pt-6">
              <span className="font-display text-4xl text-white">{hero.indicator.value}</span>
              <span className="text-sm uppercase tracking-[0.18em] text-white/55">
                {hero.indicator.label}
              </span>
            </div>
          </Reveal>
        ) : null}
      </Container>
    </section>
  )
}
