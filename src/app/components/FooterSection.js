"use client";

import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";
import "./FooterSection.css";

export default function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-left">
          <img src="/logo.png" alt="logo" className="footer-logo" />
        </div>

        <div className="footer-links">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Our Brands</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Our Blog</a>
            </li>
            <li>
              <a href="#">Get in Touch</a>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>GET SOCIAL</h3>
          <div className="social-icons">
            <a href="#">
              <FaEnvelope />
            </a>
            <a href="#">
              <FaTimes />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
          <p>
            We are committed to providing our community with accurate and
            trustworthy information. Please contact us directly at{" "}
            <a href="mailto:feedback@rcgbi.com">feedback@oneonnn.com</a>
            with any questions about our sales and vendor opportunities.
          </p>
          <span className="footer-note">
            <a href="#">Terms of Use</a> <span className="dot">●</span> All
            rights reserved to Oneonnn 2025
          </span>
        </div>
      </div>
    </footer>
  );
}
