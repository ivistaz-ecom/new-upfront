import React from "react";
import Link from "next/link";
import LazyLoad from 'react-lazy-load';

export default function WellBeing() {
  return (
    <LazyLoad height={870}>
    <div className="lg:mx-auto lg:px-40 lg:py-7 mt-6 tracking-wide lg:bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/upfron-global/background.svg')] h-auto bg-cover bg-no-repeat">
      <h1 className="lg:text-6xl text-3xl text-center">
        <span className=" ">WHAT <br /></span> WE DO
      </h1>
      <img
        src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/upfron-global/arrow.svg"
        className="mx-auto py-4"
      />
      <p className="text-center mt-3 lg:p-0 p-5 text-xl mx-auto container">
        Upfront aims to enhance workforce wellbeing by unlocking human
        potential, optimising systems, and orchestrating investments,
        collaborations, and partnerships. This approach represents a critical
        value proposition to improve social and economic outcomes, impacting the
        wellbeing of people and the planet through scalability, impact, and
        sustainability.
      </p>
      <div>
        <img
          src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/upfron-global/Home/circle.png"
          className="mx-auto py-4 w-[550px]"
        />
      </div>

      {/* <div className=" flex flex-col justify-center items-center py-8">
        <button className="">
          <Link
            href=""
            className="bg-[#F40F34] text-white p-4 px-4 text-start justify-center flex w-32 gap-2"
          >
            Know more
            <img
              className=""
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/upfron-global/btnArrow.svg"
            />
          </Link>
        </button>
      </div> */}
    </div>
    </LazyLoad>
  );
}
