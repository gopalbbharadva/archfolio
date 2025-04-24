'use client'

import Image from 'next/image'
import Hero1 from './photos/Hero1.jpeg'
import Hero2 from './photos/Hero2.jpeg'
import Hero3 from './photos/Hero3.webp'
import { projects } from './services/project-data'
import { LegacyRef, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ServiceCard } from './components/ServiceCard'

export default function Page() {
  const [currentHeroImage, setCurrentHeroImage] = useState(1)
  const [visibleFirstServiceSection, setVisibleFirstServiceSection] =
    useState(false)
  const [visibleSeconderviceSection, setVisibleSeconderviceSection] =
    useState(false)

  const [isServicesAvailable, setIsServicesAvailable] = useState(false)
  const serviceHeaderRef = useRef<HTMLDivElement>(null)
  const firstServiceRef = useRef<HTMLDivElement>(null)
  const secondServiceRef = useRef<HTMLDivElement>(null)

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

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  }

  const callBack = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target?.classList.contains('ht')) {
        setIsServicesAvailable(true)
      }
      if (entry.isIntersecting && entry.target?.classList.contains('sv1')) {
        setVisibleFirstServiceSection(true)
      }
      if (entry.isIntersecting && entry.target?.classList.contains('sv2')) {
        setVisibleSeconderviceSection(true)
      }
    })
  }

  const registerIntersectionObserver = () => {
    const observerInstance = new IntersectionObserver(callBack, options)
    const refs = [serviceHeaderRef, firstServiceRef, secondServiceRef]
    refs.forEach((element) => {
      element.current && observerInstance.observe(element.current)
    })
  }

  useEffect(() => {
    registerIntersectionObserver()
    // const { observerInstance, targetElement } = registerIntersectionObserver()
    // const { observerInstance, targetElement } = registerIntersectionObserver()
    // return () => {
    //   observerInstance.unobserve(targetElement)
    //   setVisibleFirstServiceSection(false)
    // }
  }, [])
  // console.log(visibleFirstServiceSection, 'iservices')

  return (
    <section className="flex justify-center items-center w-full flex-col">
      {/**
       * Hero section with slider
       */}

      <div className="animate relative w-full h-[40rem]">
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

      {/* <div ref={serviceHeaderRef} className="w-10 mt-10 h-10 bg-red-500">
        this is target element
      </div> */}

      <div className="flex justify-center items-center flex-col w-full mt-10">
        <div
          ref={serviceHeaderRef}
          className={`px-4 w-full ht ${
            isServicesAvailable ? 'headTitle' : 'opacity-0'
          }`}
        >
          <h2
            className="text-white text-3xl 
          dark:text-white text-center 
          bg-primaryColor rounded-full"
          >
            SERVICES PROVIDED BY VINAYAK STUDIO
          </h2>
        </div>
        <div className="mt-10 px-14">
          <div
            ref={firstServiceRef}
            className={`flex justify-between items-center gap-10 p-10 sv1
              ${visibleFirstServiceSection ? 'fadeIn' : 'opacity-0'}
            `}
          >
            <ServiceCard
              imageClassStyle="block mt-0 shadow-lg p-4 rounded-lg object-fit"
              imageUrl={projects[0].url}
              containerClassStyle="shadow-lg m-0 rounded-lg p-4 w-[450px] max-w-full 
              aspect-[1.5] relative flex-shrink-0"
            />
            <div className="flex items-start flex-col self-center gap-4">
              <p
                className="text-primaryColor dark:text-white tracking-tight font-medium 
              text-2xl text-center w-full"
              >
                {projects[0].title}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-lg text-start font-light">
                {projects[0].description}
              </p>
            </div>
          </div>
          <div
            ref={secondServiceRef}
            className={`flex flex-row-reverse sv-2 justify-between items-center gap-10 p-10 sv2 ${
              visibleSeconderviceSection ? 'fadeIn2' : 'opacity-0'
            }`}
          >
            <ServiceCard
              imageUrl={projects[1].url}
              containerClassStyle="shadow-lg m-0 rounded-lg p-4 w-[450px] max-w-full 
               aspect-[1.5] relative flex-shrink-0"
              imageClassStyle="rounded-md shadow-lg p-4 block sm:float-right object-cover"
            />
            <div className="flex items-center flex-col self-center gap-4">
              <p
                className="text-primaryColor dark:text-white tracking-tight 
                    font-2xl text-2xl text-center w-full font-medium"
              >
                {projects[1].title}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-lg font-light text-start">
                {projects[1].description}
              </p>
            </div>
          </div>
        </div>
        <a
          className="bg-primaryColor 
          text-white px-4 py-2 hover:cursor-pointer hover:bg-orange-800 rounded-full"
          onClick={() => router.push('/services')}
        >
          More Services
        </a>
      </div>
    </section>
  )
}
