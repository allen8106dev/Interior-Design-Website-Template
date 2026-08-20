import { cn } from '@/utils/site'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  titleAs?: 'h1' | 'h2' | 'h3'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  titleAs: TitleTag = 'h2',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-ink-muted)]">
          {eyebrow}
        </p>
      ) : null}
      <TitleTag className="font-display text-3xl font-medium leading-[1.15] text-[var(--color-ink)] text-balance sm:text-4xl lg:text-[2.75rem]">
        {title}
      </TitleTag>
      {description ? (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed text-[var(--color-ink-muted)] sm:text-lg',
            align === 'center' && 'mx-auto max-w-2xl',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
