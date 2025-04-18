"use client";

import React, { useEffect, useState } from "react";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";
import FranchiseSection from "../components/FranchiseSection";

const Franchise = () => {
  return (
    <div>
      <HeaderSection />

      <FranchiseSection />
      <FooterSection />
    </div>
  );
};

export default Franchise;
