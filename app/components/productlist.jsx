import React from "react";

//Template, Empty JS
export default function ProductList( {productListRef, isDarkMode} ) {
  return (
    <div ref={productListRef} style={{ background: isDarkMode ? '#242526' : '#FFF' }} className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center w-full" >
    </div>
  );
}