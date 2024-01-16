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
  const [petImage, setPetImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petAge, setPetAge] = useState("");
  const [chipNumber, setChipNumber] = useState("");
  const [vaccines, setVaccines] = useState("");
  const [petNotes, setPetNotes] = useState("");
  // Step manager
  const [prevStep, setPrevStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [navigationFailed, setNavigationFailed] = useState(false);

  // console.log(currentStep);

  const handleBoardingSubmit = async function (e) {
    e.preventDefault();
    let uploadedImageUrl = ""; // Temporary variable to hold the uploaded image URL

    //Uploading the petImage
    if (petImage) {
      const formData = new FormData();
      formData.append("file", petImage);
      try {
        const response = await axios.post(
          "http://localhost:3000/api/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data.link);
        uploadedImageUrl = response.data.link; // Store the URL in a temporary variable
        setImageUrl(uploadedImageUrl); // Update state (optional, if you need it elsewhere)
        // setImageUrl([...imageUrl, response.data]);
      } catch (error) {
        console.error("Error uploading file:", error);
        return; // Stop the function if image upload fails
      }
    }

    //Rest of the form data
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
      imageUrl: uploadedImageUrl, // Use the uploaded image URL here
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
          try {
            router.push("/booking");
          } catch (err) {
            setNavigationFailed(true);
          }
        }, 4000);
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

  const handleImageUpload = async (e) => {
    if (e.target.files?.[0]) {
      setPetImage(e.target.files[0]);
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setImagePreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(e.target.files[0]);
    }
    console.log(petImage);
  };

  return (
    <>
      <section className="md:p-16 mt-12 bg-gray-100 ">
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

        <form
          className={`max-w-lg md:max-w-2xl mt-16 pb-10 shadow-lg rounded-xl mx-auto bg-white ${
            currentStep === 2 ? "hidden" : ""
          }`}
          onSubmit={handleBoardingSubmit}
        >
          {currentStep === 0 && (
            <div className="">
              <div className="bg-gradient-to-r from-[#A9C274] via-[#c3e281] to-lime-200 tracking-wide text-center text-xl md:text-4xl p-8 text-gray-500 shadow-inner">
                <h2>Owner's Information</h2>
              </div>
              <div className="mt-10 ">
                <div className="grid grid-cols-1 md:grid-cols-2 p-2 md:p-4">
                  <label
                    htmlFor="firstName"
                    className="p-4 mr-10 text-gray-500 font-serif font-semibold text-lg"
                  >
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="John "
                    name="firstName"
                    required
                    className="border-b-2 border-gray-200 p-2 px-12 "
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 p-2 md:p-4">
                  <label
                    htmlFor="lastName"
                    className="p-4 mr-10 text-gray-500 font-serif font-semibold text-lg"
                  >
                    Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Doe"
                    name="lastName"
                    required
                    className="border-b-2 border-gray-200 p-2 px-12"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 p-2 md:p-4">
                  <label
                    htmlFor="phone"
                    className="p-4 mr-20 text-gray-500 font-serif font-semibold text-lg"
                  >
                    Phone <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+61 666 666 654"
                    name="phone"
                    required
                    className="border-b-2 border-gray-200 p-2 px-12"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 p-2 md:p-4">
                  <label
                    htmlFor="email"
                    className="p-4 mr-20 text-gray-500 font-serif font-semibold text-lg"
                  >
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="johndoe@gmail.com"
                    name="email"
                    required
                    className="border-b-2 border-gray-200 p-2 px-12"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="">
              <div className="bg-gradient-to-r from-[#A9C274] via-[#c3e281] to-lime-200 tracking-wide text-center text-xl md:text-4xl p-8 text-gray-500 shadow-inner">
                <h2>About Your Pet</h2>
              </div>

              <div className="mt-10 ">
                <div className="grid grid-cols-1 place-items-center place-content-center mx-4 p-8 bg-gray-50">
                  <label className="cursor-pointer mt-10 mb-10">
                    {imagePreviewUrl ? (
                      <img
                        src={imagePreviewUrl}
                        alt="Preview"
                        className="max-w-xs max-h-60"
                      />
                    ) : (
                      <span className=" font-serif font-semibold text-lg bg-gray-100 border border-gray-300 p-14 rounded-full hover:bg-gray-200 text-gray-400 hover:text-gray-500">
                        Add a photo
                      </span>
                    )}
                    <input
                      onChange={handleImageUpload}
                      type="file"
                      className="hidden"
                      required
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 p-2 md:p-4">
                  <label
                    htmlFor="petName"
                    className="p-4 mr-10 text-gray-500 font-serif font-semibold text-lg"
                  >
                    Pet Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    placeholder="Drako"
                    name="petName"
                    required
                    className="border-b-2 border-gray-200 p-2 px-12"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 p-2 md:p-4">
                  <label
                    htmlFor="petType"
                    className="p-4 mr-10 text-gray-500 font-serif font-semibold text-lg"
                  >
                    Sex
                  </label>
                  <input
                    type="text"
                    value={petType}
                    onChange={(e) => setPetType(e.target.value)}
                    placeholder="Female or Male"
                    name="petType"
                    required
                    className="border-b-2 border-gray-200 p-2 px-12"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 p-2 md:p-4">
                  <label
                    htmlFor="petAge"
                    className="p-4 mr-10 text-gray-500 font-serif font-semibold text-lg"
                  >
                    Pet Age
                  </label>
                  <input
                    type="text"
                    value={petAge}
                    onChange={(e) => setPetAge(e.target.value)}
                    placeholder="3"
                    name="petAge"
                    required
                    className="border-b-2 border-gray-200 p-2 px-12"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 p-2 md:p-4">
                  <label
                    htmlFor="chipNumber"
                    className="p-4 mr-10 text-gray-500 font-serif font-semibold text-lg"
                  >
                    Chip Number
                  </label>
                  <input
                    type="text"
                    value={chipNumber}
                    onChange={(e) => setChipNumber(e.target.value)}
                    placeholder="123456789"
                    name="chipNumber"
                    required
                    className="border-b-2 border-gray-200 p-2 px-12"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 p-2 md:p-4">
                  <label
                    htmlFor="vaccines"
                    className="p-4 mr-10 text-gray-500 font-serif font-semibold text-lg"
                  >
                    Vaccines
                  </label>
                  <input
                    type="text"
                    value={vaccines}
                    onChange={(e) => setVaccines(e.target.value)}
                    placeholder="Rabies, Distemper"
                    name="vaccines"
                    required
                    className="border-b-2 border-gray-200 p-2 px-12"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 p-2 md:p-4">
                  <label
                    htmlFor="petNotes"
                    className="p-4 mr-10 text-gray-500 font-serif font-semibold text-lg"
                  >
                    Pet Notes
                  </label>
                  <textarea
                    value={petNotes}
                    onChange={(e) => setPetNotes(e.target.value)}
                    placeholder="Any additional notes about your pet..."
                    name="petNotes"
                    required
                    className="border-b-2 border-gray-200 p-2 px-12"
                  />
                  <input type={"hidden"} name="userId" value={userId} />
                </div>
                <div className="grid grid-cols-1 w-1/2 mx-auto md:p-4 mt-16">
                  <button
                    type="submit"
                    className=" p-2 px-4 rounded-lg  text-white text-lg bg-[#A9C274] mb-10 hover:bg-[#89a44f]"
                  >
                    Add Member
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>

        {currentStep === 2 && (
          <div className="max-w-lg md:max-w-2xl mx-auto mt-10">
            <div className="bg-gradient-to-r from-[#A9C274] via-[#c3e281] to-lime-200 tracking-wide text-center text-xl md:text-4xl p-8 text-gray-500 shadow-inner">
              <h2>Registration Completed</h2>
            </div>
            <div className="bg-white shadow-lg w-full flex flex-col items-center justify-center p-8 pb-16 text-lg text-gray-500 tracking-wide">
              <p>Your registration has been completed.</p>
              <p>
                {navigationFailed
                  ? "Oops! Something went wrong during redirection. Please click on the 'Bookings' tab to start booking."
                  : "Redirecting to bookings page..."}
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 p-16">
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
                  currentStep === 1 || currentStep === 2 ? "none" : "block",
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
