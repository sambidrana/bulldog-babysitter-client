"use client";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <>
      <div
        className={`flex justify-between items-center p-8 bg-white  ${
          pathname === "/" ? "" : "border-t-2"
        } `}

      >
        <div className="ml-4">
        <p className="text-xs">Website design by <a className="font-serif text-green-600" href="https://sambid-portfolio-website.vercel.app/" target="_blank" rel="noopener noreferrer">Sambid Rana</a></p>
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
