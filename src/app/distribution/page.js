"use client";

import React, { useEffect, useState } from "react";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";
import OurDistributionSection from "../components/OurDistributionSection";
import {
  getAllProductList, addSuperStockerForm
} from "../utils/employee"

const Distribution = () => {
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
      <OurDistributionSection />
      <FooterSection />
    </div>
  );
};

export default Distribution;
