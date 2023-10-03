"use client"
import Link from "next/link";
import Header from "./components/header";
import HeroScreen from "./components/hero"
import { useEffect, useState } from "react";

export default function Home() {
  const [color, setColor] = useState("linear-gradient(180deg, #D90000 88.89%, #FFF 100%)");
  const [isDarkMode, setIsDarkMode] = useState(true)
 
  return (
    <div className="w-full h-full text-white" style={{ background: isDarkMode?"linear-gradient(180deg, #D90000 88.89%, #FFF 100%)":"#34A3D9" }}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <HeroScreen/>
    </div>
  );
}

