"use client";

import React from "react";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src="/images/WCU.png" alt="About ONEON" />
        </div>
        <div className="about-content">
          <h2>About ONEON Soft Drinks</h2>
          <p>
            At ONEON, we believe in refreshing the world with bold flavors,
            vibrant energy, and a commitment to quality. Our soft drinks are
            crafted with the finest ingredients, infused with unique tastes, and
            designed to deliver a truly satisfying experience.
          </p>
          <p>
            From the zing of Mint Lemon to the punch of classic cola, ONEON
            celebrates every sip. Whether you're chilling with friends,
            energizing after a workout, or just quenching your thirst, there's a
            ONEON flavor waiting for you.
          </p>
        </div>
      </div>
    </section>
  );
}
