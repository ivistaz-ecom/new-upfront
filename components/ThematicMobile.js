import React, { useState } from "react";
import HealthWellbeing from "./health&wellbeing";
import GenderEquality from "./GenderEquality";
import AgencyBuilding from "./AgencyBuilding";
import Financial from "../components/Financial&DigitalInclusion";
import Workplace from "./Workplace";
import SocialProtection from "./SocialProtection";

const ThematicMobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Health & Wellbeing",
      component: <HealthWellbeing />,
    },
    {
      title: "Gender Equality, Inclusion, and Diversity",
      component: <GenderEquality />,
    },
    {
      title: "Agency Building for Women & Young Girls",
      component: <AgencyBuilding />,
    },
    {
      title: "Financial & Digital Inclusion",
      component: <Financial />,
    },
    {
      title: "Workplace/ Social Dialogues",
      component: <Workplace />,
    },
    {
      title: "Social Protection",
      component: <SocialProtection />,
    },
  ];

  return (
    <div className="pt-10 block lg:hidden">
       <p className="text-center text-3xl pb-10 text-[#222222]">THEMATIC AREAS</p>
      <div id="accordion-collapse" data-accordion="collapse">
        {accordionData.map((item, index) => (
          <div key={index}>
            <h2 id={`accordion-collapse-heading-${index + 1}`}>
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-400 focus:ring-0 focus:ring-red-50 dark:focus:ring-red-800 dark:border-gray-100 dark:text-gray-400 gap-3 ${
                  activeIndex === index ? "bg-red-600 text-white" : "hover:bg-red-600 hover:text-white dark:hover:bg-red-800"
                }`}
                onClick={() => toggleAccordion(index)}
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
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                {item.component}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThematicMobile;
