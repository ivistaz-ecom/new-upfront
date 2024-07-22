// 'use client'

// import { useRouter } from 'next/navigation'
// import Header from '@components/Header'
// import Image from 'next/image'
// import { useState, useRef } from 'react'
// import { insights, insightsTabs } from '@utils/data'

// const InsightsPageMobile = () => {
//   const router = useRouter()
//   const [visibleItems, setVisibleItems] = useState(8)
//   const [activeTab, setActiveTab] = useState('Stories')
//   const [activeIndex, setActiveIndex] = useState(0)

//   const storiesRef = useRef(null)
//   const casestudiesRef = useRef(null)
//   const blogRef = useRef(null)
//   const newsRef = useRef(null)
//   const allRef = useRef(null)

//   const handleClick = (category, title) => {
//     router.push(`insights/${category}/${title}`)
//   }

//   const handleLoadMore = () => {
//     setVisibleItems((prevVisibleItems) => prevVisibleItems + 4)
//   }

//   const toggleAccordion = (index, ref, tabName) => {
//     setActiveIndex(activeIndex === index ? null : index)
//     setActiveTab(tabName)
//     if (ref.current) {
//       ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
//     }
//   }

//   const getFilteredData = () => {
//     const filteredData =
//       activeTab !== 'All'
//         ? insights.filter((item) => item.category === activeTab)
//         : insights
//     return filteredData
//   }

//   const accordionData = [
//     { title: "Stories", ref: storiesRef },
//     { title: "Case Studies", ref: casestudiesRef },
//     { title: "Blog", ref: blogRef },
//     { title: "News and Publications", ref: newsRef },
//     { title: "All", ref: allRef }
//   ]

//   return (
//     <>
//       <div className='block lg:hidden'>

//       {/* <div className="bg-[url('/insights/banner.png')] bg-cover h-[60vh] flex flex-col ps-16 pb-8">
//         <Header />
//         <h1 className="text-white text-6xl mt-auto">INSIGHTS</h1>
//       </div> */}

//       <div className="">
//         <div id="accordion-collapse" data-accordion="collapse">
//           {accordionData.map((item, index) => (
//             <div key={index} ref={item.ref}>
//               <h2 id={`accordion-collapse-heading-${index + 1}`}>
//                 <button
//                   type="button"
//                   className={`flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-gray-400 focus:ring-0 focus:ring-red-50 dark:focus:ring-red-800 dark:border-gray-100 dark:text-gray-400 gap-3 ${
//                     activeIndex === index ? "bg-gray-400 text-white" : "hover:bg-gray-400 hover:text-white dark:hover:bg-red-800"
//                   }`}
//                   onClick={() => toggleAccordion(index, item.ref, item.title)}
//                   aria-expanded={activeIndex === index}
//                   aria-controls={`accordion-collapse-body-${index + 1}`}
//                 >
//                   <span>{item.title}</span>
//                   <svg
//                     data-accordion-icon
//                     className={`w-3 h-3 shrink-0 ${activeIndex === index ? "rotate-180" : ""}`}
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 10 6"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M9 5 5 1 1 5"
//                     />
//                   </svg>
//                 </button>
//               </h2>
//               {activeIndex === index && (
//                 <div id={`accordion-collapse-body-${index + 1}`} aria-labelledby={`accordion-collapse-heading-${index + 1}`}>
                  
//                   <ul className="flex flex-wrap gap-6 mt-8 justify-center">
//                     {getFilteredData()
//                       .slice(0, visibleItems)
//                       .map((item) => (
//                         <li key={item.id} className="lg:border-s lg:border-black mb-10">
//                           <div className="ps-3 w-80">
//                             <div className="relative">
//                               <Image
//                                 src={item.imageUrl}
//                                 width={300}
//                                 height={250}
//                                 className=""
//                                 alt={item.name}
//                               />
//                               <p className="absolute top-0 text-sm bg-black/70 text-white px-3 py-1">
//                                 {item.badge}
//                               </p>
//                             </div>
//                             <p className="text-gray-400 text-sm mt-3">{item.date}</p>
//                             <p className="mt-5">{item.title}</p>
//                             <p className="text-sm mt-3">{item.description}</p>
//                             <button
//                               className="px-7 py-1 mt-6 border border-customLightGray"
//                               onClick={() => handleClick(item.category, item.title)}
//                             >
//                               Read
//                             </button>
//                           </div>
//                         </li>
//                       ))}
//                   </ul>
//                   <div className="text-center mt-7">
//                     {getFilteredData().length > visibleItems && (
//                       <button
//                         onClick={handleLoadMore}
//                         className="bg-customLightGray border border-customGrayMd px-8 py-3"
//                       >
//                         Load More
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//       </div>
//     </>
//   )
// }

// export default InsightsPageMobile

'use client'

import React, { useState } from 'react';
import StoriesComponents from './StoriesComponents';
import NewsComponents from './NewsComponents';
import CaseStudiesComponents from './CaseStudiesComponents';
import BlogComponents from './BlogComponents';
import AllBlogsComponents from './AllBlogsComponents';
import { insightsTabs } from '@utils/data';

const InsightsAllMobile = () => {
    const [activeIndex, setActiveIndex] = useState(1); // State to track active accordion item

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle active index
    };

    return (
        <div className="block lg:hidden">
            <div className="">
                <div id="accordion-collapse" data-accordion="collapse">
                    {insightsTabs.map((tabObj, index) => (
                        <div key={index}>
                            <h2 id={`accordion-collapse-heading-${index + 1}`}>
                                <button
                                    type="button"
                                    className={`flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-gray-400 focus:ring-0 focus:ring-red-50 dark:focus:ring-red-800 dark:border-gray-100 dark:text-gray-400 gap-3 ${
                                        activeIndex === index
                                            ? 'bg-gray-400 text-white'
                                            : 'hover:bg-gray-400 hover:text-white dark:hover:bg-red-800'
                                    }`}
                                    onClick={() => toggleAccordion(index)}
                                    aria-expanded={activeIndex === index}
                                    aria-controls={`accordion-collapse-body-${index + 1}`}
                                >
                                    <span>{tabObj.tab}</span>
                                    <svg
                                        data-accordion-icon
                                        className={`w-3 h-3 shrink-0 ${
                                            activeIndex === index ? 'rotate-180' : ''
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
                            {activeIndex === index && (
                                <div
                                    id={`accordion-collapse-body-${index + 1}`}
                                    aria-labelledby={`accordion-collapse-heading-${index + 1}`}
                                    className="p-4"
                                >
                                    {tabObj.tab === 'Case Studies' && <CaseStudiesComponents />}
                                    {/* {tabObj.tab === 'Case Studies' && (
                                        <CaseStudiesComponents />
                                    )} */}
                                    {tabObj.tab === 'Stories(Blogs)' && <BlogComponents />}
                                    {tabObj.tab === 'News and Publications' && (
                                        <NewsComponents />
                                    )}
                                    {/* {tabObj.tab === 'All' && <AllBlogsComponents />} */}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InsightsAllMobile;
