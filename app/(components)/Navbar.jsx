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
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const { user, isLoaded } = useUser();
  const [navShadow, setNavShadow] = useState(false);
  const pathName = usePathname();
  const [toggleMenu, setToggleMenu] = useState(true);
  const isAdmin =
    user && user.publicMetadata && user.publicMetadata.role === "admin";

  function onToggleMenu() {
    setToggleMenu((prev) => !prev);
  }

  return (
    <>
      <nav className="flex justify-between items-center w-[92%] mx-auto p-1">
        <div className="w-20 md:w-24">
          <a href="/">
            <Image src="/logo/logo2.png" width={200} height={200} />
          </a>
        </div>
        <div
          className={`md:static absolute bg-white md:min-h-fit min-h-[60vh] z-50 left-0 duration-500 md:w-auto w-full flex items-center px-5 ${
            toggleMenu ? "top-[-100%]" : "top-[11%]"
          }`}
        >
          <ul className="flex md:flex-row flex-col md:items-center gap-12 md:gap-[4vw]">
            <li>
              <Link
                className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm"
                href="/booking"
                onClick={onToggleMenu}
              >
                Booking
              </Link>
            </li>
            <li>
              <Link
                className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm cursor-pointer"
                href="/gallery"
                onClick={onToggleMenu}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm cursor-pointer"
                href="/testimonials"
                onClick={onToggleMenu}
              >
                Testimonial
              </Link>
            </li>
            <li>
              <Link
                className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm cursor-pointer"
                href="/contact"
                onClick={onToggleMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm"
                href="/faqs"
                onClick={onToggleMenu}
              >
                FAQ's
              </Link>
            </li>
            <li>
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

