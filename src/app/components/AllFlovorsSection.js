"use client";

import Image from "next/image";
import "./AllFlovorsSection.css";
import Link from "next/link";

import { motion } from "framer-motion";


export default function HeroOrangeSection() {
  const tiles = Array.from({ length: 64 });
  return (
    <section className="hero-orange-section">
      <div className="hero-content">
        <div className="flovors-section-left">
        <div className="hero-text">
          <h1>The Perfect Blend of  Health and Taste</h1>
          <p>
            Discover unparalleled quality with our beverages, meticulously crafted from
            premium natural ingredients like real fruit pulps and pure spring water
            for a refreshing and delightful experience.
          </p>
          <button className="read-more-button">
            <Link href="/ourStory">Read More</Link>
          </button>
        </div>
        </div>
        
        <div className="flovors-section-right">
          <div className="flovor-section-split-image-section">
          <div className="fragmented-container">
      {tiles.map((_, i) => {
        const row = Math.floor(i / 8);
        const col = i % 8;
        return (
          <div
            key={i}
            className="fragment-tile"
            style={{
              backgroundPosition: `${(col / 7) * 100}% ${(row / 7) * 100}%`,
              animationDelay: `${(row + col) * 100}ms`,
            }}
          ></div>
        );
      })}
    </div>
          </div>
        </div>


      
      </div>
      
    </section>
  );
}
