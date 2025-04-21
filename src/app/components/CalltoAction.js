"use client";

import "./CalltoAction.css";
import { FaMagic, FaBullseye, FaStar } from "react-icons/fa";

export default function FranchiseSection() {
  return (
    <section className="franchise-section">
      <div className="franchise-joined-card">
        <div className="card-column left">
         <div className="pencil-img">
         <img src="/pencil.png"/>
         </div>
          <h3>Why choose us</h3>
          <p>
            We want to be the first choice in all of our beverages existing and
            in pipelines throughout the country.
          </p>
          <a href="/ourStory" className="franchise-link">KNOW MORE</a>
        </div>

        <div className="card-column center">
        <div className="circle-img">
         <img src="/circle.png"/>
         </div>
          <h3>Distribution Centre</h3>
          <p>
            Hana, the refreshing organic drink, has captivated taste buds across
            various regions, including INDIA and GCC Countries.
          </p>
          <a href="/distribution" className="franchise-link">GET IN TOUCH</a>
        </div>

        <div className="card-column right">
        <div className="star-img">
         <img src="/star.png"/>
         </div>
          <h3>Need Franchise</h3>
          <p>
            Success in franchising often depends on your dedication,
            adherence to the franchisor’s systems.
          </p>
          <a href="/Franchise" className="franchise-link">BECOME OUR PARTNER</a>
        </div>
      </div>
    </section>
  );
}
