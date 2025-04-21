// ✅ Step 3: HeaderSection.jsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import "./HeaderSection.css";

export default function HeaderSection({ productList = [], onSupplierSubmit }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    business_name: "",
    state: "",
    city: "",
    email_id: "",
    mobile_no: "",
    existing_distribution_experience: "",
    want_to_join: "",
  });

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("stockist-modal-overlay")) {
      setOpen(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // ✅ Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email_id.trim())) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // ✅ Mobile number validation
    if (!/^\d{10}$/.test(form.mobile_no)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
  
    try {
      const res = await onSupplierSubmit(form); // ✅ This hits the API
  
      // ✅ Show success if API responds with status_code 0 or expected message
      if (res?.status?.status_code === 0 || res?.payload?.message?.includes("sent")) {
        alert("Application submitted successfully!");
        setOpen(false);
        setForm({
          name: "",
          business_name: "",
          state: "",
          city: "",
          email_id: "",
          mobile_no: "",
          existing_distribution_experience: "",
          want_to_join: "",
        });
      } else {
        console.error("❌ Unexpected Response:", res);
        alert("Something went wrong on the server.");
      }
    } catch (err) {
      console.error("❌ Catch Error:", err);
      alert("Something went wrong. Please try again.");
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

  const isActive = (path) => pathname === path;

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
            <div className="dropdown" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)} onClick={() => setDropdownOpen(!dropdownOpen)}>
              <span className={`nav-link ${dropdownOpen ? "active" : ""}`}>About</span>
              <div className={`dropdown-content ${dropdownOpen ? "show" : ""}`}>
                <Link href="/ourStory" className="nav-link">Our Story</Link>
                <Link href="/whyChooseUs" className="nav-link">Why Choose Us</Link>
                <Link href="/distribution" className="nav-link">Our Distributers</Link>
              </div>
            </div>

            <div className="product-hover-area" onMouseEnter={() => setProductOpen(true)} onMouseLeave={() => setProductOpen(false)}>
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
            <div className="stockist-modal fullscreen-modal" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setOpen(false)}>✕</button>
              <h2 className="modal-heading">
                {/* <img src="/stocker.png" className="stocker-img" alt="stocker" /> */}
                Become a Supplier
              </h2>
              <p className="modal-subtext">
                Join the Oneonn Revolution! Fill in the details below to be part of our fizzy journey.
              </p>
              <form className="stockist-form" onSubmit={handleSubmit}>
                <input name="name" placeholder="Full Name *" required value={form.name} onChange={handleChange} className="animated-input" />
                <input name="business_name" placeholder="Business Name (if any)" value={form.business_name} onChange={handleChange} className="animated-input" />
                <input name="state" placeholder="State *" required value={form.state} onChange={handleChange} className="animated-input" />
                <input name="city" placeholder="City *" required value={form.city} onChange={handleChange} className="animated-input" />
                <input name="email_id" type="email" placeholder="Email Address *" required value={form.email_id} onChange={handleChange} className="animated-input" />
                <input name="mobile_no" type="number" placeholder="Phone Number *" required value={form.mobile_no} onChange={handleChange} className="animated-input" />
                <select name="existing_distribution_experience" required value={form.existing_distribution_experience} onChange={handleChange} className="animated-input inquiry-select">
                  <option value="">Do you have distribution experience? *</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <textarea name="want_to_join" rows="4" placeholder="Why do you want to join Oneonn? *" required value={form.want_to_join} onChange={handleChange} className="animated-input" />
                <button type="submit" className="submit-btn">Apply Now</button>
              </form>
            </div>
          </div>
        )}
      </header>
    </section>
  );
}
