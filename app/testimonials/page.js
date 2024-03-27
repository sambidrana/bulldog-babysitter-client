import Image from "next/image";
import React from "react";
import TestimonialCard from "../(components)/TestimonialCard";
import { testimonialObj } from "@/constants/testimonials";
import BackgroundImgs from "../(components)/BackgroundImgs";
import BackgroundImgsTwo from "../(components)/BackgroundImgsTwo";

const TestimonialsPage = () => {
  return (
    <>
      <div>
        <div>
          <div className="grid grid-cols-1 items-center justify-center gap-2 p-12 2xl:p-36 md:grid-cols-2 md:p-36 mt-1 bg-gradient-to-r from-[#c0dc84] to-[#A9C264] md:w-auto min-h-[50vh]">
            <div className="grid items-center justify-center md:w-auto">
              <Image
                src="/testimonial/testimonial3.webp"
                width={500}
                height={500}
                className="border-4 border-white drop-shadow-[2px_15px_5px_rgba(0,0,0,0.5)] 2xl:w-fit"
                alt="Testimonial Image."
              />
            </div>
            <div className="mt-10 text-white">
              <h2 className="mb-4 text-xl md:text-3xl font-serif font-bold tracking-wide">
                Testimonials
              </h2>
              <p className="p-2 md:text-lg font-serif tracking-wide">
                Discover why bulldog owners everywhere trust us for caring,
                reliable, and bulldog-savvy babysitting services.
              </p>
            </div>
          </div>
          <div>
            <div className="relative">
              <BackgroundImgs  />
              <BackgroundImgsTwo />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center p-8 md:pl-28 md:pr-28 ">
                {testimonialObj.map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mr-5 md:mr-20 mt-10 font-extralight tracking-wider mb-10">
          <div className=" text-gray-600 text-sm   bg-[#f2e8cf] rounded-lg p-2 flex items-center gap-1 hover:bg-[#e6d9b8]   hover:shadow-md">
            <a
              href={"https://www.facebook.com/thebulldogbabysitter/reviews"}
              target="_blank"
            >
              Check out more
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
