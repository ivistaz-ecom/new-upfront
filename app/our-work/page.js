'use client'

import Header from '@components/Header'
import Tab from '@components/Tab'
import { healthWorkers, ourWorkTabs } from '@utils/data'
import Image from 'next/image'

const page = () => {
  const getActiveTab = (tab) => {
    console.log(tab)
  }
  return (
    <>
      <div className="bg-[url('/ourWork/banner.png')] bg-cover h-[60vh] flex flex-col ps-16 pb-8">
        <Header />
        <h1 className="text-white text-6xl mt-auto">
          OUR <br /> WORK
        </h1>
      </div>
      <Tab tabs={ourWorkTabs} getActiveTab={getActiveTab} />
      <div className="py-16 flex justify-center">
        <div className="w-3/4 space-y-5">
          <p>
            Our journey of achieving well-being started by empowering workers,
            particularly women, in global supply chains; by building their
            capacities, strengthening their voices and enabling “responsible
            business” processes within the supply chain with improved adherence
            to social and legal requirements.
          </p>
          <p>
            Our efforts have led to transformational changes across systems and
            behaviours, unlocking human values and potential outcomes, and
            impacts on individuals, institutions and the overall supply chain
            through programmes like Gap Inc. (P.A.C.E. – Personal Advancement
            and Career Enhancement), Walmart Foundation (Women in Factories),
            Levi’s (Worker Wellbeing), BSR (Business for Social Responsibility)
            for HERfinance, HERhealth, HERrespect programs, Debenhams, Zlabels
            (LIFE), Page Industries (Life Skill Initiative), Primark (My Life),
            Levi’s (Worker Wellbeing), Inditex (Sakhi, Happiness For All), M&S
            (Women’s Career Progression), H&M (Intervention Resource Repository
            Link: on Gender Equity), C&A (Interventions for gender equity and
            hostels), Li&Fung (Worker App), Lindex (We Women), VF (Employee
            Wellbeing) and Kontoor (Invest for Wellness). We have partnered with
            large-scale civil society organisations like CARE International and
            Gram Tarang.
          </p>
        </div>
      </div>

      <div className="bg-customLightGray px-10 pt-10 pb-16">
        <Image
          src="/ourWork/textile.png"
          width={1200}
          height={600}
          className="w-full"
        />
        <h1 className="text-5xl mt-8">With Textile Workforce</h1>
        <div className="flex gap-6 mt-8 ">
          <p className="w-2/4 pe-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            metus nec velit vehicula, eu tristique eros lobortis. Duis aliquam,
            elit et fermentum placerat, quam sem fermentum mi, non mattis nisl
            magna in velit.
          </p>
          <p className="w-2/4 pe-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            metus nec velit vehicula, eu tristique eros lobortis. Duis aliquam,
            elit et fermentum placerat, quam sem fermentum mi, non mattis nisl
            magna in velit.
          </p>
        </div>
      </div>

      <div className="bg-customGray px-10 pt-10 pb-16 space-y-7 ">
        <Image
          src="/ourWork/HealthWorkers.png"
          width={1200}
          height={600}
          className="w-full"
        />
        <h1 className="text-5xl text-white">With Community Health Workforce</h1>
        <h2 className="text-3xl text-white">
          Capacity building for Community Health Workers:
        </h2>
        <p className="w-11/12 text-white">
          Since, no one agency or format is possible to address such challenges,
          and will require a comprehensive reformative action at various levels
          of mindset, mechanisms, capacities and systems. Therefore, our point
          of entry is to provide key inputs into the cost of inaction,
          self-efficacy, personal management, individual and team autonomy of
          frontline workers so that they can then respond more effectively to
          their beneficiaries and integrate the technical inputs within the
          framework of frontline delivery utilizing humanitarian, leadership and
          life skills. These modules include:
        </p>
        <ul className="flex flex-wrap gap-16">
          {healthWorkers.map((item) => {
            return (
              <li key={item.id} className="w-96">
                <div className="space-y-5">
                  <div className="flex justify-center items-center w-16 h-16 p-3 bg-[#F40F34]">
                    <Image
                      src={item.icon}
                      width={50}
                      height={50}
                      alt={item.title}
                    />
                  </div>
                  <p className="text-white ">
                    <span className="font-semibold">{item.title} </span>
                    {item.description}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
        <h2 className="text-3xl">
          Overview of experience of work with Community Health Workers:
        </h2>
        <ul className="flex flex-wrap gap-5">
          {healthWorkers.map((item) => {
            return (
              <li
                key={item.id}
                className="bg-white rounded-md p-5 w-96 h-56 space-y-5"
              >
                <Image
                  src={item.healthLogo}
                  width={50}
                  height={50}
                  alt="health"
                />
                <p className=" text-[#4A4A4A]">{item.experience}</p>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="bg-customLightGray px-10 pt-10 pb-20 space-y-7">
        <h1 className="text-5xl">With Street Workforce</h1>

        <p className="w-2/4 pe-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          metus nec velit vehicula, eu tristique eros lobortis. Duis aliquam,
          elit et fermentum placerat, quam sem fermentum mi, non mattis nisl
          magna in velit.
        </p>
      </div>

      <div className="px-10 pt-10 pb-20 space-y-7">
        <h1 className="text-5xl">Catalyst Foundation</h1>

        <p className="w-2/4 pe-4 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          metus nec velit vehicula, eu tristique eros lobortis. Duis aliquam,
          elit et fermentum placerat, quam sem fermentum mi, non mattis nisl
          magna in velit.
        </p>

        <button className="px-8 py-2 border border-customGray ">CTA</button>
      </div>
    </>
  )
}

export default page
