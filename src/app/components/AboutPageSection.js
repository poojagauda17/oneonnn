// components/CallToActionSection.jsx
"use client";

import React, { useState, useEffect } from "react";
import "./OurStory.css";

const OurStory = () => {
  return (
    <section>
      <div className="health-blend-section">
        <div className="text-side">
          {/* <h2>The Perfect Blend of Health and Taste</h2>
          <p>
            Our Company Swadeshi Food and Beverages – Hana Drinks, established
            in 2014 an innovative and dynamic company dedicated to Non-Alcoholic
            Healthy Drinks with a Delicious range of cold drinks and refreshing
            healthy drinks made with the finest natural ingredients. We’re
            passionate about providing healthy alternatives in the beverage
            market, without compromising on taste or quality.
          </p>
          <p>
            At Natural Drinks, we believe in using real fruits pulps, pure
            spring water, and minimal processing to create beverages that are
            good for you and good for the planet. Our commitment to
            sustainability extends to our sourcing practices, ensuring we
            partner with responsible farmers and utilize eco-friendly.
          </p> */}

          <h4>Who We Are</h4>
          <p>
          Oneonn is a proudly Indian cold drink brand based in Kharadi, Pune. We’re passionate about creating refreshing beverages that not only quench your thirst but also spark joy in every moment.
          </p>

          <h4>Our Story</h4>
          <p>
          Founded in 2018 with a love for fizzy fun and local pride, Oneonn started as a humble venture and quickly became a favorite in the neighborhood. With quality ingredients, irresistible taste, and vibrant branding, we’re on a mission to make every drink a celebration.
          </p>
          <h2>Mission & Vision</h2>
          <h4>Mission:</h4>
          <p>
          To deliver great-tasting, high-quality cold beverages that bring people together and keep them refreshed, always.
          </p>
          <h4>Vision:</h4>
          <p>
To become India’s most loved homegrown beverage brand — one sip, one smile, Oneonn at a time.
          </p>
        </div>

        <div className="image-side">
          <img src="/images/about.png" alt="Product Bottles" />
        </div>
      </div>
   
    </section>
  );
};

export default OurStory;
