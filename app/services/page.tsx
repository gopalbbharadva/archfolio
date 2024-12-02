import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";
import Image from "next/image";
import HeroImage from '../photos/HeroImage.png'

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Services</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div className="flex justify-between items-center gap-10">
            {project.isLeft && <div>
              <Image
                src={HeroImage}
                alt="Profile photo"
                className="rounded-full bg-gray-100 block lg:mt-5 mt-0  
                lg:mb-5 mb-10 mx-auto sm:float-right sm:mb-5 
                grayscale hover:grayscale-0"
                unoptimized
                width={250}
                height={250}
                priority
              />
            </div>}
            <div className="w-full flex justify-between items-start flex-col">
              <span className="text-black dark:text-white font-medium tracking-tight">
                {project.title}
              </span>
              <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                {project.description}
              </span>
            </div>
            {!project.isLeft && <div>
              <Image
                src={HeroImage}
                alt="Profile photo"
                className="rounded-full bg-gray-100 block lg:mt-5 mt-0  
                lg:mb-5 mb-10 mx-auto sm:float-right sm:mb-5 
                grayscale hover:grayscale-0"
                unoptimized
                width={250}
                height={250}
                priority
              />
            </div>}
          </div>
        ))}
      </div>
    </section>
  );
}
