"use client";
import React, { useState, useEffect } from "react";
import HeaderSection from "../components/HeaderSection";
import AboutSection from "../components/AboutSection";
import FooterSection from "../components/FooterSection";
import {
  getAllProductList,
} from "../utils/employee"

const page = () => {
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
      <HeaderSection productList={productList}/>
      <AboutSection />
      <FooterSection />
    </div>
  );
};

export default page;
