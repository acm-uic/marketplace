"use client"
import Link from "next/link";
import Header from "./components/header";
import { useEffect, useState } from "react";

export default function Home() {
  const [color, setColor] = useState("linear-gradient(180deg, #D90000 0%, #242526 100%)");
  const [isDarkMode, setIsDarkMode] = useState(true)
 
  return (
    <div className="w-full h-full text-white" style={{ background: isDarkMode?"linear-gradient(180deg, #D90000 0%, #242526 100%)":"#E6AF2E" }}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <h1 className="text-5xl">Hello World!</h1>
      <p>Welcome to the ACM merch store</p>
      See our contributors
      <Link className="inline-block text-[#0000EE]" href={"/Contributors"}>here</Link>
    </div>
  );
}

