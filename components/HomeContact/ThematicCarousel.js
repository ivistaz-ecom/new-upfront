'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { ThematicAreas } from '@utils/data'

const ThematicCarousel = React.forwardRef((props, ref) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <div className="block lg:hidden">
      <div className=" w-[90%] mx-auto">
        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={false}
          autoPlay={false}
          autoPlaySpeed={2000}
          dotListClass="custom-dot-list"
          removeArrowOnDeviceType={['tablet', 'desktop']}
          className="h-[300px] bg-transparent container mx-auto"
        >
          {ThematicAreas.map((item, index) => (
            <div
              className="flex justify-center items-center rounded-full w-[200px] h-[200px] bg-[#676767] mx-auto"
              key={index}
            >
              <div
                className="flex flex-col justify-center items-center text-center h-[200px]"
                data-aos="zoom-in"
              >
                <img src={item.imageUrl} className="" />
                <p className="text-white text-1xl font-light">
                  {item.headline}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
})

export default ThematicCarousel
