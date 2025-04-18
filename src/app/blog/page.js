"use client";

import React, { useEffect, useState } from "react";
import HeaderSection from "../components/HeaderSection";
import BlogSection from "../components/BlogSection";
import FooterSection from "../components/FooterSection";
import { getAllBlogList } from "../utils/employee";

const page = () => {
  const [blogList, setBlogList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogs = await getAllBlogList();

        console.log("✅ Blogs:", blogs);

        setBlogList(blogs?.payload || []);
      } catch (error) {
        console.error("API fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <HeaderSection />

      <BlogSection style={{ paddingTop: "140px" }} blogList={blogList} />
      <FooterSection />
    </div>
  );
};

export default page;
