"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { HomeBanner } from "../../utils/data";
import WellBeing from "./WellBeing";
import Whoweare from "../HomeContact/WhoWeAre";
import Whatwedo from "./WhatWeDo";
import Ourreach from "../HomeContact/OurReach";
import Ourpresence from "../HomeContact/OurPresence";
import Thematicareas from "../HomeContact/ThematicArea";
import Casestudies from "../HomeContact/CaseStudies";
import CarouselWhoweare from "../HomeContact/Carousel";
import OurPartners from "@components/OurPartners";
// import Brands from "../HomeContact/Brands";

const Content = React.forwardRef((props, ref) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="bg-[#E8E8E8] ">
        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          //   customTransition="all .5"
          dotListClass="custom-dot-list"
          removeArrowOnDeviceType={["tablet", "mobile", ""]}
          className="lg:h-[400px] h-[400px]"
          arrows={true}
          containerClass="custom-arrow"
        >
          {HomeBanner.map((items, index) => (
            <>
              <div
                className="grid lg:hidden gap-0 h-[400px] justify-center items-center"
                key={`mobile-${index}`}
              >
                <div className="h-[100%]" data-aos="zoom-in">
                  <img src={items.imageUrl} className="w-full" />
                </div>
                <div className="justify-start items-start flex flex-col ml-3 -mt-28">
                  <h3 className="text-[#292929] text-[20px]">
                    {items.headline}
                  </h3>
                  <p className="text-[#292929] text-[23px]">{items.desc}</p>
                </div>
              </div>

              <div
                className="relative hidden lg:grid lg:grid-cols-2 gap-0 h-[400px] justify-center items-center"
                key={`desktop-${index}`}
              >
                <div className="text-4xl justify-start items-start flex flex-col gap-4 lg:w-8/12 lg:ml-40 ml-3 lg:py-0 py-4 pt-5">
                  <h3 className="text-[#292929] text-[24px]">
                    {items.headline}
                  </h3>
                  <p className="text-[#292929] text-[34px]">{items.desc}</p>
                </div>
                <div
                  className="relative lg:w-[100%] lg:h-auto h-[700px] flex justify-center items-center"
                  data-aos="zoom-in"
                >
                  <img src={items.imageUrl} className="w-full" />
                  <div
                    id="triangle-right"
                    className="absolute hidden lg:block"
                  ></div>
                </div>
              </div>
            </>
          ))}
        </Carousel>
      </div>
      <div>
        <WellBeing />
        <Whoweare />
        <CarouselWhoweare />
        <Whatwedo />
        <Ourreach />
        <Ourpresence />
        <Thematicareas />
        <Casestudies />
        <OurPartners />
        {/* <Brands/> */}
      </div>
    </>
  );
});

export default Content;
