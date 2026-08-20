import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react'
import { PageContainer } from '@/components/layout/PageContainer'
import { CTA } from '@/components/sections/CTA'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Gallery } from '@/components/ui/Gallery'
import { ImageWithFallback } from '@/components/ui/ImageWithFallback'
import { Reveal } from '@/components/ui/Reveal'
import { useSeo } from '@/hooks/useSeo'
import { siteConfig } from '@/data/siteConfig'
import { getProjectBySlug, getWhatsAppUrl } from '@/utils/site'
import { getAbsoluteAppUrl } from '@/utils/basePath'
import { useEffect } from 'react'

export function ProjectDetailsPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  useSeo({
    title: project?.title ?? 'Project',
    description: project?.description ?? siteConfig.seo.defaultDescription,
    image: project?.coverImage,
    path: project ? `/projects/${project.slug}` : '/projects',
    noIndex: !project,
  })

  useEffect(() => {
    if (!project) return
    const breadcrumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: getAbsoluteAppUrl('/') },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Projects',
          item: getAbsoluteAppUrl('/projects'),
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: project.title,
          item: getAbsoluteAppUrl(`/projects/${project.slug}`),
        },
      ],
    }
    let el = document.getElementById('ld-breadcrumb') as HTMLScriptElement | null
    if (!el) {
      el = document.createElement('script')
      el.type = 'application/ld+json'
      el.id = 'ld-breadcrumb'
      document.head.appendChild(el)
    }
    el.textContent = JSON.stringify(breadcrumb)
    return () => {
      el?.remove()
    }
  }, [project])

  if (!project) {
    return (
      <PageContainer>
        <Container className="py-24 text-center">
          <h1 className="font-display text-4xl">Project not found</h1>
          <p className="mt-4 text-[var(--color-ink-muted)]">
            This project may have been removed or the link is incorrect.
          </p>
          <div className="mt-8">
            <Button href="/projects" icon={<ArrowLeft size={16} />}>
              Back to projects
            </Button>
          </div>
        </Container>
      </PageContainer>
    )
  }

  const related = siteConfig.projects.filter((p) => p.id !== project.id).slice(0, 3)
  const hasMaterials = Boolean(project.materials?.length)
  const hasElements = Boolean(project.designElements?.length)

  return (
    <PageContainer>
      {/* Full-bleed project hero */}
      <section className="relative min-h-[55svh] overflow-hidden bg-[var(--color-ink)] sm:min-h-[60vh] lg:min-h-[70vh]">
        <ImageWithFallback
          src={project.coverImage}
          alt={project.coverImageAlt}
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-75"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25" />
        <Container className="relative flex min-h-[55svh] flex-col justify-end pb-10 pt-28 text-white sm:min-h-[60vh] sm:pb-12 lg:min-h-[70vh] lg:pb-16">
          <Link
            to="/projects"
            className="mb-5 inline-flex w-fit items-center gap-2 text-sm text-white/75 transition hover:text-white sm:mb-6"
          >
            <ArrowLeft size={16} />
            All projects
          </Link>
          <h1 className="max-w-4xl font-display text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/75 sm:mt-6 sm:gap-x-8">
            <div>
              <dt className="sr-only">Location</dt>
              <dd>{project.location}</dd>
            </div>
            <div>
              <dt className="sr-only">Project type</dt>
              <dd>{project.category}</dd>
            </div>
            <div>
              <dt className="sr-only">Year</dt>
              <dd>{project.year}</dd>
            </div>
          </dl>
        </Container>
      </section>

      {/* Concept + project details */}
      <section className="py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr] lg:gap-16">
            <Reveal>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-muted)]">
                  Concept
                </p>
                <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-soft)] sm:text-lg">
                  {project.description}
                </p>

                {project.challenge ? (
                  <div className="mt-10">
                    <h2 className="font-display text-2xl text-[var(--color-ink)] sm:text-3xl">
                      Design challenge
                    </h2>
                    <p className="mt-3 leading-relaxed text-[var(--color-ink-muted)]">
                      {project.challenge}
                    </p>
                  </div>
                ) : null}

                {project.solution ? (
                  <div className="mt-10">
                    <h2 className="font-display text-2xl text-[var(--color-ink)] sm:text-3xl">
                      Design solution
                    </h2>
                    <p className="mt-3 leading-relaxed text-[var(--color-ink-muted)]">
                      {project.solution}
                    </p>
                  </div>
                ) : null}
              </div>
            </Reveal>

            <Reveal delayMs={80}>
              <aside className="h-fit border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-7">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-ink-muted)]">
                  Project details
                </p>
                <dl className="mt-5 space-y-4 text-sm">
                  <div className="flex justify-between gap-4 border-b border-[var(--color-border)] pb-3">
                    <dt className="text-[var(--color-ink-muted)]">Location</dt>
                    <dd className="text-right text-[var(--color-ink)]">{project.location}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-[var(--color-border)] pb-3">
                    <dt className="text-[var(--color-ink-muted)]">Project type</dt>
                    <dd className="text-right text-[var(--color-ink)]">{project.category}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-[var(--color-border)] pb-3">
                    <dt className="text-[var(--color-ink-muted)]">Year</dt>
                    <dd className="text-right text-[var(--color-ink)]">{project.year}</dd>
                  </div>
                  {project.area ? (
                    <div className="flex justify-between gap-4 border-b border-[var(--color-border)] pb-3">
                      <dt className="text-[var(--color-ink-muted)]">Area</dt>
                      <dd className="text-right text-[var(--color-ink)]">{project.area}</dd>
                    </div>
                  ) : null}
                  {project.duration ? (
                    <div className="flex justify-between gap-4 border-b border-[var(--color-border)] pb-3">
                      <dt className="text-[var(--color-ink-muted)]">Duration</dt>
                      <dd className="text-right text-[var(--color-ink)]">{project.duration}</dd>
                    </div>
                  ) : null}
                </dl>
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-ink-muted)]">
                    Services provided
                  </p>
                  <ul className="mt-3 space-y-2">
                    {project.servicesProvided.map((service) => (
                      <li key={service} className="text-sm text-[var(--color-ink-soft)]">
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 flex flex-col gap-3">
                  <Button href={siteConfig.ctas.consultation.href} icon={<ArrowRight size={16} />}>
                    {siteConfig.ctas.consultation.label}
                  </Button>
                  <Button
                    href={getWhatsAppUrl(
                      `Hello ${siteConfig.company.name}, I’m interested in a project similar to “${project.title}”.`,
                    )}
                    external
                    variant="whatsapp"
                    icon={<MessageCircle size={16} />}
                  >
                    {siteConfig.ctas.whatsapp.label}
                  </Button>
                </div>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Photography */}
      <section className="bg-[var(--color-canvas-muted)] py-14 sm:py-16 lg:py-20">
        <Container>
          <h2 className="mb-8 font-display text-3xl text-[var(--color-ink)] sm:text-4xl">
            Project photography
          </h2>
          <Gallery images={project.gallery} />
        </Container>
      </section>

      {/* Materials & design elements */}
      {hasMaterials || hasElements ? (
        <section className="py-14 sm:py-16 lg:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              {hasMaterials ? (
                <Reveal>
                  <div>
                    <h2 className="font-display text-2xl text-[var(--color-ink)] sm:text-3xl">
                      Materials
                    </h2>
                    <ul className="mt-6 space-y-3">
                      {project.materials!.map((item) => (
                        <li
                          key={item}
                          className="border-b border-[var(--color-border)] pb-3 text-[var(--color-ink-soft)]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ) : null}
              {hasElements ? (
                <Reveal delayMs={hasMaterials ? 80 : 0}>
                  <div>
                    <h2 className="font-display text-2xl text-[var(--color-ink)] sm:text-3xl">
                      Design elements
                    </h2>
                    <ul className="mt-6 space-y-3">
                      {project.designElements!.map((item) => (
                        <li
                          key={item}
                          className="border-b border-[var(--color-border)] pb-3 text-[var(--color-ink-soft)]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ) : null}
            </div>
          </Container>
        </section>
      ) : null}

      {related.length ? (
        <section className="border-t border-[var(--color-border)] py-14 sm:py-16 lg:py-20">
          <Container>
            <h2 className="mb-8 font-display text-3xl text-[var(--color-ink)]">More projects</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {related.map((item) => (
                <ProjectCard key={item.id} project={item} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CTA
        title="Inspired by this project?"
        description="Book a consultation or message us on WhatsApp — we’ll help you understand whether a similar approach fits your space."
      />
    </PageContainer>
  )
}
