'use client'

import Header from '@components/Header'
import OurMission from '@components/OurMission'
import OurVision from '@components/OurVision'
import Tab from '@components/Tab'
import ThematicAreas from '@components/ThematicAreas'
import { ourStoryTabs } from '@utils/data'
import Image from 'next/image'
import WeBelive from '@components/WeBelieve'
import { useRef } from 'react'
import OurStoryAccordion from '@components/OurStoryAccordion'
import Seo from "../../components/SeoComponents/Seo"

const page = () => {
  const worforceRef = useRef(null);
  const webelievehRef = useRef(null);
  const visionmissionRef = useRef(null);
  const ourhistoryRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      const yOffset = -150; // Adjust this value to your needs
      const y =
        ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const getActiveTab = (tab) => {
    switch (tab) {
      case "Why Workforce Wellbeing?":
        scrollToSection(worforceRef);
        break;
      case "We Believe":
        scrollToSection(webelievehRef);
        break;
      case "Vision and Mission":
        scrollToSection(visionmissionRef);
        break;
      case "Our History":
        scrollToSection(ourhistoryRef);
        break;
      default:
        console.log(tab);
    }
    console.log(tab)
  }
    // seo
    const title = " Advancing Workforce Wellbeing & Human Rights - Upfront's Vision";
const description = "Discover how Upfront achieves mutual wellbeing for workers and businesses without compromise, focusing on human rights and development.";
const path = "https://upfront.global/our-story";
const metaImage = "/ourStory/banner.png"


  return (
    <>
     <Header />

     <Seo title={title} description={description} path={path} metaImage={metaImage} />  
      <div className="lg:bg-[url('/ourStory/banner.png')] bg-[url('/ourStory/bannerMobile.png')] bg-cover lg:h-[300px] h-[600px] flex flex-col pb-8">
       
        <h1 className="text-white text-6xl mt-auto lg:ps-16 ps-10">
          OUR <br /> STORY
        </h1>
      </div>
      
      {/* Sticky Tab Component */}
      <div className=''>

      </div>
      <div className="sticky z-10 top-24 bg-white shadow-md hidden lg:block">
        <Tab tabs={ourStoryTabs} getActiveTab={getActiveTab} />
      </div>

      <div className='block lg:hidden'>
        {/* <OurStoryAccordion /> */}
      </div>

      <div className="lg:px-24 px-7 py-16" ref={worforceRef}>
        <h5 className="lg:text-6xl text-3xl">
          <span className="text-red-600">WHY</span> WORKFORCE <br /> WELLBEING?
        </h5>
      </div>

      <div className='hidden lg:block'>
        <div className="pb-16 container mx-auto flex justify-center">
          <Image
            src="/ourStory/work-force.png"
            width={1000}
            height={600}
            className=""
            alt=""
          />
        </div>
      </div>

      <div className='block lg:hidden'>
        <div className="pb-16 mx-auto container flex justify-center">
          <Image
            src="/ourStory/workForceWellbeingMobile.png"
            width={1000}
            height={700}
            className="w-11/12"
            alt=""
          />
        </div>
      </div>

      <div ref={webelievehRef}>
        <WeBelive />
      </div>

      <div ref={visionmissionRef}>
        <OurVision />
      </div>

      <OurMission />

      <div className="px-5 py-16" ref={ourhistoryRef}>
        <h4 className="lg:text-6xl text-3xl lg:px-16 px-7">
          <span className="text-red-600">OUR</span> <br /> HISTORY
        </h4>
        <div className="flex pt-16 justify-center">
          <Image
            src="/ourStory/our_history.png"
            width={1000}
            height={700}
            className="w-11/12 hidden lg:block"
            alt=""
          />
          <Image
            src="/ourStory/our_history_mobile.png"
            width={1000}
            height={700}
            className="w-11/12 block lg:hidden"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default page
