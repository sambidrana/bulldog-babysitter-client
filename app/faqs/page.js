import React from "react";
import FAQs from "../(components)/FAQs";

const FAQsPage = () => {
  return (
    <div className="bg-gray-100 h-screen p-16 pt-24">

      <div className="pt-20 pl-10 pr-10">
        <h1 className="text-4xl font-semibold text-gray-700 mb-10">More Information</h1>
        <p className="ml-5 text-gray-600">
          We are a home based pet sitter for French Bulldogs. We are Fully
          insured and police Checked. Additional information can be added or it
          can be just about FAQ........ Additional information can be added or
          it can be just about FAQ........
        </p>

        <div className="flex items-center text-blue-500 hover:text-blue-700 mt-5 ml-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 "
          >
            <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
          </svg>
          <button>Show More</button>
        </div>
      </div>

      <div className="pt-20 pl-12 pr-12">
        <h1 className="text-4xl font-semibold text-gray-700 mb-10">FAQs</h1>
        <FAQs />
      </div>
    </div>
  );
};

export default FAQsPage;
