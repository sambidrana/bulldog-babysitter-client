"use client";
import React, { useState } from "react";

const FAQs = () => {
  const [showInfo, setShowInfo] = useState(false);

  const showHidden = () => {
    return setShowInfo((prev) => !prev);
  };
  return (
    <div className="border-dotted border-b-2 border-sky-300">
      <div className="flex items-center p-2 justify-between text-blue-400">
        <h3 className="">Regarding payment</h3>

        <button onClick={showHidden}>
          {!showInfo ? (
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

      <p className={showInfo ? "block p-2" : "hidden"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        blanditiis earum, consectetur ipsum ad quos doloremque! Harum expedita
        cumque asperiores ullam aliquid aspernatur vitae dicta, illo iusto unde
        eligendi quibusdam consequatur aperiam, repellendus aliquam voluptatem
        vel placeat ex nulla temporibus libero maxime! Quod, minus consequatur
        harum sit architecto saepe modi!
      </p>
    </div>
  );
};

export default FAQs;
