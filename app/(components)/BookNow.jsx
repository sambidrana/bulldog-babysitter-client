import Image from "next/image";
import React from "react";

const BookNow = () => {
  return (
    <>
      <div className="  w-full h-[80vh] flex items-center justify-around bg-[#A9C274] bg-opacity-50  ">
        {/* for calendar image */}
        <div className="">
          <Image src="/booknow/calendar.png" width={500} height={500} alt="Calendar Image" />
        </div>

        {/* for book now button */}
        <div>
          <div className="flex items-center justify-center">
            <Image src={"/booknow/frenchie1.png"} width={250} height={250} alt="Frenchie1" />
          </div>
          <div className="bg-white px-24 py-14 rounded-3xl">
            <p className="text-2xl">Every Bulldog Deservs a</p>
            <p className="text-2xl">Special Day!</p>
            <p className="text-xl">Secure Yours with a Click</p>
            <div className="flex items-center justify-center mt-10">
              <button className="bg-[#8FAEFD] text-white font-bold py-2 px-8 rounded-lg hover:bg-[#6d95fa]">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookNow;
