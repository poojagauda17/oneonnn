"use client";

import React from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import HeaderSection from "../components/HeaderSection";
import ProductsSection from "../components/ProductsSection";
import FooterSection from "../components/FooterSection";

const product = () => {
  return (
    <div>
      <HeaderSection />

      <ProductsSection />

      <FooterSection />
    </div>
  );
};

export default product;
