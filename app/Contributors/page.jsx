"use client"
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "../Domain/ThemeContext";
import ContributorHeroScreen from "./contributorhero";
import ContributorPage from "./contributor";

export default function WebNContributorScreen() {
  const { isDarkMode } = useTheme();
  const productListRef = useRef(null);
  

  const scrollToProductList = () => { //Scroll Animation
    productListRef.current.scrollIntoView({ 
    behavior: "smooth",
    });
  };

  return ( 
    <div className="w-full h-full text-white" >
      <ContributorHeroScreen scrollToProductList={scrollToProductList} isDarkMode={isDarkMode}/>
      <ContributorPage productListRef={productListRef} isDarkMode={isDarkMode}/>
    </div>
  );
}

