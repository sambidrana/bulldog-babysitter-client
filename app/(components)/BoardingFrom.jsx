"use client";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const steps = [
  {
    id: "Step 1",
    title: "Ownre's Information",
    fields: ["firstName", "lastName", "phone", "email"],
  },
  {
    id: "Step 2",
    title: "About your Pet",
    fields: [
      "petName",
      "petType",
      "petAge",
      "chipNumber",
      "vaccines",
      "petNotes",
    ],
  },
  {
    id: "Step 3",
    title: "Complete, you can start booking now.",
  },
];

export const BoardingForm = ({ userId }) => {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  //step 1: Owners Info
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  //step 2: Pets Info
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petAge, setPetAge] = useState("");
  const [chipNumber, setChipNumber] = useState("");
  const [vaccines, setVaccines] = useState("");
  const [petNotes, setPetNotes] = useState("");
  // Step manager
  const [prevStep, setPrevStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  // console.log(currentStep);

  const handleBoardingSubmit = async function (e) {
    e.preventDefault();
    const boardingData = {
      firstName,
      lastName,
      phone,
      email,
      petName,
      petType,
      petAge,
      chipNumber,
      vaccines,
      petNotes,
      userId,
    };
    console.log("Boarding Data:", boardingData);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/boarding",
        boardingData
      );
      if (response.status === 200 && response.data) {
        console.log("Data sent: ", response);
        setCurrentStep((prev) => {
          return prev + 1;
        });
        setTimeout(() => {
          router.push("/booking");
        }, 5000);
      } else {
        console.log("Data sent but something failed", response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const notify = () =>
    toast.error("Please fill the missing fields.", {
      duration: 4000,
      position: "top-right",
      style: {
        border: "1px solid #713200",
        padding: "26px",
        color: "#713200",
      },
    });

  const next = async () => {
    const personalData = {
      firstName,
      lastName,
      phone,
      email,
    };

    if (
      currentStep === 0 &&
      Object.values(personalData).some((value) => value === "")
    ) {
      notify();
      return;
    }

    setCurrentStep((prev) => {
      if (prev === 0) {
        return prev + 1;
      } else {
        return prev;
      }
    });
  };

  const prev = () => {
    setCurrentStep((prev) => {
      console.log(prev);
      if (prev === 1) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  };

  return (
    <>
      <section className="flex flex-col justify-between p-24">
        <nav aria-label="Progress">
          <ol
            role="list"
            className="space-y-4 md:flex md:space-x-8 md:space-y-0"
          >
            {steps.map((step, index) => (
              <li key={step.title} className="md:flex-1">
                {currentStep > index ? (
                  <div className="group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                    <span className="text-sm font-medium text-sky-600 transition-colors ">
                      {step.id}
                    </span>
                    <span className="text-sm font-medium">{step.title}</span>
                  </div>
                ) : currentStep === index ? (
                  <div
                    className="flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                    aria-current="step"
                  >
                    <span className="text-sm font-medium text-sky-600">
                      {step.id}
                    </span>
                    <span className="text-sm font-medium">{step.title}</span>
                  </div>
                ) : (
                  <div className="group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                    <span className="text-sm font-medium text-gray-500 transition-colors">
                      {step.id}
                    </span>
                    <span className="text-sm font-medium">{step.title}</span>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <form className="mt-12 py-12" onSubmit={handleBoardingSubmit}>
          {currentStep === 0 && (
            <div className="flex items-center justify-center p-24">
              <label htmlFor="firstName" className="p-4 m-4">
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
              <label htmlFor="lastName" className="p-4 m-4">
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
              <label htmlFor="phone" className="p-4 m-4">
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
              <label htmlFor="email" className="p-4 m-4">
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
            </div>
          )}

          {currentStep === 1 && (
            <div className="flex items-center justify-center p-24">
              <h2>Step 2</h2>
              <div>
                <label htmlFor="petName" className="p-4 m-4">
                  Pet name
                </label>
                <input
                  type="text"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  placeholder="Drako"
                  name="petName"
                  required
                  className="border border-gray-400 p-2 px-6 rounded-lg"
                />
                <label htmlFor="petType" className="p-4 m-4">
                  Pet Type
                </label>
                <input
                  type="text"
                  value={petType}
                  onChange={(e) => setPetType(e.target.value)}
                  placeholder="Frenchie"
                  name="petType"
                  required
                  className="border border-gray-400 p-2 px-6 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="petAge" className="p-4 m-4">
                  Pet Age
                </label>
                <input
                  type="text"
                  value={petAge}
                  onChange={(e) => setPetAge(e.target.value)}
                  placeholder="3"
                  name="petAge"
                  required
                  className="border border-gray-400 p-2 px-6 rounded-lg"
                />

                <label htmlFor="chipNumber" className="p-4 m-4">
                  Chip Number
                </label>
                <input
                  type="text"
                  value={chipNumber}
                  onChange={(e) => setChipNumber(e.target.value)}
                  placeholder="123456789"
                  name="chipNumber"
                  required
                  className="border border-gray-400 p-2 px-6 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="vaccines" className="p-4 m-4">
                  Vaccines
                </label>
                <input
                  type="text"
                  value={vaccines}
                  onChange={(e) => setVaccines(e.target.value)}
                  placeholder="Rabies, Distemper"
                  name="vaccines"
                  required
                  className="border border-gray-400 p-2 px-6 rounded-lg"
                />

                <label htmlFor="petNotes" className="p-4 m-4">
                  Pet Notes
                </label>
                <textarea
                  value={petNotes}
                  onChange={(e) => setPetNotes(e.target.value)}
                  placeholder="Any additional notes about your pet..."
                  name="petNotes"
                  required
                  className="border border-gray-400 p-2 px-6 rounded-lg"
                />
                <input type={"hidden"} name="userId" value={userId} />
              </div>
              <button
                type="submit"
                className="p-2 px-4 rounded-lg mt-6 text-gray-100 bg-blue-400 mb-10 "
              >
                Add Member
              </button>
            </div>
          )}
        </form>

        {currentStep === 2 && (
          <div>
            <h2>
              Complete, you can start booking now. Your data has been saved You
              will be redirected to booking page in 5 sec or you could click the
              link in the nav bar
            </h2>
          </div>
        )}

        <div className="mt-8 pt-5">
          <div className="flex justify-between">
            <button
              type="button"
              onClick={prev}
              disabled={currentStep === 0}
              style={{ display: currentStep === 2 ? "none" : "block" }}
              className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              // disabled={currentStep === 1}
              style={{
                display:
                  currentStep === 1 && currentStep === 2 ? "none" : "block",
              }}
              className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <Toaster />
    </>
  );
};
