"use client";

import React, { useEffect, useState } from "react";
import ConfigData from "../../config";
import Link from "next/link";
import { Button } from "flowbite-react";

const CaseStudiesComponents = () => {
  const siteUrl = ConfigData.wpApiUrl;
  const serverUrl = ConfigData.SERVER;
  const categoryId = 2;
  const [data, setData] = useState([]); // Initialize data state with an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${siteUrl}/posts?categories=${categoryId}&_embed&production_mode[]=${serverUrl}`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [siteUrl, serverUrl, categoryId]);

  return (
    < div>
      <h2 className="lg:text-6xl text-3xl py-10 lg:px-16">CASE STUDIES</h2>
      <hr className="px-10 pb-10 " />
      {/* <div className="flex justify-center"> */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 container mx-auto">
          {data.length > 0 ? (
            data.map((post) => (
              <li key={post.id} className="border mb-10">
                <div className="w-full">
                  <div className="relative">
                    {post.acf && post.acf.thumbnail_image && (
                      <img
                        src={post.acf.thumbnail_image.url}
                        alt={post.title.rendered}
                        className=" "
                      />
                    )}
                  </div>
                  <div className="bg-[#F40F34] mx-3 mt-5 p-1 post-content-title">
                    <span
                      className="text-white"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                  </div>
                  <div className="lg:h-[220px] flex flex-col justify-between">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post["excerpt"]["rendered"],
                      }}
                      className="fs-5 mb-3 mx-3 mt-5 p-1 post-content"
                    ></div>
                    <Button className="text-black w-52 hover:bg-black bg-[#E8E8E8] border border-[#909090] hover:text-white rounded-none mt-5 mx-3 mb-5">
                      <Link
                        href={`/insights/case-studies/${post.slug}`}
                        className="px-7"
                      >
                        Read Case Study
                      </Link>
                    </Button>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <div className="text-center text-3xl col-span-full">Loading...</div>
          )}
        </ul>
      {/* </div> */}
    </div>
  );
};

export default CaseStudiesComponents;
