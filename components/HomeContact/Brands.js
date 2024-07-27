'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { HomeBrands } from '../../utils/data'

const Content = React.forwardRef((props, ref) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
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
    <div className="bg-white py-12">
      <h1 className="lg:text-6xl text-3xl text-center">
        <span className="text-red-600 ">OUR</span> COLLABORATORS
      </h1>
      <img
        src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/upfron-global/arrow.svg"
        className="mx-auto py-4"
      />
      <div className="pt-12 w-[90%] mx-auto">
        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={false}
          autoPlay={true}
          autoPlaySpeed={2000}
            // customTransition="all .5"
          dotListClass=""
          removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
          className="h-[150px] bg-transparent "
        >
          {HomeBrands.map((items, index) => (
            <div className="h-[150px] justify-center items-center p-4">
              <div className="lg:w-[100%]" key={index} data-aos="zoom-in">
                <img src={items.imageUrl} className="" />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
})

export default Content
