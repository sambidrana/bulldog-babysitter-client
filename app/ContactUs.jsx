import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className=" pt-20 pb-20 bg-gradient-to-b from-[#a9c274] via-gray-200 to-white flex  justify-evenly text-center">
        <div>
          <Image src={"/contactus/contact1.png"} width={500} height={500} />
        </div>

        <div className="bg-white w-1/3 pt-16 pb-12 rounded-lg shadow-2xl flex flex-col relative">
          <h2 className="absolute top-0 left-0 right-0 p-4">Contact us</h2>
          <div className="bg-gray-100 p-24 m-2 rounded-xl ">
            <div>
              <p>
                ADDRESS: <span>Narre Warren North VIC Australia - 3806</span>
              </p>
            </div>
            <div>
              <p>
                Phone: <span>0406 262 848</span>
              </p>
            </div>
            <div>
              <p>
                Email: <span>thebulldogbabysitter@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
