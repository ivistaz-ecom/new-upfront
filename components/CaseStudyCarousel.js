"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import ConfigData from "../config";
import { Button } from "flowbite-react";
import Link from "next/link";

const OurKeyCommunities = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
          dots: false,
        },
      },
    ],
  };

  const siteUrl = ConfigData.wpApiUrl;
  const serverUrl = ConfigData.SERVER;
  const categoryId = 2;
  const [data, setData] = useState([]); // Initialize data state with an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${siteUrl}/posts?categories=${categoryId}&_embed&production_mode[]=${serverUrl}`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [siteUrl, serverUrl, categoryId]);

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-[-50px] right-1 z-10 p-2 text-4xl cursor-pointer rounded-full fill-current text-gray-400"
        onClick={onClick}
      >
        <FaCircleArrowRight />
      </div>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-[-50px] right-12 z-10 p-2 cursor-pointer text-4xl rounded-full fill-current text-gray-400"
        onClick={onClick}
      >
        <FaCircleArrowLeft />
      </div>
    );
  }

  return (
    <>
      <div className="mb-10 relative">
  <Slider {...settings}>
    {data.length > 0 &&
      data.map((post) => (
        <div key={post.id} className="p-2 relative mb-5">
          <div>
            <div className="relative">
              {post.acf && post.acf.thumbnail_image && (
                <img
                  src={post.acf.banner_image.url}
                  alt={post.title.rendered}
                  className="w-full"
                  height={220}
                />
              )}
            </div>
            <div className="bg-[#FACDD4] text-start p-5">
              <div className="text-xl mb-3">
                <span
                  className="block"
                  dangerouslySetInnerHTML={{
                    __html: post.title.rendered,
                  }}
                />
              </div>

              <div className="h-[200px] flex flex-col justify-between">
                <div
                  dangerouslySetInnerHTML={{
                    __html: post["excerpt"]["rendered"],
                  }}
                  className="text-xl mb-3 post-content"
                ></div>
                {/* Assuming Button and Link are properly imported */}
                <Button className="text-black w-52 hover:bg-black bg-[#E8E8E8] border border-[#909090] hover:text-white rounded-none mt-5">
                  <Link
                    href={`/insights/case-studies/${post.slug}`}
                    className="px-7"
                  >
                    Read Case Study
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
  </Slider>
</div>

      {/* <div className="text-center">
        <p className="text-xl mt-7">
          And Other Workforces Including Plantation Workers, Domestic Workers,
          Gig Workers Etc.
        </p>
      </div> */}
    </>
  );
};

export default OurKeyCommunities;
