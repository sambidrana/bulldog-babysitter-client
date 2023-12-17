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
        <div className="">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/XBukX8BRvpc?si=UqW4RUvO436OQM9K&amp;5&amp;controls=0&amp;start=5&amp;loop=1&amp;autoplay=1&amp;mute=1&amp;playlist=XBukX8BRvpc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
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
/*
<iframe
            width="100%"
            height="889"
            src="https://www.youtube.com/embed/XBukX8BRvpc"
            title="IMG 7259"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
*/
