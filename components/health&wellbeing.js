import React from "react";
import Image from "next/image";

const HealthWellbeing = () => {
  return (
    <>
      <div className="">
        <img
          src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/upfron-global/tab-imags/tab-img.png"
          width={1000}
          height={300}
          alt=""
          className="w-[900px]"
        />
      </div>

      <div className="lg:flex">
        <div className="lg:w-1/2  p-4">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-1.svg"
                width={100}
                height={100}
                alt=""
                className="w-12"
              />
            </div>
            <div className="flex flex-col px-3">
              <p className="text-md font-medium">
                Nutrition, Sanitation and <br />
                Personal Hygiene
              </p>
            </div>
          </div>
          <p className="pt-3">
            We believe that everyday habits play a crucial role in maintaining
            good health. Through education and resources, we empower the
            workforce to make informed choices about nutrition, sanitation, and
            personal hygiene, promoting overall wellness in the workplace.
          </p>
        </div>
        <div className="lg:w-1/2  p-4">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-2.svg"
                width={100}
                height={100}
                alt=""
                className="w-10"
              />
            </div>
            <div className="flex flex-col px-3">
              <p className="text-md font-medium">
                Stress Management and <br />
                Mental Health
              </p>
            </div>
          </div>

          <p className="pt-3">
            We recognise the importance of mental health for productivity and
            quality of life and create avenues for open dialogue and life skills
            sessions aimed at stress management and mental health awareness.
          </p>
        </div>
      </div>

      <div className="lg:flex">
        <div className="lg:w-1/2  p-4">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-3.svg"
                width={100}
                height={100}
                alt=""
                className="w-14"
              />
            </div>
            <div className="flex flex-col px-3">
              <p className="text-md font-medium">
                Primary Health <br />
                Non-Communicable Diseases (NCDs)
              </p>
            </div>
          </div>

          <p className="pt-3">
            We facilitate regular awareness and screening programmes to detect
            and manage conditions that may affect workforce wellbeing.
          </p>
        </div>
        <div className="lg:w-1/2  p-4">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-4.svg"
                width={100}
                height={100}
                alt=""
                className="w-14"
              />
            </div>
            <div className="flex flex-col px-3">
              <p className="text-md font-medium pt-2">
                Women’s Health and Wellbeing
              </p>
            </div>
          </div>

          <p className="pt-3">
            Women's health requires special attention. Through targeted
            initiatives, we raise awareness about menstrual health and hygiene,
            maternal health, and family planning and offer screenings for
            cancers related to women, ensuring comprehensive care for all women
            in the workforce.
          </p>
        </div>
      </div>
    </>
  );
};

export default HealthWellbeing;
