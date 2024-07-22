import React from "react";
import Image from "next/image";

const AgencyBuilding = () => {
  return (
    <>
      <div className="">
        <Image
          src="/whatWeDo/tab-3.png"
          width={600}
          height={300}
          alt=""
          className="lg:w-1/3 lg:absolute lg:-mt-28 lg:ms-10 md:w-full xl:w-[500px] h-auto sm:w-auto"
        />
      </div>

      <div className="lg:flex lg:mt-20">
        <div className="lg:w-1/2  bg-[#FFE8EC] p-4 lg:pt-20">
          <p className="text-4xl bold font-normal pb-5 pt-3 lg:mt-10">
            Agency Building for Women & Young Girls
          </p>

          <div className="flex flex-row ">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-7.svg"
                width={100}
                height={100}
                alt=""
                className="lg:w-10 w-20"
              />
            </div>
            <div className="flex flex-col px-3">
              <p className="text-md font-medium ">
                EQUIPPING WOMEN AND YOUNG GIRLS WITH KNOWLEDGE AND
                LIFE SKILLS:
              </p>
            </div>
          </div>
          <p className="pt-3">
            Sharing knowledge with men and women that includes social and gender
            norms, empowering participants to challenge stereotypes, improve
            themselves, and ask for what they deserve. Life skills training is
            also integrated with tools for their personal and professional
            development.
          </p>
        </div>
        <div className="lg:w-1/2 bg-[#FFE8EC] p-4 lg:pt-48">
          <div className="flex flex-row ">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-8.svg"
                width={100}
                height={100}
                alt=""
                className="w-14"
              />
            </div>
            <div className="lg:flex flex-col px-3 ">
              <p className="text-md font-medium ">
                CHARTING CAREER <br></br>PROGRESSION PATHWAYS:
              </p>
            </div>
          </div>

          <p className="pt-3">
            Supporting the career advancement of women and young girls in the
            workplace through mentorship programmes, skill development
            initiatives, and handholding to help women navigate their career
            paths with confidence. Additionally, Upfront works closely with
            employers to strengthen workplace policies and practices that
            promote gender equality and support professional growth irrespective
            of gender.
          </p>
        </div>
      </div>
    </>
  );
};    

export default AgencyBuilding;
