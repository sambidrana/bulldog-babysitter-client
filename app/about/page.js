import Navbar from "@/app/(components)/Navbar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="mt-10 mb-10">
        <div className="bg-gray-100 pr-28 pl-28 mr-24 ml-24 rounded-lg box shadow-lg">
          <h1 className="text-3xl font-semibold p-2 flex justify-end">ABOUT US</h1>
          <Image
            src={"/aboutus/bulldogFamily1 1.png"}
            width={1000}
            height={1000}
            alt="bulldogFamily"
          />

        </div>

        <div className="grid grid-cols-2 gap-5 place-items-center mt-8 p-10 ">
          <div className="p-10">
            <h2 className="text-2xl tracking-wider mb-6">
              About Bulldog Babysitters
            </h2>
            <p className="">
              Welcome to The Bulldog Babysitter, the ultimate haven for your
              beloved bulldogs! Founded in [Year], we have dedicated ourselves
              to providing specialized care exclusively for bulldogs. We
              understand the unique charm of these stout, wrinkled-faced
              companions and recognize that their distinctive physique and
              temperament require particular attention.
            </p>
          </div>
          <div className="p-10">
            <h2 className="text-2xl tracking-wider mb-6">Why choose us?</h2>
            <p className="mb-2">
              Expertise: At The Bulldog Babysitter, we're not just regular dog
              sitters. Our team has undergone specific training to understand
              the intricacies of bulldog care. From their dietary needs to their
              playful nature, we've got it all covered.{" "}
            </p>
            <p className="mb-2">
              Facilities: Nestled in [Location], our facility boasts spacious
              play areas, comfortable resting zones, and a health clinic
              specifically tailored for the well-being of bulldogs.{" "}
            </p>
            <p className="mb-2">
              Love & Care: Every bulldog that comes through our doors is treated
              like family. Our passionate team ensures that your furry friend
              receives not just the necessities but also an abundance of love
              and playtime.{" "}
            </p>
            <p >
              {" "}
              Holistic Approach: We believe in a holistic approach to care. This
              includes regular exercise, balanced nutrition, social interaction,
              and even a bit of pampering!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
