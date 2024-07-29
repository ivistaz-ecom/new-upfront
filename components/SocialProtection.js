import React from "react";
import Image from "next/image";

const SocialProtection = () => {
  return (
    <>
      <div className="">
        <img
          src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/upfron-global/tab-imags/tab-6.png"
          width={1000}
          height={300}
          alt=""
          className="w-[900px]"
        />
      </div>

      <div className="lg:flex ">
        <div className="lg:w-1/2  p-4">
          <div className="flex flex-row ">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-13.svg"
                width={100}
                height={100}
                alt=""
                className="w-14"
              />
            </div>
            <div className="flex flex-col px-3">
              <p className="text-md font-medium pt-2">Awareness & Access</p>
            </div>
          </div>
          <p className="pt-5">
            Social protection schemes ensure a safety net for the vulnerable
            workforce. By improving awareness and access, we ensure that the workforce
            do not fall through the cracks and receive the assistance they need
            when facing challenges. Through awareness campaigns, workshops, and
            information sessions, we empower the workforce with knowledge about
            available support services and how to access them.
          </p>
        </div>
        <div className="lg:w-1/2 p-4">
          <div className="flex flex-row ">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-14.svg"
                width={100}
                height={100}
                alt=""
                className="w-14"
              />
            </div>
            <div className="flex flex-col px-3">
              <p className="text-md font-medium pt-3">Universal Help Desk</p>
            </div>
          </div>

          <p className="pt-5">
            We believe in providing easy access to information and assistance
            for the workforce. However, in some cases, this may not be enough.
            Setting up a Universal Help Desk in partnership with
            workplaces/systems serves as a central point of contact for
            inquiries, support requests, and guidance on social protection
            services, ensuring quality and sustainable impact.
          </p>
        </div>
      </div>
      <div className="  p-4">
        <div className="flex flex-row ">
          <div className="flex flex-col">
            <Image
              src="/whatWeDo/tab-img-15.svg"
              width={100}
              height={100}
              alt=""
              className="w-12"
            />
          </div>
          <div className="flex flex-col px-3 lg:w-1/2">
            <p className="text-md font-medium pt-1">Mapping and Research</p>
          </div>
        </div>

        <p className="lg:w-1/2 pt-5">
          Understanding the needs and vulnerabilities of the workforce is
          essential for designing effective social protection interventions.
          Upfront conducts mapping exercises and research studies to identify
          gaps in coverage, assess the effectiveness of existing programmes, and
          gather insights into emerging needs and trends with different
          workforces/groups. By leveraging data and research findings, we can
          tailor our interventions to better meet the needs of the workforce and
          address systemic challenges.
        </p>
      </div>
    </>
  );
};

export default SocialProtection;
