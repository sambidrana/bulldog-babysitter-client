import React from "react";
import Link from "next/link";
import Image from "next/image";

import FeaturedGallery from "./FeaturedGallery";

const Gallery = () => {
  return (
    <>
      <div className="pb-28 ">
        <div className="grid grid-cols-1 items-center justify-center gap-2 p-12 2xl:p-36 md:grid-cols-2 md:p-24 mt-1 bg-gradient-to-r from-[#c0dc84] to-[#A9C264] md:w-auto min-h-[50vh]">
          <div className="grid items-center justify-center md:w-auto">
            <Image
              src="/gallery/maingallery.jpg"
              width={300}
              height={300}
              alt="Main Gallery Image"
              className="border-4 border-white drop-shadow-[2px_15px_5px_rgba(0,0,0,0.5)] 2xl:w-fit"
              priority
            />
          </div>
          <div className="mt-10 text-white">
            <h2 className="mb-4 text-xl md:text-3xl font-serif font-bold tracking-wide">
              Gallery
            </h2>
            <p className="p-2 md:text-lg font-serif tracking-wide">
              Meet our esteemed guests of honor &ndash; where every tail wag
              tells a story and every bark is a song of joy. Dive into our world
              of paws, play, and a whole lot of fur-flying fun!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 p-4 pt-8 md:pt-8 md:pb-8 md:pl-28 md:pr-28 m items-center justify-items-center mx-auto">
          <FeaturedGallery image={"/gallery/g1.jpg"} name={"g1"} />
          <FeaturedGallery image={"/gallery/g2.jpg"} name={"g2"} />
          <FeaturedGallery image={"/gallery/g3.jpeg"} name={"g3"} />
          <FeaturedGallery image={"/gallery/g4.jpg"} name={"g4"} />
          <FeaturedGallery image={"/gallery/g5.jpg"} name={"g5"} />
          <FeaturedGallery image={"/gallery/g6.jpg"} name={"g6"} />
          <FeaturedGallery image={"/gallery/g7.jpg"} name={"g7"} />
          <FeaturedGallery image={"/gallery/g11.jpg"} name={"g11"} />
          <FeaturedGallery image={"/gallery/g12.jpg"} name={"g12"} />
        </div>

        <div className="flex justify-end mr-5 md:mr-20 mt-10 font-extralight tracking-wider">
          <div className=" text-gray-600 text-sm  bg-[#f2e8cf] rounded-lg p-2 flex items-center gap-1 hover:bg-[#e6d9b8]   hover:shadow-md">
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
