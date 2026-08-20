import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/site'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'whatsapp'
type Size = 'sm' | 'md' | 'lg'

interface CommonProps {
  children: ReactNode
  className?: string
  variant?: Variant
  size?: Size
  icon?: ReactNode
}

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> & {
    href?: undefined
  }

type ButtonAsLink = CommonProps & {
  href: string
  external?: boolean
  onClick?: () => void
}

export type ButtonProps = ButtonAsButton | ButtonAsLink

const base =
  'inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary:
    'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] hover:-translate-y-px',
  secondary:
    'bg-[var(--color-ink)] text-[var(--color-canvas)] hover:bg-[var(--color-ink-soft)] hover:-translate-y-px',
  ghost:
    'bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-canvas-muted)]',
  outline:
    'border border-[var(--color-ink)] text-[var(--color-ink)] bg-transparent hover:bg-[var(--color-ink)] hover:text-[var(--color-canvas)]',
  whatsapp:
    'bg-[#1f6b46] text-white hover:bg-[#185537] hover:-translate-y-px',
}

const sizes: Record<Size, string> = {
  sm: 'h-10 px-4 text-sm rounded-[var(--radius-md)]',
  md: 'h-12 px-6 text-sm rounded-[var(--radius-md)]',
  lg: 'h-14 px-8 text-base rounded-[var(--radius-md)]',
}

export function Button(props: ButtonProps) {
  const { children, className, variant = 'primary', size = 'md', icon } = props
  const classes = cn(base, variants[variant], sizes[size], className)

  if ('href' in props && props.href) {
    const { href, external, onClick } = props
    const isExternal =
      external || href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          onClick={onClick}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {children}
          {icon}
        </a>
      )
    }

    return (
      <Link to={href} className={classes} onClick={onClick}>
        {children}
        {icon}
      </Link>
    )
  }

  const { type = 'button', disabled, onClick, name, value, form, id, 'aria-label': ariaLabel } =
    props as ButtonAsButton

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      name={name}
      value={value}
      form={form}
      id={id}
      aria-label={ariaLabel}
    >
      {children}
      {icon}
    </button>
  )
}
