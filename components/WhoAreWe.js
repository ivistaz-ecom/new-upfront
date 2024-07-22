import Link from "next/link";
import CarouselFull from "./CarouselFull";
import { whoAreWeCarousel } from "@utils/data";

const  WhoAreWe = () => {
  return (
    <>
      <div className="hidden lg:block">
        <div className="flex">
          <div className="w-[70%]">
            <CarouselFull details={whoAreWeCarousel} />
          </div>
          <div className="lg:w-2/5 w-full ps-10 lg:flex lg:flex-col justify-between items-start">
            <h1 className="lg:text-6xl text-3xl">
              <span className="text-red-600">WHO</span> <br /> WE ARE
            </h1>
            <p className="lg:w-3/5 tracking-wide mt-7 mb-5 lg:p-0 me-5 text-xl">
              Upfront strives to make wellbeing a reality for formal and
              informal workforces. We are a proud Indian and global entity that
              is committed to enriching the lives of millions of workers working
              for their rights, entitlements, health, agency, safety, financial
              security, and building resilience. We are part of the Catalyst
              Group, a social enterprise platform that enhances the health and
              wealth of vulnerable people and the planet.
            </p>
            <Link href="/our-story">
              <button className="border border-gray-300 px-5 py-2 hover:bg-black hover:text-white">
                Find out more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoAreWe;
