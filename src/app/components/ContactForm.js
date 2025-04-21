"use client";

import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(form.email)) {
      alert("Enter a valid email");
      return;
    }
    if (form.contact.length !== 10 || isNaN(form.contact)) {
      alert("Enter a valid 10-digit contact number");
      return;
    }
    onSubmit(form);
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
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              required
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              name="contact"
              placeholder="Contact Number *"
              required
              value={form.contact}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject *"
              required
              value={form.subject}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Message *"
            required
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
      </div>
    </section>
  );
}
