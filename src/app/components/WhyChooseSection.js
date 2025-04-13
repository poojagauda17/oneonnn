"use client";

import React, { useState } from "react";
import "./WhyChooseSection.css";

const data = [
  {
    title: "Exceptional Quality and Taste",
    content:
      "Discover unparalleled quality with our beverages, meticulously crafted from premium natural ingredients like real fruit pulps and pure spring water for a refreshing and delightful experience.",
  },
  {
    title: "Commitment to Health",
    content:
      "We prioritize wellness by avoiding harmful additives and offering low-sugar or sugar-free options to support a healthy lifestyle.",
  },
  {
    title: "Innovative and Diverse Product Range",
    content:
      "From classic flavors to bold new blends, our ever-evolving lineup ensures there's a perfect drink for every taste and occasion.",
  },
  {
    title: "Unparalleled Customer Service",
    content:
      "Our team is dedicated to exceptional support, timely delivery, and customer satisfaction across all channels.",
  },
];

export default function WhyChooseUsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="why-choose-us-section">
      <div className="choose-container">
        <div className="choose-left">
          <h2 className="choose-heading">
            The Perfect Blend of Health and Taste
          </h2>
          <div className="choose-list">
            {data.map((item, index) => (
              <div
                key={index}
                className={`choose-item ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <h4>{item.title}</h4>
                <div
                  className="choose-content"
                  style={{ maxHeight: index === activeIndex ? "200px" : "0px" }}
                >
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="choose-right">
          <img src="/images/WCU.png" alt="Why Choose Us" />
        </div>
      </div>
    </section>
  );
}
