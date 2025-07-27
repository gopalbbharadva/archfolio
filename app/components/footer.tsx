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
    <div className="flex justify-between items-center gap-10 p-10 mt-4 border-t border-primaryColor">
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
      <div className="flex justify-start items-start self-start w-full gap-20">
        <div className="flex flex-col justify-start items-start gap-6">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a className="text-nowrap" href="/about-us">
            About-Us
          </a>
          <a href="/projects">Projects</a>
        </div>
        <div className="flex flex-col justify-start items-start gap-4 w-full">
          <a
            href="https://g.co/kgs/cJUSPUU"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-sm text-gray-800 hover:underline"
          >
            <MdOutlineLocationOn size={20} className="text-primaryColor mt-1" />
            <p className="text-base underline text-primaryColor hover:underline hover:text-primaryColor transition">
              131, J9 High Street, Opp. Celestial Dream
            </p>
          </a>

          <div className="flex justify-start items-start gap-2">
            <MdOutlinePhone size={20} className="text-primaryColor" />
            <a
              href="tel:+919106337193"
              className="text-base text-gray-800 hover:underline hover:text-primaryColor transition"
            >
              +91 9106337193
            </a>
          </div>
          <a href="mailto:gopalbbharadva@gmail.com">
            <div className="flex justify-start items-center gap-2  text-base text-gray-800 hover:underline hover:text-primaryColor transition">
              <MdOutlineEmail size={20} className="text-primaryColor" />
              vinayak.studio.int@gmail.com
            </div>
          </a>
        </div>
      </div>
      {/* Contact us part */}
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
