import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookNow = () => {
  return (
    <>
      <div className="flex items-center justify-around bg-gradient-to-r from-[#A9C274] to-lime-100 shadow-inner pt-28 pb-28">
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
                className="bg-[#c8b6ff] text-white font-bold py-2 px-8 rounded-lg hover:bg-[#a78df6] hover:shadow-md "
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
