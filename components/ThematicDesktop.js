import React, { useState, useRef } from 'react';
import HealthWellbeing from './health&wellbeing';
import GenderEquality from '@components/GenderEquality';
import AgencyBuilding from '@components/AgencyBuilding';
import Financial from '@components/Financial&DigitalInclusion';
import Workplace from '@components/Workplace';
import SocialProtection from '@components/SocialProtection';

const ThematicDesktop = () => {
  const [selectedTab, setSelectedTab] = useState('profile');
  const [isModalOpen, setIsModalOpen] = useState(<HealthWellbeing/>);
  const modalRef = useRef(null);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  const getTabContent = () => {
    switch (selectedTab) {
      case 'profile':
        return <HealthWellbeing />;
      case 'genter_equality':
        return <GenderEquality />;
      case 'settings':
        return <AgencyBuilding />;
      case 'contacts':
        return <Financial />;
      case 'workplace':
        return <Workplace />;
      case 'social_protection':
        return <SocialProtection />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="mt-10 container mx-auto">
        <p className="text-center text-6xl pb-10 text-[#222222]">THEMATIC AREAS</p>
        <div>
          <ul className="talkbubble-container text-md font-medium text-center ms-3 container w-screen mt-4" role="tablist">
            <li role="presentation">
              <button
                onClick={() => handleTabClick('profile')}
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected={selectedTab === 'profile'}
                className={`tab-button ${selectedTab === 'profile' ? 'active' : ''}`}
              >
                Health & <br />Wellbeing
              </button>
            </li>
            <li role="presentation">
              <button
                onClick={() => handleTabClick('genter_equality')}
                type="button"
                role="tab"
                aria-controls="genter_equality"
                aria-selected={selectedTab === 'genter_equality'}
                className={`tab-button ${selectedTab === 'genter_equality' ? 'active' : ''}`}
              >
                Gender Equality,<br /> Inclusion, and Diversity
              </button>
            </li>
            <li role="presentation">
              <button
                onClick={() => handleTabClick('settings')}
                type="button"
                role="tab"
                aria-controls="settings"
                aria-selected={selectedTab === 'settings'}
                className={`tab-button ${selectedTab === 'settings' ? 'active' : ''}`}
              >
                Agency Building for<br /> Women & Young Girls
              </button>
            </li>
            <li role="presentation">
              <button
                onClick={() => handleTabClick('contacts')}
                type="button"
                role="tab"
                aria-controls="contacts"
                aria-selected={selectedTab === 'contacts'}
                className={`tab-button ${selectedTab === 'contacts' ? 'active' : ''}`}
              >
                Financial & <br />Digital Inclusion
              </button>
            </li>
            <li role="presentation">
              <button
                onClick={() => handleTabClick('workplace')}
                type="button"
                role="tab"
                aria-controls="workplace"
                aria-selected={selectedTab === 'workplace'}
                className={`tab-button ${selectedTab === 'workplace' ? 'active' : ''}`}
              >
                Workplace/<br /> Social Dialogues
              </button>
            </li>
            <li role="presentation">
              <button
                onClick={() => handleTabClick('social_protection')}
                type="button"
                role="tab"
                aria-controls="social_protection"
                aria-selected={selectedTab === 'social_protection'}
                className={`tab-button ${selectedTab === 'social_protection' ? 'active' : ''}`}
              >
                Social<br /> Protection
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4" onClick={handleOverlayClick}>
          <div ref={modalRef} className="bg-white lg:p-10 p-3 rounded-lg shadow-lg max-w-4xl relative overflow-auto max-h-full">
            <button
              className="absolute top-2 right-2 text-white p-1 bg-black rounded-2xl"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="overflow-y-auto max-h-96">
              {getTabContent()}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThematicDesktop;
