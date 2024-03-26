import Image from "next/image";

const BackgroundImgs = ({top}) => {
  console.log(top)
  return (
    <>
      <div className="absolute z-[-1] top-[85%] right-[23%] md:right-[1%] md:top-[15%] w-screen">
        <Image
          src={"/gallery/pawsbackground.webp"}
          width={1792}
          height={1024}
          alt="Paws"
          className="opacity-10"
        />
      </div>
      <div className="absolute z-[-1] top-[0%] left-[50%] w-screen">
        <Image
          src={"/background/bg1.webp"}
          width={250}
          height={250}
          alt="Background Decoration"
          className="opacity-50"
        />
      </div>
    </>
  );
};

export default BackgroundImgs;
