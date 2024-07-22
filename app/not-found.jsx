import Header from "@components/Header";
import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";

const notfound = () => {
  return (
    <>
      <Header />

      <div className="h-screen flex flex-col justify-center align-middle bg-black lg:p-0 p-4">
        <h3 className="text-center lg:text-9xl text-3xl text-white">404</h3>
        <h2 className="lg:text-6xl text-2xl text-center text-white lg:mt-5">page not found</h2>
        <div className="flex justify-center mt-5">
          <Link href="/">
            <Button className="text-white items-center flex justify-center bg-red-700 rounded-md border border-black h-14 focus:outline-none focus:border-red-500">
              <span className="text-xl">Go back to Homepage</span>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default notfound;
