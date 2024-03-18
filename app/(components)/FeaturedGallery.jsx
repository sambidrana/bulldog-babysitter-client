import Image from "next/image";
import React from "react";

const FeaturedGallery = (props) => {
  return (
    <>
      <div className="customImgWrapper border-2 border-[#e7c9bf]  transition-transform hover:scale-105 hover:drop-shadow-[0px_10px_10px_rgba(0,0,0,0.9)] p-1 bg-white">
        <Image
          className="rounded-lg h-auto w-auto max-h-[250px] max-w-[400px]"
          src={props.image}
          width={500}
          height={250}
          alt={props.name}
        />
      </div>
    </>
  );
};

export default FeaturedGallery;
