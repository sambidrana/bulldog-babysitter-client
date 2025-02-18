import Link from "next/link";
import React from "react";
import Image from "next/image";
const Featured = () => {
  return (
    <>
      {/* Main Container */}
      <div className="grid grid-flow-col grid-rows-2">
        {/* Grid 3 */}
        <div className="flex justify-center items-center h-[40vh]  md:h-auto">
          {/* h-[70vh] */}
          <div className="flex items-center justify-center border-[2px] p-[3px] rounded-2xl border-[#A9C274] ">
            <video
              className=" w-screen max-h-[800px] object-fill rounded-2xl "
              autoPlay
              muted
              loop
              controls
            >
              {/* <source src="/featured/banner.mp4" type="video/mp4" /> */}
              <source
                src="https://bulldogbabysitter-banner.s3.ap-southeast-2.amazonaws.com/banner.mp4
              "
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="grid grid-flow-col grid-cols-3 h-[30vh] gap-1 mt-5">
          {/* Grid 1 */}
          <div className="grid grid-flow-row col-span-2 justify-start place-self-center p-2 ">
            {/* Image */}
            {/* <h1 className="pl-2 text-lg animate-pulse font-bold md:text-lg text-[#A9C274] tracking-wide">The Bulldog Babysitter</h1> */}
            <p className="p-4 md:text-lg font-serif tracking-wide text-gray-700">
              A loving and safe place for your Frenchie while you're away. Book
              now for top-quality care!
            </p>
          </div>

          {/* Grid 2 */}
          <div className="col-span-1 flex items-end  mb-10 ">
            <a href="/booking">
              <Image
                src="/featured/bone.png"
                width={200}
                height={200}
                alt="Logo"
                className="animate-bounce"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;

{
  /* <Image
              src="/featured/logo3.png"
              width={150}
              height={200}
              
            /> */
}
