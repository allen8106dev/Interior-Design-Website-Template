import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
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
import { getProjectBySlug } from '@/utils/site'
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
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.seo.siteUrl },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Projects',
          item: `${siteConfig.seo.siteUrl}/projects`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: project.title,
          item: `${siteConfig.seo.siteUrl}/projects/${project.slug}`,
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

  return (
    <PageContainer>
      <section className="relative min-h-[60vh] overflow-hidden bg-[var(--color-ink)] lg:min-h-[70vh]">
        <ImageWithFallback
          src={project.coverImage}
          alt={project.coverImageAlt}
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover opacity-75"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/25" />
        <Container className="relative flex min-h-[60vh] flex-col justify-end pb-12 pt-28 text-white lg:min-h-[70vh] lg:pb-16">
          <Link
            to="/projects"
            className="mb-6 inline-flex w-fit items-center gap-2 text-sm text-white/75 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            All projects
          </Link>
          <p className="text-xs uppercase tracking-[0.22em] text-white/65">
            {project.category} · {project.location} · {project.year}
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-medium sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr] lg:gap-16">
            <Reveal>
              <div>
                <h2 className="font-display text-3xl text-[var(--color-ink)]">Overview</h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-muted)] sm:text-lg">
                  {project.description}
                </p>

                {project.challenge ? (
                  <div className="mt-10">
                    <h3 className="font-display text-2xl text-[var(--color-ink)]">Design challenge</h3>
                    <p className="mt-3 leading-relaxed text-[var(--color-ink-muted)]">{project.challenge}</p>
                  </div>
                ) : null}

                {project.solution ? (
                  <div className="mt-10">
                    <h3 className="font-display text-2xl text-[var(--color-ink)]">Design solution</h3>
                    <p className="mt-3 leading-relaxed text-[var(--color-ink-muted)]">{project.solution}</p>
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
                    <dt className="text-[var(--color-ink-muted)]">Category</dt>
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
                <div className="mt-8">
                  <Button href="/contact" icon={<ArrowRight size={16} />}>
                    Discuss a similar project
                  </Button>
                </div>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-canvas-muted)] py-16 lg:py-20">
        <Container>
          <h2 className="mb-8 font-display text-3xl text-[var(--color-ink)] sm:text-4xl">Gallery</h2>
          <Gallery images={project.gallery} />
        </Container>
      </section>

      {related.length ? (
        <section className="py-16 lg:py-20">
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

      <CTA />
    </PageContainer>
  )
}
