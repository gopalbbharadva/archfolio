import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi2'
import { PageHero } from '../components/page-hero'
import { Reveal } from '../components/reveal'
import { services } from '../data/services'
import Hero3 from '../assets/hero-3.webp'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Architecture, interior design, renovation, residential and commercial interiors, and space planning by Vinayak Studio, Surat.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Design, end to <em className="text-bronze-200">end</em>.
          </>
        }
        intro="Architecture, interiors and planning under one roof, shaped around the people who will use the space."
        image={Hero3}
        imageAlt="Open-plan living and dining space with a vertical garden"
      />

      {/* Quick index */}
      <nav aria-label="Services" className="border-b border-ink/10 dark:border-white/10">
        <ul className="container-page no-scrollbar flex gap-8 overflow-x-auto py-5 text-xs font-medium uppercase tracking-[0.16em]">
          {services.map((s, i) => (
            <li key={s.slug} className="shrink-0">
              <a
                href={`#${s.slug}`}
                className="link-underline body-muted hover:text-ink dark:hover:text-white"
              >
                <span className="mr-2 text-bronze-500 dark:text-bronze-300">0{i + 1}</span>
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container-page py-20 md:py-28">
        {services.map((service, i) => {
          const flipped = i % 2 === 1
          return (
            <section
              key={service.slug}
              id={service.slug}
              aria-labelledby={`${service.slug}-title`}
              className="grid scroll-mt-28 items-center gap-10 py-14 md:grid-cols-12 md:gap-16 md:py-20"
            >
              <Reveal
                variant="curtain"
                className={`group relative aspect-[4/3] overflow-hidden rounded-sm bg-ink md:col-span-7 ${
                  flipped ? 'md:order-2' : ''
                }`}
              >
                <Image
                  src={service.image}
                  alt={`${service.title} by Vinayak Studio`}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover"
                />
              </Reveal>

              <Reveal
                variant={flipped ? 'left' : 'right'}
                delay={200}
                className={`md:col-span-5 ${flipped ? 'md:order-1' : ''}`}
              >
                <span className="font-display text-7xl font-light text-bronze-500/30 dark:text-bronze-300/30">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 id={`${service.slug}-title`} className="heading-md mt-2">
                  {service.title}
                </h2>
                <p className="body-muted mt-5 text-base leading-relaxed sm:text-lg">
                  {service.summary}
                </p>
                <ul className="mt-7 space-y-3 border-t border-ink/10 pt-7 dark:border-white/10">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm">
                      <span className="h-px w-5 bg-bronze-500 dark:bg-bronze-300" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </section>
          )
        })}
      </div>

      <section className="border-t border-ink/10 bg-ivory-deep py-20 dark:border-white/10 dark:bg-night-soft">
        <Reveal className="container-page flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="heading-md max-w-2xl">
            See how these services come together in finished spaces.
          </h2>
          <Link href="/projects" className="btn-primary group shrink-0">
            View projects
            <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>
    </>
  )
}
