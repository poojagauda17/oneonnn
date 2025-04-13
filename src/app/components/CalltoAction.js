"use client";

import React from "react";
import "./CalltoAction.css";

export default function CallToActionSection() {
  return (
    <section className="cta-section">
      <div className="cta-overlay">
        <div className="cta-content">
          <h2>Join the Refreshment Revolution</h2>
          <p>
            Become a Super Stockist and take ONEON to every corner of the
            nation.
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  );
}
