import { auth } from "@clerk/nextjs";
import React from "react";
import CalendarApp from "../(components)/CalendarApp";
import Footer from "../(components)/Footer";
import MUICalendar from "../(components)/MUICalendar";

const BookingPage = () => {
  const { userId } = auth();

  return (
    <>
      {/* <CalendarApp /> */}
      <div className="mt-6">
        <MUICalendar userId={userId} />
        <Footer />
      </div>
    </>
  );
};

export default BookingPage;
