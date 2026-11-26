'use client'

import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { HiArrowRight } from 'react-icons/hi2'

export type HeroSlide = {
  image: StaticImageData
  alt: string
  caption: string
}

const SLIDE_MS = 6500

export function HeroSlideshow({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0)
  const [previous, setPrevious] = useState<number | null>(null)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      if (index === active) return
      setPrevious(active)
      setActive(index)
    },
    [active],
  )

  useEffect(() => {
    if (paused) return
    const id = setTimeout(() => goTo((active + 1) % slides.length), SLIDE_MS)
    return () => clearTimeout(id)
  }, [active, paused, slides.length, goTo])

  // Pause the slideshow while the tab is hidden
  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden)
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  const headline = [
    ['Spaces', 'shaped'],
    ['with', 'intent.'],
  ]

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured spaces"
      className="grain relative isolate flex h-[100svh] min-h-[640px] items-end overflow-hidden bg-ink text-white"
    >
      {slides.map((slide, i) => {
        const isActive = i === active
        const isPrev = i === previous
        return (
          <div
            key={slide.caption}
            aria-hidden={!isActive}
            className={`absolute inset-0 -z-10 transition-opacity duration-[1600ms] ease-in-out ${
              isActive ? 'z-[-9] opacity-100' : isPrev ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={i === 0}
              placeholder="blur"
              sizes="100vw"
              quality={85}
              className={`object-cover ${isActive || isPrev ? 'animate-kenburns' : ''}`}
            />
          </div>
        )
      })}

      {/* Legibility gradients */}
      <div className="absolute inset-0 -z-[5] bg-gradient-to-t from-black/85 via-black/30 to-black/30" />
      <div className="absolute inset-0 -z-[5] bg-gradient-to-r from-black/50 to-transparent" />

      <div className="container-page relative pb-28 md:pb-32">
        <p className="eyebrow animate-fade-up !text-bronze-200 [animation-delay:200ms]">
          Interior &amp; Architecture Studio · Surat
        </p>

        <h1 className="mt-6 font-display text-[3.4rem] font-light leading-[0.95] tracking-tight sm:text-7xl lg:text-[7.5rem]">
          {headline.map((line, li) => (
            <span key={li} className="block">
              {line.map((word, wi) => (
                <span
                  key={word}
                  className="mr-[0.22em] inline-block overflow-hidden pb-[0.08em] align-bottom"
                >
                  <span
                    className={`inline-block animate-word-rise ${word === 'intent.' ? 'italic text-bronze-200' : ''}`}
                    style={{ animationDelay: `${350 + (li * 2 + wi) * 110}ms` }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p className="mt-6 max-w-lg animate-fade-up text-base leading-relaxed text-white/80 [animation-delay:900ms] sm:text-lg">
          Timeless homes, workplaces and salons designed with care, from the first sketch to the
          final finish.
        </p>

        <div className="mt-9 flex animate-fade-up flex-wrap gap-3 [animation-delay:1050ms]">
          <Link href="/projects" className="btn-primary group">
            Explore our work
            <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link href="/services" className="btn-ghost-light">
            Our services
          </Link>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="container-page flex items-end justify-between gap-6 pb-8">
          <div className="flex flex-1 gap-3 sm:max-w-md">
            {slides.map((slide, i) => (
              <button
                key={slide.caption}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show slide ${i + 1}: ${slide.caption}`}
                aria-current={i === active}
                className="group flex-1 py-3 text-left"
              >
                <span className="relative block h-[2px] overflow-hidden bg-white/25">
                  {i === active && (
                    <span
                      key={`${active}-${paused}`}
                      className="absolute inset-0 origin-left animate-progress bg-white"
                      style={{
                        animationDuration: `${SLIDE_MS}ms`,
                        animationPlayState: paused ? 'paused' : 'running',
                      }}
                    />
                  )}
                  {i < active && <span className="absolute inset-0 bg-white/70" />}
                </span>
                <span
                  className={`mt-2 hidden text-[0.65rem] uppercase tracking-[0.18em] transition-colors sm:block ${
                    i === active ? 'text-white' : 'text-white/45 group-hover:text-white/80'
                  }`}
                >
                  0{i + 1} · {slide.caption}
                </span>
              </button>
            ))}
          </div>

          <a
            href="#intro"
            aria-label="Scroll to content"
            className="hidden flex-col items-center gap-3 text-[0.65rem] uppercase tracking-[0.25em] text-white/70 md:flex"
          >
            Scroll
            <span className="relative block h-12 w-px overflow-hidden bg-white/20">
              <span className="absolute inset-x-0 top-0 h-1/2 animate-scroll-cue bg-white" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
