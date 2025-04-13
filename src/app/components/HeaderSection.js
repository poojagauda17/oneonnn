"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./HeaderSection.css";

export default function HeaderSection() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isActive = (path) => pathname === path;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("stockist-modal-overlay")) {
      setOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".nav-links") && !e.target.closest(".hamburger")) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="navbar">
      <div className="header-container">
        <div className="logo">ONEONNN</div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link
            href="/"
            className={isActive("/our-brands") ? "nav-link active" : "nav-link"}
          >
            Home
          </Link>
          <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className={`nav-link ${dropdownOpen ? "active" : ""}`}>
              About
            </span>
            <div className={`dropdown-content ${dropdownOpen ? "show" : ""}`}>
              <Link href="/ourstory" className="nav-link">
                Our Story
              </Link>
              <Link href="/whyChooseUs" className="nav-link">
                Why Choose Us
              </Link>
              <Link href="/distributers" className="nav-link">
                Our Distributers
              </Link>
            </div>
          </div>

          <Link
            href="/product"
            className={isActive("/product") ? "nav-link active" : "nav-link"}
          >
            Products
          </Link>
          <Link
            href="/blog"
            className={isActive("/blog") ? "nav-link active" : "nav-link"}
          >
            Our Blog
          </Link>
          <Link
            href="/contact"
            className={isActive("/contact") ? "nav-link active" : "nav-link"}
          >
            Contact Us
          </Link>

          <button
            className="stockist-btn mobile-only"
            onClick={() => setOpen(true)}
          >
            Become a Super Stocker
          </button>
        </nav>
      </div>

      {open && (
        <div
          className="stockist-modal-overlay fullscreen"
          onClick={handleOverlayClick}
        >
          <div className="stockist-modal fullscreen-modal">
            <button className="close-btn" onClick={() => setOpen(false)}>
              ✕
            </button>
            <h2>Contact Us</h2>
            <form className="stockist-form">
              <div className="row">
                <input
                  type="text"
                  className="animated-input"
                  placeholder="First name*"
                  required
                />
                <input
                  type="text"
                  className="animated-input"
                  placeholder="Last name*"
                  required
                />
              </div>
              <div className="row">
                <input
                  type="email"
                  className="animated-input"
                  placeholder="Email*"
                  required
                />
                <input
                  type="text"
                  className="animated-input"
                  placeholder="Company name*"
                  required
                />
              </div>
              <input
                type="text"
                className="animated-input"
                placeholder="Phone number"
              />
              <select className="animated-input inquiry-select" required>
                <option value="">Please Select</option>
                <option value="general">General Inquiry</option>
                <option value="distributor">
                  Bottler & Distributor Inquiry
                </option>
              </select>
              <label className="checkbox">
                <input type="checkbox" /> I agree to receive marketing
                communications
              </label>
              <button type="submit" className="submit-btn">
                Contact Us
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
