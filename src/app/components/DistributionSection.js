"use client";

import React from "react";
import "./DistributionSection.css";

const distributors = [
  { logo: "/distributors/dmart.png", name: "D-Mart" },
  { logo: "/distributors/reliance.png", name: "Reliance Retail" },
  { logo: "/distributors/spencer.png", name: "Spencer's" },
  { logo: "/distributors/bigbasket.png", name: "Big Basket" },
  { logo: "/distributors/metro.png", name: "Metro" },
];

export default function DistributionSection() {
  return (
    <section className="distribution-grid-section">
      <div className="distribution-grid-container">
        {/* Left Side: Truck Image */}
        <div className="distribution-image">
          <img src="/images/Refresh-Your.jpg" alt="distribution truck" />
        </div>

        {/* Right Side: Text Content */}
        <div className="distribution-content">
          <h2>Our Distribution Centers</h2>
          <p>
            Hana, the refreshing organic drink, has captivated taste buds across
            various regions, including INDIA and GCC Countries. Our distribution
            centers are at the heart of our supply chain, strategically designed
            to ensure that our products reach you efficiently, reliably, and in
            perfect condition. With state-of-the-art facilities, cutting-edge
            technology, and dedicated teams, we bridge the gap between our
            production lines and your doorstep, ensuring a seamless flow from
            order to delivery. We are committed to sustainable practices across
            all our distribution centres. Our efforts include, Energy-Efficient
            Operations, Eco-Friendly Packaging and Waste Reduction Programs.
          </p>
          <button className="distribution-btn">Know More About Us</button>
        </div>
      </div>
    </section>
  );
}
