// components/CallToActionSection.jsx
"use client";

import React, { useState, useEffect } from "react";
import "./CalltoAction.css";

const CallToActionSection = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-box">
          <img src="/icons/icon1.png" alt="Why Choose Us" />
          <h3>Why choose us</h3>
          <p>
            We want to be the first choice in all of our beverages existing and
            in pipelines throughout the country
          </p>
          <a href="/whyChooseUs">KNOW MORE</a>
        </div>
        <div className="cta-box">
          <img src="/icons/icon2.png" alt="Distribution Centre" />
          <h3>Distribution Centre</h3>
          <p>
            Hana, the refreshing organic drink, has captivated taste buds across
            various regions, including INDIA and GCC Countries.
          </p>
          <a href="/whyChooseUs">GET IN TOUCH</a>
        </div>
        <div className="cta-box">
          <img src="/icons/icon3.png" alt="Need Franchise" />
          <h3>Need Franchise</h3>
          <p>
            Success in franchising often depends on your dedication, adherence
            to the franchisor's systems.
          </p>
          <a href="#become-partner">BECOME OUR PARTNER</a>
        </div>
      </div>

      {showArrow && (
        <button className="scroll-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </section>
  );
};

export default CallToActionSection;
