"use client";

import Image from "next/image";
import Link from "next/link";
import "./AboutSection.css";
const GRID_SIZE = 5;

export default function AboutSection() {
  const totalTiles = GRID_SIZE * GRID_SIZE;

  return (
    <section className="about-section-section">
   <div className="about-section">
   <div className="about-left">
   {/* <Image
          src="/image/Image.png"
          alt="Green Can"
          width={500}
          height={500}
          className="can-image"
        /> */}
   <div className="split-image-section">
      <div className="image-fragments">
        {Array.from({ length: totalTiles }).map((_, i) => {
          const x = (i % GRID_SIZE) * (100 / (GRID_SIZE - 1));
          const y = Math.floor(i / GRID_SIZE) * (100 / (GRID_SIZE - 1));
          return (
            <div
              key={i}
              className="fragment"
              style={{
                backgroundPosition: `${x}% ${y}%`,
                animationDelay: `${(i % GRID_SIZE + Math.floor(i / GRID_SIZE)) * 150}ms`,
              }}
            />
          );
        })}
      </div>

    </div>
       
      </div>

      <div className="about-right">
        <h1 className="about-heading">
          The Perfect Blend of Health and Taste
        </h1>
        <p className="about-description">
          Discover unparalleled quality with our beverages, meticulously crafted from premium
          natural ingredients like real fruit pulps and pure spring water for a refreshing and
          delightful experience.
        </p>
        <button className="about-button">
          <Link href="about">
          Read More
          </Link>
        </button>
      </div>
   </div>
    </section>
  );
}
