// components/DistributionDescriptionSection.jsx
"use client";

import React from "react";
import "./OurDistributionSection.css";

const DistributionDescriptionSection = () => {
  return (
    <section className="distribution-description">
      <div>
        <img
          src="/images/leaf.png"
          alt="Leaf Decoration"
          className="decorative-leaf"
        />

        <div className="text-content">
          <h2>Our Distribution Centre</h2>
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
          <p>
            Whether enjoyed during the scorching summers or as a delightful
            accompaniment to meals, Hana has become a go-to choice for those who
            seek a refreshing, guilt-free beverage option in the region.
          </p>
        </div>
      </div>
      <div className="map-section">
        <div className="map-wrapper">
          <img
            src="/images/india-zoom.jpg"
            alt="India Map"
            className="map-image"
          />
          <img
            src="/images/gcc-zzom.jpg"
            alt="Middle East Map"
            className="map-image"
          />
        </div>
      </div>
    </section>
  );
};

export default DistributionDescriptionSection;
