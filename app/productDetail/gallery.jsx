import React from "react";
import Image from "next/image"
import Link from "next/link"


export default function gallery( {scrollToProductList, isDarkMode}) {
  return (
    <div style={{ background: isDarkMode?"linear-gradient(180deg, #D90000 91.67%, #262425 100%)":"#34A3D9"}} className={`${isDarkMode? 'text-white':'text-black'} flex flex-col min-h-screen bg-cover bg-center w-full`}>
      <p className="mt-[10%] ml-[111px] text-3xl"><Link className=" hover:underline" href={"/"}>Home/</Link>Pens</p>
    </div>
    
    
  );
}
