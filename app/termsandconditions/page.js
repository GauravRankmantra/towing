import React from "react";
import TermsCondition from "@/components/TermsCondition";
import Header from "@/components/Navigation"
import TermsHero from "@/components/TermsHero"
import Footer from "@/components/Footer";
const page = () => {
  return (
    <>
    <Header />
    <TermsHero />
      <TermsCondition />
      <Footer />
    </>
  );
};

export default page;
