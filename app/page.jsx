"use client"
import Link from "next/link";
import Header from "./components/header";
import { useDarkMode } from "./context/DarkModeContext";
import { useEffect, useState } from "react";

export default function Home() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [color, setColor] = useState("linear-gradient(180deg, #D90000 0%, #242526 100%)");

  useEffect(() => {
    if (isDarkMode) {
      setColor('linear-gradient(180deg, #D90000 0%, #242526 100%)');
    } else {
      setColor('#E6AF2E');
    }
  }, [isDarkMode]);

  return (
    <div className="w-full h-full text-white" style={{ background: color }}>
      <Header />
      <h1 className="text-5xl">Hello World!</h1>
      <p>Welcome to the ACM merch store</p>
      See our contributors
      <Link className="inline-block text-[#0000EE]" href={"/Contributors"}>here</Link>
    </div>
  );
}

