import React from 'react'
import { FaInstagram } from 'react-icons/fa6'
import Logo from '../photos/Logo.png' // TODO: for wrong imports can we show some warning or something?
import { TbMailFilled } from 'react-icons/tb'
import { socialLinks } from 'app/config'
import Link from 'next/link'
import Image from 'next/image'
import {
  MdOutlineEmail,
  MdOutlinePhone,
  MdOutlineLocationOn,
} from 'react-icons/md'

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  )
}

// function SocialLinks() {
//   return (
//     <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
//       <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
//       <SocialLink href={socialLinks.email} icon={TbMailFilled} />
//     </div>
//   )
// }

export default function Footer() {
  return (
    <div className="border flex justify-between items-center gap-10 p-10 mt-4">
      {/* Logo part  */}
      <div className="flex flex-col justify-start items-center gap-5 w-full">
        <Link href="/" className="text-3xl font-semibold tracking-tight">
          <Image
            src={Logo}
            alt="Profile photo"
            className="rounded-full bg-gray-100 block
                sm:float-right grayscale hover:grayscale-0 border"
            unoptimized
            width={120}
            height={120}
            priority
          />
        </Link>
        <p className="text-sm leading-relaxed mb-6 text-center">
          We believe that good design is timeless, thoughtful, and deeply in
          context.
        </p>
      </div>
      {/* Quick links part  */}
      <div className="flex flex-col justify-start items-center self-start w-full">
        <div className="flex flex-col justify-start items-start gap-6">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a className="text-nowrap" href="/about-us">
            About-Us
          </a>
          <a href="/projects">Projects</a>
        </div>
      </div>
      {/* Contact us part */}
      <div className="flex flex-col justify-between self-start gap-4">
        <div className="flex justify-start items-start gap-2">
          <MdOutlineLocationOn
            size={20}
            className="text-primaryColor w-24 mt-1"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi labore
            recusandae minus cum optio esse vel blanditiis architecto alias iure
            enim quidem dolorum aut repellat voluptatum, voluptatem at ullam
            voluptas obcaecati eveniet aliquam explicabo perferendis. Sunt,
            quibusdam magni. Quis eos, eius ipsum corrupti omnis ratione
            deleniti nobis facilis doloremque possimus!
          </p>
        </div>
        <div className="flex justify-start items-start gap-2">
          <MdOutlinePhone size={20} className="text-primaryColor" />
          <p>+91 9328174399</p>
        </div>
        <a href="mailto:gopalbbharadva@gmail.com">
          <div className="flex justify-start items-center gap-2">
            <MdOutlineEmail size={20} className="text-primaryColor" />
            gopalbbharadva@gmail.com
          </div>
        </a>
      </div>
    </div>
    // <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4] border border-red-500">
    //   {metaData.title}
    //   <style jsx>{`
    //     @media screen and (max-width: 480px) {
    //       article {
    //         padding-top: 2rem;
    //         padding-bottom: 4rem;
    //       }
    //     }
    //   `}</style>
    //   <SocialLinks />
    // </small>
  )
}
