import Link from "next/link";
import React from "react";
import Image from "next/image";
const Featured = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[70vh] md:h-auto ">
        <div className="flex items-center justify-center border-[2px] p-[3px] rounded-2xl border-[#A9C274]  ">
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
    </>
  );
};

export default Featured;

