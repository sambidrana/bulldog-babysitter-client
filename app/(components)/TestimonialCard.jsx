import Image from "next/image";
import React from "react";

const TestimonialCard = ({ name, image, review }) => {
  console.log(image, review);
  return (
    <div className="relative p-2">
      <div className="bg-[#e5e096] p-6 rounded-3xl h-auto text-gray-600 font-serif drop-shadow-md 2xl:w-[420px] ">
        "&nbsp;{review}&nbsp;"
      </div>
      <div
        className=" 
            border-l-[30px] border-l-transparent
            border-t-[25px] border-t-[#e5e096]
            border-r-[1px] border-r-transparent absolute left-10 m-0 p-0   
            "
      ></div>
      <div className="mt-2 pl-2 flex items-center gap-2">
        <Image
          src={image}
          width={180}
          height={180}
          alt={name}
        />
        <h3 className="text-gray-600 font-serif font-bold">{name}</h3>
      </div>
    </div>
  );
};

export default TestimonialCard;
