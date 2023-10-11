"use client"
import Link from "next/link";
import HeroScreen from "./components/hero"
import ProductList from "./components/productlist";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "./components/ThemeContext";

export default function Home() {
  const { isDarkMode } = useTheme();
  const productListRef = useRef(null);
  

  const scrollToProductList = () => { //Scroll Animation
    productListRef.current.scrollIntoView({ 
    behavior: "smooth",
    });
  };

  return ( 
    <div className="w-full h-full text-white" >
      <HeroScreen scrollToProductList={scrollToProductList} isDarkMode={isDarkMode}/>
      <ProductList productListRef={productListRef} isDarkMode={isDarkMode}/>
      
    </div>

  );
}
