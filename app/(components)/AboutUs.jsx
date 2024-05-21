import React from "react";
import Image from "next/image";
import BackgroundImgs from "./BackgroundImgs";
import BackgroundImgsTwo from "./BackgroundImgsTwo";

const AboutUs = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 items-center justify-center gap-2 p-12 2xl:p-36 md:grid-cols-2 md:p-24 mt-1 bg-gradient-to-r from-[#c0dc84] to-[#A9C264] md:w-auto min-h-[50vh]">
          <div className="grid items-center justify-center md:w-auto">
            <Image
              src={"/aboutus/aboutus1.webp"}
              width={500}
              height={500}
              alt="bulldogFamily"
              className="max-w-[270px] md:max-w-[450px]  border-4 border-white drop-shadow-[2px_15px_5px_rgba(0,0,0,0.5)] 2xl:w-full"
            />
          </div>

          <div className="mt-10 md:p-10 text-white">
            <h2 className="mb-4 text-xl md:text-3xl font-serif font-bold tracking-wide animate-bounce">
              ABOUT US
            </h2>
            <p className="text-gray-700 p-2 md:text-lg font-serif tracking-wide">
              Welcome to the bulldog babysitter the ultimate haven for your
              beloved Frenchies.
              <br />
              Founded in 2015 we have dedicated ourselves to providing
              specialized care exclusively for French Bulldogs.
              <br />
              We understand that Frenchies are not your average dogs and we make
              sure to treat them like it’s their second home.
            </p>
          </div>
        </div>
        <div>
          <div className="relative">
            <BackgroundImgs />
            <BackgroundImgsTwo />
            <div className="grid grid-cols-1 place-items-center p-10 w-screen md:h-[100vh]">
              <div className="p-6">
                <h2 className="text-xl md:text-3xl font-serif tracking-wider mb-4 text-[#A9C274]">
                  About Bulldog Babysitters
                </h2>
                <p className="text-gray-600 md:text-lg p-2">
                  Hi Jacki &amp; John, here, owners and devoted Frenchie
                  Cuddlers. We Started the Bulldog Babysitter in 2015 because we
                  were anxious about leaving our 2 Frenchie&#39;s Maximus and
                  Zelda with just anyone and realized it was a very stressful
                  decision indeed. Frenchie&#39;s are unique and have needs that
                  other breeds don&#39;t and having two of my own I know how to
                  meet those needs.
                </p>
              </div>
              <div className="p-6">
                <h2 className="text-xl md:text-3xl tracking-wider mb-6 font-serif text-[#A9C274]">
                  Why choose us?
                </h2>
                <p className="text-gray-600 md:text-lg p-2">
                  <span className="font-semibold md:text-xl text-[#A9C274] tracking-wide ">
                    Expertise:
                  </span>{" "}
                  Expertise: at the Bulldog babysitter we are not just regular
                  sitters, we own Frenchie’s, we know Frenchie’s ad we are part
                  of the French Bulldog community
                </p>
                <p className="text-gray-600 md:text-lg p-2">
                  <span className="font-semibold md:text-xl text-[#A9C274] tracking-wide ">
                    Facilities:
                  </span>{" "}
                  Located in the lovely heart of Narre Warren North, our
                  facility boasts spacious paddocks to run in and a home-based
                  setting where your Frenchy isn’t left outside in a run they
                  sleep on the lounge or dog beds inside our house. 
                </p>
                <p className="text-gray-600 md:text-lg p-2">
                  <span className="font-semibold md:text-xl text-[#A9C274] tracking-wide ">
                    Love & Care:
                  </span>{" "}
                  Every bulldog that comes through our doors is treated like
                  family. Our passionate team ensures that your furry friend
                  receives not just the necessities but also an abundance of
                  love and playtime.
                </p>
                <p className="text-gray-600 md:text-lg p-2">
                  <span className="font-semibold md:text-xl text-[#A9C274] tracking-wide ">
                    {" "}
                    Holistic Approach:
                  </span>{" "}
                  We believe in a holistic approach to care. This includes
                  regular exercise, balanced nutrition, social interaction, and
                  even a bit of pampering!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
