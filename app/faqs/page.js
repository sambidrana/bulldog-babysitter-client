import React from "react";
import FAQs from "../(components)/FAQs";

const FAQsPage = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-[80vh] mt-1 p-8 pt-24 pb-24 md:pl-24 md:pr-24 ">
        <div className="mx-auto">
          <h1 className=" text-xl md:text-3xl font-semibold text-gray-700 mb-4">
            More Information
          </h1>
          <p className="text-sm md:text-base p-2 text-gray-600">
            We are a home based pet sitter for French Bulldogs. We are Fully
            insured and police Checked.
          </p>
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
