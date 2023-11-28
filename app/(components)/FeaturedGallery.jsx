import Image from "next/image";
import React from "react";

const FeaturedGallery = (props) => {
  return (
    <>
      <div className="transition-transform hover:scale-110">
        <Image src={props.image} width={250} height={250} alt={props.name} />
      </div>
     
    </>
  );
};

export default FeaturedGallery;
