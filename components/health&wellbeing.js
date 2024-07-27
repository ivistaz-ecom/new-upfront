import React from "react";
import Image from "next/image";

const HealthWellbeing = () => {
  return (
    <>
      <div className="">
        <Image
          src="/whatWeDo/tab-img.png"
          width={600}
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
                NUTRITION, SANITATION AND
                <br /> PERSONAL HYGIENE:
              </p>
            </div>
          </div>
          <p className="pt-3">
            We believe that everyday habits play a crucial role in maintaining
            good health. Through education and resources, we empower workers to
            make informed choices about nutrition, sanitation, and personal
            hygiene, promoting overall wellness in the workplace.
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
                STRESS MANAGEMENT AND <br />
                MENTAL HEALTH:
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
                PRIMARY HEALTH AND
                <br /> NON-COMMUNICABLE DISEASES (NCDS):
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
                WOMEN’S HEALTH AND WELLBEING:
              </p>
            </div>
          </div>

          <p className="pt-3">
            Women's health requires special attention. Through targeted
            initiatives, we raise awareness about menstrual health and hygiene,
            maternal health, and family planning and offer screenings for
            cancers related to women, ensuring comprehensive care for all women
            workers
          </p>
        </div>
      </div>
    </>
  );
};

export default HealthWellbeing;
