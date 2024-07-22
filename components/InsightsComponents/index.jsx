import React from 'react'
import InsightsBanner from './InsightsBanner'
import InsigstsAllCategoriesComponents from './InsigstsAllCategoriesComponents'
import InsightsAllMobile from '@components/InsightsComponents/InsightsAccordionMobile'
const index = () => {
    return (
        <div>
            <InsightsBanner />
            <InsigstsAllCategoriesComponents />
            {/* <InsightsAllMobile/> */}
        </div>
    )
}

export default index
