import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import Logo from '../photos/Logo.png'
import HeroImage from '../photos/HeroImage.png'
import { metaData } from "../config";
import Image from "next/image";

const navItems = {
  "/": { name: "Home" },
  "/services": { name: "Services" },
  "/photos": { name: "Photos" },
};

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold tracking-tight">
            <Image
              src={HeroImage}
              alt="Profile photo"
              className="rounded-full bg-gray-100 block lg:mt-5 mt-0 
          lg:mb-5 mb-10 mx-auto sm:float-right sm:mb-5 grayscale hover:grayscale-0"
              unoptimized
              width={80}
              height={90}
              priority
            />
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
