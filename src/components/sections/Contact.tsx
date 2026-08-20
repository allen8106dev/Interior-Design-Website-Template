import { useState, type FormEvent } from 'react'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { submitContactForm, type ContactFormPayload } from '@/services/formService'
import { formatAddress, getMailtoUrl, getTelUrl, getWhatsAppUrl } from '@/utils/site'

const initialForm: ContactFormPayload = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  message: '',
}

interface ContactProps {
  showMap?: boolean
  compact?: boolean
}

export function Contact({ showMap = true, compact = false }: ContactProps) {
  const { company, formEndpoint, services } = siteConfig
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setFeedback('')

    const result = await submitContactForm(form, formEndpoint || undefined)
    setStatus(result.ok ? 'success' : 'error')
    setFeedback(result.message)
    if (result.ok) setForm(initialForm)
  }

  return (
    <section className="py-20 lg:py-28" aria-labelledby="contact-heading">
      <Container>
        <div className="mb-12 sm:mb-14">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s talk about your project."
            description="Call, WhatsApp, or send a short brief — whichever feels easiest."
            titleAs="h2"
          />
          <h2 id="contact-heading" className="sr-only">
            Contact
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <Reveal>
            <div className="space-y-6">
              <a
                href={getTelUrl()}
                className="flex items-start gap-4 border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition hover:border-[var(--color-border-strong)]"
              >
                <Phone className="mt-0.5 text-[var(--color-accent)]" size={20} />
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-ink-muted)]">Phone</p>
                  <p className="mt-1 text-lg text-[var(--color-ink)]">{company.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition hover:border-[var(--color-border-strong)]"
              >
                <MessageCircle className="mt-0.5 text-[var(--color-accent)]" size={20} />
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-ink-muted)]">WhatsApp</p>
                  <p className="mt-1 text-lg text-[var(--color-ink)]">{siteConfig.ctas.whatsapp.label}</p>
                </div>
              </a>

              <a
                href={getMailtoUrl('Project enquiry')}
                className="flex items-start gap-4 border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition hover:border-[var(--color-border-strong)]"
              >
                <Mail className="mt-0.5 text-[var(--color-accent)]" size={20} />
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-ink-muted)]">Email</p>
                  <p className="mt-1 text-lg text-[var(--color-ink)]">{company.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-4 border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                <MapPin className="mt-0.5 text-[var(--color-accent)]" size={20} />
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-ink-muted)]">Studio</p>
                  <p className="mt-1 text-base leading-relaxed text-[var(--color-ink)]">{formatAddress()}</p>
                  {company.mapLink ? (
                    <a
                      href={company.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm font-medium text-[var(--color-accent)] underline-offset-4 hover:underline"
                    >
                      Open in Google Maps
                    </a>
                  ) : null}
                </div>
              </div>

              {!compact && showMap && company.mapEmbedUrl ? (
                <div className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)]">
                  <iframe
                    title={`${company.name} location map`}
                    src={company.mapEmbedUrl}
                    className="h-56 w-full grayscale"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              ) : null}
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <form
              onSubmit={onSubmit}
              className="border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8"
              noValidate
            >
              <p className="font-display text-2xl text-[var(--color-ink)]">Send an enquiry</p>
              <p className="mt-2 text-sm text-[var(--color-ink-muted)]">
                We typically reply within one business day.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <label className="block sm:col-span-1">
                  <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
                    Name
                  </span>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="h-12 w-full border border-[var(--color-border)] bg-[var(--color-canvas)] px-4 outline-none transition focus:border-[var(--color-accent)]"
                    autoComplete="name"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
                    Phone
                  </span>
                  <input
                    required
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    className="h-12 w-full border border-[var(--color-border)] bg-[var(--color-canvas)] px-4 outline-none transition focus:border-[var(--color-accent)]"
                    autoComplete="tel"
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
                    Email
                  </span>
                  <input
                    required
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="h-12 w-full border border-[var(--color-border)] bg-[var(--color-canvas)] px-4 outline-none transition focus:border-[var(--color-accent)]"
                    autoComplete="email"
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
                    Project type
                  </span>
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={(e) => setForm((f) => ({ ...f, projectType: e.target.value }))}
                    className="h-12 w-full border border-[var(--color-border)] bg-[var(--color-canvas)] px-4 outline-none transition focus:border-[var(--color-accent)]"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
                    Message
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full resize-y border border-[var(--color-border)] bg-[var(--color-canvas)] px-4 py-3 outline-none transition focus:border-[var(--color-accent)]"
                    placeholder="Share location, timeline, and what you’d like to change…"
                  />
                </label>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button type="submit" size="lg" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending…' : 'Get a Quote'}
                </Button>
                <Button href={getWhatsAppUrl()} external variant="whatsapp" size="lg" icon={<MessageCircle size={18} />}>
                  {siteConfig.ctas.whatsapp.label}
                </Button>
              </div>

              {feedback ? (
                <p
                  className={`mt-5 text-sm ${status === 'error' ? 'text-red-700' : 'text-[var(--color-accent-muted)]'}`}
                  role="status"
                >
                  {feedback}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
