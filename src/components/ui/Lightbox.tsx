import { useEffect, useId, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { ProjectImage } from '@/types/site'
import { ImageWithFallback } from './ImageWithFallback'
import { cn } from '@/utils/site'

interface LightboxProps {
  images: ProjectImage[]
  index: number
  open: boolean
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function Lightbox({ images, index, open, onClose, onPrev, onNext }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()
  const current = images[index]

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose, onPrev, onNext])

  if (!open || !current) return null

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgb(28_27_26/0.92)] p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <p id={titleId} className="sr-only">
        Image gallery lightbox
      </p>

      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        aria-label="Close gallery"
      >
        <X size={20} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
        aria-label="Previous image"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
        aria-label="Next image"
      >
        <ChevronRight size={22} />
      </button>

      <figure
        className="relative max-h-[85vh] w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <ImageWithFallback
          src={current.src}
          alt={current.alt}
          loading="eager"
          className={cn('mx-auto max-h-[78vh] w-auto rounded-[var(--radius-md)] object-contain')}
        />
        <figcaption className="mt-4 text-center text-sm text-white/80">
          {current.caption ?? current.alt}
          <span className="ml-2 text-white/50">
            {index + 1} / {images.length}
          </span>
        </figcaption>
      </figure>
    </div>
  )
}
