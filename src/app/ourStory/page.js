"use client";

import React from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import HeaderSection from "../components/HeaderSection";
import OurStory from "../components/OurStory";
import FooterSection from "../components/FooterSection";
import {
  getAllProductList, addSuperStockerForm
} from "../utils/employee";
import { useState, useEffect } from "react";


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

      <OurStory />

      <FooterSection />
    </div>
  );
};

export default WhyChooseUs;
