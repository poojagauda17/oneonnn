// ✅ Step 3: HeaderSection.jsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import "./HeaderSection.css";
import { toast } from "react-toastify";


export default function HeaderSection({ productList = [], onSupplierSubmit }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imgSrc, setImgSrc] = useState("/stocker-black.png");

  const handleMouseEnter = () => {
    setImgSrc("/stocker-black.png"); // optional, reset if needed
    setTimeout(() => {
      setImgSrc("/stocker-white.png");
    }, 200); // delay 200ms before switching
  };

  const handleMouseLeave = () => {
    setImgSrc("/stocker-black.png");
  };

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
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!emailRegex.test(form.email_id.trim()))
      newErrors.email_id = "Valid email required";
    if (!/^\d{10}$/.test(form.mobile_no))
      newErrors.mobile_no = "Valid 10-digit phone required";
    if (!form.state.trim()) newErrors.state = "State is required";
    if (!form.city.trim()) newErrors.city = "City is required";
    if (!form.existing_distribution_experience)
      newErrors.existing_distribution_experience = "This field is required";
    if (!form.want_to_join.trim())
      newErrors.want_to_join = "Tell us why you want to join";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await onSupplierSubmit(form);
      if (
        res?.status?.status_code === 0 ||
        res?.payload?.message?.includes("sent")
      ) {
        toast.success("Application submitted successfully!");
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
        setErrors({});
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("❌ Catch Error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
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
            <Link
              href="/"
              className={isActive("/") ? "nav-link active" : "nav-link"}
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
                <Link href="/ourStory" className="nav-link">
                  Our Story
                </Link>
                <Link href="/whyChooseUs" className="nav-link">
                  Why Choose Us
                </Link>
                <Link href="/distribution" className="nav-link">
                  Our Distributers
                </Link>
              </div>
            </div>

            <div
              className="product-hover-area"
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
            >
              <div className="dropdown">
                <span className={`nav-link ${productOpen ? "active" : ""}`}>
                  Products
                </span>
              </div>
              <div className={`mega-menu ${productOpen ? "show" : ""}`}>
                <div className="mega-grid">
                  {productList.map((product, index) => (
                    <Link href={`/product/${index}`} key={index}>
                      <div className="product-tile">
                        <img
                          src={product.product_image || product.imageUrl}
                          alt={product.product_name}
                        />
                        <p>{product.product_name}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

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
              <div className="stocker-img">
                {/* <img src="/stocker-black-img.svg" className="stocker-img" /> */}
              </div>
              {/* <img src="/stocker-black-img.svg" className="stocker-img" /> */}
              
              Become a Supplier
            </button>
          </nav>
        </div>

        {open && (
          <div
            className="stockist-modal-overlay fullscreen"
            onClick={handleOverlayClick}
          >
            <div
              className="stockist-modal fullscreen-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setOpen(false)}>
                ✕
              </button>
              <h2 className="modal-heading">
                {/* <img src="/stocker.png" className="stocker-img" alt="stocker" /> */}
                Become a Supplier
              </h2>
              
              <p className="modal-subtext">
                Join the Oneonn Revolution! Fill in the details below to be part
                of our fizzy journey.
              </p>
              <form className="stockist-form" onSubmit={handleSubmit}>
                <input
                  name="name"
                  placeholder="Full Name *"
                  value={form.name}
                  onChange={handleChange}
                  className={`animated-input ${
                    errors.name ? "input-error" : ""
                  }`}
                />{" "}
                {errors.name && <p className="error-text-stocker">{errors.name}</p>}
                <input
                  name="business_name"
                  placeholder="Business Name (if any)"
                  value={form.business_name}
                  onChange={handleChange}
                  className="animated-input"
                />
                <input
                  name="state"
                  placeholder="State *"
                  value={form.state}
                  onChange={handleChange}
                  className={`animated-input ${
                    errors.state ? "input-error" : ""
                  }`}
                />{" "}
                {errors.state && <p className="error-text-stocker">{errors.state}</p>}
                <input
                  name="city"
                  placeholder="City *"
                  value={form.city}
                  onChange={handleChange}
                  className={`animated-input ${
                    errors.city ? "input-error" : ""
                  }`}
                />{" "}
                {errors.city && <p className="error-text-stocker">{errors.city}</p>}
                <input
                  name="email_id"
                  type="email"
                  placeholder="Email Address *"
                  value={form.email_id}
                  onChange={handleChange}
                  className={`animated-input ${
                    errors.email_id ? "input-error" : ""
                  }`}
                />{" "}
                {errors.email_id && <p className="error-text-stocker">{errors.email_id}</p>}
                <input
                  name="mobile_no"
                  type="number"
                  placeholder="Phone Number *"
                  value={form.mobile_no}
                  onChange={handleChange}
                  className={`animated-input ${
                    errors.mobile_no ? "input-error" : ""
                  }`}
                />{" "}
                {errors.mobile_no && (
                  <p className="error-text-stocker">{errors.mobile_no}</p>
                )}
                <select
                  name="existing_distribution_experience"
                  value={form.existing_distribution_experience}
                  onChange={handleChange}
                  className={`animated-input inquiry-select ${
                    errors.existing_distribution_experience ? "input-error" : ""
                  }`}
                >
                  <option value="">
                    Do you have distribution experience? *
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                {errors.existing_distribution_experience && (
                  <p className="error-text-stocker">{errors.existing_distribution_experience}</p>
                )}
                <textarea
                  name="want_to_join"
                  rows="4"
                  placeholder="Why do you want to join Oneonn? *"
                  value={form.want_to_join}
                  onChange={handleChange}
                  className={`animated-input ${
                    errors.want_to_join ? "input-error" : ""
                  }`}
                />{" "}
                {errors.want_to_join && (
                  <p className="error-text-stocker">{errors.want_to_join}</p>
                )}
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
  {isSubmitting ? "Submitting..." : "Apply Now"}
</button>

              </form>
            </div>
          </div>
        )}
      </header>
    </section>
  );
}
