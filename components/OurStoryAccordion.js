import React, { useState, useRef } from "react";
import Image from 'next/image';
import WeBelive from '@components/WeBelieve'
import OurVision from "./OurVision";
import OurMission from "./OurMission";
const OurStoryAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);
  const workforceRef = useRef(null);
  const webelievehRef = useRef(null);
  const vissionRef = useRef(null);
  const ourhistoryRef = useRef(null);


  const toggleAccordion = (index, ref) => {
    setActiveIndex(activeIndex === index ? null : index);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const accordionData = [
    {
      title: "Why Workforce Wellbeing?",
      ref: workforceRef,
    },
    {
      title: "We Believe",
      ref: webelievehRef,
    },
    {
      title: "Vision and Mission",
      ref: vissionRef,
    },
    {
      title: "Our History",
      ref: ourhistoryRef,
    },
    
  ];

  return (
    <div className="block lg:hidden">
      <div id="accordion-collapse" data-accordion="collapse">
        {accordionData.map((item, index) => (
          <div key={index} ref={(el) => (sectionRefs.current[index] = el)}>
            <h2 id={`accordion-collapse-heading-${index + 1}`}>
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-400 focus:ring-0 focus:ring-red-50 dark:focus:ring-red-800 dark:border-gray-100 dark:text-gray-400 gap-3 ${
                  activeIndex === index ? "bg-gray-400 text-white" : "hover:bg-gray-400 hover:text-white dark:hover:bg-red-800"
                }`}
                onClick={() => toggleAccordion(index, item.ref)}
                aria-expanded={activeIndex === index}
                aria-controls={`accordion-collapse-body-${index + 1}`}
              >
                <span>{item.title}</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 shrink-0 ${activeIndex === index ? "rotate-180" : ""}`}
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
            >
              
            </div>
          </div>
        ))}
      </div>
      
      {/* <div ref={workforceRef}>
      <h1 className="text-3xl px-5 py-10">
          <span className="text-red-600">WHY</span> WORKFORCE <br /> WELLBEING?
        </h1>
      </div> */}

     
{/* 
      <div className='hidden lg:block'>
      <div className=" pb-16  container mx-auto flex justify-center">
        <Image
          src="/ourStory/workForceWellbeing.png"
          width={1000}
          height={700}
          className="w-11/12"
          alt=""
        />
      </div>
      </div> */}

     {/* <div className='block lg:hidden'>
     <div className="pb-16 mx-auto container flex justify-center">
        <Image
          src="/ourStory/workForceWellbeingMobile.png"
          width={1000}
          height={700}
          className="w-11/12"
          alt=""
        />
      </div>
     </div> */}

      {/* <ThematicAreas /> */}
      {/* <div ref={webelievehRef}>
      <WeBelive/>
      </div>
      <div ref={vissionRef}>
      <OurVision />
      </div>
      <div>
      <OurMission />
      </div> */}

      {/* <div className="px-10 py-16" ref={ourhistoryRef}>
        <h1 className="text-6xl lg:px-16 px-7">
          <span className="text-red-600">OUR</span> <br /> HISTORY
        </h1>
        <div className="flex pt-16 justify-center">
          <Image
            src="/ourStory/ourHistory.png"
            width={1000}
            height={700}
            className="w-11/12 hidden lg:block"
            alt=""
          />
           <Image
            src="/ourStory/ourHistoryMobile.png"
            width={1000}
            height={700}
            className="w-11/12 block lg:hidden"
            alt=""
          />
        </div>
      </div> */}
      </div>
    
  );
};

export default OurStoryAccordion;