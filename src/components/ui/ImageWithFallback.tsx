import { useState } from 'react'
import { cn } from '@/utils/site'

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  wrapperClassName?: string
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
  sizes?: string
}

export function ImageWithFallback({
  src,
  alt,
  className,
  wrapperClassName,
  loading = 'lazy',
  fetchPriority,
  sizes,
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-[var(--color-canvas-muted)] text-sm text-[var(--color-ink-muted)]',
          wrapperClassName,
          className,
        )}
        role="img"
        aria-label={alt || 'Image unavailable'}
      >
        Image unavailable
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      fetchPriority={fetchPriority}
      sizes={sizes}
      onError={() => setFailed(true)}
      className={cn('object-cover', className)}
    />
  )
}
