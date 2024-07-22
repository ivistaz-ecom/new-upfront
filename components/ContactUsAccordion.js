import React, { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "flowbite-react";
import { FaArrowRightLong } from "react-icons/fa6";
import ContactForms from "@utils/ContactForms";
import PartnerForm from "@utils/PartnerForm";

const ContactUsAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);
  const partnerRef = useRef(null);
  const careerRef = useRef(null);
  const contactRef = useRef(null);

  const toggleAccordion = (index, ref) => {
    setActiveIndex(activeIndex === index ? null : index);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const accordionData = [
    {
      title: "Partner with us",
      ref: partnerRef,
    },
    {
      title: "Career Opportunities",
      ref: careerRef,
    },
    {
      title: "Contact Info",
      ref: contactRef,
    },
  ];

  return (
    <div className=" hidden lg:block">
      <div id="accordion-collapse" data-accordion="collapse">
        {accordionData.map((item, index) => (
          <div key={index} ref={(el) => (sectionRefs.current[index] = el)}>
            <h2 id={`accordion-collapse-heading-${index + 1}`}>
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-400 focus:ring-0 focus:ring-red-50 dark:focus:ring-red-800 dark:border-gray-100 dark:text-gray-400 gap-3 ${
                  activeIndex === index
                    ? "bg-gray-400 text-white"
                    : "hover:bg-gray-400 hover:text-white dark:hover:bg-red-800"
                }`}
                onClick={() => toggleAccordion(index, item.ref)}
                aria-expanded={activeIndex === index}
                aria-controls={`accordion-collapse-body-${index + 1}`}
              >
                <span>{item.title}</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 shrink-0 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-collapse-body-${index + 1}`}
              className={`${activeIndex === index ? "" : "hidden"}`}
              aria-labelledby={`accordion-collapse-heading-${index + 1}`}
            ></div>
          </div>
        ))}
      </div>

      <div className="lg:ms-16 ps-10 mt-10">
        <p className="text-black text-3xl">GET INVOLVED</p>
        <p className="text-black mt-4 text-xl">
          Join the Force behind the wellbeing of the workforce
        </p>
        <div className="lg:flex lg:gap-10 pt-10" ref={partnerRef}>
          <Button className="relative bg-black lg:w-96 w-80 p-3 group hover:bg-red-600 transition-all duration-300">
            <span className="text-xl flex justify-center">Partner with us</span>
            <FaArrowRightLong className="text-3xl absolute right-4 transform translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
          </Button>
          <Button className="relative bg-black lg:w-96 w-80 p-3 group hover:bg-red-600 transition-all duration-300">
            <span className="text-xl">invest</span>
            <FaArrowRightLong className="text-3xl absolute right-4 transform translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
          </Button>
          <Button className="relative bg-black lg:w-96 w-80 p-3 group hover:bg-red-600 transition-all duration-300">
            <span className="text-xl">Work with us</span>
            <FaArrowRightLong className="text-3xl absolute right-4 transform translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
          </Button>
        </div>
      </div>
     
     
      <div className="bg-[#E8E8E8] pb-10" ref={careerRef}>
        <div className=" mt-10 ">
          <p className="text-black text-3xl pt-10 px-10">
            CAREER <br /> OPPORTUNITIES
          </p>
          <p className="text-black mt-4 text-xl px-10">
            We offer rewarding career opportunities for XYZ aspirants.
          </p>
          <p className="text-xl text-red-500 mt-3 px-10">Current Openings</p>

          <div className="pt-10">
            <div id="accordion-collapse" data-accordion="collapse">
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border  border-gray-400 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-1"
                >
                  <span>Marketing and Communications Lead</span>
                  <svg
                    data-accordion-icon
                    class="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-1"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p class="mb-2 text-gray-500 dark:text-gray-400"></p>
                  <p class="text-gray-500 dark:text-gray-400"></p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-2">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  data-accordion-target="#accordion-collapse-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-2"
                >
                  <span>Marketing Manager</span>
                  <svg
                    data-accordion-icon
                    class="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-2"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-2"
              >
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                  <p></p>
                </div>
              </div>

              <div
                id="accordion-collapse-body-3"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-3"
              >
                <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700"></div>
              </div>
            </div>
          </div>

          <ContactForms />
          {/* <ContactForm/> */}
          {/* form start */}

          {/* <div className="bg-[#4A4A4A] py-1 px-5 mt-5">
  <div className="mt-10">
    <p className="text-white">
      If you would like to explore an opportunity to work with Upfront,
    </p>
    <p className="text-white">please fill up this form and submit</p>

    <div className="mt-5 p-5">
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="mb-3 w-full md:w-1/3">
          <input
            type="text"
            className="form-select border border-gray-500 w-full px-3 py-2"
            id="*firstName"
            placeholder="*First Name"
            name="*firstName"
            required
          />
        </div>
        <div className="mb-3 w-full md:w-1/3">
          <input
            type="tel"
            className="form-select border border-gray-500 w-full px-3 py-2"
            id="phone"
            placeholder="*Mobile Number"
            name="phone"
            required
          />
        </div>
        <div className="mb-3 w-full md:w-1/3">
          <input
            type="email"
            className="form-select border border-gray-500 w-full px-3 py-2"
            id="email*"
            placeholder="*Email"
            name="email"
            required
          />
        </div>
        <div className="mb-3 w-full md:w-1/3">
          <select
            className="form-select border border-gray-500 text-gray-500 w-full px-3 py-2"
            id="jobType"
            name="jobType"
            required
          >
            <option value="">*Job Type</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Full-Time">Full-Time</option>
          </select>
        </div>
        <div className="mb-3 w-full md:w-1/3">
          <select
            className="form-select border border-gray-500 text-gray-500 w-full px-3 py-2"
            id="Applying For"
            name="Applying For"
            required
          >
            <option value="Project A">*Applying For</option>
            <option value="Project A">Project A</option>
            <option value="Project B">Project B</option>
            <option value="Project C">Project C</option>
          </select>
        </div>
        <div className="mb-3 w-full md:w-1/3">
          <input
            type="file"
            className="form-select text-gray-500 bg-white w-full border px-3"
            id="location"
            placeholder="Attach Your Cv"
            name="location"
            required
          />
        </div>
      </div>
      <div className="text-center mt-5">
        <button
          type="button"
          className="focus:outline-none w-44 rounded-sm text-white bg-red-500 hover:bg-red-600 font-normal text-md px-2 py-2"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</div> */}

          {/* form end */}
        </div>
      </div>

      <div className="px-10 pb-5" ref={contactRef}>
        <div className="mt-10 ">
          <p className="text-black text-3xl">CONTACT INFO</p>
        </div>

        <div class="lg:grid grid-cols-3 gap-4 text-xl border-b border-gray-400">
          <div class=" p-4 pt-7">
            Office<br></br> Address:
          </div>
          <div class=" p-4 ">
            <span className="text-xl"> Bengaluru:</span>
            <div className="">
              #25, 1st Main, AECS Layout, Ashwath Nagar, Bengaluru, 560094
            </div>
          </div>

          <div class=" p-4 text-xl">
            <span className="text-xl"> Delhi:</span>

            <div className="">
              A-10, Second Floor, Green Park, New Delhi, 110016
            </div>
          </div>
        </div>

        <div class="lg:grid grid-cols-3 gap-4 text-xl border-b border-gray-400 ">
          <div class="lg:p-4 pt-5 px-4">Email ID:</div>
          <div class="lg:p-4 px-4">Info@upfrontglobal.com</div>
          <div className="p-4"></div>
        </div>

        <div class="lg:grid grid-cols-3 lg:gap-4 text-xl">
          <div class="lg:p-4 px-4 pt-5">Phone Number:</div>
          <div class="lg:p-4 px-4">+91 01234567890</div>
          <div className="p-4"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsAccordion;
