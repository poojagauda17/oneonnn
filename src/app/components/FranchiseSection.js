// components/FranchiseIntroSection.jsx
"use client";

import React from "react";
import "./FranchiseSection.css";
const distributions = [
  {
    title: "INDIA",
    locations:
      "Karnataka, Kerela, Tamil Nadu, Hyderabad, Telangana, and Andhra Pradesh, Goa, Gujarat, Mumbai.",
    highlighted: false,
  },
  {
    title: "SAUDI ARABIA",
    locations: "Riyadh, Damam, Jeddah",
    highlighted: true,
  },
  {
    title: "DUBAI",
    locations: "Sharjah, Abu Dhabi",
    highlighted: false,
  },
];

const FranchiseIntroSection = () => {
  return (
    <div>
      <section className="franchise-intro">
        <div className="franchise-content">
          <h2>Join our partnership, where your ideas meet our expertise</h2>
          <p>
            Starting a franchise can be a significant business opportunity, but
            it’s crucial to conduct thorough research, understand the terms of
            the franchise agreement, and assess whether it aligns with your
            goals and resources before entering into a franchise arrangement.
          </p>
        </div>
        <div className="franchise-image">
          <img src="/images/franchise-banner.jpg" alt="Franchise Banner" />
        </div>
      </section>
      <section className="distribution">
        <h2 className="title">Our Distributions</h2>
        <div className="cards">
          {distributions.map((item, index) => (
            <div
              key={index}
              className={`card ${item.highlighted ? "highlighted" : ""}`}
            >
              <img
                src="/icons/marker.svg"
                alt="marker"
                className={`icon ${item.highlighted ? "invert" : ""}`}
              />
              <h3>{item.title}</h3>
              <p>{item.locations}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="ourPartnership-section">
        <div className="partnership-section">
          <div className="form-container">
            <h2>Join our partnership</h2>
            <form>
              <div className="form-row">
                <input type="text" placeholder="Name *" required />
                <input type="email" placeholder="Email *" required />
              </div>
              <div className="form-row">
                <input type="text" placeholder="Contact Number *" required />
                <input type="text" placeholder="City *" required />
              </div>
              <div className="form-row full">
                <textarea placeholder="Your Message *" required></textarea>
              </div>
              <button type="submit">Send</button>
            </form>
          </div>

          <div className="image-content">
            <h3>Refresh Your Taste Buds With Our Tasty And Healthy Drinks</h3>
            <p>
              Hana, Non-alcoholic healthy drinks with a delicious range of cold
              drinks featuring Ginger special, Fresh Nimbu, Fizz Kokum, and
              Grape Pulp. But our expertise doesn’t stop there, we are
              continually innovating tastes that sprinkle your body.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FranchiseIntroSection;
