"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enquiryData = {
      name,
      email,
      contact,
      message,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/api/enquiry",
        enquiryData
      );
      if (response.status === 200 && response.data) {
        console.log("Data sent: ", response);
        setName("");
        setEmail("");
        setContact("");
        setMessage("");
      }
    } catch (err) {
      console.log("Could not send data to server");
    }
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-2 p-2 pb-16 bg-[#a9c274] md:grid-cols-2 md:pt-10">
        {/* Add enquiry */}
        <div className="order-2 md:order-1">
          <form
            onSubmit={handleSubmit}
            method="POST"
            class="max-w-lg mx-auto my-10 p-6 bg-white drop-shadow-[0px_15px_1px_rgba(0,0,0,0.25)] rounded-lg"
          >
            <h3 className="text-2xl md:text-3xl font-serif text-[#a9c274] pb-10 text-center tracking-widest  underline underline-offset-8">
              Enquiry Form
            </h3>
            <div class="mb-4">
              <label
                for="name"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Name:
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                name="name"
                required
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="mb-4">
              <label
                for="email"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Email:
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                required
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="mb-4">
              <label
                for="contact"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Phone:
              </label>
              <input
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                type="tel"
                id="contact"
                name="contact"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="mb-6">
              <label
                for="message"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Your Message:
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                name="message"
                rows="4"
                required
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className=" p-2 px-4 rounded-lg  text-white bg-[#A9C274] mb-10 hover:bg-[#89a44f]"
              >
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
        <div className="order-1 md:order-2">
          <div className="flex items-center justify-center flex-shrink">
            <Image
              src={"/booknow/frenchie1.png"}
              width={250}
              height={250}
              className=""
            />
          </div>
          <div className="bg-[#e8dbbb] text-white pt-8 pb-10 pr-2 pl-2 mr-10 ml-10 rounded-md relative drop-shadow-[0px_15px_1px_rgba(0,0,0,0.25)]">
            <div className=" w-4 h-4 bg-white shadow-inner shadow-gray-950 rounded-full absolute top-2 md:top-5 md:left-5  "></div>
            <div className=" w-4 h-4 bg-white shadow-inner shadow-gray-950 rounded-full absolute top-2 right-2 md:top-5 md:right-5 "></div>
            <div className=" w-4 h-4 bg-white shadow-inner shadow-gray-950 rounded-full absolute bottom-3 right-2 md:bottom-2 md:right-5 "></div>
            <div className=" w-4 h-4 bg-white shadow-inner shadow-gray-950 rounded-full absolute bottom-3 left-2 md:bottom-2 md:left-5 "></div>
            <h3 className="text-2xl md:text-3xl font-serif text-white pb-10 text-center tracking-widest drop-shadow-[0px_2px_1px_rgba(0,0,0,0.25)] ">
              Contact Us
            </h3>
            <div className="bg-[#264653]/10 rounded-lg text-white font-serif p-4">
              <div className="flex justify-around text-sm p-4 md:text-xl">
                <p className="flex-1 font-semibold tracking-widest ">
                  Address:
                </p>
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

  <div className="grid grid-cols-2 items-start gap-2 mx-auto md:flex md:w-auto p-10 drop-shadow-2xl">
          <h3 className="text-2xl font-serif text-white tracking-wide text-left underline underline-offset-4 mt-4 mb-2 md:hidden">
            Contact Us
          </h3>
         
        </div>
 <Image
            src={"/contactus/contact3.png"}
            width={500}
            height={500}
            className="border-2 shadow-2xl bg-[#e9c46a] p-10"
          />


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
