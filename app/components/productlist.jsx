import React from "react";
import Product from "./product";
import { useState } from "react";

export default function ProductList( {productList , isDarkMode} ) {

  return (
    <div ref={productList}  style={{background:isDarkMode?"#242526":"white"}} className=" text-white flex flex-col items-center justify-center min-h-screen bg-cover bg-center w-full" >
        <h1 className="" >Products</h1>
        <div className="flex items-start content-start gap-10 shrink-0 flex-wrap max-w-3xl mb-10">
          {productList && productList.map((product,)=>{
            return(
                <div>
                  <Product id={product.id} price={product.price} title={product.title} imgUrl={product.imgUrl} />
                </div>
              )
          })}
      </div>
    </div>
  );
}