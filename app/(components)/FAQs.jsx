"use client";
import React, { useState } from "react";
import { faqObj } from "@/constants/faqs";

const FAQs = () => {
  const [visibleSections, setVisibleSections] = useState(
    Array(faqObj.length).fill(false)
  );

  const toggleVisibility = (index) => {
    setVisibleSections((prev) => {
      const updatedVisibility = [...prev];
      updatedVisibility[index] = !updatedVisibility[index];
      return updatedVisibility;
    });
  };
  return (
    <>
      {faqObj.map((obj, index) => (
        // <div key={index} className="border-dotted border-b-2 border-sky-300">
        <div key={index} className="border-dotted border-b-2 border-[#a0b95d]">
          {/* <div className="flex items-center p-2 justify-between text-blue-500"> */}
          <div className="flex items-center p-2 justify-between text-[#a0b95d]">
            <h3 className="font-semibold md:text-xl text-base tracking-wide">
              {obj.heading}
            </h3>

            <button onClick={() => toggleVisibility(index)}>
              {!visibleSections[index] ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 "
                >
                  <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" />
                </svg>
              )}
            </button>
          </div>

          <div className={visibleSections[index] ? "block md:p-2" : "hidden"}>
            {obj.answers.map((answer, index) => (
              <ul key={index} className="ml-8 text-sm md:text-lg">
                <li
                  key={index}
                  className="p-2 tracking-wide text-gray-700 list-disc"
                >
                  {answer}
                </li>
              </ul>
            ))}
            {obj?.subPoints?.map((sub, index) => (
              <ul key={index} className="ml-16 text-sm md:text-base">
                <li className=" p-1 tracking-wide text-gray-700 list-disc">
                  {sub}
                </li>
              </ul>
            ))}
            {obj?.note?.map((note, index) => (
              <ul key={index} className="text-sm md:text-base">
                <li className=" p-2 tracking-wide text-red-600">{note}</li>
              </ul>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default FAQs;
