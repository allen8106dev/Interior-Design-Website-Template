import { PageContainer } from '@/components/layout/PageContainer'
import { PageHero } from '@/components/sections/PageHero'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { CTA } from '@/components/sections/CTA'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { useSeo } from '@/hooks/useSeo'
import { siteConfig } from '@/data/siteConfig'

export function ProjectsPage() {
  useSeo({
    title: 'Projects',
    description: `Browse interior design projects by ${siteConfig.company.name} across Pune and Maharashtra.`,
    path: '/projects',
  })

  const projects = siteConfig.projects

  return (
    <PageContainer>
      <PageHero
        eyebrow="Projects"
        title="A selection of spaces we’ve shaped."
        description="DEMO PROJECTS — replace covers, galleries, and case-study copy with real client work before deployment."
      />

      <section className="py-16 lg:py-20">
        <Container>
          {!projects.length ? (
            <p className="text-[var(--color-ink-muted)]">
              No projects yet. Add items to siteConfig.projects to populate this page.
            </p>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {projects.map((project, index) => (
                <Reveal key={project.id} delayMs={(index % 3) * 60}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>

      <CTA title="Have a space in mind?" />
    </PageContainer>
  )
}
