'use client'

import Image from "next/image";
import Hero1 from './photos/Hero1.jpeg'
import Hero2 from './photos/Hero2.jpeg'
import Hero3 from './photos/Hero3.webp'
import { useEffect, useState } from "react";

export default function Page() {
  const [currentHeroImage, setCurrentHeroImage] = useState(1)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentHeroImage(prev => {
        if (prev === 3) {
          return 1;
        }
        return ++prev;
      })
    }, 2000);
    return () => clearInterval(id)
  }, [])

  console.log(currentHeroImage, 'current')
  const getCurrentHeroImage = () => {
    switch (currentHeroImage) {
      case 1: return Hero1
      case 2: return Hero2
      case 3: return Hero3
      default: return Hero1
    }
  }

  return (
    <section className="flex justify-center items-center border w-full border-red-500">
      <Image
        src={getCurrentHeroImage()}
        alt="Hero"
        className="h-[50rem] object-cover"
      // className="rounded-full bg-gray-100 block lg:mt-5 mt-0 
      //   lg:mb-5 mb-10 mx-auto sm:float-right sm:mb-5 grayscale hover:grayscale-0"
      // width={150}
      // height={150}
      // priority
      />
      {/* <div className="w-full max-w-[650px] border border-yellow-500">
        <h1 className="mb-8 text-2xl font-medium tracking-tight">
          Vinayak Design Studio
        </h1>

        <p className="mt-0">
          Vinayak Design Studio is dedicated to shaping the future of architecture through sustainable and innovative design solutions. We specialize in creating spaces that are not only visually striking but also environmentally responsible and energy-efficient. Our portfolio highlights projects where we’ve integrated cutting-edge
          technology and sustainable practices to build a better tomorrow.</p>
      </div> */}
      {/* <div className="flex flex-col justify-center items-center w-full" >
        <Image
          src={HeroImage}
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 
          lg:mb-5 mb-10 mx-auto sm:float-right sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={150}
          height={150}
          priority
        />
      </div> */}
    </section >
  );
}
