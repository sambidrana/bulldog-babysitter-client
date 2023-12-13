import Link from "next/link";
import React from "react";
import Footer from "./Footer";

const Featured = () => {
  return (
    <>
      <div className="mt-10">
        {/* Headeing for video */}
        <div className="bg-green-200 p-2 ">
          <p>The bulldog babysitter</p>
        </div>
        {/* Video */}
        <div className="bg-white p-2">
          <iframe
            width="1400"
            height="889"
            src="https://www.youtube.com/embed/XBukX8BRvpc"
            title="IMG 7259"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        {/* Footer for video */}
        <div className="bg-green-200 p-2 flex justify-end items-center">
          <Link href={"/booking"} className="px-4 ">
            Start booking now{" "}
          </Link>
          <Link href={"/example"} className="px-4 ">
            example links{" "}
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Featured;
