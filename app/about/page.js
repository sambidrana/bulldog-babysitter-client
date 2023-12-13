import Navbar from "@/app/(components)/Navbar";
import Image from "next/image";
import React from "react";
import Footer from "../(components)/Footer";

const page = () => {
  return (
    <>
      <div className="min-h-screen pt-24">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2 bg-gradient-to-r from-lime-200 via-[#c3e281] to-[#A9C274] pt-32 pr-28 pl-16 pb-36 rounded-lg box shadow-lg">
          <Image
            src={"/aboutus/bulldogFamily1 1.png"}
            width={800}
            height={800}
            alt="bulldogFamily"
            className="shadow-2xl bg-[#e8dbbb]"
          />
          <div className="pl-14 pt-10">
            <h1 className="text-white text-3xl mb-8 mt-4 font-serif font-bold tracking-wide">
              ABOUT US
            </h1>
            <p className="pr-6 font-serif text-gray-600 text-lg">
              Hi Jacki here, owner and head Frenchie Cuddler. I Started the
              Bulldog Babysitter in 2015 because I was anxious about leaving my
              2 Frenchie's Maximus 9 and Zelda 7 with just anyone and realized
              it was a very stressful decision indeed. Frenchie's are unique and
              have needs that other breeds don't and having two of my own I know
              how to meet those needs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 place-items-center mt-8 p-10 min-h-screen ">
          <div className="p-10">
            <h2 className="text-3xl tracking-wider mb-6">
              About Bulldog Babysitters
            </h2>
            <p className="text-gray-600 text-lg">
              Welcome to The Bulldog Babysitter, the ultimate haven for your
              beloved bulldogs! Founded in 2015, we have dedicated ourselves
              to providing specialized care exclusively for bulldogs. We
              understand the unique charm of these stout, wrinkled-faced
              companions and recognize that their distinctive physique and
              temperament require particular attention.
            </p>
          </div>
          <div className="p-10">
            <h2 className="text-3xl tracking-wider mb-6">Why choose us?</h2>
            <p className="mb-2 text-gray-600 text-lg">
              Expertise: At The Bulldog Babysitter, we're not just regular dog
              sitters. Our team has undergone specific training to understand
              the intricacies of bulldog care. From their dietary needs to their
              playful nature, we've got it all covered.{" "}
            </p>
            <p className="mb-2 text-gray-600 text-lg">
              Facilities: Nestled in [Location], our facility boasts spacious
              play areas, comfortable resting zones, and a health clinic
              specifically tailored for the well-being of bulldogs.{" "}
            </p>
            <p className="mb-2 text-gray-600 text-lg">
              Love & Care: Every bulldog that comes through our doors is treated
              like family. Our passionate team ensures that your furry friend
              receives not just the necessities but also an abundance of love
              and playtime.{" "}
            </p>
            <p className="text-gray-600 text-lg">
              {" "}
              Holistic Approach: We believe in a holistic approach to care. This
              includes regular exercise, balanced nutrition, social interaction,
              and even a bit of pampering!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
