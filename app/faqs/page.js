import React from "react";
import FAQs from "../(components)/FAQs";
import Image from "next/image";

const FAQsPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 items-center justify-center gap-2 p-8 2xl:p-36 md:grid-cols-2 md:p-24 mt-1 bg-gradient-to-r from-[#c0dc84] to-[#A9C264] md:w-auto min-h-[50vh]">
        <div className="grid items-center justify-center md:w-auto pt-2 md:pt-0">
          <Image
            src="/testimonial/testimonial3.webp"
            alt="Contact Us Image"
            width={500}
            height={500}
            className="border-4 border-white drop-shadow-[2px_15px_5px_rgba(0,0,0,0.5)] max-w-[300px] md:max-w-[550px] 2xl:w-fit"
          />
        </div>
        <div className="mt-10 text-white">
          <h2 className="mb-4 text-xl md:text-3xl font-serif font-bold tracking-wide animate-bounce">
            FAQ's
          </h2>
          <p className="p-2 md:text-lg font-serif tracking-wide">
            Browse our frequently asked questions for swift answers to common
            queries, or
            <span className="animate-pulse  p-2">
              <a href="/contact" className="underline">
                {" "}
                reach out{" "}
              </a>{" "}
            </span>
            for further assistance.
          </p>
        </div>
      </div>
      <div className="bg-gray-100 min-h-[80vh] mt-1 p-8 pt-24 pb-24 md:pl-24 md:pr-24 ">
        <div className="mx-auto">
          <h1 className=" text-xl md:text-3xl font-semibold text-[#A9C264] mb-4">
            More Information
          </h1>
          <p className="text-sm md:text-lg p-2 text-gray-600">
            We are a home based pet sitter for French Bulldogs. We are Fully
            insured and police Checked.
          </p>
        </div>

        <div className="mt-6 p-3 pb-24">
          <FAQs />
        </div>
      </div>
    </>
  );
};

export default FAQsPage;
