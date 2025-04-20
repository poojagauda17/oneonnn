"use client";
import React from "react";
import { useState, useEffect } from "react";
import HeaderSection from "../components/HeaderSection";
import ContactForm from "../components/ContactForm";
import FooterSection from "../components/FooterSection";
import {
  getAllProductList,
} from "../utils/employee";


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
      <HeaderSection productList={productList} />

      <ContactForm className="mt-2" />
      <FooterSection />
    </div>
  );
};

export default page;
