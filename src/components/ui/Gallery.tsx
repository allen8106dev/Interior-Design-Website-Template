import { useState, useCallback } from 'react'
import type { ProjectImage } from '@/types/site'
import { ImageWithFallback } from './ImageWithFallback'
import { Lightbox } from './Lightbox'
import { cn } from '@/utils/site'

interface GalleryProps {
  images: ProjectImage[]
  className?: string
}

export function Gallery({ images, className }: GalleryProps) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openAt = (i: number) => {
    setIndex(i)
    setOpen(true)
  }

  const onPrev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length)
  }, [images.length])

  const onNext = useCallback(() => {
    setIndex((i) => (i + 1) % images.length)
  }, [images.length])

  if (!images.length) {
    return (
      <p className="text-[var(--color-ink-muted)]">Gallery images will appear here once added.</p>
    )
  }

  return (
    <>
      <ul
        className={cn(
          'grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4',
          className,
        )}
      >
        {images.map((image, i) => (
          <li
            key={`${image.src}-${i}`}
            className={cn(i === 0 && 'sm:col-span-2 sm:row-span-2')}
          >
            <button
              type="button"
              onClick={() => openAt(i)}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-md)] bg-[var(--color-canvas-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] sm:aspect-auto sm:h-full sm:min-h-[220px]"
              aria-label={`Open image: ${image.alt}`}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="h-full w-full transition duration-700 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <span className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/15" />
            </button>
          </li>
        ))}
      </ul>

      <Lightbox
        images={images}
        index={index}
        open={open}
        onClose={() => setOpen(false)}
        onPrev={onPrev}
        onNext={onNext}
      />
    </>
  )
}
