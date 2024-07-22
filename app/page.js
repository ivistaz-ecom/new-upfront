import CaseStudy from "@components/CaseStudy";
import Header from "@components/Header";
import CarouselScreen from "@components/CarouselScreen";
import ImpactStories from "@components/ImpactStories";
import OurPartners from "@components/OurPartners";
import OurPresence from "@components/OurPresence";
import OurReach from "@components/OurReach";
import ThematicAreas from "@components/ThematicAreas";
import WhatWeDo from "@components/WhatWeDo";
import WhoAreWe from "@components/WhoAreWe";
import { homeBannerCarousel } from "@utils/data";
import WhoAreWeMobile from "@components/WhoWeAreMobile";
import Seo from "../components/SeoComponents/Seo";
export default function Home() {
  // seo
  const title =
    "Supporting Workforces Around the World - Wellbeing and Resilience for All with Upfront";
  const description =
    "Upfront is supporting the workforce worldwide to be well and resilient through systemic and inclusive ways. Join us in building enriched lives.";
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
      <div className="relative">
        <CarouselScreen details={homeBannerCarousel} />
      </div>
      <div className="max-w-screen-xl lg:mx-auto lg:px-40 lg:py-7 mt-6 tracking-wide">
        <h1 className="lg:text-6xl text-3xl text-center">
          <span className="text-red-600 ">WHY WORKFORCE</span> <br /> WELLBEING
        </h1>
        <p className="text-center mt-3 lg:p-0 p-5 text-xl">
          Workforces are key to economic growth; however, as the world
          progresses post the COVID-19 pandemic, we have transitioned from a
          Volatile, Uncertain, Complex, and Ambiguous (VUCA) world to a Brittle,
          Anxious, Non-Linear, and Incomprehensible world. Global economics is
          also moving towards circularity; however, with that comes a growing
          range of inequalities encompassing global wealth, income, gender, and
          ecological inequality across the world. In most cases, labour markets
          and systems may be incapacitated to adjust to the changes, which
          leaves the workforce continuing to experience vulnerability. With the
          belief that a safe and enabling work environment is non-negotiable for
          the workforce to thrive, Upfront strives to make systems, capacities,
          and markets stronger and more inclusive to ensure both workforce and
          business wellbeing, but not at the cost of each other.
        </p>
      </div>
      <WhoAreWe />
      <WhoAreWeMobile />
      <WhatWeDo />
      <OurReach />
      <OurPresence />
      <ThematicAreas />
      {/* <ImpactStories /> */}
      <CaseStudy />
      <OurPartners />
    </>
  );
}
