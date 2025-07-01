'use client'

import React, { useEffect, useState } from 'react'
import Hero1 from '../photos/Hero1.jpeg'
import Hero2 from '../photos/Hero2.jpeg'
import Hero3 from '../photos/Hero3.webp'
import Image from 'next/image'

const Projects = () => {
  const [currentHeroImage, setCurrentHeroImage] = useState(1)

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

  return (
    <div>
      <div>
        <h1
          className={`p-0 text-2xl mt-5 font-medium tracking-tight text-center text-primaryColor underline servicesTitle`}
        >
          Projects
        </h1>
      </div>

      <div className="border border-blue-500">
        <div className="animate relative w-[40rem] h-[20rem] m-auto overflow-hidden rounded-lg">
          <div
            className={`absolute transition-all 
           duration-[2s] ease-out ${
             currentHeroImage <= 1
               ? 'left-0 duration-[2s]'
               : '-translate-x-[40rem]'
           }`}
          >
            <Image src={Hero1} alt="Hero" className=" object-cover" />
          </div>
          <div
            className={`absolute w-full transition-all 
           duration-[2s] ease-out overflow-hidden
          ${
            currentHeroImage === 2
              ? 'left-0'
              : currentHeroImage >= 2
              ? '-translate-x-[40rem]'
              : 'translate-x-[40rem] duration-[2s]'
          }`}
          >
            <Image src={Hero2} alt="Hero" className="object-cover" />
          </div>
          <div
            className={`absolute
        transition-all  duration-[2s] ease-out
         ${currentHeroImage === 3 ? 'left-0' : 'translate-x-full duration-[1s]'}
          `}
          >
            <Image src={Hero3} alt="Hero" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Projects
