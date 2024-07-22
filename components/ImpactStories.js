import { impactStories } from '@utils/data'
import Image from 'next/image'
import React from 'react'

const ImpactStories = () => {
  return (
    <div className="px-10 py-20 space-y-7">
      <h1 className="text-5xl">
        <span className="text-red-600">IMPACT</span> STORIES
      </h1>
      <ul className="flex gap-7">
        {impactStories.map((item) => {
          return (
            <li key={item.id} className="relative">
              <div className="space-y-4">
                <div className="group relative">
                  <Image
                    src={item.imageUrl}
                    width={300}
                    height={200}
                    alt={item.title}
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 cursor-pointer transition-opacity duration-300"></div>
                </div>
                <p>{item.title}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ImpactStories
