import React from "react";
import BackgroundImgsTwo from "../(components)/BackgroundImgsTwo";
import Image from "next/image";

const ServicePage = () => {
  return (
    <div className="flex items-center justify-center mt-1 min-h-[80vh] bg-gradient-to-r from-[#c0dc84] to-[#A9C264]">
      <div className="relative mt-4 p-8 md:pt-16 md:pb-16 md:pl-64 md:pr-64  ">
        <div className="absolute md:bottom-3 md:right-14">
          <Image
            src={"/services/sv1.webp"}
            alt="Bruno"
            width={250}
            height={250}
          />
        </div>
        <div className="flex flex-col items-center tracking-wide  bg-yellow-50 p-1 rounded-md drop-shadow-lg text-gray-600">
          <BackgroundImgsTwo />
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
            <h1 className="mt-4 text-lg md:text-2xl font-serif font-bold tracking-wider animate-bounce ">
              Boarding Fees
            </h1>
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

          <ul className="list-disc p-10 text-base md:text-lg">
            <li className="mb-2">
              For a 24-hour period, we charge $70 per dog per night. For
              instance, if you drop off your dog at 11 am, the pick-up time
              would be 11 am the following day.,
            </li>
            <li className="mb-2">
              If you arrive for pick-up later than the designated time (with a
              grace period of 1 hour), a half-day rate of $35 per dog will be
              applied.
            </li>
            <li className="mb-2">
              After 4 hours beyond the designated pick-up time, a day-care rate
              of $50 per day will be applied.
            </li>
            <li className="mb-2">
              Additionally, we offer day-care services charged at a rate of $50
              per day.
            </li>
            <li className="mb-2">
              Our facility is open for drop-offs and pick-ups between 6:30 am
              and 6 pm.
            </li>
            <li className="mb-2">
              All dogs aged one year or older are required to be spayed or
              neutered.
            </li>
            <li className="mb-2">A minimum stay of 2 nights is mandatory.</li>
            <li className="mb-2">
              Please note that drop-offs on Christmas Day are not accepted.
            </li>
            <li className="mb-2">
              Should your flight arrive at 4 pm or later, with Melbourne’s
              terrible traffic woes, reaching our location before the 6 pm
              cutoff time would be a miracle.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
