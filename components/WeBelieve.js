'use client'

import { weBelieve } from '@utils/data'
import Image from 'next/image'
import React, { useRef } from 'react'

const WeBelieve = () => {
    

    return (
        <div className="lg:flex items-center gap-4 bg-customGray">
            <div className="flex">
                <div className="h-full text-white flex items-center justify-center px-10 lg:py-20 py-10 ">
                    <h2 className="lg:text-6xl text-3xl text-white">
                        WE <br /> BELIEVE
                    </h2>
                </div>
                {/* <div className="triangle-right self-center"></div> */}
            </div>
            <ul
                className="lg:flex gap-10 lg:ps-14 ps-7" 
            >
                {weBelieve.map((item) => {
                    return (    
                        <   li
                            key={item.id}
                            className="lg:ps-5 lg:border-s-2 lg:border-b-0 border-b-2  lg:py-0 py-5 border-gray-400 lg:w-full w-80 "
                        >
                            <div className="space-y-3 flex flex-col justify-center ">
                                <Image
                                    src={item.logo}
                                    width={50}
                                    height={50}
                                    alt={item.title}
                                />
                                <p className="text-white text-2xl lg:text-xl">{item.title}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default WeBelieve
