import React from "react";
import HeaderSection from "../components/HeaderSection";
import CoffeeOfferCarousel from "../components/ProductsSection";
import FooterSection from "../components/FooterSection";

const page = () => {
  return (
    <div>
      <HeaderSection />
      <CoffeeOfferCarousel />
      <FooterSection />
    </div>
  );
};

export default page;
