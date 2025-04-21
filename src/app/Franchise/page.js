"use client";

import React, { useEffect, useState } from "react";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";
import FranchiseSection from "../components/FranchiseSection";
import {
  getAllProductList, addEnquiryForm, addSuperStockerForm
} from "../utils/employee"

const Franchise = () => {
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

      <FranchiseSection onSubmitForm={addEnquiryForm}/>
      <FooterSection />
    </div>
  );
};

export default Franchise;
