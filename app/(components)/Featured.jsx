import Link from "next/link";
import React from "react";
import Image from "next/image";
const Featured = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute z-[-1] top-[2%] right-[10%]">
          <Image
            src={"/background/bg3.webp"}
            width={50}
            height={50}
            alt="Background Decoration"
            className="opacity-50"
          />
        </div>
        <div className="absolute z-[-1] top-[2%] left-[20%]">
          <Image
            src={"/background/bg2.webp"}
            width={50}
            height={50}
            alt="Background Decoration"
            className="opacity-30"
          />
        </div>
        <div className="absolute z-[-1] top-[2%] right-[10%]">
          <Image
            src={"/background/bg1.webp"}
            width={550}
            height={550}
            alt="Background Decoration"
            className="opacity-50"
          />
        </div>
        <div className="absolute z-[-1] top-[40%] right-[10%] ">
          <Image
            src={"/background/bg1.webp"}
            width={550}
            height={550}
            alt="Background Decoration"
            className="opacity-50 "
          />
        </div>
        <div className="absolute z-[-1] top-[8%] right-[25%] ">
          <Image
            src={"/background/bg6.webp"}
            width={50}
            height={50}
            alt="Background Decoration"
            className="opacity-50"
          />
        </div>
        {/* <BackgroundImgs /> */}
        <div className="flex justify-center items-center min-h-[70vh] md:min-h-[90vh]">
          <div className="w-full max-w-screen flex flex-col justify-between min-h-[40vh]">
            {/* Heading for video */}
            <div className="bg-gradient-to-r from-[#c0dc84] to-[#A9C264] p-3 text-white text-sm md:text-base">
              <div className="flex items-center justify-center">
                <div>
                  <Image
                    src={"/background/bgFeatured.webp"}
                    width={30}
                    height={20}
                    alt="Background Decoration"
                    className="mr-10"
                  />
                </div>
                <p className="font-serif tracking-widest animate-bounce">
                  The Bulldog Babysitter
                </p>
                <div>
                  <Image
                    src={"/background/bgFeatured.webp"}
                    width={30}
                    height={20}
                    alt="Background Decoration"
                    className="ml-10 "
                  />
                </div>
              </div>
            </div>
            {/* Video */}
            <div
              className="flex-grow flex justify-center items-center "
              style={{
                position: "relative",
                paddingBottom: "35.25%",
                // paddingTop: "50.25%",
                height: 0,
                overflow: "hidden",
              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                src="https://www.youtube-nocookie.com/embed/Zu7FBqEcNNQ?si=ffALGUKRIC_1APop&amp;controls=0&amp;start=1&amp;autoplay=1&amp;showinfo=0&amp;loop=1&amp;mute=1" 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/* Footer for video */}
            <div className="bg-gradient-to-r from-[#c0dc84] to-[#A9C264] p-2 md:p-3 flex justify-end items-center">
              <Link
                href={"/boarding"}
                className="font-serif tracking-wide px-2 md:px-4 text-white hover:underline text-sm md:text-base"
              >
                Haven&apos;t boarded? Click here to start the boarding process.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;

{/* 1gb

<iframe
  width="560"
  height="315"
  src="https://www.youtube-nocookie.com/embed/Zu7FBqEcNNQ?si=ffALGUKRIC_1APop?autoplay=1&controls=0&start=1&showinfo=0&loop=1&mute=1"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>; 

*/}


{/* <div
className="flex-grow flex justify-center items-center "
style={{
  position: "relative",
  paddingBottom: "35.25%",
  // paddingTop: "35.25%",
  height: 0,
  overflow: "hidden",
}}
>
<iframe
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  }}
  src="https://www.youtube-nocookie.com/embed/VKXt9sPGBJM?autoplay=1&controls=0&start=1&showinfo=0&loop=1&mute=1"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
</div> */}