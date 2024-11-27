'use client';

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaArrowRight, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
// import { AiOutlineDown } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="bg-customBlack pt-6 pb-12 px-10">
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center">
          <div className="flex flex-wrap gap-4 lg:gap-28 mt-6 justify-center">
            <ul className="text-white/60 text-xl mb-8 lg:mb-0">
              <h3 className="text-white text-2xl flex items-center">
                About Us <IoMdArrowDropdown className="ml-2" />
              </h3>
              <div className="lg:w-[175px] w-[300px] h-[1px] bg-customGrayMd my-3"></div>
              <Link href="/our-story/" className="flex gap-10 hover:text-red-600 group">
                <li className="flex-grow">Our Story</li>
                <FaArrowRight className="mt-1 me-20 " />
              </Link>
              <Link href="/our-team" className="flex gap-9 mt-2 hover:text-red-600 group">
                <li className="flex-grow">Our Team</li>
                <FaArrowRight className="mt-1 me-20  " />
              </Link>
              <div className="lg:w-[175px] w-[300px] h-[1px] bg-customGrayMd my-3"></div>
              <li className="mt-4">
              <Link href="/what-we-do">
                <h3 className="text-white text-2xl hover:text-red-600">What We Do</h3>
              </Link>
              </li>
            </ul>
            {/* <ul className="text-customGrayMd text-xl mb-8 lg:mb-0">
              <Link href="/what-we-do">
                <h3 className="text-white text-2xl">What We Do</h3>
              </Link>
              <div className="lg:w-[175px] w-[300px] h-[1px] bg-customGrayMd my-3"></div>
            </ul> */}
            <ul className="text-customGrayMd text-xl mb-8 lg:mb-0">
              <h3 className="text-white text-2xl flex items-center">
                Insights <IoMdArrowDropdown className="ml-2 float-end -end-10" />
              </h3>
              <div className="lg:w-[220px] w-[300px] h-[1px] bg-customGrayMd my-3"></div>
              <Link href="/impact-stories" className="flex items-center justify-between text-white/60 mt-2 hover:text-red-600 group">
                <li className="flex-grow">Impact Stories</li>
                <FaArrowRight className="me-20  " />
              </Link>
              <Link href="/blogs" className="flex items-center justify-between text-white/60 hover:text-red-600 group mt-2">
                <li className="flex-grow">Stories (Blogs)</li>
                <FaArrowRight className="me-20  " />
              </Link>
              
              <Link href="/news-and-publications" className="flex items-center justify-between text-white/60 mt-2 hover:text-red-600 group">
                <li className="flex-grow me-3">News and Publications</li>
                <FaArrowRight className="me-20  " />
              </Link>
            </ul>
            <ul className="text-white/60 text-xl">
              <Link href="/contact-us">
                <h3 className="text-white text-2xl hover:text-red-600">Contact Us</h3>
              </Link>
              <div className="lg:w-[175px] w-[300px] h-[1px] bg-customGrayMd my-3"></div>
              <Link href="mailto:Info@upfrontglobal.com">
                <li className="mt-5 hover:text-red-600 group">
                  info@upfrontglobal.com
                </li>
              </Link>
              <li className="flex pt-5 gap-5 text-3xl ">
                <Link target="_blank" href="https://www.linkedin.com/showcase/upfrontcg/" className="hover:text-white">
                  <FaLinkedinIn />
                </Link>
                <Link target="_blank" href="https://twitter.com/UpfrontCG" className="hover:text-white">
                  <FaTwitter />
                </Link>
                <Link target="_blank" href="https://www.instagram.com/upfront.global/" className="hover:text-white">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-customGray flex py-6 justify-center items-center">
        <p className="text-gray-400 text-center lg:p-0 px-1">
          Upfront is a part of the Catalyst Group. Copyright 2024. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
