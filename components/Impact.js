import { impact } from '@utils/data'
import Image from 'next/image'
import React from 'react'
import { Overlay } from 'react-bootstrap'
import CountUp from 'react-countup'

const Impact = () => {
  return (
    <div className="bg-[#F4E7E9] lg:flex justify-between gap-5 mt-10 px-10 py-16">
      <h1 className="lg:text-6xl text-3xl pb-5">IMPACT</h1>
      <div className="lg:w-4/5 space-y-7">
        <h2 className="text-3xl lg:w-1/2">
          Relief, Recovery & Resilience for <CountUp end={8299061} duration={5}/> Individual Workers & their Families
        </h2>
        <ul className="flex flex-wrap gap-3">
          {impact.map((item) => (
            <li key={item.id} className="relative">
              <div className='hover:shadow-inner                  '>
                <Image  src={item.imageUrl} width={350} height={360} alt={item.title} />
              </div>
              <div className="absolute bottom-2 left-2">
                <p className="text-3xl text-white">
                  <CountUp end={item.count} duration={5} />
                </p>
                <p className="text-2xl text-white">{item.title}</p>
              </div>
            </li>
          ))}
        </ul>
        <div>
   
        </div>
      </div>
    </div>
  )
}

export default Impact
