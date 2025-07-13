import React from "react";
import BackgroundImgsTwo from "../../(components)/BackgroundImgsTwo";
import Image from "next/image";
import BackgroundImgsMain from "@/app/(components)/BackgroundImgsMain";

const DaycarePage = () => {
  return (
    <div className="flex items-center justify-center mt-1 min-h-[80vh] bg-gradient-to-r from-[#c0dc84] to-[#A9C264]">
      <BackgroundImgsMain />

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
          <div className="flex items-center justify-center border-b-2 p-2">
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
              Daycare
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
              <strong>Daycare</strong> - We offer daycare from <strong>7:00 AM to 5:45 PM</strong> for just <strong>$50 a day</strong>.
            </li>
            <li className="mb-2">
              <strong>Zoomies guaranteed</strong> – with a fun-filled,
              action-packed day of play!
            </li>
            <li className="mb-2">
              <strong>Tired dogs = good dogs</strong> – we send them home happy
              and pooped.
            </li>
            <li className="mb-2">
              <strong>Brain games + body games</strong> = one seriously
              entertained doggo.
            </li>
            <li className="mb-2">
              <strong>Paw-sitive social vibes</strong> – they’ll make furry and
              human friends galore.
            </li>
            <li className="mb-2">
              <strong>Happier, healthier pups</strong> – because every day is
              full of love and enrichment.
            </li>
            <li className="mb-2">
              <strong>Shy pups bloom</strong> – we help nervous nellies gain
              confidence and wag with pride.
            </li>
            <li className="mb-2">
              <strong>Say bye to chewed shoes</strong> – we keep boredom and bad
              habits at bay.
            </li>
            <li className="mb-2">
              <strong>Less stress, more tail wags</strong> – especially for
              anxious pups missing their humans.
            </li>
            <li className="mb-2">
              <strong>No more guilt trips</strong> – your dog’s out living their
              best life while you’re at work.
            </li>
            <li className="mb-2">
              <strong>Young pups learn the ropes</strong> – doggy manners,
              playtime rules, and body language.
            </li>
            <li className="mb-2">
              <strong>Old dogs, new pep</strong> – senior sweeties stay sharp,
              spry, and socially engaged.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DaycarePage;
