'use client'
import React, { useState } from 'react';
import StoriesComponents from './StoriesComponents';
import CaseStudiesComponents from './CaseStudiesComponents';
import BlogComponents from './BlogComponents';
import NewsComponents from './NewsComponents';
import { insightsTabs } from '@utils/data';
import Tab from '@components/Tab';
import { usePathname } from 'next/navigation';

const InsightsAllCategoriesComponents = () => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('Case Studies');
  const [visibleItems, setVisibleItems] = useState(8); 
  const getActiveTab = (tab) => {
    setActiveTab(tab);
    setVisibleItems(8); 
  };

  const getTabClass = (tab) => {
    return tab === activeTab
      ? 'py-2 px-4 text-white text-2xl bg-black'
      : 'py-2 px-4 text-gray-500 hover:text-gray-700 text-2xl bg-[#E8E8E8] cursor-pointer';
  };

  const getContentClass = (tab) => {
    return tab === activeTab ? 'p-4 block' : 'hidden';
  };

 

  return (
    <>
      <div className="lg:sticky z-10 top-24">
        <Tab tabs={insightsTabs} getActiveTab={getActiveTab} />
      </div>
      <div className="lg:flex lg:space-x-8 p-4 mt-4">
        <div className={getContentClass('Case Studies')}>
          <CaseStudiesComponents visibleItems={visibleItems} />
        </div>
        <div  className={getContentClass('Stories (Blogs)')}>
          <BlogComponents visibleItems={visibleItems} />
        </div>
        <div className={getContentClass('News and Publications')}>
          <NewsComponents visibleItems={visibleItems} />
        </div>
      </div>
  
    </>
  );
};

export default InsightsAllCategoriesComponents;

