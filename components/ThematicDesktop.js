import React, { useState } from 'react';
import HealthWellbeing from './health&wellbeing';
import GenderEquality from '@components/GenderEquality';
import AgencyBuilding from '@components/AgencyBuilding';
import Financial from '@components/Financial&DigitalInclusion';
import Workplace from '@components/Workplace';
import SocialProtection from '@components/SocialProtection';

const ThematicDesktop = () => {
  const [selectedTab, setSelectedTab] = useState('profile');
  const [socialProtectionVisible, setSocialProtectionVisible] = useState(false);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    if (tab === 'social_protection') {
      setSocialProtectionVisible(true);
    } else {
      setSocialProtectionVisible(false);
    }
  };

  return (
    <>
      <div className="mt-10 hidden lg:block container mx-auto">
        <p className="text-center text-6xl pb-10 text-[#222222]">THEMATIC AREAS</p>
        <div>
          <div className="border-0 border-gray-200 dark:border-gray-700">
            <ul className="talkbubble-container text-md font-medium text-center ms-3 container w-screen mt-4" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
              <li role="presentation">
                <div id="talkbubble" className={selectedTab === 'profile' ? 'selected' : ''}>
                  <button
                    id="profile-tab"
                    onClick={() => handleTabClick('profile')}
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected={selectedTab === 'profile'}
                  >
                    Health & <br />Wellbeing
                  </button>
                </div>
              </li>
              <li role="presentation">
                <div id="talkbubble" className={selectedTab === 'genter_equality' ? 'selected' : ''}>
                  <button
                    id="genter_equality-tab"
                    onClick={() => handleTabClick('genter_equality')}
                    type="button"
                    role="tab"
                    aria-controls="genter_equality"
                    aria-selected={selectedTab === 'genter_equality'}
                  >
                    Gender Equality,<br /> Inclusion, and Diversity
                  </button>
                </div>
              </li>
              <li role="presentation">
                <div id="talkbubble" className={selectedTab === 'settings' ? 'selected' : ''}>
                  <button
                    id="settings-tab"
                    onClick={() => handleTabClick('settings')}
                    type="button"
                    role="tab"
                    aria-controls="settings"
                    aria-selected={selectedTab === 'settings'}
                  >
                    Agency Building for<br /> Women & Young Girls
                  </button>
                </div>
              </li>
              <li role="presentation">
                <div id="talkbubble" className={selectedTab === 'contacts' ? 'selected' : ''}>
                  <button
                    id="contacts-tab"
                    onClick={() => handleTabClick('contacts')}
                    type="button"
                    role="tab"
                    aria-controls="contacts"
                    aria-selected={selectedTab === 'contacts'}
                  >
                    Financial & <br />Digital Inclusion
                  </button>
                </div>
              </li>
              <li role="presentation">
                <div id="talkbubble" className={selectedTab === 'workplace' ? 'selected' : ''}>
                  <button
                    id="workplace-tab"
                    onClick={() => handleTabClick('workplace')}
                    type="button"
                    role="tab"
                    aria-controls="workplace"
                    aria-selected={selectedTab === 'workplace'}
                  >
                    Workplace/<br /> Social Dialogues
                  </button>
                </div>
              </li>
              <li role="presentation">
                <div id="talkbubble" className={selectedTab === 'social_protection' ? 'selected' : ''}>
                  <button
                    id="social_protection-tab"
                    onClick={() => handleTabClick('social_protection')}
                    type="button"
                    role="tab"
                    aria-controls="social_protection"
                    aria-selected={selectedTab === 'social_protection'}
                  >
                    Social<br /> Protection
                  </button>
                </div>
              </li>
            </ul>
          </div>

          <div id="default-tab-content">
            <div className={`p-4 rounded-lg mt-28 ${selectedTab === 'profile' ? 'block' : 'hidden'}`} id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <HealthWellbeing />
            </div>
            <div className={`p-4 rounded-lg mt-28 ${selectedTab === 'genter_equality' ? 'block' : 'hidden'}`} id="genter_equality" role="tabpanel" aria-labelledby="genter_equality-tab">
              <GenderEquality />
            </div>
            <div className={`p-4 rounded-lg mt-28 ${selectedTab === 'settings' ? 'block' : 'hidden'}`} id="settings" role="tabpanel" aria-labelledby="settings-tab">
              <AgencyBuilding />
            </div>
            <div className={`p-4 rounded-lg mt-28 ${selectedTab === 'contacts' ? 'block' : 'hidden'}`} id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
              <Financial />
            </div>
            <div className={`p-4 rounded-lg mt-28 ${selectedTab === 'workplace' ? 'block' : 'hidden'}`} id="workplace" role="tabpanel" aria-labelledby="workplace-tab">
              <Workplace />
            </div>
            <div className={`p-4 rounded-lg mt-28 ${selectedTab === 'social_protection' ? 'block' : 'hidden'}`} id="social_protection" role="tabpanel" aria-labelledby="social_protection-tab">
              <SocialProtection isVisible={socialProtectionVisible} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThematicDesktop;
