'use client'

import React, { useMemo } from 'react'
import { images } from 'public/projects/projects-data'
import Image from 'next/image'
import { redirect, useSearchParams } from 'next/navigation'

const Projects = () => {
  const searchParams = useSearchParams()
  const filter = searchParams.get('filter')

  const filteredImagesBasedOnCategory = useMemo(() => {
    if (!filter) return images
    return images.filter((img) => img.category === filter)
  }, [filter])
  if (!searchParams.get('filter')) {
    redirect('/projects?filter=commercial')
  }
  console.log(filter, 'fitler')

  return (
    <div>
      <p className="text-3xl uppercase text-primaryColor font-normal text-center p-4">{filter}</p>
      <div className="grid grid-cols-3 gap-6 p-4">
        {filteredImagesBasedOnCategory?.map(({ url }) => (
          <div
            key={`${url}`}
            className="rounded-xl overflow-hidden border border-gray-300 shadow-md"
          >
            <Image
              src={url}
              alt={`Image ${url}`}
              className="w-full h-96 object-fill"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export default Projects
