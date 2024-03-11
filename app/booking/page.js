import { auth } from "@clerk/nextjs";
import React from "react";
import MUICalendar from "../(components)/MUICalendar";

const BookingPage = () => {
  const { userId } = auth();

  return (
    <>
      <div className="mt-1">
        <MUICalendar userId={userId} />
      </div>
    </>
  );
};

export default BookingPage;
