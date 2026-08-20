import { MessageCircle } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { getWhatsAppUrl } from '@/utils/site'

interface CTAProps {
  title?: string
  description?: string
}

export function CTA({ title, description }: CTAProps) {
  const copy = siteConfig.sections.cta

  return (
    <section className="relative overflow-hidden bg-[var(--color-accent)] py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-black/10" />
      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/60">
              {copy.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium text-balance sm:text-4xl lg:text-5xl">
              {title ?? copy.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              {description ?? copy.description}
            </p>
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Button
                href={siteConfig.ctas.startProject.href}
                variant="secondary"
                size="lg"
                className="w-full bg-white text-[var(--color-ink)] hover:bg-[var(--color-canvas)] sm:w-auto"
              >
                {siteConfig.ctas.startProject.label}
              </Button>
              <Button
                href={getWhatsAppUrl()}
                external
                variant="outline"
                size="lg"
                className="w-full border-white/40 text-white hover:bg-white hover:text-[var(--color-ink)] sm:w-auto"
                icon={<MessageCircle size={18} />}
              >
                {siteConfig.ctas.whatsapp.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
