import Image from 'next/image'
import React from 'react'
import { HiOutlineBuildingOffice } from 'react-icons/hi2'
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md'

function AboutUs() {
  return (
    <section className="relative">
      <Image
        className="w-full h-[41rem] object-cover"
        alt="not there"
        width={1000}
        height={1000}
        src="https://images2.alphacoders.com/134/1347182.png"
      />
      <div
        className="absolute animate top-48 flex justify-center 
      items-center flex-col text-white w-full"
      >
        <h1 className="text-[4rem] font-semibold uppercase mb-8">About Us</h1>
      </div>

      <div className='flex justify-evenly items-center py-20'>
        <div className='flex justify-start items-start flex-col'>
          <p className="font-extrabold text-primary text-5xl text-primaryColor">
            Why <br /> Vinayak Design Studio?
          </p>
          <p className="text-xl leading-relaxed mb-6 max-w-[40rem]">
            We believe that good design is timeless, thoughtful, and deeply
            rooted in context. Our practice blends architecture, interior
            design, and spatial storytelling to create environments that
            inspire, engage, and endure.
          </p>
        </div>
        <Image
          height={400}
          width={400}
          src="https://media.tarkett-image.com/large/EMEA_PI_20161128_10_steps_interior_design.jpg"
          alt="change in the height"
        />
      </div>
      {/* !! TODO: explore how we can make the div structure same and add hyperlinks */}
      <div className="bg-primaryColor p-16 flex justify-center items-center flex-col gap-20 mt-10">
        <div>
          <p className="text-center text-3xl text-white">
            Transform your interiors into a masterpiece.
          </p>
          <p className="border w-full mt-4"></p>
          <p className="text-center text-white mt-4">
            You are just one action away.
          </p>
        </div>
        <div className="flex justify-evenly items-center gap-40">
          <div>
            <HiOutlineBuildingOffice size={80} color="white" />
            <p className="text-white">Adajan, Surat</p>
          </div>
          <a className="text-white" href="mailto:gopalbbharadva@gmail.com">
            <div className="flex justify-center items-center flex-col">
              <MdOutlineEmail size={80} color="white" />
              vinayakstudio@gmail.com
            </div>
          </a>
          <a href="tel: 9328174399">
            <div>
              <MdOutlinePhone size={80} color="white" />
              <p className="text-white">+91 9328174399</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
