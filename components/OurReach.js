'use client'
import { ourReach } from '@utils/data'
import React from 'react';
import CountUp from 'react-countup';

const OurReach = () => {
  return (
    <div className="bg-customLightGray bg-opacity-60 py-16 px-10 lg:flex justify-between items-center">
      <h1 className="lg:text-6xl text-3xl">
        <span className="text-red-600">OUR</span> <br /> REACH
      </h1>
      <ul className="lg:flex gap-14 lg:px-20 grid grid-cols-2">
        {ourReach.map((item, index) => {
          return (
            <li
              key={item.id}
              className={`lg:ps-5 ps-2 ${
                index === 0 ? '' : 'lg:border-s-2 lg:border-b-0 border-gray-400'
              }`}
            >
              <div className="space-y-4 lg:mt-0 mt-5">
                <h2 className="text-4xl text-red-600"><CountUp end={item.count} duration={5}/></h2>
                <p className="w-11/12 text-xl">{item.area}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default OurReach
