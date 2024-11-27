"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "@components/Header";
import Link from "next/link";
import ConfigData from "../../../../config"; // Adjust the import path according to your project structure

const CaseStudiesPosts = ({ slug }) => {
  const siteUrl = ConfigData.wpApiUrl;
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${siteUrl}/posts?_embed&slug=${slug}`);
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            setPost(data[0]);
          } else {
            setError("Post not found.");
          }
        } else {
          setError("Failed to fetch post: " + response.statusText);
        }
      } catch (error) {
        setError("Error fetching data: " + error.message);
      }
    };

    fetchData();
  }, [siteUrl, slug]);

  return (
    <div className="custom-container">
      {error ? (
        <div className="text-center py-20 text-red-500">{error}</div>
      ) : post ? (
        <div key={post.id}>
           <React.Fragment key={index}>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{post.acf.meta_title_}</title>
            <meta name="description" content={post.acf.meta_description} />
            <meta http-equiv="content-language" content="en"></meta>
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={`https://upfront.global/insights/case-studies/${post.slug}`} />
          </head>
          <div className="bg-customGray h-36">
            <Header />
          </div>
          <div className="bg-[#E8E8E8] p-4">
            <p className="text-black">
              <Link href="/insights">Insights /</Link>
              <span className="fs-6 mb-0 px-1">Case Studies /</span>
              <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap gap-10 p-5 lg:pt-16">
            <div className="lg:w-3/4 w-full lg:px-10">
              {post.acf?.banner_image?.url && (
                <div className="relative">
                  <img
                    src={post.acf.banner_image.url}
                    alt={post.title.rendered}
                    className="w-full mb-10"
                  />
                  <div
                    className="lg:w-[67%] w-80 text-white lg:text-2xl text-xl absolute bottom-2 start-0 px-4 font-normal bg-[#222222] focus:outline-none focus:ring-4 focus:ring-gray-300 m-2 py-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  </div>
                </div>
              )}
              <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
              <div className="pt-5 pb-10">
                <Link href="/insights/case-studies">
                  <button
                    type="button"
                    className="focus:outline-none w-64 text-white bg-[#222222] focus:ring-4 focus:ring-red-300 font-normal text-md px-4 py-4 me-4 mb-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    View All Stories
                  </button>
                </Link>
              </div>
            </div>
          </div>
          </React.Fragment>
        </div>
      ) : (
        <div className="text-center py-20">Loading...</div>
      )}
    </div>
  );
};

export default CaseStudiesPosts;
