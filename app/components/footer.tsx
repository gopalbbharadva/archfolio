import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import { HiArrowUpRight } from 'react-icons/hi2'
import { MdOutlineEmail, MdOutlinePhone, MdOutlineLocationOn } from 'react-icons/md'
import Wordmark from '../assets/logo-wordmark.png'
import { contact, navItems } from '../config'
import { CATEGORIES } from '../data/projects'
import { Reveal } from './reveal'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="relative overflow-hidden bg-ink text-neutral-300 dark:bg-black">
      {/* Big call to action */}
      <div className="container-page border-b border-white/10 py-20 md:py-28">
        <Reveal className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow !text-bronze-300">Start a project</p>
            <h2 className="mt-5 max-w-3xl font-display text-5xl font-light leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Let’s design a space you’ll <em className="text-bronze-300">love</em> coming back to.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${contact.email}`} className="btn-primary">
              Email us <HiArrowUpRight />
            </a>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </Reveal>
      </div>

      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Image src={Wordmark} alt="Vinayak Studio" className="h-16 w-auto invert" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-neutral-400">
            We believe good design is timeless, thoughtful and deeply rooted in context.
          </p>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-bronze-300"
          >
            <FaInstagram className="h-4 w-4" /> {contact.instagramHandle}
          </a>
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <p className="eyebrow !text-neutral-500">Studio</p>
          <ul className="mt-5 space-y-3 text-sm">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="link-underline hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-2">
          <p className="eyebrow !text-neutral-500">Work</p>
          <ul className="mt-5 space-y-3 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <Link href={`/projects?filter=${c.id}`} className="link-underline hover:text-white">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <address className="not-italic lg:col-span-4">
          <p className="eyebrow !text-neutral-500">Visit &amp; contact</p>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a
                href={contact.mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-3 hover:text-white"
              >
                <MdOutlineLocationOn className="mt-0.5 h-5 w-5 shrink-0 text-bronze-300" />
                <span>
                  {contact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <span className="mt-1 inline-flex items-center gap-1 text-xs uppercase tracking-[0.16em] text-bronze-300">
                    Get directions
                    <HiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href={contact.phoneHref} className="flex items-center gap-3 hover:text-white">
                <MdOutlinePhone className="h-5 w-5 text-bronze-300" />
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 break-all hover:text-white"
              >
                <MdOutlineEmail className="h-5 w-5 shrink-0 text-bronze-300" />
                {contact.email}
              </a>
            </li>
          </ul>
        </address>
      </div>

      <div className="container-page flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Vinayak Studio. All rights reserved.</p>
        <p>Interior &amp; Architecture · Surat, India</p>
      </div>
    </footer>
  )
}
