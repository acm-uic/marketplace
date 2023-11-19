"use client"
import Link from "next/link";
import HeroScreen from "./components/hero"
import ProductList from "./components/productlist";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "./Domain/ThemeContext";



export default function Home() {
  const { isDarkMode } = useTheme();
  const productListRef = useRef([]);
  const [productList, setProductList] = useState([])



  const scrollToProductList = () => { //Scroll \\\\
    productList.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className="w-full h-full text-white" >
      <HeroScreen scrollToProductList={scrollToProductList} isDarkMode={isDarkMode} />
      <ProductList productList={productList} isDarkMode={isDarkMode} />
    </div>

  );
}
