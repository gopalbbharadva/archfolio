import Image from "next/image";
import HeroImage from './photos/HeroImage.png'

export default function Page() {
  return (
    <section className="flex justify-between items-start w-100">
      <div>
        <h1 className="mb-8 text-2xl font-medium tracking-tight">
          Vinayak Design Studio
        </h1>

        <p className="mt-0">
          Vinayak Design Studio is dedicated to shaping the future of architecture through sustainable and innovative design solutions. We specialize in creating spaces that are not only visually striking but also environmentally responsible and energy-efficient. Our portfolio highlights projects where we’ve integrated cutting-edge
          technology and sustainable practices to build a better tomorrow.</p>
      </div>
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
