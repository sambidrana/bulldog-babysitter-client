import React from "react";
import Link from "next/link";

import FeaturedGallery from "./FeaturedGallery";

const Gallery = () => {
  return (
    <>
      <div className="pt-10 pb-28 bg-gradient-to-r from-[#b1c685] to-[#A9C274]">
        <h2
          id="gallery"
          className="text-2xl md:text-3xl font-serif p-1 text-center mb-4 mr-10 ml-10 tracking-wider text-white border-b-2 "
        >
          Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 p-2 md:pt-8 md:pb-8 md:pl-28 md:pr-28 m items-center justify-items-center mx-auto  ">
          <FeaturedGallery image={"/gallery/g1.jpg"} name={"g1"} />
          <FeaturedGallery image={"/gallery/g2.jpg"} name={"g2"} />
          <FeaturedGallery image={"/gallery/g3.jpeg"} name={"g3"} />
          <FeaturedGallery image={"/gallery/g4.jpg"} name={"g4"} />
          <FeaturedGallery image={"/gallery/g5.jpeg"} name={"g5"} />
          <FeaturedGallery image={"/gallery/g6.jpg"} name={"g6"} />
          <FeaturedGallery image={"/gallery/g7.jpg"} name={"g7"} />
          <FeaturedGallery image={"/gallery/g8.jpeg"} name={"g8"} />
          <FeaturedGallery image={"/gallery/g9.jpeg"} name={"g9"} />
          <FeaturedGallery image={"/gallery/g10.jpeg"} name={"g10"} />
          <FeaturedGallery image={"/gallery/g11.jpg"} name={"g11"} />
          <FeaturedGallery image={"/gallery/g12.jpg"} name={"g12"} />
        </div>

        <div className="flex justify-end mr-20 mt-10 font-extralight tracking-wider">
          <div className=" text-[#386641] text-sm   bg-[#f2e8cf] rounded-lg p-2 flex items-center gap-1 hover:bg-white  hover:text-gray-500 hover:shadow-md">
            <a
              href={"https://www.facebook.com/thebulldogbabysitter/photos"}
              target="_blank"
            >
              Check out more
            </a>
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
