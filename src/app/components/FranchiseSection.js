"use client";

import React, { useState } from "react";
import "./FranchiseSection.css"; // Add styles if needed
import { FaMapMarkerAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
  const [successMessage, setSuccessMessage] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false); 
const [showSuccess, setShowSuccess] = useState(false);    


  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Full name is required";
    if (!form.email_id || !/\S+@\S+\.\S+/.test(form.email_id)) newErrors.email_id = "Valid email is required";
    if (!form.mobile_no || form.mobile_no.length !== 10) newErrors.mobile_no = "Valida Number is required";
    if (!form.city) newErrors.city = "City is required";
    if (!form.type_of_enquiry) newErrors.type_of_enquiry = "Select enquiry type";
    if (!form.message) newErrors.message = "Message is required";
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  
  // const validate = () => {
  //   const newErrors = {};
  //   if (!form.name) newErrors.name = "Full name is required";
  //   if (!form.email_id || !/\S+@\S+\.\S+/.test(form.email_id)) newErrors.email_id = "Valid email is required";
  //   if (!form.mobile_no || form.mobile_no.length !== 10) {
  //     newErrors.mobile_no = "Valid 10-digit phone number is required";
  //     alert("Please enter a valid 10-digit contact number"); // ✅ SHOW ALERT
  //   }    if (!form.city) newErrors.city = "City is required";
  //   if (!form.type_of_enquiry) newErrors.type_of_enquiry = "Select enquiry type";
  //   if (!form.message) newErrors.message = "Message is required";
  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Update the form state
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  
    // Validate the current field in real-time
    const updatedErrors = { ...errors };
  
    if (name === "name" && value.trim() !== "") {
      delete updatedErrors.name;
    }
  
    if (name === "email_id" && /\S+@\S+\.\S+/.test(value)) {
      delete updatedErrors.email_id;
    }
  
    if (name === "mobile_no" && value.length === 10) {
      delete updatedErrors.mobile_no;
    }
  
    if (name === "city" && value.trim() !== "") {
      delete updatedErrors.city;
    }
  
    if (name === "type_of_enquiry" && value.trim() !== "") {
      delete updatedErrors.type_of_enquiry;
    }
  
    if (name === "message" && value.trim() !== "") {
      delete updatedErrors.message;
    }
  
    setErrors(updatedErrors);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setShowSuccess(false);
    setIsSubmitting(true);
  
    if (!validate()) {
      setIsSubmitting(false);
      return;
    }
  
    try {
      const res = await onSubmitForm(form);
      if (res?.status?.status_code === 0) {
        toast.success("Thank you! Your form has been submitted successfully.");
        setShowSuccess(true);
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
  
        // Auto-hide after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        toast.error("Something went wrong. Please try again.");
        setShowSuccess(true);
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
      setShowSuccess(true);
    } finally {
      setIsSubmitting(false);
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

            <input type="text" placeholder="Full Name *" name="name" value={form.name}   className={errors.name ? "input-error" : ""}
  onChange={handleChange} />
            {errors.name && <p className="error-text">{errors.name}</p>}

            <input type="text" placeholder="Business Name (if any)" name="business_name" value={form.business_name}  onChange={handleChange} />
            <input type="email" placeholder="Email Address *" name="email_id"  value={form.email_id}   className={errors.email_id ? "input-error" : ""}
 onChange={handleChange} />
            {errors.email_id && <p className="error-text">{errors.email_id}</p>}

            <input type="number" placeholder="Contact Number *" name="mobile_no"  value={form.mobile_no}   className={errors.mobile_no ? "input-error" : ""}
 onChange={handleChange} />
            {errors.mobile_no && <p className="error-text">{errors.mobile_no}</p>}

            <input type="text" placeholder="City / Location *" name="city"  value={form.city}   className={errors.city ? "input-error" : ""}
 onChange={handleChange} />
            {errors.city && <p className="error-text">{errors.city}</p>}

            <select name="type_of_enquiry" value={form.type_of_enquiry}   className={errors.type_of_enquiry ? "input-error" : ""}
  onChange={handleChange}>
              <option value="">Type of Enquiry *</option>
              <option value="general">General</option>
              <option value="distribution">Distribution</option>
              <option value="collaboration">Collaboration</option>
            </select>
            {errors.type_of_enquiry && <p className="error-text">{errors.type_of_enquiry}</p>}

            <textarea name="message" placeholder="Message *"  rows={4} value={form.message}   className={errors.message ? "input-error" : ""}
 onChange={handleChange}></textarea>
            {errors.message && <p className="error-text">{errors.message}</p>}

            {/* {Object.values(errors).map((err, i) => (
              <p key={i} style={{ color: "red", fontSize: "14px", marginTop: "-10px" }}>{err}</p>
            ))} */}
            <button className="send-btn" type="submit" disabled={isSubmitting}>
  {isSubmitting ? "Sending..." : "Send"}
</button>

          </form>
          <ToastContainer
  position="bottom-right"
  autoClose={5000}
  hideProgressBar={false}
  closeOnClick
  pauseOnHover
  draggable
  newestOnTop
  theme="colored"
/>


        </div>
      </section>
    </section>
    </div>
  
  );
}
