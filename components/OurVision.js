import Image from 'next/image'

const OurVision = () => {
  return (
    <div className="lg:flex bg-customBlack pb-16 lg:pb-0">
      <div className="lg:flex lg:w-2/5">
        <div className="bg-[#E8E8E8] flex flex-col justify-center px-10 lg:py-28 py-11 space-y-2">
          <h2 className="lg:text-6xl text-3xl">
            OUR <br /> VISION
          </h2>
          <p className=" lg:text-xl text-2xl lg:w-3/4 w-full">
          Make wellbeing a reality for the workforce.
          </p>
        </div>
        <div className="hidden lg:block triangle-right self-center triangle-red"></div>
      </div>
      <div className="lg:w-3/5 py-12 ml-20 lg:ml-0">
        <Image
          src="/ourStory/ourVision.png"
          width={750}
          height={300}
          alt=""
          className="w-9/12 hidden lg:block"
        />
         <Image
          src="/ourStory/ourVisionMobile.png"
          width={750}
          height={300}
          alt=""
          className="w-9/12 block lg:hidden"
        />
      </div>
    </div>
  )
}

export default OurVision
