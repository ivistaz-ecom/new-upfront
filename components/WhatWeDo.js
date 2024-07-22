import Image from "next/image";
import Link from "next/link";
const WhatWeDo = () => {
  return (
    <div className="my-16 ps-10 lg:flex justify-between   ">
      <div className="lg:w-2/5 flex flex-col justify-evenly items-start">
        <h1 className="lg:text-6xl text-3xl ">
          <span className="text-red-600">WHAT</span> <br /> WE DO
        </h1>
        <p className="lg:w-3/5 tracking-wide me-3 lg:mt-0 mt-5 text-xl">
          Upfront aims to enhance workforce wellbeing by unlocking human
          potential, optimising systems, and orchestrating investments,
          collaborations, and partnerships. This approach represents a critical
          value proposition to improve social and economic outcomes, impacting
          the wellbeing of people and the planet through scalability, impact,
          and sustainability.
        </p>
        <Link href="/what-we-do">
          <button className="border border-gray-300 px-5 py-2 lg:mt-0 mt-5 hover:bg-black hover:text-white">
            Know more
          </button>
        </Link>
      </div>

      <div className="lg:w-3/5 lg:me-0 me-10 lg:mt-0 mt-10">
        <Image
          src="/homePage/whatWeDo.png"
          width={650}
          height={581}
          alt="what we do"
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
