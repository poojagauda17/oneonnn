"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./HeaderSection.css";
import Image from "next/image";



export default function HeaderSection({ productList = [] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

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
        setProductOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <section className="hero-container">
      <header className="navbar">
        <div className="header-container">
          <div className="logo">
            <Link href="/">
          <img src="/oneonn-logo.png" alt="logo" className="header-logo" />
            </Link>

          </div>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
            <Link href="/" className={isActive("/") ? "nav-link active" : "nav-link"}>Home</Link>

            <div
              className="dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className={`nav-link ${dropdownOpen ? "active" : ""}`}>About</span>
              <div className={`dropdown-content ${dropdownOpen ? "show" : ""}`}>
                <Link href="/ourstory" className="nav-link">Our Story</Link>
                <Link href="/whyChooseUs" className="nav-link">Why Choose Us</Link>
                <Link href="/distribution" className="nav-link">Our Distributers</Link>
              </div>
            </div>

            <div
              className="product-hover-area"
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
            >
              <div className="dropdown">
                <span className={`nav-link ${productOpen ? "active" : ""}`}>Products</span>
              </div>

              <div className={`mega-menu ${productOpen ? "show" : ""}`}>
                <div className="mega-grid">
                  {productList.map((product, index) => (
                <Link href={`/product/${index}`} key={index}>
                <div className="product-tile">
                  <img src={product.product_image || product.imageUrl} alt={product.product_name} />
                  <p>{product.product_name}</p>
                </div>
              </Link>
              
                  ))}
                </div>
              </div>
            </div>

            <Link href="/blog" className={isActive("/blog") ? "nav-link active" : "nav-link"}>Our Blog</Link>
            <Link href="/contact" className={isActive("/contact") ? "nav-link active" : "nav-link"}>Contact Us</Link>

            <button className="stockist-btn mobile-only" onClick={() => setOpen(true)}>
              <img src="/stocker.png" className="stocker-img" />
              Become a Supplier
            </button>
          </nav>
        </div>

        {open && (
  <div className="stockist-modal-overlay fullscreen" onClick={handleOverlayClick}>
    <div className="stockist-modal fullscreen-modal">
      <button className="close-btn" onClick={() => setOpen(false)}>✕</button>
      <h2 className="modal-heading">
      <image src="/stocker.png" className="stocker-img">
      Become a Supplier
              </image>
      </h2>
      <p className="modal-subtext">
        Join the Oneonn Revolution! Fill in the details below to be part of our fizzy journey.
      </p>
      <form className="stockist-form">
        <input type="text" className="animated-input" placeholder="Full Name *" required />
        <input type="text" className="animated-input" placeholder="Business Name (if any)" />
        <input type="text" className="animated-input" placeholder="City & State *" required />
        <input type="email" className="animated-input" placeholder="Email Address *" required />
        <input type="text" className="animated-input" placeholder="Phone Number *" required />
        
        <select className="animated-input inquiry-select" required>
          <option value="">Do you have distribution experience? *</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        
        <textarea
          className="animated-input"
          rows="4"
          placeholder="Why do you want to join Oneonn? *"
          required
        ></textarea>
        
        <button type="submit" className="submit-btn">Apply Now</button>
      </form>
    </div>
  </div>
)}

      </header>
    </section>
  );
}
