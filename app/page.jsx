"use client"
import Link from "next/link";
import Header from "./components/header";
import HeroScreen from "./components/hero"
import Footer from "./components/footer"
import ProductList from "./components/productlist";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "./components/ThemeContext";

export default function Home() {
  const { isDarkMode, setInvertColors } = useTheme();
  const productListRef = useRef(null);
  
  useEffect(() => {
    setInvertColors(false); 
  }, [setInvertColors]);

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

