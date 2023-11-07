import React from "react";
import "./Testimonial.css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "../../data";
const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container container_testimonial"
        accordion
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {testimonials.map(({ id, image, name, designation, review }) => (
          <SwiperSlide key={id} className="testimonial">
            <div className="client_avatar">
              <img src={image} alt="One" />
            </div>
            <h5 className="client_name">
              {name}
              <h5>{designation}</h5>
            </h5>
            <small className="client_review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
