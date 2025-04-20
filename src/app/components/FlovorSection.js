"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./FlovorSection.css";

const products = [
  { image: "/Flovors/1.jpg" },
  { image: "/Flovors/2.jpg" },
  { image: "/Flovors/3.jpg" },
  { image: "/Flovors/4.jpg" },
  { image: "/Flovors/5.jpg" },
  { image: "/Flovors/6.jpg" },

];

export default function FlovorCarousel() {
  const [centerIndex, setCenterIndex] = useState(2); // Start from center

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getOffset = (i) => {
    const offset = i - centerIndex;
    const half = Math.floor(products.length / 2);
    if (offset > half) return offset - products.length;
    if (offset < -half) return offset + products.length;
    return offset;
  };

  return (
   <div className="flavor-carousel-wrapper">
     <div className="flavor-carousel">
      {products.map((product, i) => {
        const offset = getOffset(i);
        return (
          <div
            key={i}
            className="flavor-card"
            style={{
              transform: `translateX(${offset * 290}px) scale(${1 - Math.abs(offset) * 0.2})`,
              zIndex: 10 - Math.abs(offset),
              opacity: Math.abs(offset) > 2 ? 0 : 1,
            }}
            
          >
            <Image
              src={product.image}
              alt="flavor"
              width={300}
              height={400}
              className="flavor-image"
            />
          </div>
        );
      })}
    </div>
   </div>
  );
}
