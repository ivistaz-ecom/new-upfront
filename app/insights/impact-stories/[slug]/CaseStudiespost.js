"use client";

import React, { useState, useEffect } from "react";
import Header from "@components/Header";
// import { CiCircleChevRight } from "react-icons/ci";
import Link from "next/link";
import ConfigData from "../../../../config"; // Adjust the import path according to your project structure

const CaseStudiesPosts = ({ slug }) => {
  const siteUrl = ConfigData.wpApiUrl;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${siteUrl}/posts?_embed&slug=${slug}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [siteUrl, slug]);

  return (
    <div className="custom-container">
      {post ? (
        post.map((data) => (
          <div key={data.id}>
            <head>
              <title>{data.acf.meta_title_}</title>
              <meta name="description" content={data.acf.meta_description} />
              <link
                rel="canonical"
                href={`https://upfront.global/insights/impact-stories/${data.slug}`}
              />
            </head>
            <div className="bg-customGray h-36">
              <Header />
            </div>
            <div className="bg-[#E8E8E8] p-4">
              <p className="text-black">
                <Link href="/insights">Insights /</Link>
                <span className="fs-6 mb-0 px-1">Impact Stories /</span>
                <span
                  dangerouslySetInnerHTML={{ __html: data.title.rendered }}
                />
              </p>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap gap-10 p-5 lg:pt-16">
              <div className="lg:w-3/4 w-full lg:px-10">
                {data.acf?.banner_image?.url && (
                  <div className="relative">
                    <img
                      src={data.acf.banner_image.url}
                      alt={data.title.rendered}
                      className="w-full mb-10"
                    />
                    {/* <button
                    type="button"
                    className="text-white text-xl absolute top-0 start-0 w-32 text-center font-normal bg-gray-800/75 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 px-1 py-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    CASE STUDY
                  </button> */}
                    <div
                      type=""
                      className="lg:w-[67%] w-80 text-white lg:text-2xl text-xl absolute bottom-2 start-0 px-4 font-normal bg-[#222222]  focus:outline-none focus:ring-4 focus:ring-gray-300 m-2 py-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                      <span
                        dangerouslySetInnerHTML={{
                          __html: data.title.rendered,
                        }}
                      />
                    </div>
                  </div>
                )}
                {/* <p className="card-date mb-0 pt-5 pb-4 text-[#4E4E4E]">
                {new Date(post.acf.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",  
                  day: "numeric",
                })}
              </p> */}
                <div
                  className=""
                  dangerouslySetInnerHTML={{ __html: data.content.rendered }}
                />
                <div className="pt-5 pb-10">
                  <Link href="/insights/impact-stories">
                    <button
                      type="button"
                      className="focus:outline-none w-64 text-white bg-[#222222]  focus:ring-4 focus:ring-red-300 font-normal text-md px-4 py-4 me-4 mb-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      View All Stories
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-20">Loading...</div>
      )}
    </div>
  );
};

export default CaseStudiesPosts;
