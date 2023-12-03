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
    try {
      const response = await axios.post(
        "http://localhost:3000/api/userbookings",
        userBookingInfo
      );
      if (response.status === 200 && response.data) {
        console.log("Data sent: ", response);
      } else {
        console.log("Data sent but something failed", response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="pt-24 mt-24 ml-20">
          <div className="flex items-center p-2">
            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={(newValue) => {
                setStartDate(newValue);
              }}
              minDate={dayjs(new Date())}
            />
            <p className="p-2 text-2xl">-</p>
            <DatePicker
              label="End Date"
              value={endDate}
              onChange={(newValue) => {
                setEndDate(newValue);
              }}
              minDate={dayjs(new Date())}
            />
          </div>
          <div className="flex items-center p-2">
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
          <button
            className="p-2 px-10 bg-blue-100 rounded-md"
            onClick={handleSubmit}
          >
            Book
          </button>
        </div>
      </LocalizationProvider>
    </>
  );
}
