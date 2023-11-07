"use client"
import React from "react";
import Product from "./product";
import ProductFilter from "./productFilter";
import { useProducts } from "../Domain/ProductContext";
import pb from "../Domain/pocketbase";

export default function ProductList({productList, isDarkMode }) {
  const {products} = useProducts();
  return (
    <div
      ref={productList} 
      className={` ${isDarkMode? 'bg-ACMDARK': "bg-white"} text-white flex flex-col items-center  justify-center min-h-screen bg-cover bg-center w-full`} >
      <h1 className={`text-4xl bold ${isDarkMode? 'text-white' : 'text-ACMDARK'}`}  >Products</h1>
      <div className="flex flex-col items-center justify-center	mt-14">
        <ProductFilter isDarkMode={isDarkMode}/>
        <div className="flex items-start content-start gap-x-16 gap-y-7 shrink-0 flex-wrap max-w-6xl mb-10 mt-10">
          {products.map((product) => {
            let imgUrl = pb.files.getUrl(product, product.img)
            console.log(imgUrl);
            return (
              <div key={product.id}>
                <Product isDarkMode={isDarkMode} product={product}/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}