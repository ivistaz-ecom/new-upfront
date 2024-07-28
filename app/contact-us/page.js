"use client";

import Header from "@components/Header";
import Tab from "@components/Tab";
import { contactUsTabs } from "@utils/data";
import { Button } from "flowbite-react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import ContactUsAccordion from "@components/ContactUsAccordion";
import ContactForms from "@utils/ContactForms";
import PartnerForm from "@utils/PartnerForm";
import Seo from "../../components/SeoComponents/Seo";
import Link from "next/link";

const Page = () => {
  const [activeTab, setActiveTab] = useState("Partner With Us");

  const renderContent = () => {
    switch (activeTab) {
      case "Partner With Us":
        return (
          <div className="lg:ps-10 p-5 mt-10">
            <p className="text-black lg:text-6xl text-3xl">GET INVOLVED</p>
            <p className="text-black mt-4 text-xl mb-3">
              Join the force behind the wellbeing of the workforce
            </p>
            <PartnerForm />
          </div>
        );
      case "Join Us":
        return (
          <div className=" pb-10">
            <div className="lg:ps-10 p-5">
              <p className="text-black lg:text-6xl text-3xl pt-10">
                CAREER OPPORTUNITIES
              </p>
              <p className="text-xl text-red-500 mt-3">Current Openings</p>
              <p>
              Position : <a className="underline"
                  href="/pdf/ToR-%20H4All%20Implementation%20specialist-%20Delhi-NCR.docx.pdf"
                  target="_blank"
                >
                    Implementation Specialist as Network Consultant
                  (NC)
                </a>
              </p>
              <ContactForms />
            </div>
          </div>
        );
      case "Contact Info":
        return (
          <div className="lg:ps-10 p-5 lg:w-1/2 container">
            <div className="mt-10">
              <h2 className="text-black lg:text-6xl text-3xl">CONTACT INFO</h2>
            </div>

            <div className="lg:p-4 pt-7 text-xl">
              Office Address:
              <div className="lg:grid grid-cols-3 gap-4 text-xl border-b border-gray-400"></div>
              <div className="mt-3">
                <div className="text-xl">Bengaluru:</div>
                <div>
                  #25, 1st Main, AECS Layout, Ashwath Nagar, Bengaluru - 560094
                </div>
              </div>
              <div className="mt-4 text-xl">
                <span className="text-xl">Delhi:</span>
                <div>A-10, Second Floor, Green Park, New Delhi - 110016</div>
              </div>
            </div>

          
            <div className="lg:flex text-xl ">
              <div className="lg:px-1 ms-3 pt-5 pb-2 lg:pb-0">Email:</div>
              <Link href="mailto:info@upfrontglobal.com">
                <div className="lg:pt-5 pb-2 ml-0">info@upfrontglobal.com</div>
              </Link>
            </div>
            <div className=" text-xl border-b border-gray-400 lg:mx-4"/>

            {/* <div className="lg:grid grid-cols-3 lg:gap-4 text-xl">
              <div className="lg:p-4 px-4 pt-5">Phone Number:</div>
              <div className="p-4"></div>
            </div> */}
          </div>
        );
      default:
        return null;
    }
  };

  // seo
  const title = " Contact Us — Get in Touch with Upfront Today";
  const description =
    " Do you have any questions or need help? Reach out and connect with Upfront regarding our workforce well-being programs.";
  const path = "https://upfront.global/contact-us";
  const metaImage = "/contactUs/banner.png";

  return (
    <>
      <Header />

      <Seo
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />
      <div className="lg:bg-[url('/contactUs/banner.png')] bg-[url('/contactUs/bannerMobile.png')] bg-cover lg:h-[300px] h-[300px] flex flex-col pb-8">
        <h1 className="text-white lg:text-7xl  text-5xl mt-auto lg:ps-16 ps-7">
          CONTACT US
        </h1>
      </div>

      <div className="lg:sticky top-24 bg-white shadow-md z-10">
        <Tab tabs={contactUsTabs} getActiveTab={setActiveTab} />
      </div>

      {renderContent()}
    </>
  );
};

export default Page;
