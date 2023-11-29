import React from "react";
import Link from "next/link";

import FeaturedGallery from "./FeaturedGallery";

const Gallery = () => {
  return (
    <>
      <div className="pt-24 pb-24 bg-gradient-to-r from-lime-100 to-[#A9C274]">
        <div className="flex items-center justify-center gap-10 ">
          <FeaturedGallery image={"/gallery/gal1.png"} name={"gal1"} />
          <FeaturedGallery image={"/gallery/gal2.png"} name={"gal2"} />
          <FeaturedGallery image={"/gallery/gal3.png"} name={"gal3"} />
        </div>

        <div className="flex justify-end mr-20 mt-10 font-extralight tracking-wider">
          <div className=" text-[#386641] text-lg   bg-[#f2e8cf] rounded-lg p-2 flex items-center gap-1 hover:bg-white  hover:text-gray-500 hover:shadow-md">
            <Link href={"/gallery"}>Check out more</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
