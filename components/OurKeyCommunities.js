// 'use client'

// import React from 'react'
// import Slider from 'react-slick'
// import Image from 'next/image'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

// const OurKeyCommunities = () => {
// var settings = {
//     dots: true,
//     infinite: true,
//     arrows: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1 ,
//     autoplay: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 4,
//           infinite: true,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//     ],
//   }

//   return (
//     <>
//       <div className="space-y-5 lg:px-10 mb-10 text-center">
//         <h2 className="lg:text-6xl text-3xl mb-10">
//           KEY <br /> COMMUNITIES
//         </h2>
//         <div>
//           <Slider {...settings}>
//             <div>
//               <div className="flex flex-col items-center space-y-3">
//                 <Image
//                   src="/whatWeDo/streetVendors.png"
//                   width={300}
//                   height={300}
//                   alt=""
//                 />
//                 <p className='text-xl'>Street Vendors</p>
//               </div>
//             </div>
//             <div>
//               <div className="flex flex-col items-center space-y-3">
//                 <Image
//                   src="/whatWeDo/factoryWorkers.png"
//                   width={300}
//                   height={300}
//                   alt=""
//                 />
//                 <p className='text-xl'>Factory Workers</p>
//               </div>
//             </div>

//             <div>
//               <div className="flex flex-col items-center space-y-3">
//                 <Image
//                   src="/whatWeDo/frontlineHealthWorkers.png"
//                   width={300}
//                   height={300}
//                   alt=""
//                 />
//                 <p className='text-xl'>Frontline Health Workers</p>
//               </div>
//             </div>
//           </Slider>
//         </div>
//       </div>
//       <div className="text-center">
//         <p className="text-xl mt-7">
//           And Other Workforces Including Plantation Workers, Domestic Workers,
//           Gig Workers Etc.
//         </p>
//       </div>
//     </>
//   )
// }

// export default OurKeyCommunities

'use client'
import React from "react";
import Image from "next/image";
import { OurKeyCommunities } from "@utils/data";

const ourKeyCommunities = () => {
  return (
    <div className="space-y-5 lg:px-10 mb-10 text-center">
      <h2 className="lg:text-6xl text-3xl mb-10">
        OUR <br /> COMMUNITIES
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4 mx-auto container">
        {OurKeyCommunities.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <Image
              src={item.imageurl}
              width={200}
              height={300}
              alt={item.title}
              className="object-cover"
            />
            <p className="text-xl mt-2">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ourKeyCommunities;
