"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./HeaderSection.css";

const slides = [
  {
    image: "/images/HeroBanner1.jpg",
  },
  {
    image: "/images/HeroBanner1.jpg",
  },
  {
    // title: "Lively Lime Spark",
    // highlight: "Refresh Your Senses",
    image: "/images/HeroBanner1.jpg",
    // background: "#E9D127",
  },
];

export default function HeroBanner() {
  return (
    <section className="hero-banner">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide"
              style={{ backgroundColor: slide.background }}
            >
              <div className="hero-content">
                {/* <h4>{slide.title}</h4> */}
                {/* <h1>{slide.highlight}</h1> */}
              </div>
              <div className="hero-image">
                <img src={slide.image} alt={slide.title} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
