"use client";
import React, { useEffect, useState } from "react";
import { Col, div, Row, Image } from "react-bootstrap";
import config from "@config";
import Header from "../../components/Header";
import Head from "next/head";
import NotFound from "../not-found";

const Post = ({ params }) => {
  const { slug } = params;
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${config.wpApiUrl}/seo-blog?_embed&slug=${slug}&production_mode[]=${config.SERVER}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
        // console.log(data)
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    // console.log(data)
    fetchData();
  }, [slug]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data || data.length === 0) {
    return <NotFound />;
  }

  return (
    <>
      <Header />

      {data.map((post, index) => (
        <React.Fragment key={index}>
          <head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>{post.acf.meta_title_}</title>
            <meta name="description" content={post.acf.meta_description} />
            <meta http-equiv="content-language" content="en"></meta>
            <meta name="robots" content="index, follow" />
          <link rel="canonical" href={`https://upfront.global/${post.slug}`} />
          </head> 

          <div className="w-full">
            <div className="bg-gradient-to-r from-gray-950 to-[#f40f34] bg-cover h-[80vh] flex flex-col pb-8">
              <div
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                className="text-white text-center lg:text-6xl text-3xl mt-60 align-middle justify-center lg:mt-72 lg:ps-16 container mx-auto"
              />
            </div>

            <div className="pt-5 px-10 text-xl pb-5 paragraph-height">
              <div
                dangerouslySetInnerHTML={{
                  __html: post["content"]["rendered"],
                }}
              />
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default Post;
