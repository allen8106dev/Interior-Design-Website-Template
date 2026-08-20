import type { ReactNode } from 'react'
import { cn } from '@/utils/site'

interface PageContainerProps {
  children: ReactNode
  className?: string
  withTopPadding?: boolean
}

export function PageContainer({
  children,
  className,
  withTopPadding = true,
}: PageContainerProps) {
  return (
    <main className={cn(withTopPadding && 'pt-[4.25rem] lg:pt-[5rem]', className)}>
      {children}
    </main>
  )
}
