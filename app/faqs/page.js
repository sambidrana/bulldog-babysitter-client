import React from "react";
import FAQs from "../(components)/FAQs";

const FAQsPage = () => {
  return (
    <>
      <div className="bg-gray-100 mt-1 p-8 pt-24 pb-24 md:pl-24 md:pr-24 ">
        <div className="mx-auto">
          <h1 className=" text-xl md:text-3xl font-semibold text-gray-700 mb-4">
            More Information
          </h1>
          <p className="text-sm md:text-base p-2 text-gray-600">
            We are a home based pet sitter for French Bulldogs. We are Fully
            insured and police Checked.
          </p>

          {/* <div className="flex items-center text-blue-500 hover:text-blue-700 mt-5 ml-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 "
          >
            <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
          </svg>
          <button>Show More</button>
        </div> */}
        </div>

        <div className="mt-6 p-3 pb-24">
          <h1 className="text-xl md:text-3xl font-semibold text-gray-700 mb-10">
            FAQs
          </h1>
          <FAQs />
        </div>
      </div>
    </>
  );
};

export default FAQsPage;
