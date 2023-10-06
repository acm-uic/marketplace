"use client"
import Link from "next/link";
import Header from "./components/header";
import HeroScreen from "./components/hero"
import Footer from "./components/footer"
import ProductList from "./components/productlist";
import { useState, useRef } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const productListRef = useRef(null);
  
  const scrollToProductList = () => { //Scroll Animation
    productListRef.current.scrollIntoView({ 
    behavior: "smooth",
    });
  };

  return ( 
    <div className="w-full h-full text-white" style={{ background: isDarkMode?"linear-gradient(180deg, #D90000 88.89%, #242526 100%)":"#34A3D9" }}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/> 
      <HeroScreen scrollToProductList={scrollToProductList} isDarkMode={isDarkMode}/>
      <ProductList productListRef={productListRef} isDarkMode={isDarkMode}/>
      <Footer isDarkMode={isDarkMode} />
      
    </div>
  );
}

