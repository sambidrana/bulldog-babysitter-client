import React from "react";
import BackgroundImgsTwo from "../../(components)/BackgroundImgsTwo";
import Image from "next/image";

const BoardingFeePage = () => {
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
        <div className="flex flex-col md:min-w-[550px] md:max-w-[700px] items-center tracking-wide  bg-yellow-50 p-1 rounded-md drop-shadow-lg text-gray-600">
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
            <h1 className=" mt-4 text-lg md:text-2xl font-serif font-bold tracking-wider animate-bounce ">
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

          <ul className="list-disc p-10 text-sm md:text-lg ">
            <li className="mb-2">
              For a 24-hour period, we charge <strong>$70</strong> per dog per
              night. For instance, if you drop off your dog at{" "}
              <strong>11 am</strong>, the pick-up time would be{" "}
              <strong>11 am</strong> the following day.
            </li>
            <li className="mb-2">
              If you arrive for pick-up later than the designated time (with a
              grace period of <strong>1 hour</strong>), a half-day rate of{" "}
              <strong>$35</strong> per dog will be applied.
            </li>
            <li className="mb-2">
              After <strong>4 hours</strong> beyond the designated pick-up time,
              a day-care rate of <strong>$50</strong> per day will be applied.
            </li>
            <li className="mb-2">
              Additionally, we offer day-care services charged at a rate of{" "}
              <strong>$50</strong> per day.
            </li>
            <li className="mb-2">
              Our facility is open for drop-offs and pick-ups between{" "}
              <strong>6:30 am</strong> and <strong>6 pm</strong>.
            </li>
            <li className="mb-2">
              Should your flight arrive at 4 pm or later, with Melbourne&apos;s
              terrible traffic woes, reaching our location before the 6 pm
              cutoff time would be a miracle.
            </li>
            <li className="list-inside list-dash mb-1">
              In such cases, pet pick-up will be scheduled for the following
              day.
            </li>
            <li className="list-inside list-dash mb-1">
              Kindly be aware that any additional fees incurred will be your
              responsibility.
            </li>
            <li className="list-inside list-dash mb-1">
              Moreover, pick-up times will revert to the originally designated
              time of drop-off.
            </li>
            <li className="list-inside list-dash mb-2">
              Adhering to our set cutoff time is essential as we allocate time
              to properly feed and exercise all our guests.
            </li>

            <li className="mb-2">
              All dogs aged one year or older are required to be spayed or
              neutered.
            </li>
            <li className="mb-2">
              A minimum stay of <strong>2 nights</strong> is mandatory.
            </li>
            <li className="mb-2">
              Please note that drop-offs on <strong>Christmas Day</strong> are
              not accepted.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BoardingFeePage;
