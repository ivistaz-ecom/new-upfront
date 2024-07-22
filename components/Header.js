"use client";
import { useEffect, useState } from "react";
import { initFlowbite } from "flowbite";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Event listeners for scroll and resize
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial checks
    handleScroll();
    handleResize();

    // Initialize Flowbite (assuming this is some external library function)
    setTimeout(() => {
      initFlowbite();
    }, 100);

    // Clean up event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50">
      <nav
        className={` top-0 left-0 z-40 w-full ${
          isScrolled ? "bg-[#222222]" : "bg-[#222222]"
        }`}
      >
        <div
          className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ${
            isScrolled ? "border-none" : "border-none"
          }`}
        >
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/homePage/upfrontLogo.svg"
              width={80}
              height={80}
              alt="Upfront logo"
              className="transition-all duration-300"
              priority
            />
          </Link>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isMenuOpen ? "block " : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-dropdown"
          >
            <ul className="flex bg-[#222222] lg:bg-transparent  flex-col font-medium p-4 md:p-0 mt-4 text-white border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:items-center md:mt-0 md:border-0">
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className={`flex items-center justify-between w-full py-2 px-3  md:hover:bg-transparent md:p-0 md:w-auto ${
                    isScrolled && !isMobile
                      ? "md:dark:hover:text-blue-500 md:dark:hover:bg-transparent"
                      : ""
                  }`}
                >
                  About Us{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
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
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownNavbar"
                  className="z absolute hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link
                        href="/our-story"
                        className="block text-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Our Story
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/our-team"
                        className="block text-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Our Team
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  href="/what-we-do"
                  className="block px-3 py-2 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:  dark:hover:bg-gray-700  md:dark:hover:bg-transparent"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:  dark:hover:bg-gray-700  md:dark:hover:bg-transparent"
                >
                  <button className="px-3 py-2 bg-white text-black rounded">
                    Contact Us
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
