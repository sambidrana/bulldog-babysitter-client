import Image from "next/image";
import React from "react";
import Carousel from "./Carousel";

const testimonialObj = [
  {
    image: "/testimonial/test1.png",
    review:
      "My Frenchie had the best time on her extended holiday. She’s made tons of new friends and as she is a puppy it’s been great for socialisation. Thank you for taking such amazing care of Wilma and for sending video updates. We’ll be back",
  },
  {
    image: "/testimonial/test2.png",
    review:
      "i am so happy, that I found Jacki!! Astro spent overnight & day at “the bulldog babysitter” place and he had an fantastic time there!! We’ll definitely be going back there. He mingled with all other fur babies, loved all. Now his just can’t keep his eyes open. Thanks again",
  },
  {
    image: "/testimonial/test3.png",
    review:
      "Thankyou Jackie for taking such excellent care of our frenchie Luna over the Christmas/New Year period. The communication and level of care Luna received was excellent. It was really lovely to get updates of what the pack was up to while we were away. I would not hesitate to use Jackie again, the dogs are very well looked after and became part of the family during their stay. Fantastic!",
  },
  
];

const Testimonials = () => {
  
  return (
    <div className="mt-36 mb-36 pl-4 pr-4">
      <Carousel autoSlide={false} autoSlideInterval={2000}>
        {testimonialObj.map((testimonial, index) => (
          <div key={index} className="text-center w-screen p-8 flex flex-col items-center justify-center shadow-lg">
            <Image
              src={testimonial.image}
              width={150}
              height={150}
              alt={`Testimonial ${index + 1}`}
              className="w-40 h-36 "
            />
            <p className="mt-12 p-4">{testimonial.review}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
