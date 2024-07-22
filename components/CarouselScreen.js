import { homeBannerCarousel } from '@utils/data'
import React from 'react'

const CarouselScreen = ({ details }) => {
  return (
    <div
      id="controls-carousel"
      class="relative w-full lg:h-screen"
      data-carousel="slide"
      interval= {3000}
      data-carousel-interval={7000}
    >
      <div class="relative lg:h-full h-[530px] overflow-hidden">
        {details.map((item) => {
          return (
            <div
              key={item.id}
              class="hidden duration-1000 ease-in-out"
              data-carousel-item
            >
              <img
                src={item.imageUrl}
                class={`absolute hidden lg:block w-full lg:h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}
                alt="..."
              />
              <img
                src={item.mobileimage}
                class={`absolute block lg:hidden w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}
                alt="..."
              />

              <div className="absolute lg:top-[40%] top-[60%] lg:left-52 lg:w-1/3 w-96 lg:ps-0  ps-6">
                <h2 className="lg:text-4xl text-2xl text-white bg-red-600 p-1 inline-block">
                  {item.title}
                </h2>
                <p className="lg:text-5xl text-3xl text-white mt-2">{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
      <button
        type="button"
        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full lg:bg-white/30 dark:bg-gray-800/30 lg:group-hover:bg-white/50 lg:dark:group-hover:bg-gray-800/60 lg:group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180 hidden lg:block"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class=" sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full lg:bg-white/30 dark:bg-gray-800/30 lg:group-hover:bg-white/50 lg:dark:group-hover:bg-gray-800/60 lg:group-focus:ring-4 group-focus:outline-none">
          <svg
            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180 hidden lg:block"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  )
}

export default CarouselScreen
