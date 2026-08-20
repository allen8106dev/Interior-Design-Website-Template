import type { ReactNode } from 'react'
import { cn } from '@/utils/site'
import { useReveal } from '@/hooks/useReveal'

interface RevealProps {
  children: ReactNode
  className?: string
  delayMs?: number
}

export function Reveal({ children, className, delayMs = 0 }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn('reveal', isVisible && 'is-visible', className)}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  )
}
