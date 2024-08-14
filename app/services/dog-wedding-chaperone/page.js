import React from "react";
import BackgroundImgsTwo from "../../(components)/BackgroundImgsTwo";
import Image from "next/image";
import BackgroundImgsMain from "@/app/(components)/BackgroundImgsMain";

const WeddingChaperonePage = () => {
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
        <div className="flex flex-col md:min-w-[550px] md:max-w-[900px] items-center tracking-wide  bg-yellow-50 p-1 rounded-md drop-shadow-lg text-gray-600">
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
            <h1 className="text-center mt-6 text-lg md:text-2xl font-serif font-bold tracking-wider animate-bounce">
              Dog Wedding Chaperone
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

          <p className="mt-4 p-4 text-sm md:text-lg">
            Dog wedding chaperone services are specialized offerings for pet
            owners who want their furry friends to be part of their big day.
            These services ensure that dogs are well-cared for and appropriately
            managed during wedding ceremonies and receptions. Here&apos;s a breakdown
            of what such services typically include and why they might be
            appealing:
          </p>

          <ul className="list-disc pl-10 pr-10 pt-5 pb-6 text-sm md:text-lg">
            <li className="mb-2">
              <strong>Pre-Wedding Consultation:</strong>
              <ul className="list-disc ml-5 mb-2">
                <li className="mt-1 mb-1.5 list-dash">
                  Meeting with the couple to understand their dog&apos;s needs,
                  temperament, and role in the wedding.
                </li>
                <li className="list-dash">
                  Planning logistics like timing, location, and any special
                  requirements for the dog.
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>Day-of Chaperoning:</strong>
              <ul className="list-disc ml-5 mb-2">
                <li className="mt-1 mb-1.5 list-dash">
                  Transporting the dog to and from the wedding venue.
                </li>
                <li className=" mb-1.5 list-dash">
                  Ensuring the dog is comfortable, safe, and well-behaved during
                  the ceremony and reception.
                </li>
                <li className="list-dash">
                  Handling the dog during photo sessions, walks down the aisle,
                  or any other specific roles.
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>Care and Comfort:</strong>
              <ul className="list-disc ml-5 mb-2">
                <li className="mt-1 mb-1.5 list-dash">
                  Providing food, water, and toilet breaks.
                </li>
                <li className="mb-1.5 list-dash">
                  Offering comfort items like toys or blankets.
                </li>
                <li className="list-dash">
                  Managing any anxiety or stress the dog may experience in the
                  busy environment.
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>Outfit Assistance:</strong>
              <ul className="list-disc ml-5 mb-2">
                <li className="mt-1 mb-1.5 list-dash">
                  Helping the dog wear any special attire, like tuxedos, bow
                  ties, or floral collars.
                </li>
                <li className="list-dash">
                  Ensuring the dog&apos;s outfit is comfortable and suitable for the
                  weather and setting.
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>Emergency Care:</strong>
              <ul className="list-disc ml-5 mb-2">
                <li className="mt-1 mb-1.5 list-dash">
                  Being prepared with a pet first aid kit.
                </li>
                <li className="list-dash">
                  Knowing local veterinarians in case of any emergencies.
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>
                Coordination with Wedding Planners and Photographers:
              </strong>
              <ul className="list-disc ml-5 mb-2">
                <li className="mt-1 mb-1.5 list-dash">
                  Ensuring smooth integration of the dog into the wedding
                  schedule.
                </li>
                <li className="list-dash">
                  Assisting photographers in capturing beautiful moments with
                  the dog.
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>Post-Wedding Services:</strong>
              <ul className="list-disc ml-5 mb-2">
                <li className="mt-1 mb-1.5 list-dash">
                  Taking the dog home or to our boarding facility.
                </li>
                <li className="list-dash">
                  Providing a report or photos to the couple detailing the dog&apos;s
                  day.
                </li>
              </ul>
            </li>
          </ul>
          <h2 className="text-center mt-6 text-sm md:text-lg font-serif font-bold tracking-wide animate-pulse ">
            Why People Use Dog Wedding Chaperone Services
          </h2>
          <ul className="list-disc pl-10 pr-10 pt-5 pb-5 text-sm md:text-lg">
            <li className="mb-2">
              Peace of Mind: Couples can focus on their special day knowing
              their pet is in good hands.
            </li>
            <li className="mb-2">
              Professional Care: Trained professionals understand canine
              behavior and can manage any situations that arise.
            </li>
            <li className="mb-2">
              Inclusion of Pets: Many couples consider their dogs part of the
              family and want them involved in the wedding.
            </li>
            <li className="mb-2">
              Safety: Ensuring the dog is safe and not overwhelmed by the
              event&apos;s noise and activity.
            </li>
            <li className="mb-2">
              Convenience: The couple, family, and friends are freed from the
              responsibility.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeddingChaperonePage;
