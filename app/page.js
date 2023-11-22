import CalendarApp from "@/app/(components)/CalendarApp";
import { MemberForm } from "@/app/(components)/MemberForm";
import Navbar from "@/app/(components)/Navbar";
import React from "react";
import BookNow from "./(components)/BookNow";

const page = () => {
  return (
    <>
      <div>
        <BookNow />
        <CalendarApp />
        {/* <MemberForm /> */}
      </div>
    </>
  );
};

export default page;
