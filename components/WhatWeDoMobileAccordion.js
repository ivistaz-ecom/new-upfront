import React, { useState, useRef } from "react";
import Image from "next/image"; // Assuming you are using Next.js for Image import
import Impact from "./Impact";
import OurKeyCommunities from "./OurKeyCommunities";
import ThematicDesktop from "./ThematicDesktop";
import ThematicMobile from "./ThematicMobile";

const WhatWeDoMobileAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);
  const overviewRef = useRef(null);
  const ourApproachRef = useRef(null);
  const resilienceRef = useRef(null);
  const keyCommunitiesRef = useRef(null);
  const thematicAreasRef = useRef(null);
  const impactRef = useRef(null);

  const toggleAccordion = (index, ref) => {
    setActiveIndex(activeIndex === index ? null : index);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const accordionData = [
    {
      title: "Overview",
      ref: overviewRef,
    },
    {
      title: "Approach",
      ref: ourApproachRef,
    },
    {
      title: "Building Resilience of the workforces",
      ref: resilienceRef,
    },
    {
      title: "Key Communities",
      ref: keyCommunitiesRef,
    },
    {
      title: "Thematic Areas",
      ref: thematicAreasRef,
    },
    {
      title: "Impact",
      ref: impactRef,
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

      <div
        ref={overviewRef}
        className="max-w-screen-xl mx-auto lg:px-40 lg:py-16 tracking-wide text-center lg:space-y-4 p-5"
      >
        <p className="text-xl">
          Our journey began with narrowing our focus on one of the most vital
          components of the global economy—
          <br />
          the workforce. We have been championing the wellbeing of the formal
          and informal workforce, especially women, by enhancing their skills,
          amplifying their voices, and fostering responsible business practices.
          As the world evolves, so does the need for a comprehensive approach to
          workforce wellbeing. Join us as we continue to pave the way for
          healthier, more empowered work environments across the globe.
        </p>

        <p className="font-semibold text-[#292929] text-xl">
          Together, let us create a future where every individual thrives.
        </p>
      </div>

      <div
        ref={ourApproachRef}
        className="bg-[url('/whatWeDo/rectangle.png')] bg-no-repeat bg-cover flex flex-col items-center lg:p-20 p-3 text-center mb-12"
      >
        <h1 className="text-3xl">APPROACH</h1>
        <div className="bg-white lg:px-24 lg:mt-10">
          <div className="w-full flex justify-center">
            <Image
              src="/whatWeDo/ourApproach.png"
              width={500}
              height={500}
              alt=""
              className="lg:mb-10 lg:w-3/4 w-full hidden lg:block"
            />
          </div>
          <p className="text-xl text-[#222222] lg:mt-10 lg:p-0 p-2">
            Upfront prioritises the wellbeing of both the formal and informal
            workforce, placing their health and happiness at the core of its
            work, upholding its commitment to the community.
          </p>
          <p className="text-xl text-[#222222] lg:p-0 p-2 lg:mt-3">
            We employ innovative, transformative, and sustainable practices
            tailored to be locally applicable, sensitive, and inclusive,
            effectively addressing specific needs and requirements to bring
            meaningful <b>impact</b>. To ensure impact at <b>scale</b>, Upfront
            focuses on moving from demonstration to orchestration. This
            strategic shift involves collaborating and partnering with others in
            the space, becoming part of forums and platforms, and leveraging
            collective strengths to achieve greater impact and scalability.
          </p>
          <p className="text-xl text-[#222222] lg:p-0 p-2 mt-3">
            Upfront also promotes sustainability by shaping and influencing
            leaders, investments, systems, and policies, ensuring that workforce
            wellbeing practices and principles are integrated at all levels of
            decision-making. Ensuring <b>sustainability</b> requires investment
            in the cause. Upfront designs innovative financing solutions to
            encourage such investments and generate tangible results,
            reinforcing its overall mission and vision for a healthy, wealthy,
            and thriving workforce.
          </p>
          <Image
            src="/whatWeDo/our_approach_mobile.png"
            width={500}
            height={500}
            alt=""
            className="mb-10 lg:w-3/4 w-full block lg:hidden"
          />
        </div>
      </div>

      <div
        ref={resilienceRef}
        className="bg-customLightGray lg:p-12 p-4 flex justify-center mb-12"
      >
        <div className="lg:w-2/3 space-y-5 text-center ">
          <h1 className="text-3xl pt-5">
            BUILDING RESILIENCE OF
            <br className="hidden lg:block" /> THE WORKFORCES
          </h1>
          <p className="text-[#222222] text-xl">
            Upfront focuses on fostering individual resilience by building
            agency, ensuring access to essential services, and enhancing
            structural and systemic capabilities through thought leadership,
            proactive actions, and targeted interventions, ultimately driving
            transformative change.
          </p>
          <Image
            src="/whatWeDo/PeopleResilience.png"
            width={600}
            height={400}
            alt=""
            className="w-full hidden lg:block"
          />
          <Image
            src="/whatWeDo/PeopleResilienceMobile.png"
            width={600}
            height={400}
            alt=""
            className="w-full block lg:hidden"
          />
        </div>
      </div>

      <div ref={keyCommunitiesRef}>
        <OurKeyCommunities />
      </div>

      <div ref={thematicAreasRef}>
        <ThematicMobile />
      </div>

      <div ref={impactRef}>
        <Impact />
      </div>
    </div>
  );
};

export default WhatWeDoMobileAccordion;

// import React, { useState, useRef } from "react";
// import Image from 'next/image'; // Assuming you are using Next.js for Image import
// import Impact from "./Impact";
// import OurKeyCommunities from './OurKeyCommunities';
// import ThematicDesktop from './ThematicDesktop';

// const ThematicMobile = () => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const overviewRef = useRef(null);
//   const ourApproachRef = useRef(null);
//   const resilienceRef = useRef(null);
//   const keyCommunitiesRef = useRef(null);
//   const thematicAreasRef = useRef(null);
//   const impactRef = useRef(null);

//   const toggleAccordion = (index, ref) => {
//     setActiveIndex(activeIndex === index ? null : index);
//     if (ref.current) {
//       ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   const accordionData = [
//     {
//       title: "Overview",
//       ref: overviewRef,
//     },
//     {
//       title: "Our Approach",
//       ref: ourApproachRef,
//     },
//     {
//       title: "Building Resilience of the workforces",
//       ref: resilienceRef,
//     },
//     {
//       title: "Our Key Communities",
//       ref: keyCommunitiesRef,
//     },
//     {
//       title: "Thematic Areas",
//       ref: thematicAreasRef,
//     },
//     {
//       title: "Impact",
//       ref: impactRef,
//     },
//   ];

//   return (
//     <div className="pt-10 block lg:hidden">
//       <div id="accordion-collapse" data-accordion="collapse">
//         {accordionData.map((item, index) => (
//           <div key={index} ref={item.ref}>
//             <h2 id={`accordion-collapse-heading-${index + 1}`}>
//               <button
//                 type="button"
//                 className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-400 focus:ring-0 focus:ring-red-50 dark:focus:ring-red-800 dark:border-gray-100 dark:text-gray-400 gap-3 ${
//                   activeIndex === index ? "bg-gray-400 text-white" : "hover:bg-gray-400 hover:text-white dark:hover:bg-red-800"
//                 }`}
//                 onClick={() => toggleAccordion(index, item.ref)}
//                 aria-expanded={activeIndex === index}
//                 aria-controls={`accordion-collapse-body-${index + 1}`}
//               >
//                 <span>{item.title}</span>
//                 <svg
//                   data-accordion-icon
//                   className={`w-3 h-3 shrink-0 ${activeIndex === index ? "rotate-180" : ""}`}
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 10 6"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M9 5 5 1 1 5"
//                   />
//                 </svg>
//               </button>
//             </h2>
//             {activeIndex === index && (
//               <div id={`accordion-collapse-body-${index + 1}`} aria-labelledby={`accordion-collapse-heading-${index + 1}`}>
//                 {/* Render the section content directly here */}
//                 {index === 0 && (
//                   <div ref={overviewRef} className="max-w-screen-xl mx-auto lg:px-40 py-16 tracking-wide text-center space-y-4 p-5">
//                     <p className="text-xl">
//                       Our journey began with narrowing down the focus on one of the most
//                       vital components of the global economy—the workforce. We have been
//                       championing the wellbeing of the formal and informal workforce,
//                       especially women workforce, through empowerment by enhancing their
//                       skills, amplifying their voices, and fostering responsible business
//                       practices.
//                     </p>
//                     <p>
//                       As the world evolves, so does the need for a comprehensive approach to
//                       the wellbeing of the workforce. Join us as we continue to pave the way
//                       for healthier, more empowered work environments across the globe.
//                     </p>
//                     <p className="font-semibold text-[#292929]">
//                       Together let us create a future where every individual thrives.
//                     </p>
//                   </div>
//                 )}
//                 {index === 1 && (
//                   <div ref={ourApproachRef} className="bg-[url('/whatWeDo/rectangle.png')] bg-no-repeat bg-cover flex flex-col items-center lg:p-20 p-3 text-center mb-12">
//                     <h1 className="text-5xl">OUR APPROACH</h1>
//                     <div className="bg-white py-10 lg:px-24 mt-10">
//                       <div className="w-full flex justify-center">
//                         <Image
//                           src="/whatWeDo/ourApproach.png"
//                           width={500}
//                           height={500}
//                           alt=""
//                           className="mb-10 lg:w-3/4 w-full hidden lg:block"
//                         />
//                       </div>
//                       <p className="text-xl text-[#222222] mt-10 lg:p-0 p-5">
//                         Upfront prioritises the wellbeing of the formal and informal
//                         workforce, placing their health and happiness at the core of its
//                         work, upholding its commitment to the community. We employ
//                         innovative, transformative, and sustainable practices tailored to be
//                         locally applicable, sensitive, and inclusive, addressing specific
//                         needs and requirements effectively and helping us bring meaningful{" "}
//                         <span className="font-semibold">Impact</span>. To ensure impact at{" "}
//                         <span className="font-semibold">Scale</span>, Upfront focuses on
//                         moving from demonstration to orchestration. This strategic shift
//                         involves collaborating and partnering with others working in the
//                         space, becoming part of forums and platforms, thereby leveraging
//                         collective strengths to achieve greater impact and scalability.
//                         Additionally, it focuses on promoting Sustainability by shaping and
//                         influencing leaders, investments, systems, and policies, ensuring
//                         that workforce wellbeing practices and principles are integrated at
//                         all levels of decision-making. Ensuring{" "}
//                         <span className="font-semibold">sustainability</span> also needs
//                         investment for the cause, Upfront also designs innovative financing
//                         solutions to encourage investments and generate tangible results,
//                         reinforcing its overall mission and vision for a healthy, wealthy
//                         and thriving workforce.
//                       </p>
//                       <Image
//                         src="/whatWeDo/our_approach_mobile.png"
//                         width={500}
//                         height={500}
//                         alt=""
//                         className="mb-10 lg:w-3/4 w-full block lg:hidden"
//                       />
//                     </div>
//                   </div>
//                 )}
//                 {index === 2 && (
//                   <div ref={resilienceRef} className="bg-customLightGray lg:p-12 p-4 flex justify-center mb-12">
//                     <div className="lg:w-2/3 space-y-5 text-center ">
//                       <h1 className="text-5xl pt-5">BUILDING RESILIENCE OF<br className="hidden lg:block"/> THE WORKFORCES</h1>
//                       <p className="text-[#222222] text-xl">
//                         Upfront focuses on fostering individual resilience by building
//                         agency, ensuring access to essential services, and enhancing
//                         structural and systemic capabilities through thought leadership,
//                         proactive action, and targeted interventions, ultimately driving
//                         transformative change.
//                       </p>
//                       <Image
//                         src="/whatWeDo/PeopleResilience.png"
//                         width={600}
//                         height={400}
//                         alt=""
//                         className="w-full hidden lg:block"
//                       />
//                       <Image
//                         src="/whatWeDo/PeopleResilienceMobile.png"
//                         width={600}
//                         height={400}
//                         alt=""
//                         className="w-full block lg:hidden"
//                       />
//                     </div>
//                   </div>
//                 )}
//                 {index === 3 && (
//                   <div ref={keyCommunitiesRef}>
//                     <OurKeyCommunities />
//                   </div>
//                 )}
//                 {index === 4 && (
//                   <div ref={thematicAreasRef}>
//                     <ThematicDesktop/>
//                   </div>
//                 )}
//                 {index === 5 && (
//                   <div ref={impactRef}>
//                     <Impact/>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ThematicMobile;
