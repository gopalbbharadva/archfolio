'use client'

import Link from 'next/link'
import { ThemeSwitch } from './theme-switch'
import HeroImage from '../photos/Logo.png'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { FILTERS } from 'public/projects/projects-data'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const navItems = {
  '/': { name: 'Home' },
  '/about-us': { name: 'About Us' },
  '/services': { name: 'Services' },
  '/projects': { name: 'Projects' },
}

export function Navbar() {
  const [isProject, setIsProject] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const onProjectsMouseOverHandler = () => {
    setIsProject(true)
  }

  const checkOutsideHandler = (e) => {
    console.log(ref.current, 'current')
    if (ref.current && !ref.current?.contains(e.target)) {
      setIsProject(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mouseover', checkOutsideHandler)
    // document.addEventListener('click', (e) => checkOutsideHandler(e))
    return () => document.removeEventListener('click', checkOutsideHandler)
  }, [])
  const router = useRouter()
  const pathname = usePathname() // ✅ get the current route
  const searchParams = useSearchParams()
  const handleClick = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('filter', category)

    // ✅ include pathname explicitly
    const newUrl = `${pathname}?${params.toString()}`
    window.location.href=newUrl
  }

  return (
    <nav className="px-12 border-b border-primaryColor">
      <div className="flex flex-col md:flex-row md:items-center justify-between ">
        <div className="relative">
          <Link href="/" className="text-3xl font-semibold tracking-tight">
            <Image
              src={HeroImage}
              alt="Profile photo"
              className="rounded-full bg-gray-100 block
                sm:float-right m-2 grayscale hover:grayscale-0"
              unoptimized
              width={80}
              height={90}
              priority
            />
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center relative">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              onMouseOver={
                name === 'Projects' ? onProjectsMouseOverHandler : () => {}
              }
              key={path}
              href={path}
              className="transition-all flex align-middle relative text-primaryColor dark:text-white link"
            >
              {name}
              {isProject && name === 'Projects' && (
                <div
                  ref={ref}
                  className="absolute right-[-1rem] top-6 border bg-primaryColor text-white"
                >
                  {FILTERS.map(({ cateogry }) => (
                    <p
                      onClick={() => handleClick(cateogry)}
                      className="p-2 text-xs first-letter:uppercase"
                    >
                      {cateogry}
                    </p>
                  ))}
                </div>
              )}
            </Link>
          ))}

          <ThemeSwitch />
        </div>
      </div>
    </nav>
  )
}
