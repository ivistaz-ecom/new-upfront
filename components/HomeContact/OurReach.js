'use client'
import React from 'react'
import CountUp from 'react-countup'
import { HomeCount } from '../../utils/data'

export default function WellBeing() {
  return (
    <div className="max-w-screen-xl lg:mx-auto lg:px-40 lg:py-7 mt-6 tracking-wide">
      <h1 className="lg:text-6xl text-3xl text-center">
        <span className="text-red-600">OUR <br /></span> REACH
      </h1>
      <img
        src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/upfron-global/arrow.svg"
        className="mx-auto py-4"
      />
      <div className="bg-[#222222] grid lg:grid-cols-4 grid-cols-1 mx-auto text-center py-4">
        {HomeCount.map((items, index) => (
          <div
            key={index}
            className={`py-12 border-r border-white last:border-r-0`}
          >
            <CountUp
              end={items.count}
              duration={5}
              className="text-3xl text-white"
            />

            <p className="text-white text-lg font-light">{items.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
