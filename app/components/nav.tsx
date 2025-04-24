import Link from 'next/link'
import { ThemeSwitch } from './theme-switch'
import HeroImage from '../photos/Logo.png'
import Image from 'next/image'

const navItems = {
  '/': { name: 'Home' },
  '/about-us': { name: 'About Us' },
  '/services': { name: 'Services' },
  '/projects': { name: 'Projects' },
}

export function Navbar() {
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
              key={path}
              href={path}
              className="transition-all flex align-middle relative text-primaryColor
              dark:text-white link
              "
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  )
}
