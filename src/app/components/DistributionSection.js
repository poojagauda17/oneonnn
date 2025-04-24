"use client";

import React from "react";
import "./DistributionSection.css";
import Link from "next/link";



export default function DistributionSection() {
  return (
    <section className="distribution-section">
      <div className="distribution-wrapper">
        {/* Left Image */}
        <div className="distribution-left">
          <img src="/image/3.jpg" alt="Distribution Truck" /> 
        </div>

        {/* Right Text */}
        <div className="distribution-right">
          <h1>Our Distribution Centers</h1>
          <p>
            Hana, the refreshing organic drink, has captivated taste buds across
            various regions, including INDIA and GCC Countries. Our distribution
            centers are at the heart of our supply chain, strategically designed
            to ensure that our products reach you efficiently, reliably, and in
            perfect condition. With state-of-the-art facilities, cutting-edge
            technology, and dedicated teams, we bridge the gap between our
            production lines and your doorstep, ensuring a seamless flow from
            order to delivery.
          </p>
          <button className="read-more-button">
            <Link href="/distribution">Read More</Link>
          </button>
        </div>
      </div>
    
    </section>
  );
}
