"use client"
import Link from "next/link";
import HeroScreen from "./components/hero"
import ProductList from "./components/productlist";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "./components/ThemeContext";
import listOfProduct from './testData/produts';


export default function Home() {
  const { isDarkMode } = useTheme();
  const productListRef = useRef(null);
  const [productList, setProductList] = useState([])

  

  const scrollToProductList = () => { //Scroll \\\\
    productList.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    // change this to fetch data
    setProductList(listOfProduct)
  }, [productList])

  return ( 
    <div className="w-full h-full text-white" >
      <HeroScreen scrollToProductList={scrollToProductList} isDarkMode={isDarkMode}/>
      <ProductList productList={productList} isDarkMode={isDarkMode} />
      
    </div>

  );
}
