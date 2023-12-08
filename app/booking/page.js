import { auth } from "@clerk/nextjs";
import React from "react";
import CalendarApp from "../(components)/CalendarApp";
import MUICalendar from "../(components)/MUICalendar";

const BookingPage = () => {
  const { userId } = auth();

  return (
    <>
      {/* <CalendarApp /> */}
        <MUICalendar userId={userId} />
    </>
  );
};

export default BookingPage;
