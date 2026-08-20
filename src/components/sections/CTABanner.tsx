import { ArrowRight, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { getWhatsAppUrl } from '@/utils/site'

interface CTAProps {
  title?: string
  description?: string
}

export function CTA({
  title = 'Ready to reshape your space?',
  description = 'Tell us about your home or workplace. We’ll help you understand scope, timeline, and the right next step.',
}: CTAProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--color-accent)] py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-black/10" />
      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/60">
              Start a conversation
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium text-balance sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              {description}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href={siteConfig.ctas.consultation.href}
                variant="secondary"
                size="lg"
                className="bg-white text-[var(--color-ink)] hover:bg-[var(--color-canvas)]"
                icon={<ArrowRight size={18} />}
              >
                {siteConfig.ctas.consultation.label}
              </Button>
              <Button
                href={getWhatsAppUrl()}
                external
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white hover:text-[var(--color-ink)]"
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
