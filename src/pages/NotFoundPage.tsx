import { Button } from '@/components/ui/Button'
import { PageContainer } from '@/components/layout/PageContainer'
import { Container } from '@/components/ui/Container'
import { useSeo } from '@/hooks/useSeo'

export function NotFoundPage() {
  useSeo({
    title: 'Page not found',
    description: 'The page you requested could not be found.',
    noIndex: true,
  })

  return (
    <PageContainer>
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-ink-muted)]">404</p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl">Page not found</h1>
        <p className="mt-4 max-w-md text-[var(--color-ink-muted)]">
          The page may have moved. Explore our projects or return home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Go home</Button>
          <Button href="/projects" variant="outline">
            View projects
          </Button>
        </div>
      </Container>
    </PageContainer>
  )
}
