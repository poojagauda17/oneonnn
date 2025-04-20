"use client";

import React, { useEffect, useState } from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import HeaderSection from "./components/HeaderSection";
import HeroCarousel from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProductSection from "./components/ProductsSection";
import CalltoAction from "./components/CalltoAction";
import DistributionSection from "./components/DistributionSection";
import TestimonialCarousel from "./components/TestimonialCarousel";
import BlogSection from "./components/BlogSection";
import FooterSection from "./components/FooterSection";
import Flovors from "./components/FlovorSection";
import AllFlovorsSection from "./components/AllFlovorsSection";
import Classic from "./components/Classic";



import {
  getAllHomeScreenList,
  getAllBlogList,
  getAllProductList,
} from "./utils/employee";

const HeroSection = () => {
  const [bannerList, setBannerList] = useState([]);
  const [blogList, setBlogList] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const banners = await getAllHomeScreenList();
        const blogs = await getAllBlogList();
        const products = await getAllProductList();

        console.log("✅ Blogs:", blogs);
        console.log("✅ Products:", products);

        setBannerList(banners?.payload || []);
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
      <HeaderSection productList={productList}/>
      <HeroCarousel bannerList={bannerList} />

      <AboutSection />
      <Flovors/>
      <AllFlovorsSection/>
      {/* <ProductSection productList={productList} /> */}
      <CalltoAction />
      <DistributionSection />
      <Classic />
      {/* <BlogSection blogList={blogList} /> */}
      {/* <TestimonialCarousel /> */}
      <FooterSection />
    </div>
  );
};

export default HeroSection;
