'use client'

import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import { OurKeyCommunities } from '@utils/data'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const OurCommunities = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }

  return (
    <div className="text-center container mx-auto py-10">
      <h2 className="lg:text-6xl text-3xl mb-10">
        OUR <br /> COMMUNITIES
      </h2>
      <Slider {...settings}>
        {OurKeyCommunities.map((item) => (
          <div key={item.id} className="flex flex-col items-center justify-center">
            <div className="w-64 mx-auto">
              <Image
                src={item.imageurl}
                width={300}
                height={200}
                alt={item.title}
                className=""
              />
              <p className="w-full text-xl text-center mt-2">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default OurCommunities




// 'use client'
// import React from "react";
// import Image from "next/image";
// import { OurKeyCommunities } from "@utils/data";

// const ourKeyCommunities = () => {
//   return (
//     <div className="space-y-5 lg:px-10 mb-10 text-center">
//       <h2 className="lg:text-6xl text-3xl mb-10">
//         OUR <br /> COMMUNITIES
//       </h2>

//       <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4 mx-auto container">
//         {OurKeyCommunities.map((item) => (
//           <div key={item.id} className="flex flex-col items-center">
//             <Image
//               src={item.imageurl}
//               width={200}
//               height={300}
//               alt={item.title}
//               className="object-cover"
//             />
//             <p className="text-xl mt-2">{item.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ourKeyCommunities;
