import Link from "next/link";
import React from "react";

const Featured = () => {
  return (
    <>
      <div className="mt-14 max-w-screen h-[70vh]">
        {/* Headeing for video */}
        <div className="bg-[#a9c274] p-3 text-white ">
          <p>The bulldog babysitter</p>
        </div>
        {/* Video */}
        <div className="h-[500px]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/XBukX8BRvpc?si=UqW4RUvO436OQM9K&amp;5&amp;controls=0&amp;showinfo=0&amp;start=5&amp;loop=1&amp;autoplay=1&amp;mute=1&amp;playlist=XBukX8BRvpc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/* Footer for video */}
        <div className="bg-[#a9c274] p-3 flex justify-end items-center">
          <Link href={"/boarding"} className="px-4 text-white hover:underline">
            Have'nt boarder? Click here to start the boarding process.
          </Link>
        </div>
      </div>
    </>
  );
};

export default Featured;
