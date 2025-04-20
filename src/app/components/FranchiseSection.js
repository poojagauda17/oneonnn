"use client";
import React from "react";
import "./FranchiseSection.css";

const JoinPartnershipSection = () => {
  return (
    <div className="join-section">
      <div className="form-container">
        <h2>Join our partnership</h2>
        <form>
          <div className="form-grid">
            <input type="text" placeholder="Full Name *" required />
            <input type="text" placeholder="Business Name (if any)" />
            <input type="email" placeholder="Email Address *" required />
            <input type="text" placeholder="Contact Number *" required />
            <input type="text" placeholder="City / Location *" required />
            <select required>
              <option value="">Type of Enquiry *</option>
              <option value="General">General</option>
              <option value="Distribution">Distribution</option>
              <option value="Collaboration">Collaboration</option>
            </select>
          </div>
          <textarea placeholder="Message *" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>

      <div className="text-overlay">
        <h2>Refresh Your Taste Buds With Our Tasty And Healthy Drinks</h2>
        <p>
          Hana, Non-alcoholic healthy drinks with a delicious range of cold
          drinks featuring Ginger special, Fresh Nimbu, Fizz Kokum, and Grape
          Pulp. But our expertise doesn’t stop there, we are continually
          innovating tastes that sprinkle your body.
        </p>
      </div>
    </div>
  );
};

export default JoinPartnershipSection;
