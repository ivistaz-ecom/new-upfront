import Image from 'next/image'
import React from 'react'
import CaseStudyCarousel from './CaseStudyCarousel'
import Link from 'next/link'

const CaseStudy = () => {
  return (
    <div className="bg-customLightGray bg-opacity-60 lg:p-10 flex flex-col">
      <h2 className="lg:text-6xl text-3xl lg:p-0 p-5 lg:mt-0 mt-7 container mx-auto">
        <span className="text-red-600">CASE</span> STUDIES
      </h2>
      <div className="lg:px-16 lg:pt-8 pb-6 text-center lg:p-0 p-2">
        <CaseStudyCarousel />
        <Link href="/insights"><button className="bg-customGray self-center text-white p-3 mt-5">
          View All Case Studies
        </button></Link>
      </div>
    </div>
  )
}

export default CaseStudy
