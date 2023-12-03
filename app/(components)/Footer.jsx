import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#a9c274] flex justify-between items-center p-8">
        <div className="ml-4">
          <h4>The Bulldog Babysitter</h4>
        </div>
        <div className="flex justify-around mr-4">
          <a
            className="p-2"
            href={"https://www.facebook.com/thebulldogbabysitter/"}
            target="_blank"
          >
            FB
          </a>
          <a
          className="p-2"
            href={"https://www.instagram.com/thebulldogbabysitter/?hl=en"}
            target="_blank"
          >
            Insta
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
