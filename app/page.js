import React from "react";
import AboutUs from "./(components)/AboutUs";
import BookNow from "./(components)/BookNow";
import Gallery from "./(components)/Gallery";
import Testimonials from "./(components)/Testimonials";
import ContactUs from "./ContactUs";

const page = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <BookNow />
        <AboutUs />
        <Gallery />
        <Testimonials />
        <ContactUs />
      </div>
    </>
  );
};

export default page;
