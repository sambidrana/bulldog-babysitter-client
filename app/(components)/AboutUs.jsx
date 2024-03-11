import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 items-center justify-center gap-2 p-12 2xl:p-36 md:grid-cols-2 md:p-24 mt-1 bg-gradient-to-r from-[#c0dc84] to-[#A9C264] md:w-auto min-h-[50vh]">
        <div className="grid items-center justify-center md:w-auto">
            <Image
              src={"/aboutus/aboutus1.jpg"}
              width={500}
              height={500}
              alt="bulldogFamily"
              className="min-w-[300px] border-4 border-white drop-shadow-[2px_15px_5px_rgba(0,0,0,0.5)] 2xl:w-full"
            />
          </div>

          <div className="mt-10 md:p-10 text-white">
            <h2 className="mb-4 text-xl md:text-3xl font-serif font-bold tracking-wide">
              ABOUT US
            </h2>
            <p className="p-2 md:text-lg font-serif tracking-wide">
              Welcome to The Bulldog Babysitter, the ultimate haven for your
              beloved bulldogs! Founded in 2015, we have dedicated ourselves to
              providing specialized care exclusively for bulldogs. We understand
              the unique charm of these stout, wrinkled-faced companions and
              recognize that their distinctive physique and temperament require
              particular attention.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 place-items-center p-10">
          <div className="p-6">
            <h2 className="text-xl md:text-3xl font-serif tracking-wider mb-4 text-[#A9C274]">
              About Bulldog Babysitters
            </h2>
            <p className="text-gray-600 md:text-lg p-2">
              Hi Jacki here, owner and head Frenchie Cuddler. I Started the
              Bulldog Babysitter in 2015 because I was anxious about leaving my
              2 Frenchie's Maximus 9 and Zelda 7 with just anyone and realized
              it was a very stressful decision indeed. Frenchie's are unique and
              have needs that other breeds don't and having two of my own I know
              how to meet those needs.
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
              At The Bulldog Babysitter, we're not just regular dog sitters. Our
              team has undergone specific training to understand the intricacies
              of bulldog care. From their dietary needs to their playful nature,
              we've got it all covered.
            </p>
            <p className="text-gray-600 md:text-lg p-2">
              <span className="font-semibold md:text-xl text-[#A9C274] tracking-wide ">
                Facilities:
              </span>{" "}
              Nestled in [Location], our facility boasts spacious play areas,
              comfortable resting zones, and a health clinic specifically
              tailored for the well-being of bulldogs.
            </p>
            <p className="text-gray-600 md:text-lg p-2">
              <span className="font-semibold md:text-xl text-[#A9C274] tracking-wide ">
                Love & Care:
              </span>{" "}
              Every bulldog that comes through our doors is treated like family.
              Our passionate team ensures that your furry friend receives not
              just the necessities but also an abundance of love and playtime.
            </p>
            <p className="text-gray-600 md:text-lg p-2">
              <span className="font-semibold md:text-xl text-[#A9C274] tracking-wide ">
                {" "}
                Holistic Approach:
              </span>{" "}
              We believe in a holistic approach to care. This includes regular
              exercise, balanced nutrition, social interaction, and even a bit
              of pampering!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
