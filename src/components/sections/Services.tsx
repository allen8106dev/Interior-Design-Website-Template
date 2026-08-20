import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '@/data/siteConfig'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { ServiceItem } from '@/types/site'

interface ServicesProps {
  limit?: number
  showHeading?: boolean
}

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  return (
    <Reveal delayMs={index * 50}>
      <article className="group h-full border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-soft)] sm:p-7">
        <div className="mb-5 flex h-11 w-11 items-center justify-center border border-[var(--color-border)] text-[var(--color-accent)] transition group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white">
          <Icon name={service.icon} size={20} />
        </div>
        <h3 className="font-display text-2xl font-medium text-[var(--color-ink)]">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)] sm:text-base">
          {service.shortDescription}
        </p>
        <Link
          to="/services"
          className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] transition group-hover:gap-2"
        >
          Learn more
          <ArrowUpRight size={16} />
        </Link>
      </article>
    </Reveal>
  )
}

export function Services({ limit, showHeading = true }: ServicesProps) {
  const list = limit ? siteConfig.services.slice(0, limit) : siteConfig.services

  if (!list.length) {
    return (
      <section className="py-20">
        <Container>
          <p className="text-[var(--color-ink-muted)]">Services will appear here once configured.</p>
        </Container>
      </section>
    )
  }

  return (
    <section className="bg-[var(--color-canvas-muted)] py-20 lg:py-28" aria-labelledby="services-heading">
      <Container>
        {showHeading ? (
          <div className="mb-12 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow={siteConfig.sections.services.eyebrow}
              title={siteConfig.sections.services.title}
              description={siteConfig.sections.services.description}
              titleAs="h2"
            />
            <Link
              to="/services"
              id="services-heading"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-[var(--color-accent)] transition hover:gap-3"
            >
              All services
              <ArrowUpRight size={16} />
            </Link>
          </div>
        ) : null}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {list.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}
