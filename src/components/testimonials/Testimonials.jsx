import React from "react";
import "./testimonials.css";
import { BsFillPersonFill } from "react-icons/bs";
// import Swiper core and required modules
import { Pagination } from "swiper";
import { Autoplay } from "swiper";

import { Swiper, SwiperSlide, autoplay } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: <BsFillPersonFill />,
    title: "Future Client",
    review: "Hopefully Pretty Good",
  },
  {
    avatar: <BsFillPersonFill />,
    title: "Future Client",
    review: "Hopefully Pretty Good",
  },
  {
    avatar: <BsFillPersonFill />,
    title: "Future Client",
    review: "Hopefully Pretty Good",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2 style={{ color: "#d83f87" }}>Testimonials</h2>

      <Swiper
        className="container testimonals__container"
        // install Swiper modules
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}>
        {data.map(({ avatar, title, review }, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <BsFillPersonFill size={44} />
            </div>
            <h5 className="client__name">{title}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
