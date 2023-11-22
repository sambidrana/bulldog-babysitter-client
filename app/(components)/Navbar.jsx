import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav style={{ position: "relative", zIndex: 1000 }} className=" bg-white flex justify-between w-screen h-20 p-6" >
      <div className="ml-8">
        <Link className="navLink" href="/">
          Home
        </Link>{" "}
      </div>

      <div className="flex gap-8 mr-8">
        {/* Shoud be the logo */}
        <Link
          className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2"
          href="/booking"
        >
          Booking
        </Link>
        <Link
          className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2"
          href="/gallery"
        >
          Gallery
        </Link>
        <Link
          className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 "
          href="/testimonial"
        >
          Testimonial
        </Link>
        <Link
          className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2"
          href="/faq"
        >
          FAQ's
        </Link>
        <Link
          className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2"
          href="/about"
        >
          About Us
        </Link>
        <Link
          className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2"
          href="/signin"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
