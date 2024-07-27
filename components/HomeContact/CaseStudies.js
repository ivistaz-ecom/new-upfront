'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ConfigData from '../../config'
import Link from 'next/link'
import { Card, Button } from 'flowbite-react'

const CaseStudy = () => {
  const siteUrl = ConfigData.wpApiUrl
  const serverUrl = ConfigData.SERVER
  const categoryId = 2
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${siteUrl}/posts?categories=${categoryId}&_embed&production_mode[]=${serverUrl}`
        )
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [siteUrl, serverUrl, categoryId])

  return (
    <div className="bg-customLightGray bg-opacity-60 lg:p-10 flex flex-col">
      <h1 className="lg:text-6xl text-3xl text-center lg:mt-0 mt-4">
        <span className="text-red-600 ">CASE <br /></span> STUDIES
      </h1>
      <img
        src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/upfron-global/arrow.svg"
        className="mx-auto py-4"
      />
      <div className="grid lg:grid-cols-3 grid-cols-1 container mx-auto">
        {data.length > 0 &&
          data.map((post) => (
            <div key={post.id} className="px-3">
              <Card className="bg-transparent border-none shadow-none rounded-none">
                {post.acf && post.acf.thumbnail_image && (
                  <img
                    src={post.acf.banner_image.url}
                    alt={post.title.rendered}
                    className="w-full"
                    height={230}
                    width={400}
                  />
                )}
                <div className="px-5 mb-5">
                  <Link href={`/insights/case-studies/${post.slug}`}>
                  <h2
                    className="text-[23px]  leading-tight text-[#080808] h-[99px] hover:text-red-500"
                    dangerouslySetInnerHTML={{
                      __html: post.title.rendered,
                    }}
                  ></h2>
                  </Link>
                  
                  <div className="h-[200px] flex flex-col justify-between text-start border-t border-red-500 pt-6">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post['excerpt']['rendered'],
                      }}
                      className="text-xl mb-3 post-content"
                    ></div>

                    <Link
                      href={`/insights/case-studies/${post.slug}`}
                      className="text-[#F40F34] text-start border border-[#9a9a9a] p-4 justify-between flex"
                    >
                      Read Case Study
                      <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/upfron-global/btnArrow.svg" />
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          ))}
      </div>

      <div className="lg:px-16 lg:pt-8 pb-6 text-center lg:p-0 p-2">
        <Link href="/insights">
          <button className="bg-customGray self-center text-white p-3 mt-5">
            View All Case Studies
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CaseStudy
