import React from 'react'
import type { Metadata } from 'next'
import { projects } from './project-data'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My Projects',
}

export default function Projects() {
  return (
    <section>
      <h1 className="p-0 text-2xl font-medium tracking-tight text-center text-primaryColor underline">
        Services
      </h1>
      {/* <div className="shadow-lg m-0 rounded-lg p-4 block border max-w-9 h-auto">
        <Image
          src={
            'https://www.nppartners.net/wp-content/uploads/2021/10/interior-plan-sketch3.jpg'
          }
          alt="Profile photo"
          className="block mt-0 rounded-lg"
          unoptimized
          fill
          // width={300}
          // height={100}
          priority
        />
      </div> */}

      {/* <div
        style={{
          position: 'relative',
          width: '400px',
          maxWidth: '100%',
          aspectRatio: 1.5,
        }}
      >
        <Image
          src={
            'https://www.elegantinterior.info/wp-content/uploads/2023/09/Living10.png'
          }
          unoptimized
          alt="Picture of the author"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div
        style={{
          position: 'relative',
          width: '400px',
          maxWidth: '100%',
          aspectRatio: 1.5,
        }}
      >
        <Image
          src={
            'https://5.imimg.com/data5/SELLER/Default/2023/8/337646107/YR/RI/WC/123361265/arch2o-architectural-sketching-10-architecture-sketching-tips-1.jpg'
          }
          alt="Profile photo"
          unoptimized
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div> */}

      {projects.slice(2, projects.length).map((project) => (
        <div className="space-y-6">
          <div
            key={crypto.randomUUID()}
            className="flex justify-between items-center gap-10 p-10"
          >
            {project.isLeft && (
              <div
                className="shadow-lg m-0 rounded-lg w-[400px] max-w-full 
              aspect-[1.5] relative border border-red-500 flex-shrink-0"
              >
                <Image
                  src={project.url}
                  alt="Profile photo"
                  className="block mt-0 rounded-lg object-cover"
                  unoptimized
                  fill
                  priority
                />
              </div>
            )}
            <div className="flex items-start flex-col self-center gap-4">
              <p className="text-primaryColor dark:text-white tracking-tight font-medium text-2xl text-center w-full">
                {project.title}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm text-center">
                {project.description}
              </p>
            </div>
            <div className="flex flex-row-reverse justify-between items-center gap-10 p-10">
              {!project.isLeft && (
                <div className="shadow-lg m-0 rounded-lg p-4 w-[400px] aspect-[1.5] max-w-full relative border border-red-500">
                  <Image
                    src={project.url}
                    alt="Profile photo"
                    className="block mt-0 rounded-lg object-cover"
                    unoptimized
                    fill
                    priority
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
