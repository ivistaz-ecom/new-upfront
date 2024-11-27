"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "@components/Header";
import Link from "next/link";
import ConfigData from "../../../config"; // Adjust the import path according to your project structure
import NextSeo from "@components/SeoComponents/Seo";
const BlogPosts = ({ slug }) => {
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
        post.map((data,index) => (
          <div key={data.id}>
             <React.Fragment key={index}>
            <head>
              <title>{data.acf.meta_title_}</title>
              <meta name="description" content={data.acf.meta_description} />
              <meta name="robots" content="index, follow" />
              <link rel="canonical" href={`https://upfront.global/insights/blogs/${data.slug}`} />
              {/* <NextSeo/> */}
            </head>
            <div className="bg-customGray h-36">
              <Header />
             
            </div>
            <div className="bg-[#E8E8E8] p-4">
              <p className="text-black">
                {/* <Link href="/insights">Insights /</Link> */}
                <Link href="/blogs"><span className="fs-6 mb-0 px-1">Blogs /</span></Link>
                <span dangerouslySetInnerHTML={{ __html: data.title.rendered }} />
              </p>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap gap-10 p-5 lg:pt-16">
              <div className="lg:w-3/4 w-full lg:px-10">
                <div className="relative">
                  <img
                    src={data.acf.banner_image.url}
                    alt={data.title.rendered}
                    className="w-full"
                  />
                </div>
                <div
                  className="w-full"
                  dangerouslySetInnerHTML={{ __html: data.content.rendered }}
                />
                <div className="pt-5 pb-10">
                  <Link href="/blogs">
                    <button
                      type="button"
                      className="focus:outline-none w-44 text-white bg-[#222222] focus:ring-4 focus:ring-red-300 font-normal text-md px-4 py-4 me-4 mb-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      View All Stories
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            </React.Fragment>
          </div>
        ))
        
      ) : (
        <div className="text-center py-20">Loading...</div>
        
      )}
      
    </div>
  );
};

export default BlogPosts;
