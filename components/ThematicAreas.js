'use client'

import { thematicAreas } from '@utils/data'
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ThematicAreas = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true  
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          // arrows: true  
        }
      }
    ]
  }

  return (
    <div className="lg:flex items-center lg:gap-4 bg-customGray">
      <div className="flex">
        <div className="lg:bg-customGrayMd h-60 text-white flex items-center justify-center px-10 lg:py-16 py-16">
          <h2 className="lg:text-6xl text-3xl text-white">
            THEMATIC <br /> AREAS
          </h2>
        </div>
        <div className="triangle-right self-center hidden lg:block"></div>
      </div>
      <div className="lg:w-[72%] w-[90%] lg:py-0 container mx-auto">
        <Slider {...settings} className="hide-scrollbar">
          {thematicAreas.map((item) => {
            return (
              <div key={item.id} className="px-5 border-s lg:h-44 h-32">
                <div className="space-y-3 flex flex-col justify-center items-center">
                  <Image
                    src={item.logo}
                    width={60}
                    height={60}
                    alt={item.title}
                  />
                  
                  <p className="text-white text-center py-4">{item.title}</p>
                
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default ThematicAreas
