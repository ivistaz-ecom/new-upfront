import React from "react";
import Image from "next/image";

const GenderEquality = () => {
  return (
    <>
      <div className="">
        <img
          src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/upfron-global/tab-imags/tab-2.png"
          width={1000}
          height={300}
          alt=""
          className="w-[900px]"
        />
      </div>

      <div className="lg:flex">
        <div className="lg:w-1/2 w-full p-4">
          <div className="flex flex-row ">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-5.svg"
                width={100}
                height={100}
                alt=""
                className="w-12"
              />
            </div>
            <div className="flex flex-col px-3">
              <p className="text-md font-medium ">
                Addressing Sexual Harassment <br />
                and Gender-Based Violence
              </p>
            </div>
          </div>
          <p className="pt-3">
            We are committed to creating a safe and respectful work environment
            for all. Through comprehensive prevention, mitigation, and redressal
            mechanisms, Upfront actively works to address sexual harassment and
            gender-based violence in the workplace. This includes raising
            awareness, providing information and resources, conducting policy
            reviews, and implementing reformative practices to ensure
            accountability and support for the victims.
          </p>
        </div>
        <div className="lg:w-1/2  p-4">
          <div className="flex flex-row ">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-6.svg"
                width={100}
                height={100}
                alt=""
                className="w-12"
              />
            </div>
            <div className="flex flex-col px-3 ">
              <p className="text-md font-medium ">
                Creating Inclusive <br />
                Workplaces
              </p>
            </div>
          </div>

          <p className="pt-3">
            We recognise the importance of making workplaces accessible and
            inclusive for everyone, regardless of caste, creed, gender identity,
            or physical ability. Our initiatives focus on removing barriers to
            participation and creating a culture of acceptance and belonging. We
            strive to foster an environment where all employees feel valued,
            respected, and empowered to contribute their unique perspectives and
            talents.
          </p>
        </div>
      </div>
    </>
  );
};

export default GenderEquality;
