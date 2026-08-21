import { useEffect, useId, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { cn } from '@/utils/site'
import { publicUrl } from '@/utils/basePath'

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

  const logoSrc = siteConfig.branding.logoSrc
    ? siteConfig.branding.logoSrc.startsWith('http')
      ? siteConfig.branding.logoSrc
      : publicUrl(siteConfig.branding.logoSrc)
    : undefined

  const logo = logoSrc ? (
    <img
      src={logoSrc}
      alt={siteConfig.branding.logoAlt ?? siteConfig.company.name}
      className="h-8 w-auto"
    />
  ) : (
    <span className="font-display text-[1.375rem] font-semibold tracking-wide text-[var(--color-ink)] sm:text-[1.65rem]">
      {siteConfig.branding.logoText ?? siteConfig.company.name}
    </span>
  )

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled || open
            ? 'border-b border-[var(--color-border)] bg-[rgb(245_242_237/0.97)] shadow-[0_1px_0_rgb(28_27_26/0.06)] backdrop-blur-md'
            : 'border-b border-[rgb(28_27_26/0.08)] bg-[rgb(245_242_237/0.88)] shadow-[0_8px_24px_rgb(28_27_26/0.08)] backdrop-blur-md',
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
                    'relative text-[0.9375rem] font-medium tracking-[0.04em] text-[var(--color-ink)] transition after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[var(--color-ink)] after:transition-all after:duration-300 hover:text-[var(--color-accent)] hover:after:w-full',
                    isActive && 'text-[var(--color-accent)] after:w-full',
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

          <div className="relative z-50 flex items-center gap-2 lg:hidden">
            {!open ? (
              <Button href={siteConfig.ctas.primary.href} size="sm" className="px-3 text-xs sm:px-4 sm:text-sm">
                {siteConfig.ctas.enquire.label}
              </Button>
            ) : null}
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] text-[var(--color-ink)]"
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={24} strokeWidth={2} /> : <Menu size={22} />}
            </button>
          </div>
        </Container>
      </header>

      {/*
        Mobile overlays MUST live outside the frosted header.
        The header applies backdrop-filter, which creates a containing block for
        position:fixed descendants — collapsing the drawer to ~header height and
        letting nav text spill onto the page with no opaque panel behind it.
      */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-[rgb(28_27_26/0.5)] transition-opacity duration-300 lg:hidden',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />

      <div
        id={menuId}
        className={cn(
          'fixed inset-y-0 right-0 z-[45] flex w-[min(100%,22rem)] flex-col border-l border-[var(--color-border-strong)] bg-white pt-[4.25rem] shadow-[var(--shadow-lift)] transition-transform duration-300 ease-out lg:hidden',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
        style={{ backgroundColor: '#ffffff' }}
      >
        <nav className="flex h-full flex-col bg-white px-6 pb-10" aria-label="Mobile">
          <ul className="flex flex-1 flex-col gap-0 pt-4">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'block border-b border-[var(--color-border)] py-4 font-display text-[1.75rem] font-medium leading-tight text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]',
                      isActive && 'text-[var(--color-accent)]',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button href={siteConfig.ctas.primary.href} size="lg" className="w-full" onClick={() => setOpen(false)}>
            {siteConfig.ctas.primary.label}
          </Button>
        </nav>
      </div>
    </>
  )
}
