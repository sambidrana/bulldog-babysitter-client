import Link from "next/link";
import React from "react";
import Image from "next/image";
const Featured = () => {
  return (
    <>
      {/* Main Container */}
      <div className="grid grid-flow-col grid-rows-2">
        {/* Grid 3 */}
        <div className="flex justify-center items-center md:h-auto">
          {/* h-[70vh] */}
          <div className="flex items-center justify-center border-[2px] p-[3px] rounded-2xl border-[#A9C274] ">
            <video
              className=" w-screen max-h-[800px]  object-fill rounded-2xl "
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

        <div className="grid grid-rows-3 h-[40vh] sm:h-[70vh] pb-10 pt-5  bg-gray-50 ">
          {/* Grid 1 */}
          <div className="flex justify-center items-center p-2 mt-1">
            {/* Image */}
            {/* <h1 className="pl-2 text-lg animate-pulse font-bold md:text-lg text-[#A9C274] tracking-wide">The Bulldog Babysitter</h1> */}
            <p className="p-4 sm:text-2xl font-serif tracking-wide text-[#A9C274] drop-shadow-2xl ">
              A loving and safe place for your Frenchie while you&apos;re away.
              Book now for top-quality care!
            </p>
          </div>

          {/* Grid 2 */}
          <div className="flex justify-center items-center m-auto ">
            <Image
              src={"/featured/featured2.webp"}
              width={550}
              height={550}
              alt="Background Decoration"
              className="w-[270px] sm:w-[1000px] "
            />
          </div>

          {/* Grid 3 */}

          <div className="flex justify-center items-center h-[170px] sm:h-[500px] ">
            <a href="/booking">
              <Image
                src="/featured/bone.png"
                width={200}
                height={200}
                alt="Logo"
                className="animate-bounce drop-shadow-xl  w-[100px] sm:w-[250px]"
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
