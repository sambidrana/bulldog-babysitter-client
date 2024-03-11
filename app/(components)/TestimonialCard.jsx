import Image from "next/image";
import React from "react";

const TestimonialCard = ({ name, image, review }) => {
  console.log(image, review);
  return (
    <div className="relative p-2 ">
      <div className="bg-[#e5e096] p-6 rounded-3xl h-auto text-gray-500 drop-shadow-md">
        "&nbsp;{review}&nbsp;"
      </div>
      <div
        className=" 
            border-l-[30px] border-l-transparent
            border-t-[25px] border-t-[#e5e096]
            border-r-[1px] border-r-transparent absolute left-10 m-0 p-0   
            "
      ></div>
      <div className="mt-10 ml-10 flex items-center gap-2">
        <Image src={image} width={100} height={50} />
        <h3 className="text-gray-600">{name}</h3>
      </div>
    </div>
  );
};

export default TestimonialCard;
