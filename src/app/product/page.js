"use client";

import React, { useEffect, useState } from "react";

import { FaUser, FaSearch } from "react-icons/fa";
import HeaderSection from "../components/HeaderSection";
import ProductsSection from "../components/ProductsSection";
import FooterSection from "../components/FooterSection";
import { getAllProductList } from "../utils/employee";

const product = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getAllProductList();
        console.log("✅ Products:", products);
        setProductList(products?.payload || []);
      } catch (error) {
        console.error("API fetch error:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <HeaderSection />

      <ProductsSection productList={productList} className="mt-2" />

      <FooterSection />
    </div>
  );
};

export default product;
