'use client'

import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const OurPartners = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 5 ,
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
      <h1 className="lg:text-6xl text-3xl mb-10 lg:px-0 px-8 text-center" >
        <span className="text-red-600 ">OUR</span> COLLABORATORS
      </h1>
      <div className="lg:ps-11 ps-24 pe-0">
        <Slider className="" {...settings}>
          <div>
            <Image
              src="/homePage/ourPartner1.png"
              width={200}
              height={100}
              alt=""
            />
          </div>
          <div>
            <Image
              src="/homePage/ourPartner2.png"
              width={200}
              height={100}
              alt=""
            />
          </div>
          <div>
            <Image
              src="/homePage/ourPartner3.png"
              width={200}
              height={100}
              alt=""
            />
          </div>
          <div>
            <Image
              src="/homePage/ourPartner4.png"
              width={200}
              height={100}
              alt=""
            />
          </div>
          <div>
            <Image
              src="/homePage/ourPartner5.png"
              width={200}
              height={100}
              alt=""
            />
          </div>
          <div>
            <Image
              src="/homePage/ourPartner6.png"
              width={200}
              height={100}
              alt=""
            />
          </div>
          <div>
            <Image
              src="/homePage/ourPartner7.png"
              width={200}
              height={100}
              alt=""
            />
          </div>
          <div>
            <Image
              src="/homePage/ourPartner8.png"
              width={200}
              height={100}
              alt=""
            />
          </div>
          <div>
            <Image
              src="/homePage/ourPartner9.png"
              width={200}
              height={100}
              alt=""
            />
          </div>
          <div>
            <Image
              src="/homePage/ourPartner10.png"
              width={200}
              height={100}
              alt=""
            />
          </div>
          <div>
            <Image
              src="/homePage/ourPartner11.png"
              width={200}
              height={100}
              alt=""
            />
          </div>
          <div>
            <Image
              src="/homePage/ourPartner12.png"
              width={200}
              height={100}
              alt=""
            />
          </div>
          <div>
            <Image
              src="/homePage/ourPartner13.png"
              width={200}
              height={100}
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default OurPartners
