import React from "react";
import AboutUs from "./(components)/AboutUs";
import BookNow from "./(components)/BookNow";
import Gallery from "./(components)/Gallery";
import Testimonials from "./(components)/Testimonials";

const page = () => {
  return (
    <>
      <div>
        <BookNow />
        <AboutUs />
        <Gallery />
        <Testimonials />
      </div>
    </>
  );
};

export default page;
