import { Link } from 'react-router-dom'
import { siteConfig } from '@/data/siteConfig'
import { Container } from '@/components/ui/Container'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '@/components/ui/SocialIcons'
import { formatAddress, getMailtoUrl, getTelUrl, getWhatsAppUrl } from '@/utils/site'

export function Footer() {
  const year = new Date().getFullYear()
  const { social, company, services, navigation } = siteConfig

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-ink)] text-[var(--color-canvas)]">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="lg:col-span-1">
            <Link to="/" className="font-display text-2xl font-semibold tracking-wide">
              {siteConfig.branding.logoText ?? company.name}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              {company.tagline} {company.description.slice(0, 120)}…
            </p>
            <div className="mt-6 flex gap-3">
              {social.instagram ? (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-white/40 hover:text-white"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
              ) : null}
              {social.facebook ? (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-white/40 hover:text-white"
                  aria-label="Facebook"
                >
                  <FacebookIcon size={18} />
                </a>
              ) : null}
              {social.linkedin ? (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-white/40 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
              ) : null}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">Explore</p>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">Services</p>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link to="/services" className="transition hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>
                <a href={getTelUrl()} className="transition hover:text-white">
                  {company.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={getMailtoUrl()} className="transition hover:text-white">
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  {siteConfig.ctas.whatsapp.label}
                </a>
              </li>
              <li className="max-w-xs leading-relaxed">{formatAddress()}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 pb-16 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between sm:pb-0">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition hover:text-white">
              Terms
            </Link>
          </div>
        </div>
        <p className="mt-4 pb-4 text-xs text-white/30 sm:pb-0">{siteConfig.demoNotice}</p>
      </Container>
    </footer>
  )
}
