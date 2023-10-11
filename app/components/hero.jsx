import React from "react";

export default function HeroScreen( {scrollToProductList, isDarkMode}) {
  return (
    <div style={{ background: isDarkMode?"#D90000":"#34A3D9"}} className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center w-full">
      <h1 className="text-white text-9xl font-extrabold mb-8 mt-42">ACM Merch</h1>
      <button style={{ color: isDarkMode ? '#D90000' : '#34A3D9' }} class="bg-orange-300 hover:bg-orange-500 text-lg font-bold h-12 m-2 py-2 px-10 rounded" onClick={scrollToProductList}>
        <a className={`text-center text-red font-bold text-4`}>shop now</a>
      </button>
    </div>
  );
}

