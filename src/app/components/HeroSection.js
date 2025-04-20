"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./HeroSection.css";

export default function HeroBanner({ bannerList = [] }) {
  console.log("Received bannerList in HeaderSection:", bannerList);
  if (!bannerList.length) {
    return <p>Loading banners...</p>; // optional fallback
  }
  return (
    <section className="hero-banner">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        {bannerList.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide"
              style={{ backgroundColor: slide.background }}
            >
              <div className="hero-content">
                {slide.title && <h4>{slide.title}</h4>}
                {slide.highlight && <h1>{slide.highlight}</h1>}
              </div>
              <div className="banner-hero-image">
                <img
                  src={slide.image || slide.imageUrl}
                  alt={slide.title || `Banner ${index + 1}`}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
