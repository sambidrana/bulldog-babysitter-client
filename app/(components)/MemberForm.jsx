"use client"
import axios from "axios";
import React, { useState } from "react";

export const MemberForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleMemberSubmit = async function (e) {
    e.preventDefault();
    const memberData = {
      firstName,
      lastName,
      phone,
      email,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/members",
        memberData
      );
      if (response.status === 200 && response.data && response.data.url) {
        console.log("Data sent: ", response);
      } else {
        console.log("Data sent but something failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Add a new member</h2>
      <form
        onSubmit={handleMemberSubmit}
        className="flex flex-col w-screen  items-center justify-center"
      >
        <label htmlFor="name" className="p-4 m-4">
          First Name
        </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="John "
          name="firstName"
          required
          className="border border-gray-400 p-2 px-6 rounded-lg"
        />
        <label htmlFor="name" className="p-4 m-4">
          Last Name
        </label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Doe"
          name="lastName"
          required
          className="border border-gray-400 p-2 px-6 rounded-lg"
        />
        <label htmlFor="name" className="p-4 m-4">
          Phone
        </label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+61 666 666 654"
          name="phone"
          required
          className="border border-gray-400 p-2 px-6 rounded-lg"
        />
        <label htmlFor="name" className="p-4 m-4">
          Email
        </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="+JohnDoe@gmail.com"
          name="email"
          required
          className="border border-gray-400 p-2 px-6 rounded-lg"
        />
        <div>
          <button type="submit" className="p-2 px-4 rounded-lg mt-6 text-gray-100 bg-blue-400 ">
            Add Member
          </button>
        </div>
      </form>
    </>
  );
};
