// ✅ Step 2: app/page.jsx or app/HeroSection.jsx
"use client";

import React, { useEffect, useState } from "react";
import HeaderSection from "./components/HeaderSection";
import FooterSection from "./components/FooterSection";
import HeroCarousel from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Flovors from "./components/FlovorSection";
import AllFlovorsSection from "./components/AllFlovorsSection";
import CalltoAction from "./components/CalltoAction";
import DistributionSection from "./components/DistributionSection";
import Classic from "./components/Classic";
import {
  getAllHomeScreenList,
  getAllBlogList,
  getAllProductList,
  addSuperStockerForm,
} from "./utils/employee";

export default function HeroSectionPage() {
  const [bannerList, setBannerList] = useState([]);
  const [blogList, setBlogList] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const banners = await getAllHomeScreenList();
        const blogs = await getAllBlogList();
        const products = await getAllProductList();

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
      <HeaderSection productList={productList} onSupplierSubmit={addSuperStockerForm} />
      <HeroCarousel bannerList={bannerList} />
      <AboutSection />
      <Flovors />
      <AllFlovorsSection />
      <CalltoAction />
      <DistributionSection />
      <Classic />
      <FooterSection />
    </div>
  );
}
