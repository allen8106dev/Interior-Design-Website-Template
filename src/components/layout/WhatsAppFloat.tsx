import { MessageCircle } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { getWhatsAppUrl } from '@/utils/site'

export function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-14 items-center gap-2 rounded-full bg-[#1f6b46] px-4 text-sm font-medium text-white shadow-[var(--shadow-lift)] transition hover:bg-[#185537] hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f6b46] sm:bottom-8 sm:right-8"
      aria-label={siteConfig.ctas.whatsapp.label}
    >
      <MessageCircle size={20} aria-hidden />
      <span className="pr-1 hidden sm:inline">{siteConfig.ctas.whatsapp.label}</span>
    </a>
  )
}
