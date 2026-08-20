import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ProjectItem } from '@/types/site'
import { ImageWithFallback } from '@/components/ui/ImageWithFallback'
import { cn } from '@/utils/site'

interface ProjectCardProps {
  project: ProjectItem
  featured?: boolean
  className?: string
}

export function ProjectCard({ project, featured = false, className }: ProjectCardProps) {
  return (
    <article className={cn('group', className)}>
      <Link to={`/projects/${project.slug}`} className="block">
        <div
          className={cn(
            'relative overflow-hidden rounded-[var(--radius-md)] bg-[var(--color-canvas-muted)]',
            featured ? 'aspect-[4/5] sm:aspect-[16/11]' : 'aspect-[4/5]',
          )}
        >
          <ImageWithFallback
            src={project.coverImage}
            alt={project.coverImageAlt}
            className="h-full w-full transition duration-700 ease-out group-hover:scale-[1.04]"
            sizes={featured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-80 transition group-hover:opacity-90" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">
                  {project.category} · {project.location}
                </p>
                <h3 className="mt-2 font-display text-2xl text-white sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-white/65">{project.year}</p>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition group-hover:bg-white group-hover:text-[var(--color-ink)]">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
