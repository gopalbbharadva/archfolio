'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Project, projects } from './project-data'
import { ServiceCard } from 'app/components/ServiceCard'

export default function Projects() {
  const titleRef = useRef<HTMLDivElement>(null)
  const firstRef = useRef<HTMLDivElement>(null)
  const secondRef = useRef<HTMLDivElement>(null)
  const thirdRef = useRef<HTMLDivElement>(null)
  const fourthRef = useRef<HTMLDivElement>(null)

  const [firstTitle, setFirstTitle] = useState(false)
  const [firstService, setFirstService] = useState(false)
  const [secondService, setSecondService] = useState(false)
  const [thirdService, setThirdService] = useState(false)
  const [fourthService, setFourthService] = useState(false)

  const arr = [firstRef, secondRef, thirdRef, fourthRef, titleRef]
  const stateArr = [firstService, secondService, thirdService, fourthService]

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7,
  }

  // console.log(firstService, 'first Service')

  const callback = (entries: IntersectionObserverEntry[]) => {
    // console.log(entries, 'entries')
    for (let entry of entries) {
      // console.log(entry, 'ent')
      if (entry.isIntersecting && entry.target.classList.contains('title')) {
        // console.log('titleRef')
        setFirstTitle(true)
      }
      if (entry.isIntersecting && entry.target.classList.contains('f1')) {
        setFirstService(true)
        // element.classList.add('.headTitle')
      }
      if (entry.isIntersecting && entry.target.classList.contains('s2')) {
        // console.log('entry 2(((((')
        setSecondService(true)
        // element.classList.add('.headTitle')
      }
      if (entry.isIntersecting && entry.target.classList.contains('t3')) {
        // console.log('entry 3(((((')
        setThirdService(true)
        // element.classList.add('.headTitle')
      }
      if (entry.isIntersecting && entry.target.classList.contains('f4')) {
        // console.log('entry 4(((((')
        setFourthService(true)
        // element.classList.add('.headTitle')
      }
    }
  }

  console.log(firstTitle, 'firstTitle')

  const getAnimation = () => {
    const observerInstance = new IntersectionObserver(callback, options)
    // console.log(arr, 'arr')
    arr.forEach((element) => {
      if (element.current) {
        // console.log('count')
        observerInstance.observe(element.current)
      } else {
        // console.log('else')
        // observerInstance.observe(element.current)
      }
    })
  }

  useEffect(() => {
    getAnimation()
  }, [])

  type pType = Project & {
    refElement: React.RefObject<HTMLDivElement>
  }

  const addRefs = () => {
    let updatedProjectsArr: pType[] = []
    const tempArr = projects.slice(2, projects.length)
    for (let i = 0; i < tempArr.length; i++) {
      updatedProjectsArr = [
        ...updatedProjectsArr,
        { ...projects[i], refElement: arr[i], stateVar: stateArr[i] },
      ]
    }
    return updatedProjectsArr
  }
  const memoizedCallBack = useCallback(addRefs, [projects, stateArr])

  return (
    <section>
      <div
        ref={titleRef}
      >
        <h1
          className={`p-0 text-2xl mt-5 font-medium tracking-tight 
            text-center text-primaryColor underline servicesTitle`}
        >
          Services
        </h1>
      </div>

      {/* {projects.slice(2, projects.length).map((project) => ( */}
      {memoizedCallBack().map((project) => {
        console.log(project, 'project')
        return (
          <div className="space-y-6">
            <div
              key={project.url}
              ref={project.refElement}
              className={`flex justify-between items-center gap-10 opacity-0 p-10 px-20 ${project.idClass
                } ${!project.isLeft ? 'flex-row-reverse' : ''} ${project.stateVar ? project.animationClass : ''
                }`}
            >
              <ServiceCard
                imageClassStyle="block mt-0 shadow-lg p-4 rounded-lg object-fit"
                imageUrl={project.url}
                containerClassStyle="shadow-lg m-0 rounded-lg p-4 w-[450px] max-w-full 
                  aspect-[1.5] relative flex-shrink-0"
              />
              <div className="flex items-end flex-col self-center gap-4">
                <p
                  className="text-primaryColor dark:text-white tracking-tight font-medium 
                  text-2xl text-center w-full"
                >
                  {project.title}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-lg text-center font-light">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
