"use client";

import React, { useState, useEffect } from "react";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";
import ContactForm from "../components/ContactForm";
import { getAllProductList, postContactUsForm , addSuperStockerForm} from "../utils/employee";

export default function ContactPage() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllProductList();
      setProductList(response?.payload || []);
    };
    fetchData();
  }, []);

  const handleSubmit = async (formData) => {
    try {
      const result = await postContactUsForm(formData);
      console.log("✅ Success Response:", result);
    } catch (error) {
      console.error("❌ API Error:", error?.response?.data || error.message);
    }
  };

  return (
    <>
      <HeaderSection productList={productList} onSupplierSubmit={addSuperStockerForm}/>
      <ContactForm onSubmit={handleSubmit} />
      <FooterSection />
    </>
  );
}
