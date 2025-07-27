'use client'

import React, { useMemo, useState } from 'react'
import { FILTERS, images } from 'public/projects/projects-data'
import Image from 'next/image'

const Projects = () => {
  const [currentCategory, setCurrentCategory] = useState('residential')

  const filteredImagesBasedOnCategory = useMemo(() => {
    if (!currentCategory) return images
    return images.filter((img) => img.category === currentCategory)
  }, [currentCategory])

  const handleCurrentCategory = (category: string) => {
    setCurrentCategory(category)
  }

  const checkCurrentCategory = (selectedCategory: string) => {
    return currentCategory === selectedCategory
      ? 'bg-primaryColor text-white'
      : 'border border-primaryColor'
  }

  return (
    <div>
      <div className="mt-5">
        <div className="flex gap-8 m-auto justify-center items-center">
          {FILTERS.map(({ cateogry, label }) => (
            <button
              key={cateogry}
              onClick={() => handleCurrentCategory(cateogry)}
              className={`${checkCurrentCategory(
                cateogry
              )} px-4 py-2 hover:cursor-pointer hover:bg-orange-700 hover:text-white rounded-full`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

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
