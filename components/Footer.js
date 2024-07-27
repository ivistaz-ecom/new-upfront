import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-customBlack pt-6 pb-12 px-10">
        <div className="container mx-auto">
          <div className="flex justify-center mb-10 lg:mb-0">
            <Link href="/">
              <Image
                src="/homePage/upfrontLogo.svg"
                width={70}
                height={100}
                alt="upfront logo"
                className=""
              />
            </Link>
          </div>
          <div className="flex flex-wrap justify-center lg:gap-10 mt-6">
            <ul className="text-white/60 text-xl mb-0 w-full lg:w-auto">
              <h3 className="text-white text-2xl">About Us</h3>
              <div className="lg:w-[175px] w-[300px] h-[1px] bg-customGrayMd my-3"></div>
              <Link
                href="/our-story/"
                className="flex gap-10 hover:text-red-600 group"
              >
                <li className="flex-grow">Our Story</li>
                <FaArrowRight className="mt-1 me-20" />
              </Link>
              <Link
                href="/our-team"
                className="flex mt-2 hover:text-red-600 group"
              >
                <li className="flex-grow">Our Team</li>
                <FaArrowRight className="mt-1 me-20" />
              </Link>
            </ul>

            <ul className="text-customGrayMd text-xl mt-1 w-full lg:w-auto">
              <Link
                href="/what-we-do"
                className="flex items-center justify-between text-white hover:text-red-600 group"
              >
                <li className="flex-grow">What We Do</li>
              </Link>
              <div className="lg:w-[160px] w-[300px] h-[1px] bg-customGrayMd lg:my-3 hidden lg:block"></div>
            </ul>

            <ul className="text-customGrayMd text-xl mb-0 w-full lg:w-auto">
              <Link
                href="/insights"
                className="flex items-center justify-between text-white hover:text-red-600 group text-2xl"
              >
                <li className="flex-grow">Insights</li>
              </Link>
              <div className="lg:w-[160px] w-[300px] h-[1px] bg-customGrayMd my-3 hidden lg:block"></div>
            </ul>

            <ul className="text-white/60 text-xl w-full lg:w-auto">
              <Link href="/contact-us">
                <h3 className="text-white text-2xl hover:text-red-600">Contact Us</h3>
              </Link>
              <div className="lg:w-[175px] w-[300px] h-[1px] bg-customGrayMd my-3"></div>
              <Link href="mailto:Info@upfrontglobal.com">
                <li className="mt-5 hover:text-red-600 group">
                  info@upfrontglobal.com
                </li>
              </Link>
              <li className="flex pt-5 text-3xl gap-4">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/showcase/upfrontcg/"
                  className="hover:text-white"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  target="_blank"
                  href="https://twitter.com/UpfrontCG"
                  className="hover:text-white"
                >
                  <FaTwitter />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/upfront.global/"
                  className="hover:text-white"
                >
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-customGray flex py-6 justify-center items-center">
        <p className="text-gray-400 text-center lg:p-0 px-1">
          Upfront is a part of the Catalyst Group.{" "}
          <br className="lg:hidden block" /> Copyright 2024. All Rights
          Reserved.{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
