"use client";

import React, { useEffect, useState } from "react";
import ConfigData from "../../config";
import { Button } from "flowbite-react";
import Link from "next/link"; // Import Link from next/link

const AllBlogsComponents = () => {
  const siteUrl = ConfigData.wpApiUrl;
  const serverUrl = ConfigData.SERVER;
  const [data, setData] = useState([]); // Initialize data state with an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${siteUrl}/posts?_embed&production_mode[]=${serverUrl}`
        );
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [siteUrl, serverUrl]);

  return (
    <div className="">
      <h2 className="text-6xl py-10 px-10">ALL</h2>
      <hr className="px-10" />
      <ul className="grid lg:grid-cols-4 gap-8 container mx-auto mt-8">
        {data.length > 0 ? (
          data.map((post) => (
            <li key={post.id} className="lg:border-s lg:border-gray-400 mb-10">
              <div className="ps-3 w-80">
                <div className="relative">
                  {post.acf && post.acf.thumbnail_image && (
                    <img
                      src={post.acf.thumbnail_image.url}
                      alt={post.title.rendered}
                      className="w-100"
                   
                    />
                  )}
                  {/* <p className="absolute top-0 text-sm bg-black/70 text-white px-3 py-1">
                    {post.badge}
                  </p> */}
                </div>
                {post.acf && post.acf.date && (
                  <p className="card-date mb-0 p-1 mt-5">
                    {new Date(post.acf.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                )}
               <div className="mt-5">
               <span className=" mt-5 p-1 text-[#4A4A4A] text-2xl" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
               </div>
                {/* <p className="text-sm mt-3">{post.description}</p> */}
                <div className="lg:h-[220px] flex flex-col justify-between">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post["excerpt"]["rendered"],
                    }}
                    className="fs-5 mb-3 m-height mt-3 p-1 post-content"
                  ></div>
                  <Button className="text-black hover:bg-black bg-[#E8E8E8] border border-[#909090] hover:text-white rounded-none mt-5 w-40 mb-5">
                    <Link
                      href={`/insights/${post.slug}`}
                      className="px-7"
                    >
                      Read more
                    </Link>
                  </Button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <div className="text-center text-3xl">Loading...</div>
        )}
      </ul>
    </div>
  );
};

export default AllBlogsComponents;
