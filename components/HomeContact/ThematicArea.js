import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useEffect } from 'react'
import { ThematicAreas } from '../../utils/data'
import ThematicCarousel from './ThematicCarousel'

const Content = React.forwardRef((props, ref) => {
  return (
    <div className="bg-black py-12">
      <h1 className="lg:text-6xl text-3xl text-center text-white">
        <span className='text-red-600'>FOCUS</span><br /> AREAS
      </h1>
      <img
        src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/upfron-global/arrow.svg"
        className="mx-auto py-4"
      />

      <div className='hidden lg:block'>
        <div className="pt-12 w-[55%] mx-auto container">
          <div className="grid grid-cols-3 gap-2">
            {ThematicAreas.slice(0, 3).map((item, index) => (
              <div
                className="flex justify-center items-center rounded-full w-[200px] h-[200px] bg-[#676767] mx-auto hover:bg-red-600 duration-1000"
                key={index}
              >
                <div
                  className="flex flex-col justify-center items-center text-center h-[200px]"
                  data-aos="zoom-in"
                >
                  <img src={item.imageUrl} className="h-[80px] w-[80px] object-contain mb-4" />
                  <p className="text-white text-1xl font-light" dangerouslySetInnerHTML={{ __html: item.headline }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[65%] mx-auto ">
          <div className="grid grid-cols-4 mx-auto">
            {ThematicAreas.slice(3, 7).map((item, index) => (
              <div
                className="flex justify-center items-center rounded-full w-[200px] h-[200px] bg-[#676767] hover:bg-red-600 duration-1000"
                key={index}
              >
                <div
                  className="flex flex-col justify-center items-center text-center h-[200px]"
                  data-aos="zoom-in"
                >
                  <img src={item.imageUrl} className="h-[80px] w-[80px] object-contain mb-4" />
                  <p className="text-white text-1xl font-light" dangerouslySetInnerHTML={{ __html: item.headline }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[55%] mx-auto grid gap-2 ">
          <div className="grid grid-cols-3">
            {ThematicAreas.slice(7, 10).map((item, index) => (
              <div
                className="flex justify-center items-center rounded-full w-[200px] h-[200px] bg-[#676767] mx-auto hover:bg-red-600 duration-1000"
                key={index}
              >
                <div
                  className="flex flex-col justify-center items-center text-center h-[200px]"
                  data-aos="zoom-in"
                >
                  <img src={item.imageUrl} className="h-[80px] w-[100px] object-contain mb-4" />
                  <p className="text-white text-1xl font-light" dangerouslySetInnerHTML={{ __html: item.headline }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='block lg:hidden'>
        <ThematicCarousel/>
      </div>
    </div>
  )
})

export default Content
