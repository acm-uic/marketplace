"use client"
import React from "react";
import Product from "./product";
import ProductFilter from "./productFilter";
import { useProducts } from "../Domain/ProductContext";
import { useState } from "react";

export default function ProductList({productList, isDarkMode }) {
  const {products} = useProducts();
  var [page, setPage] = useState("All");

  return (
    <div
      ref={productList} 
      className={` ${isDarkMode ? 'bg-ACMDARK' : "bg-white"} text-white flex flex-col items-center justify-center min-h-screen bg-cover bg-center w-full py-10`} >
      <h1 className={`text-4xl bold ${isDarkMode ? 'text-white' : 'text-ACMDARK'}`}  >Products</h1>
      <div className="flex flex-col items-center justify-center	mt-14">
        <ProductFilter page={page} setPage={setPage} isDarkMode={isDarkMode} />
          <div className="flex justify-center flex-wrap grid-cols-4 gap-x-16 gap-y-7 mt-10">
            {products.map((product) => {  
              if (page == "All") {
                return (
                  <div key={product.id}>
                    <Product isDarkMode={isDarkMode} product={product} />
                  </div>
                )
              }
              else if (product.tag == page) {
                return (
                  <div key={product.id}>
                    <Product isDarkMode={isDarkMode} product={product} />
                  </div>
                )
              }
            })}
          </div>
      </div>
    </div>
  );
}
