'use client'

import Image from 'next/image'
import Hero1 from './photos/Hero1.jpeg'
import Hero2 from './photos/Hero2.jpeg'
import Hero3 from './photos/Hero3.webp'
import { projects } from './services/project-data'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Page() {
  const [currentHeroImage, setCurrentHeroImage] = useState(1)

  const router = useRouter()

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentHeroImage((prev) => {
        if (prev === 3) {
          return 1
        }
        return ++prev
      })
    }, 2000)
    return () => clearInterval(id)
  }, [])

  /**
   * First Image: initially/Focus : left-0, Not-Screen: -translate-x-full
   * Second Image: initiallly: left-full, Focus: left-0 and No-Screen: -translate-x-full
   * Third Image: initially: left-full, Focus: left-0 and No-Screen: -translate-x-full
   */

  return (
    <section className="flex justify-center items-center w-full flex-col">
      {/**
       * Hero section with slider
       */}

      <div className="relative w-full h-[40rem]">
        <div
          className={`absolute w-screen transition-all 
           duration-[2s] ease-out ${
             currentHeroImage <= 1 ? 'left-0' : '-translate-x-full'
           }`}
        >
          <Image src={Hero1} alt="Hero" className="h-[40rem] object-cover" />
        </div>
        <div
          className={`absolute w-screen transition-all 
           duration-[2s] ease-out 
          ${
            currentHeroImage === 2
              ? 'left-0'
              : currentHeroImage >= 2
              ? '-translate-x-full'
              : 'left-full'
          }`}
        >
          <Image src={Hero2} alt="Hero" className="h-[40rem] object-cover" />
        </div>
        <div
          className={`absolute
        transition-all  duration-[2s] ease-out 
         ${currentHeroImage === 3 ? 'left-0' : 'left-full'}
          `}
        >
          <Image
            src={Hero3}
            alt="Hero"
            className="h-[40rem] object-cover w-screen"
          />
        </div>
      </div>

      {/**
       * SERVICES SECTION
       */}

      <div className="flex justify-center items-center flex-col gap-4 w-full mt-10">
        <div className="px-4 w-full">
          <h2
            className="text-white text-3xl 
          dark:text-white text-center 
          bg-primaryColor rounded-full"
          >
            SERVICES PROVIDED BY VINAYAK STUDIO
          </h2>
        </div>
        <p className="text-center text-gray-400">About Us</p>
        <div className="space-y-6">
          <div
            key={crypto.randomUUID()}
            className="flex justify-between items-center gap-10 border p-10"
          >
            <div className="shadow-lg m-0 rounded-lg p-4">
              <Image
                src={projects[0].url}
                alt="Profile photo"
                className="block mt-0 rounded-lg max-w-[70rem]"
                unoptimized
                width={600}
                height={100}
                priority
              />
            </div>
            <div className="flex items-start flex-col self-center gap-4">
              <p className="text-primaryColor dark:text-white tracking-tight font-medium text-2xl text-center w-full">
                {projects[0].title}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm text-center">
                {projects[0].description}
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse justify-between items-center gap-10 p-10">
            <Image
              src={projects[1].url}
              alt="Profile photo"
              className="rounded-md shadow-lg p-4 block sm:float-right "
              unoptimized
              width={600}
              height={100}
              priority
            />
            <div className="flex items-start flex-col self-center gap-4">
              <p className="text-primaryColor dark:text-white tracking-tight font-medium text-2xl text-center w-full">
                {projects[1].title}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm text-center">
                {projects[1].description}
              </p>
            </div>
          </div>
        </div>
        <a
          className="bg-primaryColor 
          text-white px-4 py-2 hover:cursor-pointer hover:bg-orange-800"
          onClick={() => router.push('/services')}
        >
          More Services
        </a>
      </div>
    </section>
  )
}
