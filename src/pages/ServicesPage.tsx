import { PageContainer } from '@/components/layout/PageContainer'
import { PageHero } from '@/components/sections/PageHero'
import { Process } from '@/components/sections/Process'
import { CTA } from '@/components/sections/CTA'
import { useSeo } from '@/hooks/useSeo'
import { siteConfig } from '@/data/siteConfig'
import { Container } from '@/components/ui/Container'
import { ImageWithFallback } from '@/components/ui/ImageWithFallback'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'

export function ServicesPage() {
  useSeo({
    title: 'Services',
    description: `Interior design services by ${siteConfig.company.name}: residential, kitchens, commercial, renovation, and custom furniture.`,
    path: '/services',
  })

  return (
    <PageContainer>
      <PageHero
        eyebrow={siteConfig.sections.servicesPage.eyebrow}
        title={siteConfig.sections.servicesPage.title}
        description={siteConfig.sections.servicesPage.description}
      />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="space-y-16 lg:space-y-20">
            {siteConfig.services.map((service, index) => (
              <Reveal key={service.id}>
                <article
                  id={service.slug}
                  className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
                >
                  <div
                    className={`overflow-hidden rounded-[var(--radius-md)] bg-[var(--color-canvas-muted)] ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  >
                    <ImageWithFallback
                      src={service.image ?? siteConfig.hero.image}
                      alt={service.title}
                      className="aspect-[16/11] w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div>
                    <div className="mb-4 text-[var(--color-accent)]">
                      <Icon name={service.icon} size={28} />
                    </div>
                    <h2 className="font-display text-3xl text-[var(--color-ink)] sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-muted)] sm:text-lg">
                      {service.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Process />
      <CTA title="Not sure which service you need?" description="Share a few photos and goals — we’ll recommend a sensible starting point." />
    </PageContainer>
  )
}
