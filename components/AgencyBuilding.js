import React from "react";
import Image from "next/image";

const AgencyBuilding = () => {
  return (
    <>
      <div className="">
        <Image
          src="/whatWeDo/tab-3.png"
          width={1000}
          height={300}
          alt=""
          className="w-[900px]"
        />
      </div>

      <div className="lg:flex">
        <div className="lg:w-1/2 p-4">
         

          <div className="flex flex-row ">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-7.svg"
                width={100}
                height={100}
                alt=""
                className="w-16"
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
        <div className="lg:w-1/2 p-4">
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
