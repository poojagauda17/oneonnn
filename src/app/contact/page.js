import React from "react";
import HeaderSection from "../components/HeaderSection";
import ContactForm from "../components/ContactForm";
import FooterSection from "../components/FooterSection";

const page = () => {
  return (
    <div>
      <HeaderSection />

      <ContactForm className="mt-2" />
      <FooterSection />
    </div>
  );
};

export default page;
