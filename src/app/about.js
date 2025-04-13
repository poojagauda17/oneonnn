"use client";

import React from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import HeroCarousel from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CoffeeOfferCarousel from "./components/ProductsSection";
import TestimonialCarousel from "./components/TestimonialCarousel";
import BlogSection from "./components/BlogSection";
import ContactForm from "./components/ContactForm";
import FooterSection from "./components/FooterSection";

const AboutSection = () => {
  return (
    <div>
      <HeroCarousel />

      <AboutSection />
      <CoffeeOfferCarousel />
      <TestimonialCarousel />
      <BlogSection />
      <ContactForm />
      <FooterSection />
    </div>
  );
};

export default AboutSection;
