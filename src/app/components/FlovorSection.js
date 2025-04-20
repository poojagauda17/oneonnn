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
];

export default function FlovorCarousel() {
  const [centerIndex, setCenterIndex] = useState(2); // 3rd item is center initially

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % products.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // To handle circular reference
  const getItem = (offset) => {
    const len = products.length;
    return products[(centerIndex + offset + len) % len];
  };

  return (
    <div className="coverflow-wrapper">
      <div className="coverflow">
        <div className="card far-left">
          <Image src={getItem(-2).image} alt="flavor" width={300} height={400} />
        </div>
        <div className="card left">
          <Image src={getItem(-1).image} alt="flavor" width={300} height={400} />
        </div>
        <div className="card center">
          <Image src={getItem(0).image} alt="flavor" width={300} height={400} />
        </div>
        <div className="card right">
          <Image src={getItem(1).image} alt="flavor" width={300} height={400} />
        </div>
        <div className="card far-right">
          <Image src={getItem(2).image} alt="flavor" width={300} height={400} />
        </div>
      </div>
    </div>
  );
}
