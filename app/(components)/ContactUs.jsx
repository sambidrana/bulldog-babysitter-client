"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

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
        `${apiBaseUrl}/enquiry`,
        enquiryData
      );
      if (response.status === 200 && response.data) {
        notifySuccess();
        setName("");
        setEmail("");
        setContact("");
        setMessage("");
      }
    } catch (err) {
      // console.log("Could not send data to server");
      notifyError();
    }
  };
  const notifySuccess = () =>
    toast.success(
      "Your enquiry has been sent. We will get back to you as soon as possible",
      {
        duration: 7000,
        position: "top-right",
        style: {
          border: "1px solid #20b319",
          padding: "26px",
          marginTop: "40px",
          color: "#713200",
        },
      }
    );
  const notifyError = () =>
    toast.error(
      "There was some error connection with the server. Please try again in a few minutes or contact us from the deteils next to you",
      {
        duration: 6000,
        position: "top-right",
        style: {
          border: "1px solid red",
          padding: "26px",
          marginTop: "40px",
          color: "#713200",
        },
      }
    );
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 items-center justify-center gap-2 p-12 2xl:p-36 md:grid-cols-2 md:p-24 mt-1 bg-gradient-to-r from-[#c0dc84] to-[#A9C264] md:w-auto min-h-[50vh]">
          <div className="grid items-center justify-center md:w-auto">
            <Image
              src="/contactus/contactus.jpg"
              alt="Contact Us Image"
              width={300}
              height={300}
              className="border-4 border-white drop-shadow-[2px_15px_5px_rgba(0,0,0,0.5)] 2xl:w-fit"
            />
          </div>
          <div className="mt-10 text-white">
            <h2 className="mb-4 text-xl md:text-3xl font-serif font-bold tracking-wide">
              Contact Us
            </h2>
            <p className="p-2 md:text-lg font-serif tracking-wide">
              Have questions or seeking further details? Please submit our
              inquiry form, and we'll respond promptly, or feel free to directly
              connect with us for immediate assistance.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 p-2 pt-8 pb-16 2xl:items-center md:grid-cols-2 md:pt-24">
          <div className="order-2 md:order-1 pl-10 pr-10">
            <form
              onSubmit={handleSubmit}
              method="POST"
              className="max-w-lg mx-auto my-10 p-6 bg-[#ffffff] drop-shadow-[0px_0px_10px_rgba(0,0,0,0.25)] rounded-lg"
            >
              <h3 className="text-2xl md:text-3xl font-serif text-[#a9c274] pb-10 text-center tracking-widest  underline underline-offset-8">
                Enquiry Form
              </h3>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="contact"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Phone:
                </label>
                <input
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  type="tel"
                  id="contact"
                  name="contact"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                alt="French Bulldog"
                width={250}
                height={250}
                className=""
              />
            </div>
            <div className="max-w-[750px] bg-[#e8dbbb] text-white pt-10 pb-10 pr-2 pl-2 md:pr-8 md:pl-8 mr-10 ml-10 2xl:mr-32 rounded-md relative drop-shadow-[0px_15px_1px_rgba(0,0,0,0.25)]">
              <div className=" w-4 h-4 bg-white shadow-inner shadow-gray-950 rounded-full absolute top-2 md:top-3 md:left-5  "></div>
              <div className=" w-4 h-4 bg-white shadow-inner shadow-gray-950 rounded-full absolute top-2 right-2 md:top-3 md:right-5 "></div>
              <div className=" w-4 h-4 bg-white shadow-inner shadow-gray-950 rounded-full absolute bottom-3 right-2 md:bottom-2 md:right-5 "></div>
              <div className=" w-4 h-4 bg-white shadow-inner shadow-gray-950 rounded-full absolute bottom-3 left-2 md:bottom-2 md:left-5 "></div>

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
      </div>
      <Toaster />
    </>
  );
};

export default ContactUs;
