import Header from '@components/Header'
import Image from 'next/image'
import Link from 'next/link'

const page = ({ params }) => {
  const encodedString = params.slug
  const decodedString = decodeURIComponent(encodedString)
  return (
    <>
      <div className="bg-customGray h-36">
        <Header />
      </div>
      <div className="bg-[#E8E8E8] p-4 ">
        <p className="text-black">
          Insights / Blog / Nutrition for nourishment – Healthy food habits are
          a gateway to workforce wellbeing
        </p>
      </div>

      <div className="flex p-5 mx-5 mt-10">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full h-full  lg:w-5/1 relative ">
            <Image
              className="object-cover w-full"
              src="/insights/blogImage1.png"
              alt="image description"
              height={200}
              width={200}
            />
            <button
              type="button"
              className="text-white w-32 text-xl absolute start-0 top-0  rounded-sm  font-normal bg-gray-800/75 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300   px-1 py-1 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              STORY
            </button>
            <div className="">
              <p className="pt-5 pb-4">22 Nov 2023</p>
              <p className="text-4xl">
                Parveen’s Journey of Hope |
                <p className="text-4xl">Empowering the Street Vendors</p>
              </p>
              <p className="py-3">
                In the bustling markets of Santosh Nagar and Gautum Nagar,
                Parveen’s husband will always be found selling clothes for
                babies. Ever since Parveen got married, she has supported her
                husband by doing home-based work, specialising in stitching
                clothes, especially undergarments for children. While her
                husband ventures into the streets every day to sell their
                creation, Parveen takes care of their precious daughter and
                diligently sews 50 to 70 pieces of clothing each week
              </p>
              <p className="py-3">
                Despite their perseverance, Parveen and her husband have faced
                an ongoing struggle to sustain their income throughout the
                month. Although her husband manages to earn around INR 4000–6000
                per month, a substantial portion of their earnings goes towards
                household expenses and the procurement of raw materials.
                Additionally, they have the added pressure of paying the broker,
                who provides them with a spot in the bazaar for the vending.
                Parveen explained, “We spend almost INR 50–100 per day just to
                secure a vending spot. Some vendors can afford better locations
                with tarpaulin sheets for roofs. However, what truly challenges
                us is when we spend that amount and have no sales for the entire
                day.”
              </p>
              <p className="py-3">
                Under these difficult circumstances, the lack of awareness about
                available social security measures further increases their
                vulnerability. In response to these pressing issues, Upfront,
                partnering with Nav Srishti, initiated a community outreach
                programme to raise awareness and facilitate access to relevant
                social protection schemes for street vendors and their families.
                Through these programmes conducted with the members of the
                community, Parveen learned about the Sukanya Samridhi Yojana.
              </p>
              <p>
                Learning about the scheme’s savings and investment benefits for
                her daughter’s future, Parveen discussed it with her husband.
                With the unwavering support of the field team, they opened a
                savings account in their daughter’s name at the Post Office.
                Determined to provide better opportunities for their little one,
                Parveen made it a habit to invest a portion of their income into
                the scheme every month. This practice proved fruitful, allowing
                them to save around INR 2500 over the past six months.{' '}
              </p>
              <p className="py-3">
                Encouraged by this positive experience, Parveen took another
                proactive step towards securing her family’s well-being. With
                the assistance of the field team, she registered herself under
                the Ayushman Bharat Scheme. This programme granted Parveen and
                her family access to up to Rs. 5 lakh in health insurance at
                affiliated hospitals, ensuring comprehensive coverage for
                various medical services.
              </p>
              <p className="py-3">
                Parveen’s journey serves as a testament to the transformative
                power of social protection schemes. Through awareness and active
                participation, she and her husband are able to secure a brighter
                future for their daughter. As Parveen and her husband continue
                their journey as resilient street vendors, their dedication and
                determination remain an inspiration to others facing similar
                struggles. By empowering individuals like Parveen with knowledge
                and access to social security measures, we are trying to create
                a more inclusive and supportive society where everyone has the
                opportunity to thrive and succeed.
              </p>
              <div className="pt-3">
                <Link href="/insights">
                  <button
                    type="button"
                    className="focus:outline-none w-44  rounded-sm text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-normal text-md px-4 py-5 me-4 mb-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    View All Stories
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-white w-full lg:w-5/12 ">
            <div className="lg:ms-32  ">
              <button
                type="button"
                className="text-white w-72 text-xl  rounded-sm  font-normal bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300   px-5 py-4 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Related Resources
              </button>

              <div class="border-l border-gray-300 border-solid-1 p-4">
                <div className="relative">
                  <Image
                    className="object-cover w-full  ms-2 "
                    src="/insights/relatedRes1.png"
                    alt="image description"
                    height={200}
                    width={200}
                  />
                  <button
                    type="button"
                    className="text-white w-20 text-xl absolute start-0 top-0 ms-2 rounded-sm bg-gray-800/70 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300   px-1 py-1 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    BLOG
                  </button>
                  <div className="px-2">
                    <p className="text-gray-400 mt-3 mb-3">29 Feb 2024</p>
                    <p className="text-2xl">
                      A glimpse into the Life of an Invisible Workforce – Street
                      Vendors of India
                      {/* <p className="text-4xl">Empowering the Street Vendors</p> */}
                    </p>
                    <p className="py-3">
                      Every day, I stitch clothes for babies and my husband
                      ventures out to sell them in the Gautam Nagar market area
                      in Delhi. We spend Rs. 50 or 100 every day to secure a
                      decent vending spot,” says Parveen, who does home-based
                      work in Delhi.
                    </p>
                    <button
                      type="button"
                      className="text-gray-900 mt-5  rounded-sm  hover:text-white border border-gray-300 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium  text-sm px-6 py-2 lg:w-24 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                    >
                      Read
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    className="object-cover w-full mt-5 ms-2 "
                    src="/insights/relatedRes2.png"
                    alt="image description"
                    height={200}
                    width={200}
                  />
                  <button
                    type="button"
                    className="text-white w-20 text-xl absolute start-0 top-0 ms-2 rounded-sm bg-gray-800/70 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300   px-1 py-1 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    BLOG
                  </button>
                  <div className="px-2">
                    <p className=" text-gray-400 mt-3 mb-3">20 Dec 2023</p>
                    <p className="text-2xl">
                      Ensuring Health Security | Bridging the Gap for Street
                      Vendors
                    </p>
                    <p className="py-3">
                      A resident of Samalkot Mandal, Andhra Pradesh, Sri. Korada
                      Challarao, had a dream of securing a government job after
                      completing his degree. Unfortunately, despite his efforts,
                      was not successful in obtaining employment in the public
                      sector.
                    </p>
                    <button
                      type="button"
                      className="text-gray-900 mt-5 rounded-sm hover:text-white border border-gray-300 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium  text-sm px-6 py-2 lg:w-24 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                    >
                      Read
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
