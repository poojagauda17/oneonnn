"use client";

import React, { useEffect, useState } from "react";
import HeaderSection from "../components/HeaderSection";
import BlogSection from "../components/BlogSection";
import FooterSection from "../components/FooterSection";
import { getAllBlogList } from "../utils/employee";
import {
  getAllProductList, addSuperStockerForm
} from "../utils/employee"

const page = () => {
  const [blogList, setBlogList] = useState([]);
    const [productList, setProductList] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogs = await getAllBlogList();
                const products = await getAllProductList();
        

        console.log("✅ Blogs:", blogs);

        setBlogList(blogs?.payload || []);
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

      <BlogSection style={{ paddingTop: "140px" }} blogList={blogList} />
      <FooterSection />
    </div>
  );
};

export default page;
