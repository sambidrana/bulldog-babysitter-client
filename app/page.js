import React from "react";
import AboutUs from "./(components)/AboutUs";
import BookNow from "./(components)/BookNow";
import ContactUs from "./(components)/ContactUs";
import Featured from "./(components)/Featured";
import Footer from "./(components)/Footer";
import Gallery from "./(components)/Gallery";
import Testimonials from "./(components)/Testimonials";

const page = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Featured />
        <BookNow />
        <AboutUs />
        <Gallery />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default page;
