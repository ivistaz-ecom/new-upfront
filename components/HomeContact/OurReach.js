'use client'
import React from 'react'
import CountUp from 'react-countup'
import { HomeCount } from '../../utils/data'

function formatIndianNumber(num) {
  let str = num.toString().split('.');
  let intPart = str[0];
  let decPart = str.length > 1 ? '.' + str[1] : '';
  let lastThreeDigits = intPart.substring(intPart.length - 3);
  let otherDigits = intPart.substring(0, intPart.length - 3);

  if (otherDigits !== '') {
    lastThreeDigits = ',' + lastThreeDigits;
  }
  return otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThreeDigits + decPart;
}

export default function WellBeing() {
  return (
    <div className="max-w-screen-xl lg:mx-auto lg:px-40 lg:py-2 mt-6 tracking-wide">
      <h1 className="lg:text-6xl text-3xl text-center">
        <span className="">OUR <br /></span> REACH
      </h1>
      <img
        src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/upfron-global/arrow.svg"
        className="mx-auto py-4"
        alt="Arrow"
      />
      <div className="bg-[#222222] grid lg:grid-cols-4 grid-cols-1 mx-auto text-center py-4">
        {HomeCount.map((item, index) => (
          <div
            key={index}
            className={`py-8 border-r border-white ${index === HomeCount.length - 1 ? 'border-r-0' : ''}`}
          >
            <CountUp
              end={item.count}
              duration={5}
              formattingFn={formatIndianNumber}
              className="text-3xl text-white"
            />
            <div className="text-white text-lg font-light pt-4" dangerouslySetInnerHTML={{ __html: item.title }}></div>
          </div>
        ))}
      </div>
    </div>
  )
}
