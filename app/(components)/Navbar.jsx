"use client";
import {
  SignIn,
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const { user, isLoaded } = useUser();
  const [navShadow, setNavShadow] = useState(false);
  const pathName = usePathname();

  const handleScroll = () => {
    const offSet = window.scrollY;
    if (offSet > 100) {
      setNavShadow(true);
    } else {
      setNavShadow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => {
      window.removeEventListener("scroll", handleScroll, {passive: true});
    };
  }, []);

  
  const scrollToSection = (section) => {
    scroll.scrollTo(section, {
      smooth: true,
      duration: 500,
    });
  };
  // console.log(user)
  return (
    <nav
      // style={{ position: "relative", zIndex: 1000 }}
      className={`fixed top-0 bg-white w-screen flex justify-between p-6 z-50 ${
        navShadow ? "shadow-md" : ""
      }`}
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
        {pathName === "/" ? (
          <>
            <ScrollLink
              className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm cursor-pointer"
              to="gallery"
              smooth={true}
              duration={1000}
            >
              Gallery
            </ScrollLink>
            <ScrollLink
              className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm cursor-pointer"
              to="testimonials"
              smooth={true}
              duration={1000}
            >
              Testimonial
            </ScrollLink>
          </>
        ) : (
          <>
            <Link
              className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm cursor-pointer"
              href="/#gallery"
            >
              Gallery
            </Link>
            <Link
              className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm cursor-pointer"
              href="/#testimonials"
            >
              Testimonial
            </Link>
          </>
        )}

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
            <UserButton showName="true" afterSignOutUrl="/" />
          </div>
        ) : (
          <SignInButton className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
