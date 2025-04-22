"use client";

import React, { useState } from "react";
import "./ContactForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!validateEmail(form.email)) newErrors.email = "Valid email is required";
    if (!form.contact || form.contact.length !== 10 || isNaN(form.contact))
      newErrors.contact = "Valida Number is required";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Clear error as user types
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validate()) {
      setIsSubmitting(false);
      return;
    }

    try {
      await onSubmit(form);
      toast.success("Thank you! Your message has been sent.");
      setForm({
        name: "",
        email: "",
        contact: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <h2>We’d love to hear from you!</h2>
          <h4>Address:</h4>
          <p>Oneonn Beverages, Kharadi, Pune, Maharashtra, India</p>
          <h4>Customer Care</h4>
          <p>Phone: +91-XXXXXXXXXX</p>
          <p>Email: contact@oneonn.com</p>
        </div>

        <section className="contact-section-container">
          <div className="contact-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={form.name}
                    onChange={handleChange}
                    className={errors.name ? "input-error" : ""}
                  />
                  {errors.name && <p className="error-text">{errors.name}</p>}
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={handleChange}
                    className={errors.email ? "input-error" : ""}
                  />
                  {errors.email && <p className="error-text">{errors.email}</p>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="number"
                    name="contact"
                    placeholder="Contact Number *"
                    value={form.contact}
                    onChange={handleChange}
                    className={errors.contact ? "input-error" : ""}
                  />
                  {errors.contact && <p className="error-text">{errors.contact}</p>}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject *"
                    value={form.subject}
                    onChange={handleChange}
                    className={errors.subject ? "input-error" : ""}
                  />
                  {errors.subject && <p className="error-text">{errors.subject}</p>}
                </div>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Message *"
                  value={form.message}
                  onChange={handleChange}
                  className={errors.message ? "input-error" : ""}
                ></textarea>
                {errors.message && <p className="error-text">{errors.message}</p>}
              </div>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </section>
      </div>

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
    </section>
  );
}
