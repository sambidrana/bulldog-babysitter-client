import React from "react";
import Image from "next/image";

const BackgroundImgsMain = () => {
  return (
    <>
      <div className="absolute z-[-1] md:z-[1] md:top-[20%] md:right-[10%] ">
        <Image
          src={"/background/bg3.webp"}
          width={150}
          height={150}
          alt="Background Decoration"
          className="opacity-20"
        />
      </div>
      <div className="absolute z-[-1] md:z-[1] md:bottom-[0%] md:right-[10%] ">
        <Image
          src={"/background/bg4.webp"}
          width={150}
          height={150}
          alt="Background Decoration"
          className="opacity-20"
        />
      </div>
      <div className="absolute z-[-1] md:z-[1] md:bottom-[0%] md:left-[5%] ">
        <Image
          src={"/background/bg5.webp"}
          width={150}
          height={150}
          alt="Background Decoration"
          className="opacity-20"
        />
      </div>

      
    </>
  );
};

export default BackgroundImgsMain;
