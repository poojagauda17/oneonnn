"use client";

import Image from "next/image";
import Link from "next/link";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section className="about-section-section">
   <div className="about-section">
   <div className="about-left">
        <Image
          src="/image/Image.png"
          alt="Green Can"
          width={500}
          height={500}
          className="can-image"
        />
       
      </div>

      <div className="about-right">
        <h1 className="about-heading">
          The Perfect Blend of <br /> Health and Taste
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
