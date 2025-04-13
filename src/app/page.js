"use client";

import React from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import HeaderSection from "./components/HeaderSection";
import HeroCarousel from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProductSection from "./components/ProductsSection";
import CalltoAction from "./components/CalltoAction";
import DistributionSection from "./components/DistributionSection";
import WhyChooseUsSection from "./components/WhyChooseSection";
import TestimonialCarousel from "./components/TestimonialCarousel";
import BlogSection from "./components/BlogSection";
import ContactForm from "./components/ContactForm";
import FooterSection from "./components/FooterSection";

const HeroSection = () => {
  return (
    <div>
      <HeaderSection />
      <HeroCarousel />

      <AboutSection />
      <ProductSection />
      <CalltoAction />
      <DistributionSection />
      <WhyChooseUsSection />
      <BlogSection />
      <TestimonialCarousel />
      <ContactForm />
      <FooterSection />
    </div>
  );
};

export default HeroSection;
