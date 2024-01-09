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
  const [toggleMenu, setToggleMenu] = useState(true);
  const openMenu = "top-[9%]";

  const handleScroll = () => {
    const offSet = window.scrollY;
    if (offSet > 100) {
      setNavShadow(true);
    } else {
      setNavShadow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, []);

  // const scrollToSection = (section) => {
  //   scroll.scrollTo(section, {
  //     smooth: true,
  //     duration: 500,
  //   });
  // };
  // console.log(user)

  function onToggleMenu() {
    setToggleMenu((prev) => !prev);
  }
  return (
    <>
      <nav className="flex justify-between items-center w-[92%] mx-auto md:pt-4">
        <div>
          <Link className="navLink" href="/">
            Home
          </Link>
        </div>
        <div
          className={`md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 duration-500 md:w-auto w-full flex items-center px-5 ${
            toggleMenu ? "top-[-100%]" : "top-[9%]"
          }`}
        >
          <ul className="flex md:flex-row flex-col md:items-center gap-12 md:gap-[4vw]">
            <li>
              <Link
                className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm"
                href="/booking"
              >
                Booking
              </Link>
            </li>
            <li>
              <Link
                className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm cursor-pointer"
                href="/gallery"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm cursor-pointer"
                href="/testimonials"
              >
                Testimonial
              </Link>
            </li>
            <li>
              <Link
                className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm cursor-pointer"
                href="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm"
                href="/faqs"
              >
                FAQ's
              </Link>
            </li>
            <li>
              <Link
                className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm"
                href="/about"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
            Sign IN
          </button>
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

    //first
    // <nav>
    //<div className="flex flex-col p-2 bg-white">
    // <div className="flex justify-between">
    // <div className="w-16">Logo </div>
    //<div>Menu Button</div>
    //</div>
    //<div>Links</div>
    //</div>
    //</nav>
    //second

    // <nav
    //   className={` bg-white w-screen flex justify-between p-6 z-50 ${
    //     // fixed top-0
    //     navShadow ? "shadow-md" : ""
    //   }`}
    // >
    //   <div className="ml-8">
    //     <Link className="navLink" href="/">
    //       Home
    //     </Link>{" "}
    //   </div>

    //   <div className="flex gap-8 mr-8">
    //     <Link
    //       className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm"
    //       href="/booking"
    //     >
    //       Booking
    //     </Link>

    //     <Link
    //       className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm cursor-pointer"
    //       href="/gallery"
    //     >
    //       Gallery
    //     </Link>
    //     <Link
    //       className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm cursor-pointer"
    //       href="/testimonials"
    //     >
    //       Testimonial
    //     </Link>
    //     <Link
    //       className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm cursor-pointer"
    //       href="/contact"
    //     >
    //       Contact
    //     </Link>

    //     <Link
    //       className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm"
    //       href="/faqs"
    //     >
    //       FAQ's
    //     </Link>
    //     <Link
    //       className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm"
    //       href="/about"
    //     >
    //       About Us
    //     </Link>
    //     {isLoaded && user ? (
    //       <div className="flex items-center justify-center">
    //         <UserButton showName="true" afterSignOutUrl="/" />
    //       </div>
    //     ) : (
    //       <SignInButton className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2" />
    //     )}
    //   </div>
    // </nav>
  );
};

export default Navbar;

{
  // <nav
  //     // style={{ position: "relative", zIndex: 1000 }}
  //     className={` bg-white w-screen flex justify-between p-6 z-50 ${
  //       // fixed top-0
  //       navShadow ? "shadow-md" : ""
  //     }`}
  //   >
  //     <div className="ml-8">
  //       <Link className="navLink" href="/">
  //         Home
  //       </Link>{" "}
  //     </div>
  //     <div className="flex gap-8 mr-8">
  //       <Link
  //         className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm"
  //         href="/booking"
  //       >
  //         Booking
  //       </Link>
  //       <Link
  //         className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm cursor-pointer"
  //         href="/gallery"
  //       >
  //         Gallery
  //       </Link>
  //       <Link
  //         className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm cursor-pointer"
  //         href="/testimonials"
  //       >
  //         Testimonial
  //       </Link>
  //       <Link
  //         className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm cursor-pointer"
  //         href="/contact"
  //       >
  //         Contact
  //       </Link>
  //       <Link
  //         className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm"
  //         href="/faqs"
  //       >
  //         FAQ's
  //       </Link>
  //       <Link
  //         className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm"
  //         href="/about"
  //       >
  //         About Us
  //       </Link>
  //       {isLoaded && user ? (
  //         <div className="flex items-center justify-center">
  //           <UserButton showName="true" afterSignOutUrl="/" />
  //         </div>
  //       ) : (
  //         <SignInButton className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2" />
  //       )}
  //     </div>
  //   </nav>
  /* <nav
// style={{ position: "relative", zIndex: 1000 }}
className={` bg-white w-screen flex justify-between p-6 z-50 ${
  // fixed top-0
  navShadow ? "shadow-md" : ""
}`}
>
<div className="ml-8">
  <Link className="navLink" href="/">
    Home
  </Link>{" "}
</div>

<div className="flex gap-8 mr-8">
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
      <ScrollLink
        className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm cursor-pointer"
        to="contact"
        smooth={true}
        duration={1000}
      >
         Contact
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
      <Link
        className="transition duration-50 hover:bg-[#A9C274] hover:bg-opacity-70 rounded-lg px-4 py-2 hover:text-white hover:shadow-sm cursor-pointer"
        href="/#contact"
      >
        Contact
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
</nav> */
}
