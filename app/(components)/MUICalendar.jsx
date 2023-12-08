"use client";
import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
import { useState } from "react";
import { TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function MUICalendar({ userId }) {
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endTime, setEndTime] = useState(null);

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
        "http://localhost:3000/api/userbookings",
        userBookingInfo
      );

      if (response.status === 200 && response.data) {
        console.log("Data sent: ", response);
        notifySuccess();
        setStartDate(null);
        setEndDate(null);
        setStartTime(null);
        setEndTime(null);
      } else {
        console.log("Data sent but something failed", response);
      }
    } catch (error) {
      console.log(error);
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

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="bg-gradient-to-r from-[#A9C274] via-[#c3e281] to-lime-200  min-h-screen pt-48">
          <div className="  grid sm:grid-cols-1 md:grid-cols-2 gap-2  p-2 ml-4 mr-4">
            <div className="pb-20 pt-12 p-2 ml-28 flex  flex-col items-center justify-center w-[400px] bg-white/95 shadow-2xl rounded-lg ">
              <div className="flex items-center pt-4 pl-1 pr-1 ">
                <DatePicker
                  label="Start Date"
                  value={startDate}
                  onChange={(newValue) => {
                    setStartDate(newValue);
                  }}
                  minDate={dayjs(new Date())}
                  format="DD/MM/YYYY"
                />
                <p className="p-2 text-2xl">-</p>
                <DatePicker
                  label="End Date"
                  value={endDate}
                  onChange={(newValue) => {
                    setEndDate(newValue);
                  }}
                  minDate={dayjs(new Date())}
                  format="DD/MM/YYYY"
                />
              </div>
              <div className="flex items-center pt-4 pl-1 pr-1">
                <TimePicker
                  label="Start Time"
                  value={startTime}
                  onChange={(newValue) => {
                    setStartTime(newValue);
                  }}
                  minTime={dayjs("09:00", "HH:mm")}
                  maxTime={dayjs("17:00", "HH:mm")}
                  ampm={false}
                />
                <p className="p-2 text-2xl">-</p>

                <TimePicker
                  label="End Time"
                  value={endTime}
                  onChange={(newValue) => {
                    setEndTime(newValue);
                  }}
                  minTime={dayjs("09:00", "HH:mm")}
                  maxTime={dayjs("17:00", "HH:mm")}
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
            <div className="p-2 pt-10">
              <h3 className="text-white text-3xl mb-10 mt-4 font-serif font-bold tracking-wide">
                Your Bulldog's Babysitter,
                <br /> Your Time Choices
              </h3>
              <p className="pr-4 font-serif text-gray-700 ">
                With 'Your Bulldog's Babysitter, Your Time Choices,' you're in
                control of crafting the perfect playdate for your furry friend.
                Whether it's an energetic morning romp or a cozy afternoon
                cuddle, our app ensures that every moment aligns with your
                bulldog's unique preferences.
              </p>
            </div>
          </div>
        </div>
        <Toaster />
      </LocalizationProvider>
    </>
  );
}
