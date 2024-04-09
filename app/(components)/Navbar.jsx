"use client";
import {
  auth,
  SignIn,
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const { user, isLoaded } = useUser();
  const pathName = usePathname();

  const [toggleMenu, setToggleMenu] = useState(true);
  const isAdmin =
    user && user.publicMetadata && user.publicMetadata.role === "admin";

  function onToggleMenu() {
    setToggleMenu((prev) => !prev);
  }

  // const activeLink = {pathName}

  return (
    <>
      {/* <nav className="flex justify-between items-center w-[92%] mx-auto pt-4 pb-6"> */}
      <nav className="flex justify-between w-[92%] mx-auto pt-5 pb-6 md:pt-10 md:pb-5">
        <div className="relative bottom-3 right-1  md:bottom-7 md:right-7 md:w-24">
          <div className="absolute w-20 md:w-32">
            <a href="/">
              <Image
                src="/logo/logo1.png"
                className="rounded-full"
                width={200}
                height={200}
                alt="Logo"
                priority
              />
            </a>
          </div>
        </div>
        <div
          className={`md:static absolute border-b-2 md:border-b-0 bg-white md:min-h-fit min-h-[60vh] z-50 left-0 duration-500 md:w-auto w-full flex items-center px-5 ${
            toggleMenu ? "top-[-100%]" : "top-[11%]"
          }`}
        >
          <ul className="flex md:flex-row flex-col md:items-center gap-10 md:gap-[3vw] font-serif text-black">
            {/* <li className={pathName === "/" ? "text-[#A9C274]" : "text-black"}>
              <Link
                className="tracking-wide transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm"
                href="/"
                onClick={onToggleMenu}
              >
                Home
              </Link>
            </li> */}
            <li
              className={
                pathName === "/booking" ? "text-[#A9C274]" : "text-black"
              }
            >
              <Link
                className="tracking-wide transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm"
                href="/booking"
                onClick={onToggleMenu}
              >
                Booking
              </Link>
            </li>
            <li
              className={
                pathName === "/gallery" ? "text-[#A9C274]" : "text-black"
              }
            >
              <Link
                className="tracking-wide transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm cursor-pointer"
                href="/gallery"
                onClick={onToggleMenu}
              >
                Gallery
              </Link>
            </li>
            <li
              className={
                pathName === "/testimonials" ? "text-[#A9C274]" : "text-black"
              }
            >
              <Link
                className="tracking-wide transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm cursor-pointer"
                href="/testimonials"
                onClick={onToggleMenu}
              >
                Testimonial
              </Link>
            </li>
            <li
              className={
                pathName === "/services" ? "text-[#A9C274]" : "text-black"
              }
            >
              <Link
                className="tracking-wide transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm cursor-pointer"
                href="/services"
                onClick={onToggleMenu}
              >
                Services
              </Link>
            </li>
            <li
              className={
                pathName === "/contact" ? "text-[#A9C274]" : "text-black"
              }
            >
              <Link
                className="tracking-wide transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm cursor-pointer"
                href="/contact"
                onClick={onToggleMenu}
              >
                Contact
              </Link>
            </li>
            <li
              className={pathName === "/faqs" ? "text-[#A9C274]" : "text-black"}
            >
              <Link
                className="tracking-wide transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm"
                href="/faqs"
                onClick={onToggleMenu}
              >
                FAQ&apos;s
              </Link>
            </li>
            <li
              className={
                pathName === "/about" ? "text-[#A9C274]" : "text-black"
              }
            >
              <Link
                className="flex transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm"
                href="/about"
                onClick={onToggleMenu}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-10">
          {isLoaded && user ? (
            <div className="flex items-center justify-center">
              <UserButton showName="true" afterSignOutUrl="/" />
            </div>
          ) : (
            <SignInButton className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2" />
          )}
          <button className="md:hidden" onClick={onToggleMenu}>
            {toggleMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
