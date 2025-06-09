"use client";

import { useUser } from "@clerk/nextjs";
import React from "react";
import MUICalendar from "../(components)/MUICalendar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const BookingPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/"); // redirect to home if not signed in
    }
  }, [isLoaded, isSignedIn]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="mt-1">
      <MUICalendar userId={user?.id} />
    </div>
  );
};

export default BookingPage;











/*
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


*/