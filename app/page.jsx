"use client"
import Link from "next/link";
import Header from "./components/header";
import HeroScreen from "./components/hero"
import Footer from "./components/footer"
import ProductList from "./components/productlist";
import { useEffect, useState, useRef } from "react";
import listOfProduct from './testData/produts';

export default function Home() {
  const [color, setColor] = useState("linear-gradient(180deg, #D90000 88.89%, #FFF 100%)");
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [productList, setProductList] = useState([])

  const scrollToProductList = () => { //Scroll \\\\
    productList.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // change this to fetch data
    setProductList(listOfProduct)
  }, [listOfProduct])

  return (

    <div className="w-full h-full text-white" style={{ background: isDarkMode ? "linear-gradient(180deg, #D90000 88.89%, #262425 100%)" : "#34A3D9" }}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} scrollToProductList={scrollToProductList} />
      <HeroScreen scrollToProductList={scrollToProductList} isDarkMode={isDarkMode} />
      <ProductList productList={productList} isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>

  );
}
