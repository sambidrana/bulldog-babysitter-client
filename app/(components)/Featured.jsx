import Link from "next/link";
import React from "react";
import Image from "next/image";
const Featured = () => {
  return (
    <>
      {/* Main Container */}
      <div className="grid grid-flow-col grid-rows-2 mb-24 ">

        {/* Grid A */}
        <div className="flex justify-center items-center pt-24 sm:pt-0 max-h-[200px] sm:max-h-[530px] md:max-h-[600px] 3xl:max-h-[1050px] ">
          {/* h-[70vh] */}
          <div className="flex items-center justify-center border-[2px] p-[3px] rounded-2xl border-[#A9C274] 3xl:ml-16 3xl:mr-16  ">
            <video
              className=" w-screen  max-h-[250px] sm:max-h-[380px] md:max-h-[600px] 3xl:max-h-[1000px]   object-fill rounded-2xl "
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

        {/* Grid B */}
        <div className="grid grid-rows-3 h-[300px] sm:h-[400px] md:h-[570px] 3xl:h-[1000px] pt-5 mb-10  bg-gray-100 ">
          {/* Grid 1 */}

          <div className="flex justify-center items-center h-[50px] sm:h-[200px] ">
            <a href="/booking">
              <Image
                src="/featured/booknow.webp"
                width={200}
                height={200}
                alt="Logo"
                className="animate-bounce drop-shadow-xl w-[110px] sm:w-[250px]"
              />
            </a>
          </div>

          {/* Grid 2 */} 
          <div className="flex justify-center items-center p-2 mt-1 h-[10px] sm:h-[100px]">
            {/* Image */}
            {/* <h1 className="pl-2 text-lg animate-pulse font-bold md:text-lg text-[#A9C274] tracking-wide">The Bulldog Babysitter</h1> */}
            <p className="p-4 sm:text-2xl font-serif tracking-wide text-[#A9C274] drop-shadow-2xl ">
              A loving and safe place for your Frenchie while you&apos;re away.
              Book now for top-quality care!
            </p>
          </div>

          {/* Grid 3 */}
          <div className="flex justify-center items-center m-auto h-auto  ">
            <Image
              src={"/featured/featured2.webp"}
              width={200}
              height={200}
              alt="Background Decoration"
              className="w-[350px] sm:w-[1000px] "
            />
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
