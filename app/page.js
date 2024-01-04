import React from "react";
import AboutUs from "./(components)/AboutUs";
import BookNow from "./(components)/BookNow";
import ContactUs from "./(components)/ContactUs";
import Featured from "./(components)/Featured";
import Footer from "./(components)/Footer";
import Gallery from "./(components)/Gallery";
import Testimonials from "./(components)/Testimonials";
import UploadTest from "./(components)/UploadTest";

const page = () => {
  return (
    <>
      <div className="">
        <Featured />
        {/* <UploadTest /> */}
        {/* <BookNow />
        <AboutUs />
        <Gallery />
        <Testimonials />
        <ContactUs />
        <Footer /> */}
      </div>
    </>
  );
};

export default page;
