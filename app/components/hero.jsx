import React from "react";

export default function HeroScre() {
  return (
    <div className="flex flex-col items-center justify-center max-h-screen bg-cover bg-center">
      <h1 className="text-white text-9xl font-extrabold mb-8 mt-72 text-shadow-hero shadow-HEROSHADOW">ACM Merch</h1>
      <button className="bg-white px-5 py-6 rounded-full ">
        <p className="text-center text-ACMPrimary font-bold text-4xl text-shadow-hero shadow-SHOPTEXTSHADOW">SHOP NOW</p>
      </button>
    </div>
  );
}
