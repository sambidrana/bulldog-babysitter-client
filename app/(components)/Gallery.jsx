import React from "react";
import Link from "next/link";

import FeaturedGallery from "./FeaturedGallery";

const Gallery = () => {
  return (
    <>
      <div className="pt-24 pb-24 w-screen bg-gradient-to-r from-lime-100 to-[#A9C274] ">
        <div className="flex items-center justify-center gap-10 ">
          <FeaturedGallery image={"/gallery/gal1.png"} name={"gal1"} />
          <FeaturedGallery image={"/gallery/gal2.png"} name={"gal2"} />
          <FeaturedGallery image={"/gallery/gal3.png"} name={"gal3"} />
          <FeaturedGallery image={"/gallery/gal1.png"} name={"gal1"} />
        </div>
        <div className="flex justify-end pr-10 pt-10">
          <Link className="bg-[#8FAEFD] text-white font-bold py-2 px-8 rounded-lg hover:bg-[#6d95fa]" href={"/gallery"}>Check out more</Link>
        </div>
      </div>
    </>
  );
};

export default Gallery;
