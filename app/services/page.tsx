import React from 'react'
import type { Metadata } from 'next'
import { projects } from './project-data'
import Image from 'next/image'
import HeroImage from '../photos/HeroImage.png'

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
      {projects.slice(2,projects.length).map((project, index) => (
        <div className="space-y-6">
          <div
            key={crypto.randomUUID()}
            className="flex justify-between items-center gap-10 p-10"
          >
            {project.isLeft && (
              <div className="shadow-lg m-0 rounded-lg p-4">
                <Image
                  src={project.url}
                  alt="Profile photo"
                  className="block mt-0 rounded-lg max-w-[70rem]"
                  unoptimized
                  width={600}
                  height={100}
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
                <div className="shadow-lg m-0 rounded-lg p-4">
                  <Image
                    src={project.url}
                    alt="Profile photo"
                    className="block mt-0 rounded-lg max-w-[70rem]"
                    unoptimized
                    width={600}
                    height={100}
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
