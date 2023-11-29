"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "../../styles/Calendar.css"
import { compareAsc, format, add } from "date-fns";
import { INTERVAL, STORE_CLOSING_TIME, STORE_OPENING_TIME } from "@/constants/config";

const CalendarApp = () => {
  const [date, setDate] = useState({
    justDate: null,
    dateTime: null,
  });

  console.log(date.dateTime)
  const getTimes = () => {
    if (!date.justDate) return;

    const { justDate } = date;

    const beginning = add(justDate, { hours: STORE_OPENING_TIME }); //assuming daycare opens at 9
    const end = add(justDate, { hours: STORE_CLOSING_TIME }); // and closes at 5
    const interval = INTERVAL; 

    const times = [];
    for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
      times.push(i);
    }
    return times;
  };
  const times = getTimes();

  return (
    <div className="w-screen mt-44 ml-20 flex flex-col justify-center items-start">
      {date.justDate ? (
        <div className="flex gap-3">
          {times?.map((time, i) => (
            <div key={`time-${i}`} className="rounded-sm bg-gray-100 p-2">
              <button
                type="button"
                onClick={() => setDate((prev) => ({ ...prev, dateTime: time }))}
              >
                {format(time, "kk:mm")}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <Calendar
          minDate={new Date()}
          className="REACT-CALENDAR p-2 m-4"
          view="month"
          onClickDay={(date) =>
            setDate((prev) => ({ ...prev, justDate: date }))
          }
        />
      )}
    </div>
  );
};

export default CalendarApp;
