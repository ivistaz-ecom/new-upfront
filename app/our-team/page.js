"use client";
import Header from "@components/Header";
import { coreTeam, ourAdvisors } from "@utils/data";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Seo from "../../components/SeoComponents/Seo";
// import './App.css';

const page = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  // seo
  const title = "About Us - The Team Behind Upfront's Mission";
  const description =
    " Get to know the dedicated team that is working hard to fulfill Upfront's mission of improving the health of workforces and enabling sustainable growth.";
  const path = "https://upfront.global/our-team";
  const metaImage = "/coreTeam/banner.png";

  return (
    <>
      <Header />
      <Seo
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />
      <div className="lg:bg-[url('/coreTeam/banner.png')] bg-[url('/coreTeam/banner_mobile.png')] bg-cover lg:h-[350px] h-80 lg:mt-0 flex flex-col">
        <h1 className="text-white text-6xl mt-auto ps-16 lg:py-5">
          OUR <br /> TEAM
        </h1>
        </div>
      <div
        className="px-10 py-16 "
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <h1 className="lg:text-6xl text-3xl mb-6 lg:px-16 mt-">
          <span className="text-red-600">CORE</span> TEAM
        </h1>
        <hr />
        <ul
          className="grid lg:grid-cols-4 gap-8 container mx-auto"
          data-aos="fade-up"
        >
          {coreTeam.map((item, index) => {
            return (
              <li
                key={item.id}
                className={`p-3 ${
                  index % 2 === 1 ? "lg:border-s-2 border-gray-400" : ""
                } lg:${index % 4 !== 0 ? "border-s-2 border-gray-400" : ""}`}
              >
                <img src={item.imageUrl} className="mx-auto pt-2 w-full" />
                <p className="pt-2 text-start">{item.name}</p>
                <p className="text-[#7E7E7E] pt-2 text-start">{item.post}</p>
                {item.url && (
                  <Link href={item.url} target="_blank">
                    <p className="text-4xl text-[#0177B7] mt-3 text-center">
                      {item.logo}
                    </p>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className="px-10 py-16 "
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <h2 className="lg:text-6xl text-3xl mb-6 lg:px-16 mt-">
          <span className="text-red-600">OUR</span> MENTORS
        </h2>
        <hr />
        <ul
          className="grid lg:grid-cols-4 gap-8 container mx-auto"
          data-aos="fade-up"
        >
          {ourAdvisors.map((item, index) => {
            return (
              <li
                key={item.id}
                className={`p-3 ${
                  index % 2 === 1 ? "lg:border-s-2 border-gray-400" : ""
                } lg:${index % 4 !== 0 ? "border-s-2 border-gray-400" : ""}`}
              >
                <img src={item.imageUrl} className="mx-auto pt-2 w-full" />
                <p className="pt-2 text-start">{item.name}</p>
                <p className="text-[#7E7E7E] pt-2 text-start">{item.post}</p>
                {item.url && (
                  <Link href={item.url} target="_blank">
                    <p className="text-4xl text-[#0177B7] mt-3 text-center">
                      {item.logo}
                    </p>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* <div className="px-10 pt-10 pb-16 bg-customLightGray/25 ">
        <h1 className="text-6xl mb-6">
          <span className="text-red-600">OUR</span> ADVISORS
        </h1>
        <hr />
        <ul className="flex justify-between flex-wrap gap-6 p-3 mt-8">
          {ourAdvisors.map((item) => {
            return (
              <li key={item.id} className="border-s border-black">
                <div className="ps-3 space-y-2">
                  <Image
                    src={item.imageUrl}
                    width={250}
                    height={250}
                    alt={item.name}
                  />
                  <p>{item.name}</p>
                  <p className="text-[#7E7E7E]">{item.post}</p>
                  <p className="text-4xl text-[#0177B7] mt-3">{item.logo}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div> */}
    </>
  );
};

export default page;
