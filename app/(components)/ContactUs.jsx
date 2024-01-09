import Image from "next/image";
import React from "react";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-2 p-2 bg-[#a9c274] md:grid-cols-2">
        <div className="grid grid-cols-2 items-start gap-2 mx-auto md:flex md:w-auto p-10">
          <h3 className="text-2xl font-serif text-white tracking-wide text-left underline underline-offset-4 mt-4 mb-2 md:hidden">
            Contact Us
          </h3>
          <Image
            src={"/contactus/contact3.png"}
            width={500}
            height={500}
            className="border-2 shadow-2xl bg-[#e9c46a] p-10"
          />
        </div>
        <div>
          {/* Woringn  Here */}
          <div className="bg-[#f3eeee] text-white shadow pt-8 pb-10 pr-2 pl-2 mr-10 ml-10 rounded-md relative md:mt-20">
            <div className=" w-4 h-4 bg-white shadow-inner shadow-gray-950 rounded-full absolute top-2 md:top-5 md:left-5  "></div>
            <div className=" w-4 h-4 bg-white shadow-inner shadow-gray-950 rounded-full absolute top-2 right-2 md:top-5 md:right-5 "></div>
            <div className=" w-4 h-4 bg-white shadow-inner shadow-gray-950 rounded-full absolute bottom-3 right-2 md:bottom-2 md:right-5 "></div>
            <div className=" w-4 h-4 bg-white shadow-inner shadow-gray-950 rounded-full absolute bottom-3 left-2 md:bottom-2 md:left-5 "></div>
            <h3 className="hidden md:block text-3xl font-serif text-[#a9c274] pb-10 text-center tracking-widest drop-shadow-lg  ">
              Contact Us
            </h3>
            <div className="bg-[#264653] rounded-lg text-white p-4">
              <div className="flex justify-around text-sm p-4 md:text-xl">
                <p className="flex-1 font-semibold tracking-widest">Address:</p>
                <p className="flex-1 tracking-wide hover:underline">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Narre+Warren+North,+VIC+Australia+-+3806"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Narre Warren North,
                    <br />
                    VIC Australia - 3806
                  </a>
                </p>
              </div>
              <div className="flex justify-around text-sm p-4 md:text-xl">
                <p className="flex-1 font-semibold tracking-widest">Phone:</p>
                <p className="flex-1 tracking-wide hover:underline">
                  <a href="tel:+61406262848">+61 406 262 848</a>
                </p>
              </div>
              <div className="flex justify-around text-sm p-4 md:text-xl">
                <p className="flex-1 font-semibold tracking-widest">Email:</p>
                <p className="flex-1 tracking-wide hover:underline ">
                  <a href="mailto:thebulldogbabysitter@gmail.com">
                    thebulldogbabysitter@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

/*
 <>
      <div id="contact" className=" pt-32 pb-36 pl-8 pr-8 mb-1 shadow-inner bg-gradient-to-b from-white via-lime-100 to-[#a9c274] flex justify-evenly text-center">
        <div>
          <Image src={"/contactus/contact1.png"} width={500} height={500} alt="Contact1" />
        </div>

        <div className="bg-white w-1/2 pt-16 pb-4 pl-8 pr-8 rounded-lg shadow-2xl relative">
          <h2 className="absolute top-0 left-0 right-0 p-4 text-3xl  font-serif  tracking-wider text-[#a9c274]">
            Contact us
          </h2>
          <div className="bg-gray-100 pb-12 pt-12 rounded-xl table w-full">
            <div className="table-row-group">
              <div className="table-row">
                <div className="table-cell p-4 tracking-wide text-lg font-thin text-gray-500">
                  Address:
                </div>
                <div className="table-cell p-4 tracking-wider text-xl">
                  Narre Warren North VIC Australia - 3806
                </div>
              </div>
              <div className="table-row">
                <div className="table-cell p-4 tracking-wide text-lg font-thin text-gray-500">
                  Phone:
                </div>
                <div className="table-cell p-4 tracking-wider text-xl">
                  +61 406 262 848
                </div>
              </div>
              <div className="table-row">
                <div className="table-cell p-4 tracking-wide text-lg font-thin text-gray-500">
                  Email:
                </div>
                <div className="table-cell p-4 tracking-wider text-xl">
                  thebulldogbabysitter@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className=" w-3 h-3 bg-white shadow-inner shadow-gray-500 rounded-full absolute top-4 left-3"></div>
          <div className=" w-3 h-3 bg-white shadow-inner shadow-gray-500 rounded-full absolute top-4 right-3"></div>
          <div className=" w-3 h-3 bg-white shadow-inner shadow-gray-500 rounded-full absolute bottom-4 right-3"></div>
          <div className=" w-3 h-3 bg-white shadow-inner shadow-gray-500 rounded-full absolute bottom-4 left-3"></div>
        </div>
      </div>
    </>

*/
