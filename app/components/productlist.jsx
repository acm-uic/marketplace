import React from "react";
import Product from "./product";
import { useState } from "react";
import ProductFilter from "./productFilter";

export default function ProductList({ productList, isDarkMode }) {

  return (
    <div ref={productList} className={` ${isDarkMode? 'bg-ACMDARK': "bg-white"} text-white flex flex-col items-center  justify-center min-h-screen bg-cover bg-center w-full`} >
      <h1 className={`text-3xl bold ${isDarkMode? 'text-white' : 'text-ACMDARK'}`}  >Products</h1>
      <div className="flex flex-row	mt-14">
        <ProductFilter isDarkMode={isDarkMode}/>
        <div className="flex ml-40 items-start content-start gap-x-16 gap-y-7 shrink-0 flex-wrap max-w-5xl mb-10">
          {productList && productList.map((product,) => {
            return (
              <div>
                <Product isDarkMode={isDarkMode} id={product.id} price={product.price} title={product.title} imgUrl={product.imgUrl} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}