import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from './ProjectCard'
import { getFeaturedProjects } from '@/utils/site'

interface FeaturedProjectsProps {
  limit?: number
}

export function FeaturedProjects({ limit = 4 }: FeaturedProjectsProps) {
  const projects = getFeaturedProjects(limit)

  if (!projects.length) {
    return (
      <section className="py-20">
        <Container>
          <p className="text-[var(--color-ink-muted)]">
            Featured projects will appear here once you add them in siteConfig.
          </p>
        </Container>
      </section>
    )
  }

  const [first, ...rest] = projects

  return (
    <section className="py-20 lg:py-28" aria-labelledby="projects-heading">
      <Container>
        <div className="mb-12 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Interiors that feel lived-in from day one."
            description="Demo projects for layout and storytelling — replace with your client’s real photography and case studies."
            titleAs="h2"
          />
          <Link
            to="/projects"
            id="projects-heading"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-[var(--color-accent)] transition hover:gap-3"
          >
            View all projects
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-7">
            <ProjectCard project={first} featured />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 lg:gap-6">
            {rest.slice(0, 2).map((project, i) => (
              <Reveal key={project.id} delayMs={(i + 1) * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>

        {rest.length > 2 ? (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:mt-6 lg:grid-cols-3 lg:gap-6">
            {rest.slice(2).map((project, i) => (
              <Reveal key={project.id} delayMs={i * 60}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  )
}
