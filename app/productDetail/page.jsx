"use client"
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "../Domain/ThemeContext";
import Gallery from "./gallery" ;

export default function productDetailScreen() {
  const { isDarkMode } = useTheme();
  
  return ( 
    <div className="w-full h-full ">
      <Gallery isDarkMode={isDarkMode}/>
    </div>
  );
}

