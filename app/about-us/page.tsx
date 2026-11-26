import type { Metadata } from 'next'
import Image from 'next/image'
import { HiOutlineBuildingOffice2, HiOutlineEnvelope, HiOutlinePhone } from 'react-icons/hi2'
import { PiCompassToolLight, PiHandshakeLight, PiTreeLight } from 'react-icons/pi'
import { PageHero } from '../components/page-hero'
import { Reveal } from '../components/reveal'
import { SectionHeading } from '../components/section-heading'
import { contact } from '../config'
import Hero2 from '../assets/hero-2.jpeg'
import BedRoom1 from '../assets/projects/residential/BedRoom1.png'
import Salon10 from '../assets/projects/salon/Salon10.png'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Vinayak Studio blends architecture, interior design and spatial storytelling to create spaces that inspire, engage and endure.',
}

const values = [
  {
    icon: PiTreeLight,
    title: 'Timeless',
    text: 'We favour honest materials, natural light and calm palettes over passing trends, so spaces still feel right years later.',
  },
  {
    icon: PiCompassToolLight,
    title: 'Thoughtful',
    text: 'Every layout starts with how people move, gather and rest. Beauty follows function, never the other way round.',
  },
  {
    icon: PiHandshakeLight,
    title: 'Collaborative',
    text: 'You are part of every decision. We share 3D views early and refine together until it feels like yours.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            A studio rooted in craft &amp; <em className="text-bronze-200">context</em>.
          </>
        }
        intro="Architecture, interiors and spatial storytelling from Surat."
        image={Hero2}
        imageAlt="Bright double-height living room with stone feature wall"
      />

      {/* ---------- Story ---------- */}
      <section className="container-page grid items-center gap-16 py-24 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionHeading
            eyebrow="Why Vinayak Studio"
            title="Design that feels as good as it looks."
          />
          <Reveal
            delay={120}
            className="body-muted mt-6 space-y-5 text-base leading-relaxed sm:text-lg"
          >
            <p>
              We believe that good design is timeless, thoughtful and deeply rooted in context. Our
              practice blends architecture, interior design and spatial storytelling to create
              environments that inspire, engage and endure.
            </p>
            <p>
              From family homes and modular kitchens to boutique stores, offices and salons, we
              approach every project with the same care: understand the people first, then shape
              light, material and space around them.
            </p>
          </Reveal>
        </div>
        <Reveal
          variant="curtain"
          className="relative aspect-[4/3] overflow-hidden rounded-sm lg:col-span-6"
        >
          <Image
            src={BedRoom1}
            alt="Bedroom with soft grey drapes and warm accent lighting"
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
      </section>

      {/* ---------- Values ---------- */}
      <section className="bg-ivory-deep py-24 dark:bg-night-soft md:py-32">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="What guides us"
            title="Three ideas behind every space."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal
                key={title}
                delay={i * 120}
                className="group rounded-sm border border-ink/10 bg-ivory p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-night lg:p-10"
              >
                <Icon className="h-12 w-12 text-bronze-500 transition-transform duration-500 group-hover:scale-110 dark:text-bronze-300" />
                <h3 className="mt-6 font-display text-3xl font-light">{title}</h3>
                <p className="body-muted mt-3 text-sm leading-relaxed">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Quote band ---------- */}
      <section className="grain relative isolate overflow-hidden bg-ink py-32 text-white md:py-44">
        <Image
          src={Salon10}
          alt=""
          fill
          placeholder="blur"
          sizes="100vw"
          className="-z-10 object-cover opacity-50"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 to-black/30" />
        <Reveal className="container-page max-w-4xl">
          <blockquote className="font-display text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
            “Transform your interiors into a <em className="text-bronze-200">masterpiece</em>. You
            are just one conversation away.”
          </blockquote>
          <a href="#contact" className="btn-ghost-light mt-10">
            Start the conversation
          </a>
        </Reveal>
      </section>

      {/* ---------- Contact cards ---------- */}
      <section className="container-page grid gap-6 py-24 md:grid-cols-3 md:py-32">
        {[
          {
            icon: HiOutlineBuildingOffice2,
            label: 'Studio',
            value: contact.addressLines.join(', '),
            href: contact.mapHref,
            external: true,
          },
          {
            icon: HiOutlineEnvelope,
            label: 'Email',
            value: contact.email,
            href: `mailto:${contact.email}`,
          },
          { icon: HiOutlinePhone, label: 'Phone', value: contact.phone, href: contact.phoneHref },
        ].map(({ icon: Icon, label, value, href, external }, i) => (
          <Reveal key={label} delay={i * 100}>
            <a
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex h-full flex-col rounded-sm border border-ink/10 p-8 transition-all duration-500 hover:border-bronze-500 hover:bg-bronze-500 hover:text-white dark:border-white/10"
            >
              <Icon className="h-8 w-8 text-bronze-500 transition-colors group-hover:text-white dark:text-bronze-300" />
              <span className="mt-8 text-xs uppercase tracking-[0.2em] opacity-60">{label}</span>
              <span className="mt-2 break-words font-display text-2xl">{value}</span>
            </a>
          </Reveal>
        ))}
      </section>
    </>
  )
}
