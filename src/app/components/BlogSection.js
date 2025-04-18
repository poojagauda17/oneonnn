"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./BlogSection.css";

const blogArticles = [
  {
    image: "/images/blog1.jpg",
    caption:
      "CONTESTALERT!! Want a car without the down-payment? We got you! Join the contest and #WinWithHana!",
  },
  {
    image: "/images/blog2.jpg",
    caption:
      "CONTESTALERT!! Want a car without the down-payment? We got you! Join the contest and #WinWithHana!",
  },
  {
    image: "/images/blog3.jpg",
    caption:
      "CONTESTALERT!! Want a car without the down-payment? We got you! Join the contest and #WinWithHana!",
  },
  {
    image: "/images/blog3.jpg",
    caption:
      "CONTESTALERT!! Want a car without the down-payment? We got you! Join the contest and #WinWithHana!",
  },
  {
    image: "/images/blog3.jpg",
    caption:
      "CONTESTALERT!! Want a car without the down-payment? We got you! Join the contest and #WinWithHana!",
  },
  {
    image: "/images/blog3.jpg",
    caption:
      "CONTESTALERT!! Want a car without the down-payment? We got you! Join the contest and #WinWithHana!",
  },
  {
    image: "/images/blog3.jpg",
    caption:
      "CONTESTALERT!! Want a car without the down-payment? We got you! Join the contest and #WinWithHana!",
  },
];

export default function BlogCarousel({ blogList = [] }) {
  console.log("Received blog:", blogList);

  return (
    <section className="blog-carousel">
      <h2 className="blog-carousel-heading">
        Interesting And Useful Articles From Our Blog
      </h2>

      <Swiper
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
        {(blogList || []).map((article, index) => (
          <SwiperSlide key={index} className="blog-slide">
            <div className="blog-slide-inner">
              <img
                src={article.image || article.imageUrl}
                alt={`Blog ${index + 1}`}
                className="blog-image"
              />
              <p className="blog-caption">
                {article.title || article.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
