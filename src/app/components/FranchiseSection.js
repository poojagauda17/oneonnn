"use client";
import React from "react";
import "./FranchiseSection.css";
import { FaMapMarkerAlt } from "react-icons/fa";


export default function Franchise() {
  return (
    <div className="franchise-page">
       {/* Distribution Section */}
       <section className="join-distribution-section">
      {/* Top Text Section */}
      <div className="join-intro">
        <h2 className="highlight-heading">
          Join our partnership, where your ideas<br />meet our expertise
        </h2>
        <p className="sub-text">
          Starting a franchise can be a significant business opportunity, but it’s crucial to conduct
          thorough research, understand the terms of the franchise agreement, and assess whether
          it aligns with your goals and resources before entering into a franchise arrangement.
        </p>
      </div>

      {/* Distributions */}
      <h3 className="distribution-title">
        <h2>
        Our Distributions
        </h2>
      </h3>

      <div className="distribution-card-wrapper">
        <div className="distribution-card">
          <span className="location-icon pink"><FaMapMarkerAlt /></span>
          <h4>INDIA</h4>
          <p>Oneonn Beverages, Kharadi, Pune, Maharashtra, India</p>
        </div>

        <div className="distribution-card active">
          <span className="location-icon white"><FaMapMarkerAlt /></span>
          <h4>SAUDI ARABIA</h4>
          <p>Riyadh, Dammam, Jeddah</p>
        </div>

        <div className="distribution-card">
          <span className="location-icon pink"><FaMapMarkerAlt /></span>
          <h4>DUBAI</h4>
          <p>Sharjah, Abu Dhabi</p>
        </div>
      </div>
    </section>

      {/* Hero with Background Image & Form */}
      <section className="franchise-hero">
      <section className="franchise-form-wrapper">
  <div className="form-container">
    <h2 className="form-heading">Join our partnership</h2>
    <div className="form-grid">
      <input type="text" placeholder="Full Name *" />
      <input type="text" placeholder="Business Name (if any)" />
      <input type="email" placeholder="Email Address *" />
      <input type="text" placeholder="Contact Number *" />
      <input type="text" placeholder="City / Location *" />
      <select>
        <option value="">Type of Enquiry *</option>
        <option value="general">General</option>
        <option value="distribution">Distribution</option>
        <option value="collaboration">Collaboration</option>
      </select>
      <textarea placeholder="Message *" rows={4}></textarea>
    </div>
    <button className="send-btn">Send</button>
  </div>
</section>


        {/* <div className="hero-text">
          <h2>Refresh Your Taste Buds With Our Tasty And Healthy Drinks</h2>
          <p>
            Hana, Non-alcoholic healthy drinks with a delicious range of cold drinks
            featuring Ginger special, Fresh Nimbu, Fizz Kokum, and Grape Pulp. But our
            expertise doesn’t stop there, we are continually innovating tastes that sprinkle
            your body.
          </p>
        </div> */}
      </section>

     
    </div>
  );
}
