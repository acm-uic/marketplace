import React from "react";

export default function HeroScreen( {scrollToProductList, isDarkMode}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center w-full">
      <h1 className="text-white text-9xl font-extrabold mb-8 mt-42 text-shadow-hero shadow-HEROSHADOW">ACM Merch</h1>
      <button style={{ color: isDarkMode ? '#D90000' : '#34A3D9' }} className="bg-white px-5 py-6 rounded-full " onClick={scrollToProductList}>
        <a className={`text-center font-bold text-4xl text-shadow-hero shadow-SHOPTEXTSHADOW`}>SHOP NOW</a>
      </button>
    </div>
  );
}