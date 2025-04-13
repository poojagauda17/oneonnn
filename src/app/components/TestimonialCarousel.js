"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./TestimonialCarousel.css";

const testimonials = [
  {
    title: "Super refreshing drinks..",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    name: "Charley Pratt",
  },
  {
    title: "One of the best drinks",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    name: "Charley Pratt",
  },
  {
    title: "One of the best drinks",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    name: "Charley Pratt",
  },
  {
    title: "One of the best drinks",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    name: "Charley Pratt",
  },
  {
    title: "One of the best drinks",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    name: "Charley Pratt",
  },
  {
    title: "One of the best drinks",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    name: "Charley Pratt",
  },
  {
    title: "One of the best drinks",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    name: "Charley Pratt",
  },
];

export default function TestimonialCarousel() {
  return (
    <section className="testimonial-carousel">
      <h2 className="testimonial-heading">What our customers say</h2>
      <Swiper
        className="testimonial-swiper"
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index} className="testimonial-slide">
            <h3>{t.title}</h3>
            <p>{t.text}</p>
            <strong>{t.name}</strong>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
