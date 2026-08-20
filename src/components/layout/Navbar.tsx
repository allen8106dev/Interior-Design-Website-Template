import { useEffect, useId, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { cn } from '@/utils/site'

export function Navbar() {
  const scrolled = useScrollPosition(16)
  const [open, setOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const logo = siteConfig.branding.logoSrc ? (
    <img
      src={siteConfig.branding.logoSrc}
      alt={siteConfig.branding.logoAlt ?? siteConfig.company.name}
      className="h-8 w-auto"
    />
  ) : (
    <span className="font-display text-xl font-semibold tracking-wide text-[var(--color-ink)] sm:text-2xl">
      {siteConfig.branding.logoText ?? siteConfig.company.name}
    </span>
  )

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'border-b border-[var(--color-border)] bg-[rgb(245_242_237/0.94)] backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <Container className="flex h-[4.25rem] items-center justify-between lg:h-[5rem]">
        <Link to="/" className="relative z-50" onClick={() => setOpen(false)}>
          {logo}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {siteConfig.navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'relative text-sm font-medium tracking-wide text-[var(--color-ink-soft)] transition after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[var(--color-ink)] after:transition-all after:duration-300 hover:text-[var(--color-ink)] hover:after:w-full',
                  isActive && 'text-[var(--color-ink)] after:w-full',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={siteConfig.ctas.primary.href} size="sm">
            {siteConfig.ctas.primary.label}
          </Button>
        </div>

        <button
          type="button"
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] text-[var(--color-ink)] lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      <div
        id={menuId}
        className={cn(
          'fixed inset-0 z-40 bg-[var(--color-canvas)] pt-[4.25rem] transition-transform duration-300 ease-out lg:hidden',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <nav className="flex h-full flex-col px-5 pb-10" aria-label="Mobile">
          <ul className="flex flex-1 flex-col gap-1 pt-6">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'block border-b border-[var(--color-border)] py-4 font-display text-3xl text-[var(--color-ink-soft)]',
                      isActive && 'text-[var(--color-ink)]',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button href={siteConfig.ctas.primary.href} size="lg" onClick={() => setOpen(false)}>
            {siteConfig.ctas.primary.label}
          </Button>
        </nav>
      </div>
    </header>
  )
}
