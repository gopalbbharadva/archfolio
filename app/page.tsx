import Image from 'next/image'
import Link from 'next/link'
import { HiArrowRight, HiArrowUpRight } from 'react-icons/hi2'
import { HeroSlideshow, type HeroSlide } from './components/hero-slideshow'
import { Reveal } from './components/reveal'
import { SectionHeading } from './components/section-heading'
import { CATEGORIES, categoryCovers, projectImages } from './data/projects'
import { services } from './data/services'
import Hero1 from './assets/hero-1.jpeg'
import Hero3 from './assets/hero-3.webp'
import Hall1 from './assets/projects/residential/Hall1.png'
import Salon2 from './assets/projects/salon/Salon2.png'
import Kitchen1 from './assets/projects/residential/Kitchen1.png'
import Dining2 from './assets/projects/residential/Dining2.png'

const slides: HeroSlide[] = [
  { image: Hero1, alt: 'Contemporary gabled residence lit up at dusk', caption: 'Architecture' },
  {
    image: Hero3,
    alt: 'Open-plan living and dining space with a green wall',
    caption: 'Interiors',
  },
  { image: Hall1, alt: 'Warm, neutral living room with layered lighting', caption: 'Residential' },
  {
    image: Salon2,
    alt: 'Sage-green salon styling floor with arched mirrors',
    caption: 'Salon & Wellness',
  },
]

const process = [
  {
    title: 'Listen',
    text: 'We start with a conversation about how you live or work, your budget and your timeline, and we visit the site.',
  },
  {
    title: 'Concept',
    text: 'Space plans, mood boards and material palettes come together into a clear design direction.',
  },
  {
    title: 'Design',
    text: 'Photo-real 3D views and detailed drawings let you see and refine every corner before work begins.',
  },
  {
    title: 'Deliver',
    text: 'We coordinate vendors and oversee execution on site so the finished space matches the design.',
  },
]

// A curated, high-resolution selection for the moving gallery strip
const marqueeImages = projectImages.filter((p) => p.src.width >= 860).slice(0, 12)

