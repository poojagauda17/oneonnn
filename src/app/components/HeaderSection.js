"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./HeaderSection.css";

export default function HeaderSection() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => pathname === path;

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".nav-links") && !e.target.closest(".hamburger")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <header className="navbar">
      <div className="header-container">
        <div className="logo">
          RC <span>Cola</span>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link
            href="/"
            className={isActive("/") ? "nav-link active" : "nav-link"}
          >
            Home
          </Link>

          <div className="dropdown">
            <span className="nav-link">About Us</span>
            <div className="dropdown-content">
              <Link href="/our-story" className="nav-link">
                Our Story
              </Link>
              <Link href="/why-choose-us" className="nav-link">
                Why Choose Us
              </Link>
              <Link href="/distributers" className="nav-link">
                Our Distributers
              </Link>
            </div>
          </div>

          <Link
            href="/blog"
            className={isActive("/blog") ? "nav-link active" : "nav-link"}
          >
            Our Blog
          </Link>
          <Link
            href="/products"
            className={isActive("/products") ? "nav-link active" : "nav-link"}
          >
            Products
          </Link>
          <Link
            href="/contact"
            className={isActive("/contact") ? "nav-link active" : "nav-link"}
          >
            Contact Us
          </Link>

          <button className="stockist-btn mobile-only">Become a Bottler</button>
        </nav>

        <button className="stockist-btn desktop-only">Become a Bottler</button>
      </div>
    </header>
  );
}
