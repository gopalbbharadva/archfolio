'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'
import Wordmark from '../assets/logo-wordmark.png'
import { ThemeSwitch } from './theme-switch'
import { navItems, contact } from '../config'
import { CATEGORIES } from '../data/projects'

/** Routes that open with a full-bleed image, so the nav starts transparent. */
const HERO_ROUTES = ['/', '/about-us', '/services', '/projects']

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu whenever the route changes
  useEffect(() => setMenuOpen(false), [pathname])

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const overHero = HERO_ROUTES.includes(pathname) && !scrolled && !menuOpen
  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo ${
          overHero
            ? 'bg-gradient-to-b from-black/50 to-transparent text-white'
            : 'border-b border-ink/10 bg-ivory/85 text-ink shadow-[0_8px_30px_-20px_rgba(0,0,0,0.35)] backdrop-blur-xl dark:border-white/10 dark:bg-night/85 dark:text-neutral-100'
        }`}
      >
        <nav
          aria-label="Main"
          className={`container-page flex items-center justify-between transition-[height] duration-500 ease-out-expo ${
            scrolled ? 'h-16' : 'h-20 md:h-24'
          }`}
        >
          <Link href="/" aria-label="Vinayak Studio home" className="relative z-10 shrink-0">
            <Image
              src={Wordmark}
              alt="Vinayak Studio, Interior | Architecture"
              priority
              className={`w-auto transition-all duration-500 ease-out-expo ${
                scrolled ? 'h-10' : 'h-12 md:h-14'
              } ${overHero ? 'invert' : 'dark:invert'}`}
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-9 text-[0.82rem] font-medium uppercase tracking-[0.16em] md:flex">
            {navItems.map(({ href, label }) =>
              href === '/projects' ? (
                <li key={href} className="group relative">
                  <Link
                    href={href}
                    aria-current={isActive(href) ? 'page' : undefined}
                    aria-haspopup="true"
                    className="link-underline py-2"
                  >
                    {label}
                  </Link>
                  {/* Dropdown (hover + keyboard focus) */}
                  <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-300 ease-out-expo group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-ink/10 bg-ivory p-2 text-ink shadow-2xl normal-case tracking-normal dark:border-white/10 dark:bg-night-soft dark:text-neutral-100">
                      {CATEGORIES.map((c) => (
                        <Link
                          key={c.id}
                          href={`/projects?filter=${c.id}`}
                          className="group/item flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-colors hover:bg-bronze-50 dark:hover:bg-white/5"
                        >
                          {c.label}
                          <HiArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                        </Link>
                      ))}
                      <Link
                        href="/projects"
                        className="mt-1 block rounded-xl border-t border-ink/10 px-4 py-3 text-xs font-medium uppercase tracking-[0.16em] text-bronze-500 hover:bg-bronze-50 dark:border-white/10 dark:text-bronze-300 dark:hover:bg-white/5"
                      >
                        View all work
                      </Link>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive(href) ? 'page' : undefined}
                    className="link-underline py-2"
                  >
                    {label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <div className="relative z-10 flex items-center gap-3">
            <ThemeSwitch
              className={
                overHero
                  ? 'border-white/30 hover:bg-white/10'
                  : 'border-ink/15 hover:bg-ink/5 dark:border-white/20 dark:hover:bg-white/10'
              }
            />
            <a
              href="#contact"
              className={`hidden rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] transition-all duration-300 lg:inline-flex ${
                overHero
                  ? 'bg-white text-ink hover:bg-bronze-100'
                  : 'bg-ink text-ivory hover:bg-bronze-500 dark:bg-white dark:text-ink dark:hover:bg-bronze-300'
              }`}
            >
              Let’s talk
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="grid h-9 w-9 place-items-center md:hidden"
            >
              <span className="relative block h-3 w-6">
                <span
                  className={`absolute left-0 h-px w-6 bg-current transition-all duration-500 ease-out-expo ${
                    menuOpen ? 'top-1.5 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute left-0 h-px w-6 bg-current transition-all duration-500 ease-out-expo ${
                    menuOpen ? 'top-1.5 -rotate-45' : 'top-3'
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu (sibling of header so the header's backdrop-filter doesn't trap it) */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-ivory px-6 pb-10 pt-28 text-ink transition-all duration-700 ease-out-expo dark:bg-night dark:text-neutral-100 md:hidden ${
          menuOpen
            ? 'visible opacity-100 [clip-path:inset(0_0_0_0)]'
            : 'invisible opacity-0 [clip-path:inset(0_0_100%_0)]'
        }`}
      >
        <ul className="flex flex-col gap-2">
          {navItems.map(({ href, label }, i) => (
            <li
              key={href}
              className={`overflow-hidden transition-all duration-700 ease-out-expo ${
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: menuOpen ? `${150 + i * 70}ms` : '0ms' }}
            >
              <Link
                href={href}
                aria-current={isActive(href) ? 'page' : undefined}
                className="flex items-baseline gap-4 py-2 font-display text-5xl font-light"
              >
                <span className="font-sans text-xs text-bronze-500">0{i + 1}</span>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className={`mt-auto space-y-2 border-t border-ink/10 pt-6 text-sm transition-opacity delay-500 duration-700 dark:border-white/10 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a href={contact.phoneHref} className="block">
            {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className="block">
            {contact.email}
          </a>
        </div>
      </div>
    </>
  )
}
