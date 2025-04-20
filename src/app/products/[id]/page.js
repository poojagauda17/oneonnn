"use client";

import React from "react";
import HeaderSection from "../../components/HeaderSection";
import FooterSection from "../../components/FooterSection";
import ProductInSection from "../../components/ProductInSection";
import {
  getAllProductList,
} from "../../utils/employee";
import { useState, useEffect } from "react";


const HeroSection = () => {
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
      <HeaderSection productList={productList} />
      <ProductInSection />
      <FooterSection />
    </div>
  );
};

export default HeroSection;
