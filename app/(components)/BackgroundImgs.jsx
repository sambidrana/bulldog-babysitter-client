import Image from "next/image";

const BackgroundImgs = () => {
  return (
    <>
      <div className="min-w-[800px] absolute z-[-1] top-[20%] right-[0%]  md:top-[12%] md:right-[10%] ">
        <Image
          src={"/gallery/pawsbackground.webp"}
          width={1200}
          height={1024}
          alt="Paws"
          className="opacity-10 over p-0 m-0"
        />
      </div>
      <div className="absolute z-[-1] top-[0%] right-[5%]">
        <Image
          src={"/background/bg1.webp"}
          width={250}
          height={150}
          alt="Background Decoration"
          className="opacity-50"
        />
      </div>
      <div className="absolute z-[-1] top-[60%] left-[1%]">
        <Image
          src={"/background/bg2.webp"}
          width={50}
          height={50}
          alt="Background Decoration"
          className="opacity-20"
        />
      </div>
      
    </>
  );
};

export default BackgroundImgs;
