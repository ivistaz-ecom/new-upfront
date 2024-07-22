import Header from '@components/Header'
import React from 'react'
import Seo from "../../components/SeoComponents/Seo"
const InsightsBanner = () => {

     // seo
  const title = "Upfront Insights & Trends on Workforce Wellbeing";
  const description =
    " Check out the articles and insights for enhancing workforce wellbeing. Look into our latest discussions on skills, safety, and sustainable practices.";
  const path = "https://upfront.global/insights";
  const metaImage = "/insights/banner.png";
    return (
        <>
          <Header />
          <Seo
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />
            <div className="lg:bg-[url('/insights/banner.png')] bg-[url('/insights/bannerMobile.png')] bg-cover lg:h-[350px] h-[600px] flex flex-col  pb-8">
              
                <h1 className="text-white text-6xl mt-auto ps-16">INSIGHTS</h1>
            </div>

        </>
    )
}

export default InsightsBanner