export default function HomePage() {
  return (
    <>
      <HeroSlideshow slides={slides} />

      {/* ---------- Intro ---------- */}
      <section
        id="intro"
        className="container-page grid scroll-mt-24 items-center gap-16 py-24 md:py-36 lg:grid-cols-2"
      >
        <div>
          <SectionHeading
            eyebrow="The studio"
            title={
              <>
                Good design is <em className="text-bronze-500 dark:text-bronze-300">timeless</em>,
                thoughtful and rooted in context.
              </>
            }
            intro="Vinayak Studio is an interior design and architecture practice based in Surat. We blend architecture, interiors and spatial storytelling to create places that inspire, work beautifully and age gracefully."
          />
          <Reveal delay={150} className="mt-10">
            <Link href="/about-us" className="btn-outline group">
              About the studio
              <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="relative pb-16 sm:pb-24">
          <Reveal
            variant="curtain"
            className="relative aspect-[4/5] w-[78%] overflow-hidden rounded-sm"
          >
            <Image
              src={Kitchen1}
              alt="Warm modular kitchen with timber-toned cabinetry"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal
            variant="curtain"
            delay={250}
            className="absolute bottom-0 right-0 aspect-[4/3] w-[55%]"
            innerClassName="rounded-sm border-[6px] border-ivory shadow-2xl dark:border-night"
          >
            <Image
              src={Dining2}
              alt="Dining area with an arched backlit mirror"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 28vw, 55vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* ---------- Selected work ---------- */}
      <section className="bg-ivory-deep py-24 dark:bg-night-soft md:py-32">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Selected work"
              title="Spaces for living, working and unwinding."
            />
            <Reveal delay={100}>
              <Link
                href="/projects"
                className="link-underline inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.16em]"
              >
                All projects <HiArrowRight />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {CATEGORIES.map((category, i) => {
              const count = projectImages.filter((p) => p.category === category.id).length
              return (
                <Reveal key={category.id} delay={i * 120} className={i === 1 ? 'md:mt-16' : ''}>
                  <Link
                    href={`/projects?filter=${category.id}`}
                    className="group relative block aspect-[3/4] overflow-hidden rounded-sm bg-ink"
                  >
                    <Image
                      src={categoryCovers[category.id]}
                      alt={`${category.label} interior by Vinayak Studio`}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-[1.4s] ease-out-expo group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7 text-white">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                          {String(count).padStart(2, '0')} spaces
                        </p>
                        <h3 className="mt-2 font-display text-3xl font-light sm:text-4xl">
                          {category.label}
                        </h3>
                        <p className="mt-3 max-h-0 max-w-xs overflow-hidden text-sm leading-relaxed text-white/80 opacity-0 transition-all duration-700 ease-out-expo group-hover:max-h-24 group-hover:opacity-100">
                          {category.blurb}
                        </p>
                      </div>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/40 transition-all duration-500 group-hover:rotate-45 group-hover:border-white group-hover:bg-white group-hover:text-ink">
                        <HiArrowUpRight />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------- Moving gallery ---------- */}
      <section aria-label="Gallery of recent interiors" className="overflow-hidden py-16 md:py-20">
        <div className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused]">
          {[...marqueeImages, ...marqueeImages].map((img, i) => (
            <div
              key={i}
              aria-hidden={i >= marqueeImages.length}
              className="relative h-56 shrink-0 overflow-hidden rounded-sm md:h-72"
              style={{ aspectRatio: `${img.src.width} / ${img.src.height}` }}
            >
              <Image
                src={img.src}
                alt={i < marqueeImages.length ? img.title : ''}
                fill
                placeholder="blur"
                sizes="(min-width: 768px) 520px, 400px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="container-page py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="What we do"
                title="From the first sketch to the final finish."
                intro="One studio for architecture, interiors and planning, so every decision works together."
              />
              <Reveal delay={150} className="mt-10">
                <Link href="/services" className="btn-primary group">
                  All services
                  <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </div>

          <ol className="lg:col-span-8">
            {services.map((service, i) => (
              <Reveal as="li" key={service.slug} delay={i * 60}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group grid grid-cols-[auto_1fr_auto] items-start gap-6 border-t border-ink/10 py-8 transition-colors dark:border-white/10 sm:gap-10"
                >
                  <span className="pt-2 font-mono text-xs text-bronze-500 dark:text-bronze-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>
                    <span className="block font-display text-3xl font-light transition-transform duration-500 ease-out-expo group-hover:translate-x-2 sm:text-4xl">
                      {service.title}
                    </span>
                    <span className="body-muted mt-3 block max-w-xl text-sm leading-relaxed sm:text-base">
                      {service.summary}
                    </span>
                  </span>
                  <span className="mt-2 grid h-10 w-10 place-items-center rounded-full border border-ink/15 transition-all duration-500 group-hover:border-bronze-500 group-hover:bg-bronze-500 group-hover:text-white dark:border-white/15">
                    <HiArrowUpRight className="transition-transform duration-500 group-hover:rotate-45" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="bg-ivory-deep py-24 dark:bg-night-soft md:py-32">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="How we work"
            title="A calm, clear process."
            intro="Four simple stages keep you informed and in control from the first meeting to handover."
          />
          <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-ink/10 dark:bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 120}
                className="group bg-ivory-deep p-8 transition-colors duration-500 hover:bg-ivory dark:bg-night-soft dark:hover:bg-night lg:p-10"
              >
                <span className="font-display text-6xl font-light text-bronze-500/40 transition-colors duration-500 group-hover:text-bronze-500 dark:text-bronze-300/40 dark:group-hover:text-bronze-300">
                  0{i + 1}
                </span>
                <h3 className="mt-6 font-display text-2xl">{step.title}</h3>
                <p className="body-muted mt-3 text-sm leading-relaxed">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
