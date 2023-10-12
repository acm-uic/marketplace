import React from "react";
import Product from "./product";
import { useState } from "react";
import ProductFilter from "./productFilter";

export default function ProductList({productList, isDarkMode }) {
  return (
    <div
      ref={productList} 
      className={` ${isDarkMode? 'bg-ACMDARK': "bg-white"} text-white flex flex-col items-center  justify-center min-h-screen bg-cover bg-center w-sceen overflow-hidden`} >
      <h1 className={`text-4xl bold ${isDarkMode? 'text-white' : 'text-ACMDARK'} justify-center mt-[53px]`}  >Products</h1>
      <div className="flex flex-col items-center justify-center	mt-14">
        <ProductFilter isDarkMode={isDarkMode}/>
        <div className="flex items-start content-start justify-center gap-x-16 gap-y-7 shrink-0 flex-wrap max-w-6xl mb-10 mt-10">
          {productList && productList.map((product,) => {
            return (
              <div key = {product.id}>
                <Product isDarkMode={isDarkMode} id={product.id} price={product.price} title={product.title} imgUrl={product.imgUrl} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}