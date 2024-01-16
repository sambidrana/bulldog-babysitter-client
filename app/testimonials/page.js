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
          <div className="grid grid-cols-1 gap-2 p-12 md:grid-cols-2 md:p-24 mt-10 bg-[#A9C274]  ">
            <div className="grid items-center justify-center w-1/2  md:w-auto">
              <Image
                src="/testimonial/testHeader.png"
                height={250}
                width={350}
                className="rounded-lg p-1 bg-white"
              />
            </div>
            <div className="flex flex-col justify-center font-serif">
              <h2 className="text-2xl p-2 md:text-4xl text-white tracking-widest">
                Testimonials
              </h2>
              <p className="text-base md:text-lg tracking-wide p-2 text-white">
                Discover why bulldog owners everywhere trust us for caring,
                reliable, and bulldog-savvy babysitting services.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center p-10 ">
            {testimonialObj.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
