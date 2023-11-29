"use client";
import { SignIn, SignInButton, SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { user, isLoaded } = useUser();
  // console.log(user)
  return (
    <nav
      // style={{ position: "relative", zIndex: 1000 }}
      className=" bg-white flex justify-between  p-6"
    >
      <div className="ml-8">
        <Link className="navLink" href="/">
          Home
        </Link>{" "}
      </div>

      <div className="flex gap-8 mr-8">
        {/* Shoud be the logo */}
        <Link
          className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm"
          href="/booking"
        >
          Booking
        </Link>
        <Link
          className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm"
          href="/gallery"
        >
          Gallery
        </Link>
        <Link
          className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm "
          href="/testimonial"
        >
          Testimonial
        </Link>
        <Link
          className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm"
          href="/faqs"
        >
          FAQ's
        </Link>
        <Link
          className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm"
          href="/about"
        >
          About Us
        </Link>
        {isLoaded && user ? (
          <div className="flex items-center justify-center">
            <UserButton showName="true"  afterSignOutUrl="/"  />
          </div>
        ) : (
          <SignInButton className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2"  />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
