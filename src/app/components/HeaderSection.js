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
              <form className="stockist-form-float" onSubmit={handleSubmit}>
  <div className="float-field">
    <input
      name="name"
      placeholder=" "
      value={form.name}
      onChange={handleChange}
      className={errors.name ? "float-input error" : "float-input"}
    />
    <label>Full Name *</label>
    {errors.name && <p className="float-error">{errors.name}</p>}
  </div>

  <div className="float-field">
    <input
      name="business_name"
      placeholder=" "
      value={form.business_name}
      onChange={handleChange}
      className="float-input"
    />
    <label>Business Name (if any)</label>
  </div>

  <div className="float-field">
    <input
      name="state"
      placeholder=" "
      value={form.state}
      onChange={handleChange}
      className={errors.state ? "float-input error" : "float-input"}
    />
    <label>State *</label>
    {errors.state && <p className="float-error">{errors.state}</p>}
  </div>

  <div className="float-field">
    <input
      name="city"
      placeholder=" "
      value={form.city}
      onChange={handleChange}
      className={errors.city ? "float-input error" : "float-input"}
    />
    <label>City *</label>
    {errors.city && <p className="float-error">{errors.city}</p>}
  </div>

  <div className="float-field">
    <input
      name="email_id"
      type="email"
      placeholder=" "
      value={form.email_id}
      onChange={handleChange}
      className={errors.email_id ? "float-input error" : "float-input"}
    />
    <label>Email Address *</label>
    {errors.email_id && <p className="float-error">{errors.email_id}</p>}
  </div>

  <div className="float-field">
    <input
      name="mobile_no"
      type="text"
      placeholder=" "
      value={form.mobile_no}
      onChange={(e) => {
        const value = e.target.value;
        if (/^\d{0,10}$/.test(value)) {
          setForm((prev) => ({ ...prev, mobile_no: value }));
          if (value.length === 10) {
            setErrors((prev) => ({ ...prev, mobile_no: "" }));
          }
        }
      }}
      onBlur={() => {
        if (form.mobile_no.length !== 10) {
          setErrors((prev) => ({
            ...prev,
            mobile_no: "Valid Number is required",
          }));
        }
      }}
      className={errors.mobile_no ? "float-input error" : "float-input"}
    />
    <label>Phone Number *</label>
    {errors.mobile_no && <p className="float-error">{errors.mobile_no}</p>}
  </div>

  <div className="float-field">
    <select
      name="existing_distribution_experience"
      value={form.existing_distribution_experience}
      onChange={handleChange}
      className={errors.existing_distribution_experience ? "float-input error" : "float-input"}
    >
      <option value="">Do you have distribution experience? *</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
    {errors.existing_distribution_experience && (
      <p className="float-error">{errors.existing_distribution_experience}</p>
    )}
  </div>

  <div className="float-field">
    <textarea
      name="want_to_join"
      rows="4"
      placeholder=" "
      value={form.want_to_join}
      onChange={handleChange}
      className={errors.want_to_join ? "float-input error" : "float-input"}
    />
    <label>Why do you want to join Oneonn? *</label>
    {errors.want_to_join && <p className="float-error">{errors.want_to_join}</p>}
  </div>

 <div className="text-center">
 <button type="submit" className="read-more-button" disabled={isSubmitting}>
    {isSubmitting ? "Submitting..." : "Submit"}
  </button>
 </div>
</form>

            </div>
          </div>
        )}
      </header>
    </section>
  );
}
