import React from "react";
import Image from "next/image";

const BackgroundImgsTwo = () => {
  return (
    <>
      <div className="absolute z-[-1] top-[0%] right-[10%] ">
        <Image
          src={"/background/bg3.webp"}
          width={50}
          height={50}
          alt="Background Decoration"
          className="opacity-20"
        />
      </div>
      <div className="absolute z-[-1] bottom-[0%] right-[10%] ">
        <Image
          src={"/background/bg4.webp"}
          width={50}
          height={50}
          alt="Background Decoration"
          className="opacity-20"
        />
      </div>
      <div className="absolute z-[-1] bottom-[0%] left-[5%] ">
        <Image
          src={"/background/bg5.webp"}
          width={50}
          height={50}
          alt="Background Decoration"
          className="opacity-20"
        />
      </div>
    </>
  );
};

export default BackgroundImgsTwo;
