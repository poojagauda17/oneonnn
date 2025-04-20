"use client";

import Image from "next/image";
import "./AllFlovorsSection.css";
import Link from "next/link";


export default function HeroOrangeSection() {
  return (
    <section className="hero-orange-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>The Perfect Blend of  Health and Taste</h1>
          <p>
            Discover unparalleled quality with our beverages, meticulously crafted from
            premium natural ingredients like real fruit pulps and pure spring water
            for a refreshing and delightful experience.
          </p>
          <button className="hero-btn">
            <Link href="ourstory">Read More</Link>
          </button>
        </div>
        <div className="hero-image-box">
          <Image
            src="/image/2.jpg"
            alt="Orange Cans"
            width={400}
            height={300}
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}
