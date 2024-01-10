import Image from "next/image";
import React from "react";

const FeaturedGallery = (props) => {
  return (
    <>
      <div className="p-2 transition-transform hover:scale-110 hover:drop-shadow-[0px_10px_10px_rgba(0,0,0,0.9)] ">
        <Image src={props.image} width={250} height={250} alt={props.name} />
      </div>
     
    </>
  );
};

export default FeaturedGallery;
