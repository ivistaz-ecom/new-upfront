import React from "react";

export default function WellBeing() {
  return (
    <div className="max-w-screen-xl lg:mx-auto lg:px-40 lg:py-7 mt-6 tracking-wide">
      <h1 className="lg:text-6xl text-3xl text-center">
        <span className="text-red-600 ">OUR <br /></span> PRESENCE
      </h1>
      <img
        src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/upfron-global/arrow.svg"
        className="mx-auto py-4"
      />
      <p className="text-center mt-3 lg:p-0 p-5 text-xl">
        We are based out of India and have worked across 16 states and Union
        Territories within the country. Globally, we have worked in 13 countries
        across Asia and Africa, touching the lives of 8.2 million individuals in
        the workforce and their families. Through a robust network of over 300
        partners and collaborators, we leverage more than 20 years of collective
        experience to make a meaningful impact.
      </p>
      <div>
        <img src="homePage/map.png" />
      </div>
    </div>
  );
}
