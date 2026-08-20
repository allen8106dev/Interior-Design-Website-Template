import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FaqItem } from '@/types/site'
import { cn } from '@/utils/site'

interface AccordionProps {
  items: FaqItem[]
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)
  const baseId = useId()

  if (!items.length) {
    return <p className="text-[var(--color-ink-muted)]">FAQs will appear here once configured.</p>
  }

  return (
    <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
      {items.map((item) => {
        const isOpen = openId === item.id
        const panelId = `${baseId}-panel-${item.id}`
        const buttonId = `${baseId}-button-${item.id}`

        return (
          <div key={item.id}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium text-[var(--color-ink)] transition hover:text-[var(--color-accent-muted)] sm:text-lg"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={cn(
                    'shrink-0 text-[var(--color-ink-muted)] transition-transform duration-300',
                    isOpen && 'rotate-180',
                  )}
                  size={20}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={cn('pb-5 pr-8 text-[var(--color-ink-muted)] leading-relaxed', !isOpen && 'hidden')}
            >
              {item.answer}
            </div>
          </div>
        )
      })}
    </div>
  )
}
