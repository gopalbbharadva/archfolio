'use client'

import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { HiArrowLeft, HiArrowRight, HiOutlineArrowsPointingOut, HiXMark } from 'react-icons/hi2'
import {
  CATEGORIES,
  interleavedProjectImages,
  isCategory,
  projectImages,
  type Category,
} from '../data/projects'

const labelFor = (id: Category) => CATEGORIES.find((c) => c.id === id)?.label ?? id

export function ProjectGallery() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const param = searchParams.get('filter')
  const filter: Category | 'all' = isCategory(param) ? param : 'all'

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const items = useMemo(
    () =>
      filter === 'all'
        ? interleavedProjectImages
        : projectImages.filter((p) => p.category === filter),
    [filter],
  )

  const setFilter = (next: Category | 'all') => {
    const url = next === 'all' ? '/projects' : `/projects?filter=${next}`
    router.replace(url, { scroll: false })
  }

  const tabs: { id: Category | 'all'; label: string; count: number }[] = [
    { id: 'all', label: 'All work', count: projectImages.length },
    ...CATEGORIES.map((c) => ({
      id: c.id,
      label: c.label,
      count: projectImages.filter((p) => p.category === c.id).length,
    })),
  ]

  const activeBlurb = filter === 'all' ? null : CATEGORIES.find((c) => c.id === filter)?.blurb

  return (
    <>
      <div className="sticky top-16 z-30 border-b border-ink/10 bg-ivory/90 backdrop-blur-xl dark:border-white/10 dark:bg-night/90">
        <div
          role="tablist"
          aria-label="Filter projects"
          className="container-page no-scrollbar flex gap-2 overflow-x-auto py-4"
        >
          {tabs.map((tab) => {
            const selected = tab.id === filter
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={selected}
                onClick={() => setFilter(tab.id)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] transition-all duration-300 ${
                  selected
                    ? 'bg-ink text-ivory dark:bg-white dark:text-ink'
                    : 'text-ink-soft hover:bg-ink/5 dark:text-neutral-400 dark:hover:bg-white/10'
                }`}
              >
                {tab.label}
                <span className={`text-[0.65rem] ${selected ? 'opacity-60' : 'opacity-50'}`}>
                  {tab.count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="container-page pb-24 md:pb-32">
        {activeBlurb && (
          <p
            key={filter}
            className="body-muted mt-10 max-w-2xl animate-fade-up text-lg leading-relaxed"
          >
            {activeBlurb}
          </p>
        )}

        {/* Re-keyed on filter change so the cards animate in again */}
        <div key={filter} className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {items.map((item, i) => (
            <figure
              key={item.src.src}
              className="mb-5 animate-fade-up break-inside-avoid"
              style={{ animationDelay: `${Math.min(i, 12) * 70}ms` }}
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                aria-label={`Open ${item.title} (${labelFor(item.category)}) in full screen`}
                className="group relative block w-full overflow-hidden rounded-sm bg-ink/5 dark:bg-white/5"
              >
                <Image
                  src={item.src}
                  alt={`${item.title}, ${labelFor(item.category)} interior`}
                  placeholder="blur"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.06]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 flex translate-y-3 items-end justify-between p-5 text-left text-white opacity-0 transition-all duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100">
                  <span>
                    <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-white/70">
                      {labelFor(item.category)}
                    </span>
                    <span className="mt-1 block font-display text-2xl">{item.title}</span>
                  </span>
                  <HiOutlineArrowsPointingOut className="h-5 w-5" aria-hidden />
                </span>
              </button>
            </figure>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={items}
          index={lightboxIndex}
          onChange={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  )
}

type LightboxProps = {
  items: typeof projectImages
  index: number
  onChange: (index: number) => void
  onClose: () => void
}

function Lightbox({ items, index, onChange, onClose }: LightboxProps) {
  const touchStartX = useRef<number | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const item = items[index]

  const prev = useCallback(
    () => onChange((index - 1 + items.length) % items.length),
    [index, items.length, onChange],
  )
  const next = useCallback(
    () => onChange((index + 1) % items.length),
    [index, items.length, onChange],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next, onClose])

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [])

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title}, image ${index + 1} of ${items.length}`}
      className="fixed inset-0 z-[100] flex animate-fade-in flex-col bg-black/95 text-white backdrop-blur-sm"
      onClick={onClose}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return
        const dx = e.changedTouches[0].clientX - touchStartX.current
        if (Math.abs(dx) > 50) (dx > 0 ? prev : next)()
        touchStartX.current = null
      }}
    >
      <div
        className="flex items-center justify-between px-5 py-4 sm:px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-xs uppercase tracking-[0.2em] text-white/60">
          <span className="text-white">{String(index + 1).padStart(2, '0')}</span> /{' '}
          {String(items.length).padStart(2, '0')}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/20 transition-colors hover:bg-white hover:text-ink"
        >
          <HiXMark className="h-5 w-5" />
        </button>
      </div>

      <div className="relative flex-1">
        {/* Warm the cache for the neighbouring images so arrow navigation feels instant */}
        <div className="hidden" aria-hidden>
          {[
            items[(index + 1) % items.length],
            items[(index - 1 + items.length) % items.length],
          ].map((n) => (
            <Image key={n.src.src} src={n.src} alt="" sizes="100vw" quality={90} loading="eager" />
          ))}
        </div>
        <div key={index} className="absolute inset-4 animate-fade-in sm:inset-x-24 sm:inset-y-2">
          <Image
            src={item.src}
            alt={`${item.title}, ${labelFor(item.category)} interior`}
            fill
            placeholder="blur"
            sizes="100vw"
            quality={90}
            className="object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            prev()
          }}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/30 transition-colors hover:bg-white hover:text-ink sm:grid"
        >
          <HiArrowLeft />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            next()
          }}
          aria-label="Next image"
          className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/30 transition-colors hover:bg-white hover:text-ink sm:grid"
        >
          <HiArrowRight />
        </button>
      </div>

      <div className="px-5 py-5 text-center sm:px-8" onClick={(e) => e.stopPropagation()}>
        <p className="text-[0.65rem] uppercase tracking-[0.2em] text-white/50">
          {labelFor(item.category)}
        </p>
        <p className="mt-1 font-display text-2xl">{item.title}</p>
        <p className="mt-2 text-xs text-white/40 sm:hidden">Swipe to browse</p>
      </div>
    </div>,
    document.body,
  )
}
