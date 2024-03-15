import Link from "next/link";
import React from "react";

const Featured = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="w-full max-w-screen min-h-[40vh] flex flex-col justify-between">
          {/* Heading for video */}
          <div className="bg-gradient-to-r from-[#c0dc84] to-[#A9C264] p-3 text-white">
            <p>The bulldog babysitter</p>
          </div>
          {/* Video */}
          <div className="flex-grow flex justify-center items-center">
            <iframe
              width="100%"
              height="550" // Adjust based on your needs
              src="https://www.youtube-nocookie.com/embed/VKXt9sPGBJM?si=dQgL0zbH-imWVDKe&amp;autoplay=1&amp;controls=0&amp;start=1&amp;showinfo=0&amp;loop=1&amp;mute=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
              allowFullScreen
            ></iframe>
          </div>
          {/* Footer for video */}
          <div className="bg-gradient-to-r from-[#c0dc84] to-[#A9C264] p-3 flex justify-end items-center">
            <Link
              href={"/boarding"}
              className="px-4 text-white hover:underline"
            >
              Haven't boarded? Click here to start the boarding process.
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
