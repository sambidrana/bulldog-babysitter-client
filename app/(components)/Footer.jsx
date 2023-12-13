import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

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
            <FaFacebook size={30} color="#1877f2" />
          </a>
          <a
            className="p-2"
            href={"https://www.instagram.com/thebulldogbabysitter/?hl=en"}
            target="_blank"
          >
            <FaInstagram size={30} color="#605b44" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
