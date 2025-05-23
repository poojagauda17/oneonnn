"use client";
import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactSection() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! (demo only)");
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <h2>GET IN TOUCH</h2>
          <h4>Manufactured by</h4>
          <p>
            <strong>Swadeshi Food & Beverages</strong>
          </p>
          <p>
            No.45/1, 8th A Cross, Kanaka Nagar, Sulthanpalya Main Road, RT Nagar
            Post, Bengaluru Urban, Karnataka – 560032
          </p>
          <h4>Customer Care</h4>
          <p>India: +91 98444 88117</p>
          <p>+91 98444 87302</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              required
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
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
            placeholder="Your Message *"
            required
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.318928213961!2d77.5844319144416!3d13.027653716658768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1786f20770ff%3A0xf9f8b3c1e157fa6f!2sRT%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1617770875176!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          title="ONEON Office Location"
        ></iframe>
      </div>
    </section>
  );
}
