import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 p-2 bg-[#a9c274] md:grid-cols-2">
        <div>
          <Image src={"/contactus/contact3.png"} width={500} height={500} />
        </div>
        <div>
          <div className="bg-white shadow p-2">
            <div className="bg-[#e5e096] text-white">
              <div className="flex justify-around text-xl p-4">
                <p className=" font-semibold tracking-widest">Address:</p>
                <p className=" tracking-wide">
                  Narre Warren North,
                  <br />
                  VIC Australia - 3806
                </p>
              </div>
              <div className="flex justify-around text-xl p-4">
                <p className="font-semibold tracking-widest">Phone:</p>
                <p className="tracking-wide">+61 406 262 848</p>
              </div>
              <div className="flex justify-around text-xl p-4">
                <p className="font-semibold tracking-widest">Email:</p>
                <p className="tracking-wide text-sm"> thebulldogbabysitter@gmail.com</p>
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
