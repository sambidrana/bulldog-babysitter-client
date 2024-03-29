"use client";
import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState, useEffect } from "react";
import { TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function MUICalendar({ userId }) {
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const [disabledDates, setDisabledDates] = useState([]);
  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch disabled dates
        const responseDates = await axios.get(`${apiBaseUrl}/settings`);
        if (responseDates.data && responseDates.data.disabledDates) {
          setDisabledDates(
            responseDates.data.disabledDates.map((date) => dayjs(date))
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedStartDate = dayjs(startDate).format("DD/MM/YYYY");
    const formattedEndDate = dayjs(endDate).format("DD/MM/YYYY");
    const formattedStartTime = dayjs(startTime).format("HH:mm");
    const formattedEndTime = dayjs(endTime).format("HH:mm");

    const userBookingInfo = {
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      startTime: formattedStartTime,
      endTime: formattedEndTime,
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
    try {
      const response = await axios.post(
        `${apiBaseUrl}/userbookings`,
        userBookingInfo
      );

      if (response.status === 200 && response.data) {
        // console.log("Data sent: ", response);
        notifySuccess();
        setStartDate(null);
        setEndDate(null);
        setStartTime(null);
        setEndTime(null);
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
      // console.log(error);
      toast.error(
        "An error occurred while submitting the booking information. Please try again.",
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
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="bg-gradient-to-r from-[#A9C274] via-[#c3e281] to-lime-200 min-h-screen pt-32 pb-24 ">
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
                    setEndDate(newValue);
                  }}
                  minDate={dayjs(startDate).add(2, "day")}
                  format="DD/MM/YYYY"
                  disabled={!startDate}
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
                />
              </div>
              <div className=" pt-20">
                <button
                  className="p-2 px-20 bg-[#A9C274] hover:bg-[#7a9343] text-white rounded-md"
                  onClick={handleSubmit}
                >
                  Book Now
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
                morning romp or a cozy afternoon cuddle, our app ensures that
                every moment aligns with your bulldog&apos;s unique preferences.
              </p>
            </div>
          </div>
        </div>
        <Toaster />
      </LocalizationProvider>
    </>
  );
}
