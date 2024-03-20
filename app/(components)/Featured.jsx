import Link from "next/link";
import React from "react";

const Featured = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-[60vh] md:min-h-[80vh]">
        <div className="w-full max-w-screen flex flex-col justify-between min-h-[40vh]">
          {/* Heading for video */}
          <div className="bg-gradient-to-r from-[#c0dc84] to-[#A9C264] p-3 text-white text-sm md:text-base">
            <p>The bulldog babysitter</p>
          </div>
          {/* Video */}
          <div
            className="flex-grow flex justify-center items-center"
            style={{
              position: "relative",
              paddingBottom: "36.25%",
              height: 0,
              overflow: "hidden",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src="https://www.youtube-nocookie.com/embed/VKXt9sPGBJM?autoplay=1&controls=0&start=1&showinfo=0&loop=1&mute=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* Footer for video */}
          <div className="bg-gradient-to-r from-[#c0dc84] to-[#A9C264] p-2 md:p-3 flex justify-end items-center">
            <Link
              href={"/boarding"}
              className="px-2 md:px-4 text-white hover:underline text-sm md:text-base"
            >
              Haven&apos;t boarded? Click here to start the boarding process.
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;

{/* <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/biRuR3G16Kk?si=Xj-tfa5o2pFoW5CH&amp;controls=0"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>; */}
