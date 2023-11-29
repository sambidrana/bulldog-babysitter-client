import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookNow = () => {
  return (
    <>
      <div className="flex items-center justify-around bg-gradient-to-r from-[#A9C274] to-lime-100 pt-16 pb-16 shadow-inner">
        {/* for book now button */}
        <div>
          <div className="flex items-center justify-center flex-shrink">
            <Image
              src={"/booknow/frenchie1.png"}
              width={250}
              height={250}
              alt="Frenchie1"
            />
          </div>
          <div className="bg-white px-24 py-14 rounded-3xl flex flex-col justify-center items-center shadow-xl">
            <p className="text-2xl">Every Bulldog Deservs a</p>
            <p className="text-2xl">Special Day!</p>
            <p className="text-xl">Secure Yours with a Click</p>
            <div className="flex items-center justify-center mt-10">
              <Link
                href={"/booking"}
                className="bg-[#8FAEFD] text-white font-bold py-2 px-8 rounded-lg hover:bg-[#6d95fa] hover:shadow-md "
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookNow;
