"use client";

import React, { useState } from "react";
import "./FranchiseSection.css"; // Add styles if needed
import { FaMapMarkerAlt } from "react-icons/fa";


export default function FranchiseForm({ onSubmitForm }) {
  const [form, setForm] = useState({
    name: "",
    business_name: "",
    email_id: "",
    mobile_no: "",
    city: "",
    type_of_enquiry: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Full name is required";
    if (!form.email_id || !/\S+@\S+\.\S+/.test(form.email_id)) newErrors.email_id = "Valid email is required";
    if (!form.mobile_no || form.mobile_no.length < 10) newErrors.mobile_no = "Valid phone number required";
    if (!form.city) newErrors.city = "City is required";
    if (!form.type_of_enquiry) newErrors.type_of_enquiry = "Select enquiry type";
    if (!form.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Payload:", form);
    try {
      const res = await onSubmitForm(form);
      if (res?.status?.status_code === 0) {
        alert("Form submitted successfully!");
        setForm({
          name: "",
          business_name: "",
          email_id: "",
          mobile_no: "",
          city: "",
          type_of_enquiry: "",
          message: "",
        });
        setErrors({});
      } else {
        alert("Something went wrong!");
      }
    } catch {
      alert("Something went wrong!");
    }
  };

  return (
    <div>
          <section className="join-distribution-section">
      {/* Top Text Section */}
      <div className="join-intro">
        <h2 className="highlight-heading">
          Join our partnership, where your ideas<br />meet our expertise
        </h2>
        <p className="sub-text">
          Starting a franchise can be a significant business opportunity, but it’s crucial to conduct
          thorough research, understand the terms of the franchise agreement, and assess whether
          it aligns with your goals and resources before entering into a franchise arrangement.
        </p>
      </div>

      {/* Distributions */}
      <h3 className="distribution-title">
        <h2>
        Our Distributions
        </h2>
      </h3>

      <div className="distribution-card-wrapper">
        <div className="distribution-card">
          <span className="location-icon pink"><FaMapMarkerAlt /></span>
          <h4>INDIA</h4>
          <p>Oneonn Beverages, Kharadi, Pune, Maharashtra, India</p>
        </div>

        <div className="distribution-card active">
          <span className="location-icon white"><FaMapMarkerAlt /></span>
          <h4>SAUDI ARABIA</h4>
          <p>Riyadh, Dammam, Jeddah</p>
        </div>

        <div className="distribution-card">
          <span className="location-icon pink"><FaMapMarkerAlt /></span>
          <h4>DUBAI</h4>
          <p>Sharjah, Abu Dhabi</p>
        </div>
      </div>
    </section>
    <section className="franchise-hero">
      <section className="franchise-form-wrapper">
        <div className="form-container">
          <h2 className="form-heading">Join our partnership</h2>
          <form className="form-grid" onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name *" name="name" value={form.name} required onChange={handleChange} />
            <input type="text" placeholder="Business Name (if any)" name="business_name" required value={form.business_name} onChange={handleChange} />
            <input type="email" placeholder="Email Address *" name="email_id" required value={form.email_id} onChange={handleChange} />
            <input type="text" placeholder="Contact Number *" name="mobile_no" required value={form.mobile_no} onChange={handleChange} />
            <input type="text" placeholder="City / Location *" name="city" required value={form.city} onChange={handleChange} />
            <select name="type_of_enquiry" value={form.type_of_enquiry} required onChange={handleChange}>
              <option value="">Type of Enquiry *</option>
              <option value="general">General</option>
              <option value="distribution">Distribution</option>
              <option value="collaboration">Collaboration</option>
            </select>
            <textarea name="message" placeholder="Message *" required rows={4} value={form.message} onChange={handleChange}></textarea>
            {/* {Object.values(errors).map((err, i) => (
              <p key={i} style={{ color: "red", fontSize: "14px", marginTop: "-10px" }}>{err}</p>
            ))} */}
            <button className="send-btn" type="submit">Send</button>
          </form>
        </div>
      </section>
    </section>
    </div>
  
  );
}
