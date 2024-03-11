import Image from "next/image";
import React from "react";
import TestimonialCard from "../(components)/TestimonialCard";

const testimonialObj = [
  {
    name: "Karen",
    image: "/testimonial/test1.png",
    review:
      "My Frenchie had the best time on her extended holiday. She’s made tons of new friends and as she is a puppy it’s been great for socialisation. Thank you for taking such amazing care of Wilma and for sending video updates. We’ll be back",
  },
  {
    name: "Tushar G",
    image: "/testimonial/test2.png",
    review:
      "i am so happy, that I found Jacki!! Astro spent overnight & day at “the bulldog babysitter” place and he had an fantastic time there!! We’ll definitely be going back there. He mingled with all other fur babies, loved all. Now his just can’t keep his eyes open. Thanks again",
  },
  {
    name: "Sam",
    image: "/testimonial/test3.png",
    review:
      "Thankyou Jackie for taking such excellent care of our frenchie Luna over the Christmas/New Year period. The communication and level of care Luna received was excellent. It was really lovely to get updates of what the pack was up to while we were away. I would not hesitate to use Jackie again, the dogs are very well looked after and became part of the family during their stay. Fantastic!",
  },
  {
    name: "John",
    image: "/testimonial/test3.png",
    review:
      "I just picked up my 10 month old girl from Jackie this morning. She definitely enjoyed her holiday as much as I did, maybe more. It was my first time leaving her and my only concern was she wouldn’t want to come back home! I would highly recommend leaving your Frenchies with Jackie she is really amazing and will definitely be using her again. 😍",
  },
  {
    name: "Sam",
    image: "/testimonial/test3.png",
    review:
      "Thankyou Jackie for taking such excellent care of our frenchie Luna over the Christmas/New Year period. The communication and level of care Luna received was excellent. It was really lovely to get updates of what the pack was up to while we were away. I would not hesitate to use Jackie again, the dogs are very well looked after and became part of the family during their stay. Fantastic!",
  },
  {
    name: "Tushar G",
    image: "/testimonial/test2.png",
    review:
      "i am so happy, that I found Jacki!! Astro spent overnight & day at “the bulldog babysitter” place and he had an fantastic time there!! We’ll definitely be going back there. He mingled with all other fur babies, loved all. Now his just can’t keep his eyes open. Thanks again",
  },
];

const TestimonialsPage = () => {
  return (
    <>
      <div>
        <div>
        <div className="grid grid-cols-1 items-center justify-center gap-2 p-12 2xl:p-36 md:grid-cols-2 md:p-36 mt-1 bg-gradient-to-r from-[#c0dc84] to-[#A9C264] md:w-auto min-h-[50vh]">
            <div className="grid items-center justify-center md:w-auto">
              <Image
                src="/testimonial/testimonial3.jpeg"
                width={500}
                height={500}
                className="border-4 border-white drop-shadow-[2px_15px_5px_rgba(0,0,0,0.5)] 2xl:w-fit"
                />
            </div>
            <div className="mt-10 text-white">
            <h2 className="mb-4 text-xl md:text-3xl font-serif font-bold tracking-wide">
                Testimonials
              </h2>
              <p className="p-2 md:text-lg font-serif tracking-wide">
                Discover why bulldog owners everywhere trust us for caring,
                reliable, and bulldog-savvy babysitting services.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center p-10 md:pl-28 md:pr-28 ">
            {testimonialObj.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
        <div className="flex justify-end mr-20 mt-10 font-extralight tracking-wider mb-10">
          <div className=" text-white text-sm   bg-[#A9C274] rounded-lg p-2 flex items-center gap-1 hover:bg-[#e5e096] hover:shadow-md">
            <a
              href={"https://www.facebook.com/thebulldogbabysitter/reviews"}
              target="_blank"
            >
              Check out more
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default TestimonialsPage;
