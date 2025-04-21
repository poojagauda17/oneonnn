"use client";

import React from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import HeaderSection from "../components/HeaderSection";
import WhyChooseUsSection from "../components/WhyChooseSection";
import FooterSection from "../components/FooterSection";
import { useState, useEffect } from "react";

import {
  getAllProductList, addSuperStockerForm
} from "../utils/employee"

const WhyChooseUs = () => {
     const [productList, setProductList] = useState([]);
      useEffect(() => {
        const fetchData = async () => {
          try {
                    const products = await getAllProductList();
            
    
    
            setProductList(products?.payload || []);
    
          } catch (error) {
            console.error("API fetch error:", error);
          }
        };
    
        fetchData();
      }, []);
  return (
    <div>
      <HeaderSection productList={productList} onSupplierSubmit={addSuperStockerForm}/>

      <WhyChooseUsSection />

      <FooterSection />
    </div>
  );
};

export default WhyChooseUs;
