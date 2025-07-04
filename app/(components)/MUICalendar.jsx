"use client";
import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, DateField } from "@mui/x-date-pickers/DatePicker";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function MUICalendar({ userId }) {
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [requirePickup, setRequirePickup] = useState(false);

  const [disabledDates, setDisabledDates] = useState([]);
  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

  const [isUserBoarded, setIsUserBoarded] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  useEffect(() => {
    let isMounted = true;

    const checkUserBoarding = async () => {
      try {
        const responseBoarding = await axios.get(`${apiBaseUrl}/boarding`);
        if (!isMounted) return;

        const boardingData = responseBoarding.data;
        console.log(boardingData);

        const userExist = boardingData.some(
          (record) => record.userId === userId
        );

        setIsUserBoarded(userExist);

        if (!userExist) {
          setTimeout(() => {
            router.push("/boarding");
          }, 0);
        }
      } catch (error) {
        console.error("Error fetching Boarding Data", error);
      }
    };

    checkUserBoarding();

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, router]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch disabled dates
        const responseDates = await axios.get(`${apiBaseUrl}/settings`);

        // console.log(responseDates.data[0].disabledDates)
        if (responseDates.data && responseDates.data[0].disabledDates) {
          // console.log(responseDates.data[0].disabledDates.map((date) => dayjs(date)))
          setDisabledDates(
            responseDates.data[0].disabledDates.map((date) => dayjs(date))
          );
        }
      } catch (error) {
        console.error("Error fetching disabled dates:", error);
      }

      try {
        // Fetch opening and closing times
        const responseHours = await axios.get(`${apiBaseUrl}/hours`);
        if (responseHours.data && responseHours.data.length > 0) {
          const timings = responseHours.data[0]; // Access the first item in the array
          setOpeningTime(timings.OpeningTime);
          setClosingTime(timings.ClosingTime);
        }
      } catch (error) {
        console.error("Error fetching timings:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(disabledDates)

  const dateStringToMilliseconds = (dateString, timeString) => {
    const [day, month, year] = dateString.split("/").map(Number);
    const [hours, minutes] = timeString.split(":").map(Number);

    const dateObject = new Date(year, month - 1, day, hours, minutes);
    return dateObject.getTime();
  };

  const millisecondsToDaysAndHours = (milliseconds) => {
    const millisecondsInDay = 1000 * 60 * 60 * 24; // Number of milliseconds in a day
    const millisecondsInHour = 1000 * 60 * 60; // Number of milliseconds in an hour

    const totalDays = Math.floor(milliseconds / millisecondsInDay);
    const remainingMilliseconds = milliseconds % millisecondsInDay;
    const totalHours = Math.floor(remainingMilliseconds / millisecondsInHour);

    return { totalDays, totalHours };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedStartDate = dayjs(startDate).format("DD/MM/YYYY");
    const formattedEndDate = dayjs(endDate).format("DD/MM/YYYY");
    const formattedStartTime = dayjs(startTime).format("HH:mm");
    const formattedEndTime = dayjs(endTime).format("HH:mm");

    const startDateMiliSeconds = dateStringToMilliseconds(
      formattedStartDate,
      formattedStartTime
    );
    const endDateMiliSeconds = dateStringToMilliseconds(
      formattedEndDate,
      formattedEndTime
    );
    const totalMilliseconds = endDateMiliSeconds - startDateMiliSeconds;
    const { totalDays, totalHours } =
      millisecondsToDaysAndHours(totalMilliseconds);

    // console.log("Total Days:", totalDays);
    // console.log("Total Hours:", totalHours);

    const userBookingInfo = {
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      startTime: formattedStartTime,
      endTime: formattedEndTime,
      requirePickup,
      totalDays,
      totalHours,
      userId,
    };

    if (dayjs(endDate).isBefore(dayjs(startDate))) {
      // toast.error("End date must be after start date");
      notifyErrorValue();
      return;
    }
    if (!startDate || !startTime || !endDate || !endTime) {
      notifyErrorField();
      return;
    }

    setIsSubmitting(true); // 🔒 Disable the button

    try {
      const response = await axios.post(
        `${apiBaseUrl}/userbookings`,
        userBookingInfo
      );

      console.log("Raw Data that is being sent to backend:", userBookingInfo);

      if (response.status === 200 && response.data) {
        // console.log("Data sent: ", response);
        notifySuccess();
        setStartDate(null);
        setEndDate(null);
        setStartTime(null);
        setEndTime(null);
        setRequirePickup(false);
      } else {
        // console.log("Data sent but something failed", response);
        toast.error(
          "There was a problem submitting the booking information. Please try again.",
          {
            duration: 4000,
            position: "top-center",
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#713200",
            },
          }
        );
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log("❌ Booking failed - 400 Bad Request");
        console.log("Status:", error.response.status);
        console.log("Message:", error.response.data?.error);
        toast.error(error.response.data?.error || "Bad Request", {
          duration: 9000,
          position: "top-right",
          style: {
            border: "1px solid red",
            padding: "26px",
            marginTop: "40px",
            color: "#713200",
          },
        });
      } else {
        toast.error("An unexpected error occurred. Please try again.", {
          duration: 6000,
          position: "top-right",
          style: {
            border: "1px solid red",
            padding: "26px",
            marginTop: "40px",
            color: "#713200",
          },
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const notifySuccess = () =>
    toast.success("Your booking has been confirmed.", {
      duration: 7000,
      position: "top-right",
      style: {
        border: "1px solid #20b319",
        padding: "26px",
        marginTop: "40px",
        color: "#713200",
      },
    });
  const notifyErrorValue = () =>
    toast.error("End date must be after start date", {
      duration: 6000,
      position: "top-right",
      style: {
        border: "1px solid red",
        padding: "26px",
        marginTop: "40px",
        color: "#713200",
      },
    });
  const notifyErrorField = () =>
    toast.error("Please fill all fields", {
      duration: 6000,
      position: "top-right",
      style: {
        border: "1px solid red",
        padding: "26px",
        marginTop: "40px",
        color: "#713200",
      },
    });

  // Function to check if a date should be disabled

  const checkIfDateDisabled = (date) => {
    return disabledDates.some((disabledDate) =>
      date.isSame(disabledDate, "day")
    );
  };

  // ⏳ Show "Checking Boarding Data..." while verifying

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="bg-gradient-to-r from-[#A9C274] via-[#c3e281] to-lime-200 min-h-screen pt-32 pb-24 ">
          <div className=" ml-8 mr-8 sm:hidden m-auto">
            <p className=" text-[13px] font-serif text-red-600 pb-3 ">
              If you haven&apos;t boarded with us before, please complete the
              boarding process first to avoid any cancellation. Click the link
              below to get started.
            </p>
            <a
              href="/boarding"
              className="mt-4 mb-4 text-[14px] font-serif text-gray-700 hover:underline animate-bounce flex items-center justify-center m-auto"
            >
              👉&nbsp;&nbsp;&nbsp;<p className="text-red-600">Start&nbsp;</p>{" "}
              the boarding process&nbsp;&nbsp;&nbsp;👈
            </a>
          </div>
          <div className="  grid grid-cols-1 md:grid-cols-2 items-center p-2 ml-4 mr-4">
            <div className="pb-20 pt-12 p-2 md:ml-28 flex flex-col items-center justify-center md:max-w-[400px] 2xl:max-w-[600px] bg-white shadow-2xl rounded-lg ">
              <div className="flex items-center pt-4 pl-1 pr-1 ">
                <DatePicker
                  label="Start Date"
                  value={startDate}
                  onChange={(newValue) => {
                    setStartDate(newValue);
                  }}
                  minDate={dayjs(new Date())}
                  format="DD/MM/YYYY"
                  shouldDisableDate={checkIfDateDisabled}
                />
                <p className="p-2 text-2xl">-</p>
                <DatePicker
                  label="End Date"
                  value={endDate}
                  onChange={(newValue) => {
                    // console.log(endDate);
                    setEndDate(newValue);
                  }}
                  minDate={dayjs(startDate).add(2, "day")}
                  format="DD/MM/YYYY"
                  disabled={!startDate}
                  shouldDisableDate={checkIfDateDisabled}
                />
              </div>
              <div className="flex items-center pt-4 pl-1 pr-1">
                <TimePicker
                  label="Start Time"
                  value={startTime}
                  onChange={(newValue) => {
                    setStartTime(newValue);
                  }}
                  minTime={dayjs(`${openingTime}`, "HH:mm")}
                  maxTime={dayjs(`${closingTime}`, "HH:mm")}
                  ampm={false}
                  timeSteps={{ minutes: 15 }} // Ensures only 00, 15, 30, 45 are selectable
                  shouldDisableTime={(value, view) =>
                    view === "minutes" && value.minute() % 15 !== 0
                  }
                />
                <p className="p-2 text-2xl">-</p>

                <TimePicker
                  label="End Time"
                  value={endTime}
                  onChange={(newValue) => {
                    setEndTime(newValue);
                  }}
                  minTime={dayjs(`${openingTime}`, "HH:mm")}
                  maxTime={dayjs(`${closingTime}`, "HH:mm")}
                  ampm={false}
                  timeSteps={{ minutes: 15 }} // Ensures only 00, 15, 30, 45 are selectable
                  shouldDisableTime={(value, view) =>
                    view === "minutes" && value.minute() % 15 !== 0
                  }
                />
              </div>

              <div className="mt-10 mr-10 font-light text-gray-500 text-base md:text-lg">
                <div className="border border-gray-300 rounded-md pl-4 pr-4 pt-2 pb-2 ">
                  <label>Pick up required?</label>
                  <input
                    type="checkbox"
                    className="ml-10"
                    checked={requirePickup} // Use checked attribute to reflect the state
                    onChange={(e) => {
                      setRequirePickup(e.target.checked); // Update the state with the checked value
                    }}
                  />
                </div>
              </div>

              <div className="pt-10">
                <button
                  className={`p-2 px-20 text-white rounded-md ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#A9C274] hover:bg-[#7a9343]"
                  }`}
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Booking..." : "Book Now"}
                </button>
              </div>
            </div>
            <div className="px-2 pt-10 mt-4 ">
              <h3 className="text-white text-2xl md:text-3xl mb-4 font-serif font-bold tracking-wide">
                Your Bulldog&apos;s Babysitter,
                <br /> Your Time Choices
              </h3>
              <p className="font-serif text-gray-700 md:text-lg">
                With &apos;Your Bulldog&apos;s Babysitter, Your Time
                Choices,&apos; you&apos;re in control of crafting the perfect
                playdate for your furry friend. Whether it&apos;s an energetic
                morning romp or a cozy afternoon cuddle, our platform ensures
                that every moment aligns with your bulldog&apos;s unique
                preferences.
              </p>
              <p className="font-serif text-red-600 md:text-lg pb-3 mt-10 hidden sm:block">
                If you haven&apos;t boarded with us before, please complete the
                boarding process first to avoid cancellation. Click the link
                below to get started.
              </p>
              <a
                href="/boarding"
                className="hidden  mt-4 font-serif text-gray-700 md:text-lg hover:underline animate-bounce sm:flex items-center justify-center m-auto"
              >
                👉&nbsp;&nbsp;&nbsp;<p className="text-red-600">Start&nbsp;</p>{" "}
                the boarding process&nbsp;&nbsp;&nbsp;👈
              </a>
            </div>
          </div>
        </div>
        <Toaster />
      </LocalizationProvider>
    </>
  );
}
