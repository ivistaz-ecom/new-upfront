'use client'

import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import { HomeBrands } from '@data'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const OurPartners = () => {
  var settings = {
    // dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 5 ,
    autoplaySpeed:1500,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed: 1000,
          dots: false,
          autoplaySpeed:1500,
          // arrows: true,
        },
      },
    ],
  }

  return (
    <div className="bg-customLightGray lg:px-10 py-16">
      <h1 className="lg:text-6xl text-3xl text-center">
        <span className="">OUR</span><br /> COLLABORATORS
      </h1>
      <img
        src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/upfron-global/arrow.svg"
        className="mx-auto py-4"
      />
      <div className="lg:ps-11 ps-24 pe-0 container mx-auto">
        <Slider className="" {...settings}>
        {HomeBrands.map((items, index) => (
            <div className="h-[150px] justify-center items-center p-4">
              <div className="lg:w-[100%]" key={index} data-aos="zoom-in">
                <img src={items.imageUrl} className="" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default OurPartners
