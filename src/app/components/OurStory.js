// components/CallToActionSection.jsx
"use client";

import React, { useState, useEffect } from "react";
import "./OurStory.css";

const OurStory = () => {
  return (
    <section>
      <div className="health-blend-section">
        <div className="text-side">
          <h2>The Perfect Blend of Health and Taste</h2>
          <p>
          Founded in 2018 with a love for fizzy fun and local pride, Oneonn started as a humble venture and quickly became a favorite in the neighborhood. With quality ingredients, irresistible taste, and vibrant branding, we’re on a mission to make every drink a celebration.
          </p>
          {/* <p>
            At Natural Drinks, we believe in using real fruits pulps, pure
            spring water, and minimal processing to create beverages that are
            good for you and good for the planet. Our commitment to
            sustainability extends to our sourcing practices, ensuring we
            partner with responsible farmers and utilize eco-friendly.
          </p> */}

          <h4>Try All Our Flavours</h4>
          <p>
            Being a reliable firm, we are offering a unique range of Soft Drinks
            with different Flavors.
          </p>

          <h4>Health Benefits</h4>
          <p>
            We are manufacturing and supplying a variety of Beverages which are
            processed using quality ingredients.
          </p>
        </div>

        <div className="image-side">
          <img src="/images/about.png" alt="Product Bottles" />
        </div>
      </div>
      <div className="vision-mission-section">
        <div className="vision-happy-section">
          <div className="text-column">
            <h2>
              A Splash of Happiness
              <br />
              in Every Bottle!
            </h2>

            <h3>Our Vision</h3>
            <p>
              We are aimed to develop products to empower/enforce the customers
              with improved performance in their daily life. We at Hana Drinks,
              will continue to conduct research for the Beverages that will
              contain optimum nutrition while taste and flavor shall gratify our
              customers by dispensing superior-quality, healthy, as well as
              tempting beverages for entire family members.
            </p>

            <h3>Our Mission</h3>
            <p>
              We want to be the first choice in all of our beverages existing
              and in pipelines throughout the country and also to embody global
              leadership through innovation, success and growth guided by an
              unwavering commitment to deliver high-quality, differentiated
              beverages focused on customer needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
